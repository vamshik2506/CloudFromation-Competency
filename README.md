# Enterprise E-commerce Platform

A production-ready microservices e-commerce application with complete AWS infrastructure automation using CloudFormation templates and multi-account deployment strategy.

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Main AWS Account                         │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                   CodePipeline                              ││
│  │  1. Source (GitHub) → 2. Lint → 3. Infrastructure →       ││
│  │  4. Build Images → 5. Deploy to Regions                   ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
            ┌───────▼──────┐ ┌──────▼──────┐ ┌─────▼──────┐
            │   US-East-1  │ │  EU-West-1  │ │ AP-South-1 │
            │              │ │             │ │            │
            │ ┌──────────┐ │ │ ┌─────────┐ │ │ ┌────────┐ │
            │ │Frontend  │ │ │ │Frontend │ │ │ │Frontend│ │
            │ │ECS+ALB   │ │ │ │ECS+ALB  │ │ │ │ECS+ALB │ │
            │ └──────────┘ │ │ └─────────┘ │ │ └────────┘ │
            │ ┌──────────┐ │ │ ┌─────────┐ │ │ ┌────────┐ │
            │ │Backend   │ │ │ │Backend  │ │ │ │Backend │ │
            │ │ECS       │ │ │ │ECS      │ │ │ │ECS     │ │
            │ └──────────┘ │ │ └─────────┘ │ │ └────────┘ │
            │ ┌──────────┐ │ │ ┌─────────┐ │ │ ┌────────┐ │
            │ │Lambda+S3 │ │ │ │Lambda+S3│ │ │ │Lambda+ │ │
            │ │+SNS+RDS  │ │ │ │+SNS+RDS │ │ │ │S3+SNS+ │ │
            │ │          │ │ │ │         │ │ │ │RDS     │ │
            │ └──────────┘ │ │ └─────────┘ │ │ └────────┘ │
            └──────────────┘ └─────────────┘ └────────────┘
```

## 🚀 Features

### Application Features
- **Modern React Frontend**: Responsive UI with 150+ products, search, filtering, and ratings
- **Payment Integration**: Multiple payment options (Stripe, PayPal, Apple Pay, Google Pay, Bank Transfer)
- **Order Management**: Complete order flow with user data collection and validation
- **Invoice Generation**: Automated PDF invoice generation via Lambda
- **Regional Customization**: Different offers, currencies, and compliance per region
- **Real-time Notifications**: SNS-based email notifications for order confirmations

### Infrastructure Features
- **Multi-Account Strategy**: Separate AWS accounts for different environments/regions
- **Infrastructure as Code**: Complete CloudFormation templates with parameter management
- **CI/CD Pipeline**: Automated deployment with CodePipeline and StackSets
- **Microservices Architecture**: Containerized services with ECS Fargate
- **High Availability**: Multi-AZ deployment with load balancing
- **Security**: VPC peering, private subnets, and proper IAM roles
- **Monitoring**: CloudWatch integration for logging and metrics

## 📁 Repository Structure

```
├── application/                    # Application source code
│   ├── frontend/                  # React frontend application
│   ├── backend/                   # Node.js backend services
│   └── lambda/                    # Lambda functions
├── infrastructure/                # CloudFormation templates
│   ├── main-account/             # Main account resources
│   ├── regional/                 # Regional infrastructure
│   └── shared/                   # Shared templates
├── deployment/                   # Deployment configurations
│   ├── dockerfiles/             # Region-specific Dockerfiles
│   ├── buildspec/               # CodeBuild specifications
│   └── scripts/                 # Deployment scripts
├── docs/                        # Documentation
└── parameters/                  # SSM parameter examples
```

## 🔧 Required SSM Parameters

### Main Account Parameters
```
/ecommerce/github/owner
/ecommerce/github/repo
/ecommerce/github/branch
/ecommerce/github/token
/ecommerce/deployment/regions
/ecommerce/accounts/dev
/ecommerce/accounts/staging
/ecommerce/accounts/prod
```

### Regional Parameters (per region)
```
/ecommerce/{region}/vpc/cidr
/ecommerce/{region}/database/name
/ecommerce/{region}/database/username
/ecommerce/{region}/database/password
/ecommerce/{region}/sns/email
/ecommerce/{region}/domain/name
```

## 🚀 Quick Start

### Prerequisites
1. AWS CLI configured with appropriate permissions
2. Three AWS accounts set up in AWS Organizations
3. GitHub repository with source code
4. SSM parameters configured as per documentation

### Deployment Steps

1. **Deploy Main Pipeline**:
   ```bash
   aws cloudformation deploy \
     --template-file infrastructure/main-account/pipeline.yaml \
     --stack-name ecommerce-main-pipeline \
     --capabilities CAPABILITY_IAM \
     --region us-east-1
   ```

2. **Configure SSM Parameters**:
   ```bash
   # Set GitHub parameters
   aws ssm put-parameter --name "/ecommerce/github/owner" --value "your-github-username" --type "String"
   aws ssm put-parameter --name "/ecommerce/github/repo" --value "ecommerce-platform" --type "String"
   aws ssm put-parameter --name "/ecommerce/github/token" --value "your-github-token" --type "SecureString"
   
   # Set deployment regions
   aws ssm put-parameter --name "/ecommerce/deployment/regions" --value "us-east-1,eu-west-1,ap-south-1" --type "StringList"
   ```

3. **Trigger Pipeline**:
   The pipeline will automatically trigger on code commits to the main branch.

## 🌍 Regional Configurations

### US East 1 (Primary)
- **Currency**: USD
- **Tax Rate**: 8.5%
- **Features**: Black Friday offers, Free shipping over $75
- **Database**: MySQL RDS in us-east-1a, us-east-1b

### EU West 1
- **Currency**: EUR
- **Tax Rate**: 20% (VAT)
- **Features**: GDPR compliance, EU-specific offers
- **Database**: MySQL RDS in eu-west-1a, eu-west-1b

### AP South 1
- **Currency**: INR
- **Tax Rate**: 18% (GST)
- **Features**: Regional payment methods, Express delivery
- **Database**: MySQL RDS in ap-south-1a, ap-south-1b

## 📊 Database Schema

Each regional database contains:
- **orders**: Order details with unique codes
- **customers**: Customer information
- **products**: Regional product catalog
- **invoices**: Invoice metadata and S3 references
- **payments**: Payment transaction records

## 🔐 Security Features

- **VPC Isolation**: Private subnets for backend services
- **VPC Peering**: Secure communication between VPCs
- **IAM Roles**: Least privilege access for all services
- **Encryption**: Data encryption at rest and in transit
- **Secrets Management**: AWS Secrets Manager for sensitive data

## 📈 Monitoring & Logging

- **CloudWatch Logs**: Centralized logging for all services
- **CloudWatch Metrics**: Custom metrics for business KPIs
- **X-Ray Tracing**: Distributed tracing for microservices
- **SNS Alerts**: Automated alerting for critical issues

## 🛠️ Development

### Local Development
```bash
# Install dependencies
npm run install:all

# Start development servers
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

### Docker Development
```bash
# Build regional images
docker-compose -f docker-compose.dev.yml up --build

# Test specific region
docker-compose -f deployment/dockerfiles/us/docker-compose.yml up
```

## 📚 Documentation

- [Application Architecture](docs/architecture.md)
- [Infrastructure Guide](docs/infrastructure.md)
- [Deployment Guide](docs/deployment.md)
- [API Documentation](docs/api.md)
- [Troubleshooting](docs/troubleshooting.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
