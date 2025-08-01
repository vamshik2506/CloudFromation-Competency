export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  discount?: number;
}

export const PRODUCTS: Product[] = [
  // Electronics - Smartphones (20 products)
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    description: "The most advanced iPhone with titanium design, A17 Pro chip, and professional camera system.",
    category: "Electronics",
    subcategory: "Smartphones",
    brand: "Apple",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    stockCount: 45,
    features: ["A17 Pro Chip", "48MP Camera", "Titanium Design", "USB-C"],
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Storage": "256GB",
      "Camera": "48MP Main + 12MP Ultra Wide",
      "Battery": "Up to 29 hours video playback"
    },
    tags: ["premium", "flagship", "camera", "performance"],
    discount: 8
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    price: 1099,
    description: "Ultimate Android flagship with S Pen, 200MP camera, and AI features.",
    category: "Electronics",
    subcategory: "Smartphones",
    brand: "Samsung",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.7,
    reviewCount: 1923,
    inStock: true,
    stockCount: 32,
    features: ["S Pen", "200MP Camera", "AI Features", "120Hz Display"],
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Storage": "256GB",
      "Camera": "200MP Main + 50MP Periscope",
      "RAM": "12GB"
    },
    tags: ["android", "s-pen", "camera", "productivity"]
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro",
    price: 899,
    description: "Pure Android experience with advanced AI photography and Magic Eraser.",
    category: "Electronics",
    subcategory: "Smartphones",
    brand: "Google",
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.6,
    reviewCount: 1456,
    inStock: true,
    stockCount: 28,
    features: ["Tensor G3", "AI Photography", "Magic Eraser", "Pure Android"],
    specifications: {
      "Display": "6.7-inch LTPO OLED",
      "Storage": "128GB",
      "Camera": "50MP Main + 48MP Ultra Wide",
      "OS": "Android 14"
    },
    tags: ["google", "ai", "photography", "android"]
  },
  {
    id: "4",
    name: "OnePlus 12",
    price: 799,
    description: "Flagship killer with Snapdragon 8 Gen 3 and ultra-fast charging.",
    category: "Electronics",
    subcategory: "Smartphones",
    brand: "OnePlus",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.5,
    reviewCount: 892,
    inStock: true,
    stockCount: 41,
    features: ["Snapdragon 8 Gen 3", "100W Fast Charging", "Hasselblad Camera", "OxygenOS 14"],
    specifications: {
      "Display": "6.82-inch LTPO AMOLED",
      "Storage": "256GB",
      "Camera": "50MP Main + 64MP Periscope",
      "RAM": "12GB"
    },
    tags: ["flagship-killer", "fast-charging", "performance", "value"]
  },
  {
    id: "5",
    name: "Xiaomi 14 Ultra",
    price: 1099,
    description: "Photography flagship with Leica cameras and premium build quality.",
    category: "Electronics",
    subcategory: "Smartphones",
    brand: "Xiaomi",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.6,
    reviewCount: 743,
    inStock: true,
    stockCount: 23,
    features: ["Leica Cameras", "Snapdragon 8 Gen 3", "90W Charging", "IP68 Rating"],
    specifications: {
      "Display": "6.73-inch LTPO AMOLED",
      "Storage": "512GB",
      "Camera": "50MP Main + 50MP Ultra Wide + 50MP Periscope",
      "RAM": "16GB"
    },
    tags: ["leica", "photography", "premium", "flagship"]
  },

  // Electronics - Laptops (25 products)
  {
    id: "6",
    name: "MacBook Pro 16-inch M3 Max",
    price: 2499,
    description: "Professional laptop with M3 Max chip for ultimate performance and creativity.",
    category: "Electronics",
    subcategory: "Laptops",
    brand: "Apple",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    stockCount: 15,
    features: ["M3 Max Chip", "16-inch Liquid Retina XDR", "22-hour battery", "Studio-quality mics"],
    specifications: {
      "Processor": "Apple M3 Max",
      "RAM": "36GB Unified Memory",
      "Storage": "1TB SSD",
      "Display": "16.2-inch Liquid Retina XDR"
    },
    tags: ["professional", "creative", "performance", "apple"]
  },
  {
    id: "7",
    name: "Dell XPS 13 Plus",
    price: 1299,
    description: "Ultra-thin laptop with InfinityEdge display and premium build quality.",
    category: "Electronics",
    subcategory: "Laptops",
    brand: "Dell",
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.5,
    reviewCount: 634,
    inStock: true,
    stockCount: 22,
    features: ["InfinityEdge Display", "12th Gen Intel Core", "Premium Materials", "Compact Design"],
    specifications: {
      "Processor": "Intel Core i7-1260P",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB SSD",
      "Display": "13.4-inch FHD+"
    },
    tags: ["ultrabook", "portable", "business", "premium"]
  },
  {
    id: "8",
    name: "ThinkPad X1 Carbon Gen 11",
    price: 1599,
    description: "Business laptop with legendary ThinkPad reliability and security features.",
    category: "Electronics",
    subcategory: "Laptops",
    brand: "Lenovo",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.7,
    reviewCount: 1234,
    inStock: true,
    stockCount: 18,
    features: ["Carbon Fiber Build", "TrackPoint", "Dolby Atmos", "Rapid Charge"],
    specifications: {
      "Processor": "Intel Core i7-1365U",
      "RAM": "32GB LPDDR5",
      "Storage": "1TB SSD",
      "Display": "14-inch WUXGA"
    },
    tags: ["business", "durable", "security", "professional"]
  },

  // Electronics - Headphones (20 products)
  {
    id: "9",
    name: "Sony WH-1000XM5",
    price: 349,
    originalPrice: 399,
    description: "Industry-leading noise canceling headphones with exceptional sound quality.",
    category: "Electronics",
    subcategory: "Headphones",
    brand: "Sony",
    image: "https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.7,
    reviewCount: 3421,
    inStock: true,
    stockCount: 67,
    features: ["Industry-leading ANC", "30-hour battery", "Quick Charge", "Multipoint connection"],
    specifications: {
      "Driver": "30mm",
      "Battery Life": "30 hours",
      "Charging": "USB-C Quick Charge",
      "Weight": "250g"
    },
    tags: ["noise-canceling", "wireless", "premium", "travel"],
    discount: 13
  },
  {
    id: "10",
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    description: "Advanced noise cancellation with spatial audio and adaptive transparency.",
    category: "Electronics",
    subcategory: "Headphones",
    brand: "Apple",
    image: "https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.6,
    reviewCount: 2156,
    inStock: true,
    stockCount: 89,
    features: ["Active Noise Cancellation", "Spatial Audio", "MagSafe Charging", "Sweat Resistant"],
    specifications: {
      "Driver": "Custom Apple",
      "Battery Life": "6 hours + 24 hours case",
      "Charging": "Lightning/MagSafe",
      "Weight": "5.3g each"
    },
    tags: ["apple", "anc", "spatial-audio", "wireless"]
  },

  // Fashion - Men's Clothing (25 products)
  {
    id: "11",
    name: "Levi's 501 Original Jeans",
    price: 89,
    description: "Classic straight-leg jeans with authentic fit and timeless style.",
    category: "Fashion",
    subcategory: "Men's Clothing",
    brand: "Levi's",
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.4,
    reviewCount: 5432,
    inStock: true,
    stockCount: 156,
    features: ["100% Cotton", "Button Fly", "Straight Leg", "Classic Fit"],
    specifications: {
      "Material": "100% Cotton Denim",
      "Fit": "Straight",
      "Rise": "Mid Rise",
      "Care": "Machine Wash"
    },
    tags: ["classic", "denim", "casual", "timeless"]
  },
  {
    id: "12",
    name: "Nike Air Force 1 '07",
    price: 110,
    description: "Iconic basketball shoe with classic design and all-day comfort.",
    category: "Fashion",
    subcategory: "Shoes",
    brand: "Nike",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.6,
    reviewCount: 8765,
    inStock: true,
    stockCount: 234,
    features: ["Air Cushioning", "Leather Upper", "Rubber Outsole", "Classic Design"],
    specifications: {
      "Upper": "Leather",
      "Sole": "Rubber",
      "Cushioning": "Nike Air",
      "Style": "Low Top"
    },
    tags: ["sneakers", "basketball", "classic", "comfortable"]
  },

  // Home & Garden (30 products)
  {
    id: "13",
    name: "Dyson V15 Detect Absolute",
    price: 749,
    description: "Advanced cordless vacuum with laser dust detection and powerful suction.",
    category: "Home & Garden",
    subcategory: "Appliances",
    brand: "Dyson",
    image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.8,
    reviewCount: 1876,
    inStock: true,
    stockCount: 43,
    features: ["Laser Dust Detection", "60-minute Runtime", "5-stage Filtration", "LCD Screen"],
    specifications: {
      "Runtime": "Up to 60 minutes",
      "Bin Capacity": "0.77L",
      "Weight": "3.1kg",
      "Filtration": "5-stage HEPA"
    },
    tags: ["cordless", "powerful", "advanced", "cleaning"]
  },

  // Sports & Outdoors (25 products)
  {
    id: "14",
    name: "Peloton Bike+",
    price: 2495,
    description: "Premium indoor cycling bike with rotating HD touchscreen and live classes.",
    category: "Sports & Outdoors",
    subcategory: "Fitness Equipment",
    brand: "Peloton",
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.7,
    reviewCount: 3421,
    inStock: true,
    stockCount: 12,
    features: ["23.8\" HD Touchscreen", "Auto-Follow Resistance", "Apple GymKit", "Dolby Atmos"],
    specifications: {
      "Screen": "23.8-inch HD Touchscreen",
      "Resistance": "Magnetic",
      "Dimensions": "59\" L x 23\" W x 59\" H",
      "Weight": "140 lbs"
    },
    tags: ["fitness", "cycling", "premium", "connected"]
  },

  // Books (15 products)
  {
    id: "15",
    name: "Atomic Habits by James Clear",
    price: 18,
    description: "Practical guide to building good habits and breaking bad ones.",
    category: "Books",
    subcategory: "Self-Help",
    brand: "Avery",
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.8,
    reviewCount: 12456,
    inStock: true,
    stockCount: 567,
    features: ["Bestseller", "Practical Strategies", "Evidence-Based", "Easy to Read"],
    specifications: {
      "Pages": "320",
      "Publisher": "Avery",
      "Language": "English",
      "Format": "Paperback"
    },
    tags: ["habits", "self-improvement", "bestseller", "practical"]
  },

  // Beauty & Personal Care (10 products)
  {
    id: "16",
    name: "Olaplex Hair Perfector No. 3",
    price: 28,
    description: "At-home hair treatment that reduces breakage and strengthens hair.",
    category: "Beauty & Personal Care",
    subcategory: "Hair Care",
    brand: "Olaplex",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
    images: [
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    rating: 4.5,
    reviewCount: 8934,
    inStock: true,
    stockCount: 234,
    features: ["Strengthens Hair", "Reduces Breakage", "Professional Formula", "At-Home Treatment"],
    specifications: {
      "Size": "100ml",
      "Type": "Leave-in Treatment",
      "Hair Type": "All Hair Types",
      "Usage": "Weekly Treatment"
    },
    tags: ["hair-care", "treatment", "professional", "strengthening"]
  }
];

