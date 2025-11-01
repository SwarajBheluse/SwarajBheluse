export interface Product {
    id: number;
    name: string;
    category: string;
    size: string;
    description: string;
    features: string[];
    image: string;
}

export const categories = [
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
        size: '6 inch (15 cm)',
        description: 'Perfect for appetizers and desserts. Eco-friendly and biodegradable.',
        features: ['100% Natural', 'Microwave Safe', 'Leak Proof', 'Biodegradable'],
        image: '/images/products/round-6.jpg'
    },
    {
        id: 2,
        name: 'Round Plate 8 inch',
        category: 'Round Plates',
        size: '8 inch (20 cm)',
        description: 'Ideal for side dishes and snacks. Made from premium areca leaves.',
        features: ['Chemical Free', 'Sturdy Design', 'Heat Resistant', 'Compostable'],
        image: '/images/products/round-8.jpg'
    },
    {
        id: 3,
        name: 'Round Plate 10 inch',
        category: 'Round Plates',
        size: '10 inch (25 cm)',
        description: 'Standard dinner plate size. Perfect for main courses.',
        features: ['Eco-Friendly', 'Durable', 'Elegant Look', 'Sustainable'],
        image: '/images/products/round-10.jpg'
    },
    {
        id: 4,
        name: 'Round Plate 12 inch',
        category: 'Round Plates',
        size: '12 inch (30 cm)',
        description: 'Large serving plate for family meals and gatherings.',
        features: ['Extra Strong', 'Natural Finish', 'Versatile', 'Eco-Conscious'],
        image: '/images/products/round-12.jpg'
    },
    
    // Square Plates
    {
        id: 5,
        name: 'Square Plate 6 inch',
        category: 'Square Plates',
        size: '6 x 6 inch',
        description: 'Modern square design for contemporary dining.',
        features: ['Stylish Design', 'Biodegradable', 'Leak Resistant', 'Natural'],
        image: '/images/products/square-6.jpg'
    },
    {
        id: 6,
        name: 'Square Plate 8 inch',
        category: 'Square Plates',
        size: '8 x 8 inch',
        description: 'Perfect for appetizers and small portions.',
        features: ['Premium Quality', 'Heat Safe', 'Compostable', 'Chemical Free'],
        image: '/images/products/square-8.jpg'
    },
    {
        id: 7,
        name: 'Square Plate 10 inch',
        category: 'Square Plates',
        size: '10 x 10 inch',
        description: 'Elegant square plate for main dishes.',
        features: ['Sturdy Build', 'Eco-Friendly', 'Microwave Safe', 'Sustainable'],
        image: '/images/products/square-10.jpg'
    },
    {
        id: 8,
        name: 'Square Plate 12 inch',
        category: 'Square Plates',
        size: '12 x 12 inch',
        description: 'Large square serving platter for special occasions.',
        features: ['Extra Large', 'Durable', 'Natural Look', 'Biodegradable'],
        image: '/images/products/square-12.jpg'
    },
    
    // Bowls
    {
        id: 9,
        name: 'Round Bowl Small',
        category: 'Bowls',
        size: '4 inch (10 cm)',
        description: 'Small bowl perfect for sauces and condiments.',
        features: ['Leak Proof', 'Natural', 'Compostable', 'Versatile'],
        image: '/images/products/bowl-small.jpg'
    },
    {
        id: 10,
        name: 'Round Bowl Medium',
        category: 'Bowls',
        size: '6 inch (15 cm)',
        description: 'Medium bowl ideal for soups and salads.',
        features: ['Deep Design', 'Sturdy', 'Eco-Friendly', 'Heat Resistant'],
        image: '/images/products/bowl-medium.jpg'
    },
    {
        id: 11,
        name: 'Round Bowl Large',
        category: 'Bowls',
        size: '8 inch (20 cm)',
        description: 'Large bowl for pasta, rice dishes, and more.',
        features: ['High Capacity', 'Durable', 'Microwave Safe', 'Biodegradable'],
        image: '/images/products/bowl-large.jpg'
    },
    {
        id: 12,
        name: 'Square Bowl',
        category: 'Bowls',
        size: '6 x 6 inch',
        description: 'Contemporary square bowl for modern dining.',
        features: ['Unique Design', 'Natural', 'Leak Resistant', 'Sustainable'],
        image: '/images/products/bowl-square.jpg'
    },
    
    // Trays
    {
        id: 13,
        name: 'Rectangular Tray Small',
        category: 'Trays',
        size: '8 x 6 inch',
        description: 'Compact tray for snacks and appetizers.',
        features: ['Lightweight', 'Sturdy', 'Eco-Friendly', 'Compostable'],
        image: '/images/products/tray-small.jpg'
    },
    {
        id: 14,
        name: 'Rectangular Tray Medium',
        category: 'Trays',
        size: '10 x 8 inch',
        description: 'Versatile tray for various serving needs.',
        features: ['Multi-Purpose', 'Durable', 'Natural Finish', 'Biodegradable'],
        image: '/images/products/tray-medium.jpg'
    },
    {
        id: 15,
        name: 'Rectangular Tray Large',
        category: 'Trays',
        size: '12 x 10 inch',
        description: 'Large serving tray for parties and events.',
        features: ['Extra Strong', 'Elegant', 'Heat Safe', 'Sustainable'],
        image: '/images/products/tray-large.jpg'
    },
    {
        id: 16,
        name: 'Oval Tray',
        category: 'Trays',
        size: '12 x 8 inch',
        description: 'Elegant oval tray for special presentations.',
        features: ['Unique Shape', 'Premium Quality', 'Eco-Friendly', 'Natural'],
        image: '/images/products/tray-oval.jpg'
    },
    
    // Specialty Items
    {
        id: 17,
        name: 'Compartment Plate',
        category: 'Specialty Items',
        size: '10 inch (3 sections)',
        description: 'Three-section plate for complete meals.',
        features: ['3 Compartments', 'Leak Proof', 'Microwave Safe', 'Biodegradable'],
        image: '/images/products/compartment.jpg'
    },
    {
        id: 18,
        name: 'Spoon Set',
        category: 'Specialty Items',
        size: '6 inch',
        description: 'Eco-friendly areca leaf spoons.',
        features: ['Disposable', 'Natural', 'Sturdy', 'Compostable'],
        image: '/images/products/spoon.jpg'
    },
    {
        id: 19,
        name: 'Fork Set',
        category: 'Specialty Items',
        size: '6 inch',
        description: 'Biodegradable areca leaf forks.',
        features: ['Eco-Friendly', 'Strong', 'Natural', 'Sustainable'],
        image: '/images/products/fork.jpg'
    },
    {
        id: 20,
        name: 'Party Pack Combo',
        category: 'Specialty Items',
        size: 'Assorted',
        description: 'Complete party pack with plates, bowls, and cutlery.',
        features: ['Value Pack', 'Variety', 'Eco-Friendly', 'Event Ready'],
        image: '/images/products/party-pack.jpg'
    }
];

export function getProductsByCategory(category: string): Product[] {
    if (category === 'All Products') {
        return products;
    }
    return products.filter(product => product.category === category);
}

export function getFeaturedProducts(count: number = 6): Product[] {
    return products.slice(0, count);
}
