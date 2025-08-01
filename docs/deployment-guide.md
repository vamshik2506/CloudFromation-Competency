# Deployment Guide

This guide walks you through deploying the E-commerce platform across multiple AWS accounts and regions.

## Prerequisites

1. **AWS Accounts**: Three AWS accounts set up in AWS Organizations
   - Development Account
   - Staging Account  
   - Production Account

2. **AWS CLI**: Configured with appropriate permissions
3. **GitHub Repository**: Source code repository
4. **Domain Names**: Optional, for custom domains

## Step 1: Set Up SSM Parameters

Before deploying, you need to configure all required SSM parameters in the main account.

### GitHub Parameters
```bash
aws ssm put-parameter --name "/ecommerce/github/owner" --value "your-github-username" --type "String"
aws ssm put-parameter --name "/ecommerce/github/repo" --value "ecommerce-platform" --type "String"
aws ssm put-parameter --name "/ecommerce/github/branch" --value "main" --type "String"
aws ssm put-parameter --name "/ecommerce/github/token" --value "ghp_your_token" --type "SecureString"
```

### Account Parameters
```bash
aws ssm put-parameter --name "/ecommerce/accounts/dev" --value "123456789012" --type "String"
aws ssm put-parameter --name "/ecommerce/accounts/staging" --value "123456789013" --type "String"
aws ssm put-parameter --name "/ecommerce/accounts/prod" --value "123456789014" --type "String"
```

### Regional Parameters
For each region (us-east-1, eu-west-1, ap-south-1):

```bash
# US East 1
aws ssm put-parameter --name "/ecommerce/us-east-1/vpc/cidr" --value "10.0.0.0/16" --type "String"
aws ssm put-parameter --name "/ecommerce/us-east-1/database/name" --value "ecommerce_us" --type "String"
aws ssm put-parameter --name "/ecommerce/us-east-1/database/username" --value "admin" --type "String"
aws ssm put-parameter --name "/ecommerce/us-east-1/database/password" --value "SecurePassword123!" --type "SecureString"
aws ssm put-parameter --name "/ecommerce/us-east-1/sns/email" --value "alerts-us@yourcompany.com" --type "String"

# EU West 1
aws ssm put-parameter --name "/ecommerce/eu-west-1/vpc/cidr" --value "10.1.0.0/16" --type "String"
aws ssm put-parameter --name "/ecommerce/eu-west-1/database/name" --value "ecommerce_eu" --type "String"
aws ssm put-parameter --name "/ecommerce/eu-west-1/database/username" --value "admin" --type "String"
aws ssm put-parameter --name "/ecommerce/eu-west-1/database/password" --value "SecurePassword123!" --type "SecureString"
aws ssm put-parameter --name "/ecommerce/eu-west-1/sns/email" --value "alerts-eu@yourcompany.com" --type "String"

# AP South 1
aws ssm put-parameter --name "/ecommerce/ap-south-1/vpc/cidr" --value "10.2.0.0/16" --type "String"
aws ssm put-parameter --name "/ecommerce/ap-south-1/database/name" --value "ecommerce_apac" --type "String"
aws ssm put-parameter --name "/ecommerce/ap-south-1/database/username" --value "admin" --type "String"
aws ssm put-parameter --name "/ecommerce/ap-south-1/database/password" --value "SecurePassword123!" --type "SecureString"
aws ssm put-parameter --name "/ecommerce/ap-south-1/sns/email" --value "alerts-apac@yourcompany.com" --type "String"
```

### Deployment Regions
```bash
aws ssm put-parameter --name "/ecommerce/deployment/regions" --value "us-east-1,eu-west-1,ap-south-1" --type "StringList"
```

## Step 2: Set Up Cross-Account Roles

In each target account (dev, staging, prod), create the StackSet execution role:

```bash
aws iam create-role \
  --role-name AWSCloudFormationStackSetExecutionRole \
  --assume-role-policy-document file://infrastructure/shared/stackset-execution-role-trust-policy.json

aws iam attach-role-policy \
  --role-name AWSCloudFormationStackSetExecutionRole \
  --policy-arn arn:aws:iam::aws:policy/PowerUserAccess
```

## Step 3: Deploy Main Pipeline

Deploy the main CodePipeline in the management account:

```bash
aws cloudformation deploy \
  --template-file infrastructure/main-account/pipeline.yaml \
  --stack-name ecommerce-main-pipeline \
  --capabilities CAPABILITY_NAMED_IAM \
  --region us-east-1
```

## Step 4: Trigger Deployment