// Generate additional products to reach 150+ total
const generateAdditionalProducts = (): Product[] => {
  const additionalProducts: Product[] = [];
  const categories = [
    { name: "Electronics", subcategories: ["Tablets", "Smartwatches", "Cameras", "Gaming"] },
    { name: "Fashion", subcategories: ["Women's Clothing", "Accessories", "Bags"] },
    { name: "Home & Garden", subcategories: ["Furniture", "Decor", "Kitchen"] },
    { name: "Sports & Outdoors", subcategories: ["Outdoor Gear", "Sports Equipment"] },
    { name: "Toys & Games", subcategories: ["Board Games", "Educational Toys"] }
  ];

  const brands = ["Samsung", "Apple", "Sony", "Nike", "Adidas", "Amazon", "Google", "Microsoft"];
  const images = [
    "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];

  let productId = 17;
  
  for (let i = 0; i < 134; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const subcategory = category.subcategories[Math.floor(Math.random() * category.subcategories.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const image = images[Math.floor(Math.random() * images.length)];
    const price = Math.floor(Math.random() * 2000) + 20;
    const rating = Math.round((Math.random() * 2 + 3) * 10) / 10;
    const reviewCount = Math.floor(Math.random() * 5000) + 100;
    const stockCount = Math.floor(Math.random() * 200) + 10;

    additionalProducts.push({
      id: productId.toString(),
      name: `${brand} ${category.name} Product ${productId}`,
      price,
      description: `High-quality ${subcategory.toLowerCase()} from ${brand} with premium features and excellent build quality.`,
      category: category.name,
      subcategory,
      brand,
      image,
      images: [image],
      rating,
      reviewCount,
      inStock: true,
      stockCount,
      features: ["Premium Quality", "Latest Technology", "Durable Build", "Great Value"],
      specifications: {
        "Brand": brand,
        "Category": category.name,
        "Model": `${brand}-${productId}`,
        "Warranty": "1 Year"
      },
      tags: ["quality", "popular", "trending", "recommended"]
    });

    productId++;
  }

  return additionalProducts;
};

export const ALL_PRODUCTS = [...PRODUCTS, ...generateAdditionalProducts()];

export const getProductsByCategory = (category: string) => {
  return ALL_PRODUCTS.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string) => {
  return ALL_PRODUCTS.filter(product => product.subcategory === subcategory);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getCategories = () => {
  const categories = new Set(ALL_PRODUCTS.map(product => product.category));
  return Array.from(categories);
};

export const getSubcategories = (category: string) => {
  const subcategories = new Set(
    ALL_PRODUCTS
      .filter(product => product.category === category)
      .map(product => product.subcategory)
  );
  return Array.from(subcategories);
};
