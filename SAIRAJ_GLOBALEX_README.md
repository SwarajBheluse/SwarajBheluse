# Sairaj Globalex - Import-Export Business Website

A professional, eco-friendly website for **Sairaj Globalex**, an import-export business specializing in premium Areca Leaf Plates and sustainable tableware products.

## 🌿 Features

### Navigation
- **Responsive Header** with smooth scroll navigation
- **Mobile-friendly** menu with hamburger toggle
- Navigation links: Home, Products, Vision, Mission, Contact
- Active link highlighting on scroll

### Sections

#### 1. **Hero Section**
- Eye-catching introduction with company name and tagline
- Call-to-action buttons for Products and Contact
- Animated entrance effects

#### 2. **About Section**
- Company overview and commitment to sustainability
- Eco-friendly design with natural color palette

#### 3. **Vision Section**
- Company vision with visual icons
- Three key pillars: Global Reach, Zero Waste, Sustainability
- Interactive hover effects

#### 4. **Mission Section**
- Detailed mission statement
- Four core values with checkmarks
- Gradient background for emphasis

#### 5. **Products Section**
- **20 Products** organized in 5 categories:
  - Round Plates (4 products)
  - Square Plates (4 products)
  - Bowls (4 products)
  - Trays (4 products)
  - Specialty Items (4 products)
- **Category Filtering** - Click to filter products by category
- **Product Cards** with:
  - Product name, size, and category
  - Description and key features
  - "Inquire Now" button
  - Hover animations and effects

#### 6. **Why Choose Us Section**
- Four key benefits with icons
- Hover scale animations

#### 7. **Contact Section**
- Contact form with name, email, subject, and message fields
- Email and phone display
- Styled with eco-friendly theme

#### 8. **Footer**
- Company information and social media links
- Quick navigation links
- Complete contact details with address
- Copyright and policy links
- Sustainability commitment message

## 🎨 Design Theme

### Color Palette (Eco-Friendly)
- **Forest Green** (#2D5016) - Primary brand color
- **Olive Green** (#6B8E23) - Secondary color
- **Earth Brown** (#8B4513) - Accent color
- **Sand Beige** (#F5F5DC) - Background color
- **Natural Tan** (#D4A574) - Complementary color
- **Leaf Green** (#4A7C23) - Highlight color

### Animations
- **Fade-in** effects on page load
- **Slide-up** animations for content
- **Hover effects** on cards and buttons
- **Smooth scroll** navigation
- **Scale transforms** on interactive elements

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 800 (Extra Bold)
- Clean, modern, and professional appearance

## 📦 Product Structure

Each product includes:
- Unique ID
- Product name
- Category
- Size specifications
- Detailed description
- Key features (4 per product)
- Image reference

### Product Categories
1. **Round Plates** - 6", 8", 10", 12"
2. **Square Plates** - 6", 8", 10", 12"
3. **Bowls** - 4", 6", 8", Square 6"
4. **Trays** - Rectangular, Oval, Compartment
5. **Specialty Items** - Spoons, Cups, Gift Sets

## 🚀 Technology Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS 3.x
- **UI Components**: DaisyUI 4.x
- **Language**: TypeScript
- **Deployment**: Netlify (configured)

## 📁 Project Structure

```
/vercel/sandbox/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navigation header
│   │   ├── Footer.astro          # Footer with contact info
│   │   ├── ProductCard.astro     # Individual product card
│   │   └── ProductGrid.astro     # Product grid with filtering
│   ├── data/
│   │   └── products.ts           # Product data (20 products)
│   ├── layouts/
│   │   └── Layout.astro          # Main layout wrapper
│   ├── pages/
│   │   └── index.astro           # Home page
│   └── styles/
│       └── globals.css           # Global styles
├── public/
│   └── images/
│       └── products/             # Product images directory
├── tailwind.config.mjs           # Tailwind configuration
├── astro.config.mjs              # Astro configuration
└── package.json                  # Dependencies
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```
   Visit: `http://localhost:4321`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📸 Adding Product Images

Product images should be placed in `/public/images/products/` directory.

### Required Images (20 total):
- round-6.jpg, round-8.jpg, round-10.jpg, round-12.jpg
- square-6.jpg, square-8.jpg, square-10.jpg, square-12.jpg
- bowl-4.jpg, bowl-6.jpg, bowl-8.jpg, square-bowl-6.jpg
- tray-10x6.jpg, tray-12x8.jpg, oval-tray-10.jpg, compartment-3.jpg
- compartment-4.jpg, spoon.jpg, cup-150.jpg, gift-set.jpg

**Image Specifications:**
- Format: JPG or PNG
- Size: 800x800 pixels (recommended)
- Aspect Ratio: 1:1 (square)
- Optimized for web (< 200KB)

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu for mobile devices

### Interactive Elements
- Smooth scroll navigation
- Category filtering for products
- Hover animations on cards
- Active link highlighting
- Mobile menu toggle

### SEO Friendly
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags support
- Fast loading times

### Accessibility
- Keyboard navigation support
- ARIA labels where needed
- High contrast colors
- Readable font sizes

## 🌐 Deployment

The project is configured for **Netlify** deployment:

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The site will auto-deploy on push to main branch

## 📝 Customization

### Update Business Information

1. **Company Name**: Update in `Header.astro` and `Footer.astro`
2. **Contact Details**: Modify in `Footer.astro` and contact section in `index.astro`
3. **Address**: Update in `Footer.astro`
4. **Social Media Links**: Update in `Footer.astro`

### Add More Products

Edit `/src/data/products.ts`:

```typescript
{
    id: 21,
    name: 'New Product Name',
    category: 'Category Name',
    size: 'Product Size',
    description: 'Product description',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    image: '/images/products/new-product.jpg'
}
```

### Modify Colors

Edit `tailwind.config.mjs` to change the color scheme:

```javascript
colors: {
    'forest-green': '#2D5016',
    'olive-green': '#6B8E23',
    // Add or modify colors
}
```

## 📧 Contact Information

**Sairaj Globalex**
- Email: info@sairajglobalex.com
- Phone: +91 XXXXX XXXXX
- Address: Industrial Area, Phase 2, Mumbai, Maharashtra 400001, India

## 🌟 Future Enhancements

- Add product detail pages
- Implement shopping cart functionality
- Add customer testimonials section
- Create blog for sustainability tips
- Add multi-language support
- Integrate payment gateway
- Add product search functionality
- Implement customer reviews

## 📄 License

© 2024 Sairaj Globalex. All rights reserved.

---

**Built with ❤️ and 🌿 for a sustainable future**