The pipeline will automatically trigger when you push code to the main branch. You can also manually trigger it:

```bash
aws codepipeline start-pipeline-execution \
  --name ecommerce-main-pipeline-us-east-1
```

## Step 5: Monitor Deployment

Monitor the deployment progress:

1. **CodePipeline Console**: Check pipeline execution status
2. **CloudFormation Console**: Monitor StackSet operations
3. **ECS Console**: Verify service deployments
4. **CloudWatch Logs**: Check application logs

## Step 6: Verify Deployment

After deployment completes, verify each region:

### Get ALB DNS Names
```bash
# US East 1
aws elbv2 describe-load-balancers \
  --names ecommerce-prod-alb-us-east-1 \
  --region us-east-1 \
  --query 'LoadBalancers[0].DNSName'

# EU West 1
aws elbv2 describe-load-balancers \
  --names ecommerce-prod-alb-eu-west-1 \
  --region eu-west-1 \
  --query 'LoadBalancers[0].DNSName'

# AP South 1
aws elbv2 describe-load-balancers \
  --names ecommerce-prod-alb-ap-south-1 \
  --region ap-south-1 \
  --query 'LoadBalancers[0].DNSName'
```

### Test Applications
```bash
# Health checks
curl http://your-alb-dns-name/health
curl http://your-alb-dns-name/api/health

# Frontend
curl http://your-alb-dns-name/
```

## Step 7: Database Setup

Initialize the databases in each region:

```sql
-- Connect to each regional database and run:
CREATE TABLE IF NOT EXISTS orders (
    id VARCHAR(36) PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50),
    customer_address TEXT,
    total_amount DECIMAL(10,2) NOT NULL,
    region VARCHAR(20) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
    id VARCHAR(36) PRIMARY KEY,
    order_id VARCHAR(36) NOT NULL,
    product_id VARCHAR(36) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE IF NOT EXISTS invoices (
    id VARCHAR(36) PRIMARY KEY,
    order_id VARCHAR(36) NOT NULL,
    s3_key VARCHAR(500) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    region VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE IF NOT EXISTS customers (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    address TEXT,
    region VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS payments (
    id VARCHAR(36) PRIMARY KEY,
    order_id VARCHAR(36) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    transaction_id VARCHAR(255),
    region VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
```

## Troubleshooting

### Common Issues

1. **StackSet Permission Errors**
   - Ensure cross-account roles are properly configured
   - Check trust relationships and policies

2. **ECR Repository Not Found**
   - Repositories are created automatically during build
   - Check CodeBuild logs for ECR creation errors

3. **ECS Service Update Failures**
   - Check task definition validity
   - Verify security group and subnet configurations

4. **Database Connection Issues**
   - Ensure security groups allow connections
   - Verify SSM parameters are correct

5. **Lambda Function Errors**
   - Check CloudWatch logs for detailed error messages
   - Verify VPC configuration and security groups

### Useful Commands

```bash
# Check StackSet operations
aws cloudformation list-stack-set-operations --stack-set-name ecommerce-vpc-stackset

# Check ECS service status
aws ecs describe-services --cluster ecommerce-prod-cluster-us-east-1 --services ecommerce-prod-frontend-us-east-1

# Check Lambda function logs
aws logs tail /aws/lambda/ecommerce-prod-invoice-generator-us-east-1 --follow

# Check database connectivity
aws rds describe-db-instances --db-instance-identifier ecommerce-prod-db-us-east-1
```

## Cleanup

To clean up all resources:

```bash
# Delete StackSet instances
aws cloudformation delete-stack-instances \
  --stack-set-name ecommerce-ecs-stackset \
  --accounts 123456789012 123456789013 123456789014 \
  --regions us-east-1 eu-west-1 ap-south-1 \
  --no-retain-stacks

# Delete StackSets
aws cloudformation delete-stack-set --stack-set-name ecommerce-ecs-stackset
aws cloudformation delete-stack-set --stack-set-name ecommerce-lambda-stackset
aws cloudformation delete-stack-set --stack-set-name ecommerce-database-stackset
aws cloudformation delete-stack-set --stack-set-name ecommerce-vpc-stackset

# Delete main pipeline
aws cloudformation delete-stack --stack-name ecommerce-main-pipeline
```

## Next Steps

1. **Custom Domains**: Set up Route 53 and SSL certificates
2. **Monitoring**: Configure detailed CloudWatch dashboards
3. **Backup**: Set up automated database backups
4. **Security**: Implement WAF and additional security measures
5. **Performance**: Set up auto-scaling and performance monitoring
