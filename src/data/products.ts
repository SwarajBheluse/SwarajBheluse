export interface Product {
    id: number;
    name: string;
    category: string;
    size: string;
    description: string;
    features: string[];
    image: string;
}

export const productCategories = [
    'All Products',
    'Round Plates',
    'Square Plates',
    'Bowls',
    'Trays',
    'Specialty Items'
];

export const products: Product[] = [
    // Round Plates
    {
        id: 1,
        name: 'Round Plate 6 inch',
        category: 'Round Plates',
        size: '6 inch',
        description: 'Perfect for appetizers and desserts. Eco-friendly and biodegradable.',
        features: ['100% Natural', 'Biodegradable', 'Microwave Safe', 'Chemical Free'],
        image: '/images/products/round-6.jpg'
    },
    {
        id: 2,
        name: 'Round Plate 8 inch',
        category: 'Round Plates',
        size: '8 inch',
        description: 'Ideal for snacks and side dishes. Made from fallen areca palm leaves.',
        features: ['Eco-Friendly', 'Sturdy', 'Heat Resistant', 'Compostable'],
        image: '/images/products/round-8.jpg'
    },
    {
        id: 3,
        name: 'Round Plate 10 inch',
        category: 'Round Plates',
        size: '10 inch',
        description: 'Standard dinner plate size. Perfect for main courses.',
        features: ['Durable', 'Natural Finish', 'Water Resistant', 'Sustainable'],
        image: '/images/products/round-10.jpg'
    },
    {
        id: 4,
        name: 'Round Plate 12 inch',
        category: 'Round Plates',
        size: '12 inch',
        description: 'Large serving plate for family meals and gatherings.',
        features: ['Extra Strong', 'Premium Quality', 'Elegant Design', 'Eco-Conscious'],
        image: '/images/products/round-12.jpg'
    },
    
    // Square Plates
    {
        id: 5,
        name: 'Square Plate 6 inch',
        category: 'Square Plates',
        size: '6 inch',
        description: 'Modern square design for contemporary dining.',
        features: ['Stylish', 'Biodegradable', 'Leak Proof', 'Natural'],
        image: '/images/products/square-6.jpg'
    },
    {
        id: 6,
        name: 'Square Plate 8 inch',
        category: 'Square Plates',
        size: '8 inch',
        description: 'Versatile square plate for various cuisines.',
        features: ['Elegant', 'Sturdy', 'Chemical Free', 'Compostable'],
        image: '/images/products/square-8.jpg'
    },
    {
        id: 7,
        name: 'Square Plate 10 inch',
        category: 'Square Plates',
        size: '10 inch',
        description: 'Premium square dinner plate with natural texture.',
        features: ['Premium', 'Durable', 'Heat Resistant', 'Sustainable'],
        image: '/images/products/square-10.jpg'
    },
    {
        id: 8,
        name: 'Square Plate 12 inch',
        category: 'Square Plates',
        size: '12 inch',
        description: 'Large square serving platter for special occasions.',
        features: ['Extra Large', 'Strong', 'Elegant', 'Eco-Friendly'],
        image: '/images/products/square-12.jpg'
    },
    
    // Bowls
    {
        id: 9,
        name: 'Round Bowl 4 inch',
        category: 'Bowls',
        size: '4 inch',
        description: 'Small bowl perfect for sauces and condiments.',
        features: ['Compact', 'Leak Proof', 'Natural', 'Biodegradable'],
        image: '/images/products/bowl-4.jpg'
    },
    {
        id: 10,
        name: 'Round Bowl 6 inch',
        category: 'Bowls',
        size: '6 inch',
        description: 'Medium bowl ideal for soups and salads.',
        features: ['Versatile', 'Sturdy', 'Eco-Friendly', 'Compostable'],
        image: '/images/products/bowl-6.jpg'
    },
    {
        id: 11,
        name: 'Round Bowl 8 inch',
        category: 'Bowls',
        size: '8 inch',
        description: 'Large bowl for rice, pasta, and main dishes.',
        features: ['Deep', 'Durable', 'Heat Resistant', 'Sustainable'],
        image: '/images/products/bowl-8.jpg'
    },
    {
        id: 12,
        name: 'Square Bowl 6 inch',
        category: 'Bowls',
        size: '6 inch',
        description: 'Contemporary square bowl with natural appeal.',
        features: ['Modern', 'Strong', 'Chemical Free', 'Natural'],
        image: '/images/products/square-bowl-6.jpg'
    },
    
    // Trays
    {
        id: 13,
        name: 'Rectangular Tray 10x6 inch',
        category: 'Trays',
        size: '10x6 inch',
        description: 'Perfect for serving appetizers and snacks.',
        features: ['Spacious', 'Sturdy', 'Elegant', 'Biodegradable'],
        image: '/images/products/tray-10x6.jpg'
    },
    {
        id: 14,
        name: 'Rectangular Tray 12x8 inch',
        category: 'Trays',
        size: '12x8 inch',
        description: 'Large serving tray for parties and events.',
        features: ['Extra Large', 'Premium', 'Durable', 'Eco-Friendly'],
        image: '/images/products/tray-12x8.jpg'
    },
    {
        id: 15,
        name: 'Oval Tray 10 inch',
        category: 'Trays',
        size: '10 inch',
        description: 'Elegant oval tray for special presentations.',
        features: ['Unique Shape', 'Strong', 'Natural Finish', 'Compostable'],
        image: '/images/products/oval-tray-10.jpg'
    },
    {
        id: 16,
        name: 'Compartment Tray 3-Section',
        category: 'Trays',
        size: '10 inch',
        description: 'Three-section tray for complete meals.',
        features: ['Multi-Section', 'Convenient', 'Leak Proof', 'Sustainable'],
        image: '/images/products/compartment-3.jpg'
    },
    
    // Specialty Items
    {
        id: 17,
        name: 'Compartment Tray 4-Section',
        category: 'Specialty Items',
        size: '12 inch',
        description: 'Four-section tray for thali-style dining.',
        features: ['4 Compartments', 'Traditional', 'Sturdy', 'Eco-Friendly'],
        image: '/images/products/compartment-4.jpg'
    },
    {
        id: 18,
        name: 'Spoon Set',
        category: 'Specialty Items',
        size: '6 inch',
        description: 'Natural areca leaf spoons for eco-friendly dining.',
        features: ['Disposable', 'Biodegradable', 'Strong', 'Natural'],
        image: '/images/products/spoon.jpg'
    },
    {
        id: 19,
        name: 'Cup 150ml',
        category: 'Specialty Items',
        size: '150ml',
        description: 'Eco-friendly cup for beverages and desserts.',
        features: ['Leak Proof', 'Heat Resistant', 'Natural', 'Compostable'],
        image: '/images/products/cup-150.jpg'
    },
    {
        id: 20,
        name: 'Premium Gift Set',
        category: 'Specialty Items',
        size: 'Assorted',
        description: 'Curated set of various areca leaf products.',
        features: ['Gift Packaging', 'Variety Pack', 'Premium Quality', 'Eco-Friendly'],
        image: '/images/products/gift-set.jpg'
    }
];
