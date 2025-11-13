# 🛍️ Modern Shop - Modern E-Commerce Platform

A sleek, modern e-commerce web application built with React js **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Features a beautiful UI with real-time search, shopping cart management

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Vibrant gradient design** with purple, pink, and cyan color schemes
- **Glass morphism effects** and smooth animations
- **Responsive layout** - Works seamlessly on desktop, tablet, and mobile
- **Hover effects** on product cards with zoom animations

### 🛒 **Shopping Cart**
- Add products to cart with one click
- **Quantity management** - Increase/decrease product quantities
- **Remove items** from cart individually
- **Real-time total calculation** in Indian Rupees (₹)
- **Automatic cart clearing** after checkout
- Persistent cart state during session

### 🔍 **Product Discovery**
- **Real-time search** - Search by product name or description
- **Category filtering** - Electronics 📱, Books 📚, Clothing 👕
- **Sort functionality** - By name, price (low to high), or rating
-



## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router), React Js
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/UI
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image component
- **Package Manager:** Bun

## 📦 Installation

### Prerequisites
- Node.js 18+ or Bun
- Git

### Clone the Repository
```bash
git clone https://github.com/yourusername/shopvista.git
cd shopvista
```

### Install Dependencies
```bash
# Using npm
npm install

# Using bun (recommended)
bun install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### Run Development Server
```bash
# Using npm
npm run dev

# Using bun
bun dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
shopvista/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main homepage
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── ProductList.tsx       # Product grid with filters
│   │   ├── ShoppingCart.tsx      # Shopping cart component
│   │   └── ui/                   # Shadcn UI components
│   ├── types/
│   │   └── product.ts            # TypeScript interfaces
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── package.json
└── README.md
```

## 🎯 Key Features Breakdown

### 1. Product Management
- 6 sample products across 3 categories
- Product properties: name, price, category, description, rating, image
- Easy to add more products by extending the `initialProducts` array

### 2. Search & Filter
- **Search Bar:** Type to filter products by name or description
- **Category Filter:** Quick category selection (All, Electronics, Books, Clothing)
- **Sort Options:** 
  - By Name (A-Z)
  - Price: Low to High
  - Price: High to Low
  - Rating: High to Low

### 3. Shopping Cart Features
- **Add to Cart:** Click any product to add to cart
- **Quantity Controls:** + and - buttons to adjust quantities
- **Remove Items:** Red trash icon to delete items
- **Total Calculation:** Automatic sum of all items
- **Checkout:** Working checkout button with success notification

### 4. Dark Mode
- Toggle between light and dark themes
- Smooth color transitions
- Persists during session
- Moon/Sun icon indicator

## 🖥️ Usage

### Adding Products to Cart
1. Browse products or use search to find items
2. Click the **"Add to Cart"** button on any product
3. Product appears in the cart sidebar with quantity 1

### Managing Cart Items
- **Increase Quantity:** Click the **+** button
- **Decrease Quantity:** Click the **-** button
- **Remove Item:** Click the **trash icon** 🗑️

### Checkout Process
1. Review items in your cart
2. Check the total amount in ₹ INR
3. Click **"Proceed to Checkout"**
4. Success notification appears
5. Cart automatically clears

### Filtering Products
- Use the **search bar** to find specific products
- Click **category buttons** to filter by type
- Use **sort dropdown** to arrange products

## 🌟 Highlights

What makes this project stand out:

✅ **Production-ready code** with TypeScript for type safety  
✅ **Modern design patterns** with React hooks and functional components  
✅ **Responsive design** that works on all devices  
✅ **Clean code architecture** with separated concerns  
✅ **Performance optimized** with Next.js Image component  
✅ **User-friendly** with intuitive UI/UX  
✅ **Accessible** with proper semantic HTML  
✅ **Maintainable** with clear component structure  

## 🔧 Configuration

### Adding New Products
Edit `src/types/product.ts` and add to the `initialProducts` array:

```typescript
{
  id: 7,
  name: "Your Product Name",
  price: 9999,
  category: "Electronics",
  description: "Product description here",
  rating: 4.5,
  image: "/path/to/image.jpg"
}
```

### Customizing Colors
Edit `src/app/globals.css` to modify the color scheme:

```css
:root {
  --primary: oklch(0.55 0.25 264);    /* Purple */
  --secondary: oklch(0.65 0.2 310);   /* Pink */
  --accent: oklch(0.7 0.22 200);      /* Cyan */
}
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🚀 Deployment

### Deploy on Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production
```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


