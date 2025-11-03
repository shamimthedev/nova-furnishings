# 🛋️ Nova Furnishings - Modern Furniture E-commerce

> 💼 A project by [BebsharDost](https://bebshardost.com) - Your Digital Dost

A beautiful, modern furniture e-commerce store built with Next.js 15, TypeScript, and Tailwind CSS. Features a complete admin dashboard for comprehensive store management.

![Nova Furnishings](https://via.placeholder.com/1200x600/8A9B69/FFFFFF?text=Nova+Furnishings)

## 🚀 Live Demo

**Store Frontend:** [your-domain.com](https://your-domain.com)  
**Admin Dashboard:** [your-domain.com/admin](https://your-domain.com/admin)

### Demo Credentials

```
Username: admin
Password: admin123

Username: manager
Password: manager123
```

## ✨ Features

### 🛍️ Customer Features

- **Modern Product Catalog** - Browse furniture by categories with beautiful layouts
- **Advanced Product Search** - Filter by price, category, ratings, and stock status
- **Product Details** - Comprehensive product information with image galleries
- **Shopping Cart** - Real-time cart management with quantity controls
- **Persistent Cart** - Cart data saved across sessions using Zustand persist
- **Bangladeshi Payment Options** - COD, bKash, Nagad integration
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Fast Performance** - Next.js 15 with App Router for optimal loading

### 👨‍💼 Admin Features

- **Dashboard Analytics** - Real-time sales metrics and business insights
- **Product Management** - Full CRUD operations for product catalog
- **Order Management** - Process, track, and update order statuses
- **Customer Management** - View customer data and complete order history
- **Inventory Management** - Stock tracking with status indicators
- **Sales Reports** - Revenue analytics and popular product tracking
- **Secure Authentication** - Protected admin routes with session persistence

### 🛠️ Technical Features

- **Next.js 15** - Latest App Router with React 19
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Modern utility-first styling with custom design system
- **Zustand** - Lightweight state management with persistence
- **Lucide React** - Beautiful, consistent icon system
- **ESLint & TypeScript** - Strict code quality and type checking
- **Mock Data** - Comprehensive demo data, ready for backend integration

## 🏗️ Project Structure

```
nova-furnishings/
├── app/                    # Next.js 15 App Router
│   ├── admin/             # Admin dashboard pages
│   │   ├── components/    # Admin-specific components
│   │   ├── dashboard/     # Analytics dashboard
│   │   ├── orders/        # Order management
│   │   ├── products/      # Product management
│   │   └── customers/     # Customer management
│   ├── cart/              # Shopping cart pages
│   ├── checkout/          # Checkout flow
│   ├── products/          # Product listing & details
│   └── layout.tsx         # Root layout with metadata
├── components/            # Reusable components
│   ├── ui/                # Base UI components (Button, Card, etc.)
│   ├── ProductCard.tsx    # Product display component
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── lib/                   # Utilities and configurations
│   ├── store/             # Zustand state stores
│   │   ├── cart-store.ts  # Shopping cart state
│   │   └── admin-store.ts # Admin authentication
│   ├── mock-data.ts       # Product and order data
│   └── utils.ts           # Helper functions
├── types/                 # TypeScript type definitions
│   └── index.ts           # Centralized type exports
├── public/                # Static assets
│   └── images/            # Product images
└── assets/               # Additional static resources
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/nova-furnishings.git
   cd nova-furnishings
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables (optional)**

   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local`:

   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_USE_MOCK_DATA=true
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Customer Facing

- **Homepage** (`/`) - Featured products, hero section, and collections
- **Product Listing** (`/products`) - Filterable product grid with sorting
- **Product Details** (`/products/[id]`) - Individual product pages with reviews
- **Shopping Cart** (`/cart`) - Cart management with real-time totals
- **Checkout** (`/checkout`) - Multi-step order completion with payment options

### Admin Dashboard

- **Admin Login** (`/admin`) - Secure admin authentication
- **Dashboard** (`/admin/dashboard`) - Business overview with charts
- **Products** (`/admin/products`) - Product catalog management
- **Orders** (`/admin/orders`) - Order processing and tracking
- **Order Details** (`/admin/orders/[id]`) - Detailed order view
- **Customers** (`/admin/customers`) - Customer database and analytics

## 🎨 Design System

### Color Palette

```css
Primary: #2A2A2A (Deep Charcoal)
Secondary: #8A9B69 (Sage Green)
Accent: #C46D5E (Terracotta)
Background: #F8F5F2 (Cream)
Border: #D3CEC4 (Taupe)
Text: #2A2A2A (Primary Text)
Text Light: #6B6B6B (Secondary Text)
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Component Variants

**Buttons**
- Primary - Main call-to-action
- Secondary - Alternative actions
- Outline - Secondary actions with border
- Ghost - Minimal style for subtle actions

**Cards**
- Consistent shadow system
- 8px border radius
- Hover states with smooth transitions

**Forms**
- Accessible input fields with clear labels
- Focus states with secondary color ring
- Validation feedback

## 💳 Payment Integration

### Supported Payment Methods (Bangladesh)

1. **Cash on Delivery (COD)**
   - Pay when the product is delivered
   - No advance payment required
   - Available across Bangladesh

2. **bKash**
   - Mobile financial service
   - Send payment to merchant number
   - Transaction ID required

3. **Nagad**
   - Digital payment platform
   - Instant payment confirmation
   - Secure transactions

### Payment Flow

1. Customer selects payment method at checkout
2. Payment instructions displayed based on selection
3. Order placed with pending payment status
4. Admin can update payment status in dashboard
5. Order confirmation sent to customer

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
npm run type-check   # TypeScript type checking
```

### State Management with Zustand

**Cart Store** (`useCartStore`)
- Add/remove items from cart
- Update item quantities
- Calculate totals automatically
- Persist cart data across sessions
- Custom cart events for UI feedback

**Admin Store** (`useAdminStore`)
- Admin authentication
- Order management
- Session persistence
- User role management

### Data Structure

Currently uses **mock data** for demonstration. The data structure is production-ready and can easily integrate with:

- **Products**: Complete product catalog with images, pricing, inventory
- **Orders**: Customer orders with full tracking information
- **Customers**: User profiles extracted from order data
- **Analytics**: Sales metrics and business insights

## 📈 Admin Dashboard Features

### Product Management

- View all products in a searchable table
- Add new products with complete details
- Edit existing product information
- Manage stock levels and availability
- Upload and manage product images
- Set pricing and discounts

### Order Management

- **Order Workflow**: Pending → Confirmed → Shipped → Delivered
- Real-time status updates
- Filter orders by status and date
- Search by order ID, customer name, or email
- View detailed order information
- Update payment status
- Customer communication tools

### Customer Analytics

- Total customer count
- Customer lifetime value
- Order frequency tracking
- Top customers by spending
- Geographic distribution

### Sales Analytics

- Revenue tracking over time
- Sales by category
- Popular products analysis
- Monthly and yearly comparisons
- Payment method breakdown

## 🔒 Security & Best Practices

### Current Implementation (Demo)

- Username/password authentication for admin
- State persistence in browser localStorage
- Type-safe code with TypeScript
- Input validation on forms
- Protected admin routes

### Production Recommendations

**Authentication**
- Implement NextAuth.js or Auth.js
- Use secure session management
- Add password hashing (bcrypt)
- Implement rate limiting

**Database**
- PostgreSQL or MongoDB integration
- Prisma ORM for type-safe queries
- Database migrations
- Backup strategies

**Payment Security**
- Official payment gateway integration
- SSL/TLS encryption
- PCI compliance for card payments
- Webhook verification

**General Security**
- Environment variable protection
- CORS configuration
- Input sanitization
- XSS prevention
- CSRF tokens

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables
4. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Alternative Platforms

**Netlify**
```bash
npm run build
netlify deploy --prod
```

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Production

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Nova Furnishings

# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-domain.com

# Payment Gateways (when integrated)
BKASH_API_KEY=your-bkash-key
NAGAD_API_KEY=your-nagad-key

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use ESLint configuration provided
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Contact

Need help or have questions?

- 📧 **Email**: support@novafurnishings.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/nova-furnishings/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/nova-furnishings/discussions)
- 🌐 **Website**: [BebsharDost](https://bebshardost.com)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For the deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For beautiful open-source icons
- **Zustand** - For simple and scalable state management
- Modern furniture brands for design inspiration

## 📊 Project Stats

- **Next.js**: 15.0+
- **React**: 19.0+
- **TypeScript**: 5.0+
- **Tailwind CSS**: 3.4+
- **Lines of Code**: 5000+
- **Components**: 25+
- **Pages**: 15+

---

## 💫 Crafted By

**Bebshar Dost** - Your Digital Dost (Friend)

🌐 [bebshardost.com](https://bebshardost.com)  
📧 bebshardost@gmail.com

*Building digital experiences that make a difference. Specializing in modern web applications, e-commerce solutions, and digital marketing.*

### About the Agency

Bebshar Dost is a digital agency focused on creating innovative web solutions for businesses. We combine cutting-edge technology with thoughtful design to deliver exceptional digital experiences.

**Services:**
- Custom Web Development
- E-commerce Solutions
- Digital Marketing
- UI/UX Design
- Full-Stack Applications

---

**Built with ❤️ for the modern furniture e-commerce experience**

*Transform your furniture business with Nova Furnishings*