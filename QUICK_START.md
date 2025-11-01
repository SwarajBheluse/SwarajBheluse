# 🚀 Quick Start Guide - Sairaj Globalex Website

## ✅ What's Been Built

A complete, professional website for **Sairaj Globalex** Import-Export business featuring:
- ✅ Responsive Header with navigation (Home, Products, Vision, Mission, Contact)
- ✅ Hero section with company branding
- ✅ About, Vision, and Mission sections
- ✅ **20 Products** organized in 5 categories with filtering
- ✅ Contact form and business information
- ✅ Professional Footer with address and social links
- ✅ Eco-friendly color theme (greens, browns, earth tones)
- ✅ Smooth animations and transitions
- ✅ Mobile-responsive design

## 🎯 To View Your Website

### Option 1: Development Server (Recommended for viewing)
```bash
npm run dev
```
Then open your browser to: **http://localhost:4321**

### Option 2: Production Build
```bash
npm run build
npm run preview
```

## 📋 What You Need to Do Next

### 1. Add Product Images (Optional but Recommended)
- Place product photos in: `/public/images/products/`
- Required images listed in: `/public/images/products/README.md`
- Recommended size: 800x800 pixels, JPG or PNG format
- Currently using placeholder leaf emojis (🍃)

### 2. Update Contact Information
Edit these files with your actual details:

**Footer** (`src/components/Footer.astro`):
- Line 82-87: Update address
- Line 91: Update email
- Line 96: Update phone number
- Lines 18-41: Update social media links

**Contact Section** (`src/pages/index.astro`):
- Line 186: Update email
- Line 193: Update phone number

### 3. Customize Business Details (Optional)
- Company description: `src/pages/index.astro` (lines 40-50)
- Vision statement: `src/pages/index.astro` (lines 60-90)
- Mission statement: `src/pages/index.astro` (lines 95-140)

## 📦 Product Management

### Current Products (20 total)
Located in: `src/data/products.ts`

**Categories:**
1. Round Plates (4 products) - 6", 8", 10", 12"
2. Square Plates (4 products) - 6", 8", 10", 12"
3. Bowls (4 products) - 4", 6", 8", Square 6"
4. Trays (4 products) - Various sizes
5. Specialty Items (4 products) - Spoons, Cups, Gift Sets

### To Add More Products
Edit `src/data/products.ts` and add:

```typescript
{
    id: 21,
    name: 'Product Name',
    category: 'Category Name', // Must match existing category or add new
    size: 'Size',
    description: 'Product description',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    image: '/images/products/your-image.jpg'
}
```

### To Add New Category
1. Add category to `productCategories` array in `src/data/products.ts`
2. Add products with that category name

## 🎨 Color Customization

Edit `tailwind.config.mjs` to change colors:

**Current Theme (Eco-Friendly):**
- Forest Green: #2D5016 (Primary)
- Olive Green: #6B8E23 (Secondary)
- Earth Brown: #8B4513 (Accent)
- Sand Beige: #F5F5DC (Background)

## 🌐 Deployment

### Deploy to Netlify (Recommended)
1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Auto-detected settings work out of the box
4. Deploy!

## 📱 Features Overview

### Navigation
- Smooth scroll to sections
- Mobile hamburger menu
- Active link highlighting

### Product Filtering
- Click category buttons to filter
- "All Products" shows everything
- Smooth animations on filter

### Responsive Design
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns

### Animations
- Fade-in on page load
- Slide-up for sections
- Hover effects on cards
- Scale transforms on buttons

## 🔧 Troubleshooting

### Build Errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### Images Not Showing
- Check image path: `/public/images/products/filename.jpg`
- Verify file exists in correct directory
- Check file extension matches (jpg vs jpeg)

## 📚 Documentation Files

- **SAIRAJ_GLOBALEX_README.md** - Complete project documentation
- **IMPLEMENTATION_SUMMARY.md** - What was built and how
- **QUICK_START.md** - This file
- **public/images/products/README.md** - Image requirements

## 🎉 You're All Set!

Your website is **ready to use**! Just run:

```bash
npm run dev
```

And visit **http://localhost:4321** to see your beautiful new website!

## 💡 Tips

1. **Test on Mobile**: Use browser dev tools to test responsive design
2. **Add Real Images**: Replace emoji placeholders with actual product photos
3. **Update Contact**: Add your real phone number and email
4. **Social Media**: Update social media links in footer
5. **SEO**: Add meta descriptions for better search rankings
6. **Analytics**: Consider adding Google Analytics

## 📞 Need Help?

Check the detailed documentation in:
- `SAIRAJ_GLOBALEX_README.md` - Full documentation
- `IMPLEMENTATION_SUMMARY.md` - Technical details

---

**Happy Selling! 🌿✨**

*Built for Sairaj Globalex - Premium Areca Leaf Plates*
