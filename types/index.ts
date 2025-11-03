import { StaticImageData } from 'next/image'

// Product Types
export interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  src: string | StaticImageData
  description?: string
  category: string
  tags: string[]
  inStock: boolean
  rating: number
  reviewCount: number
  features: string[]
  dimensions?: {
    width: number
    height: number
    depth: number
  }
  materials: string[]
}

export interface CartItem extends Product {
  quantity: number
}

export interface CartStore {
  cartItems: CartItem[]
  totalQuantity: number
  totalPrice: number
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  clearCart: () => void
}

// Order Types
export interface Order {
  id: string
  customer: {
    name: string
    email: string
    phone: string
    address: string
    city: string
    district: string
  }
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  paymentMethod: 'cod' | 'bkash' | 'nagad'
  paymentStatus: 'pending' | 'paid' | 'failed'
  createdAt: string
  updatedAt: string
  notes?: string
}

// Admin Types
export interface AdminUser {
  id: string
  username: string
  password: string
  name: string
  role: 'admin' | 'manager'
}

// Navigation Types
export interface NavItem {
  name: string
  path: string
  submenu?: SubMenuItem[]
}

export interface SubMenuItem {
  name: string
  path: string
  description?: string
}

// Form Types
export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface NewsletterFormData {
  email: string
}

// Analytics Types
export interface AnalyticsData {
  totalSales: number
  totalOrders: number
  pendingOrders: number
  deliveredOrders: number
  monthlySales: Array<{
    month: string
    sales: number
  }>
  popularProducts: Array<{
    name: string
    sales: number
  }>
  customerStats: {
    totalCustomers: number
    newCustomers: number
    returningCustomers: number
  }
  revenueByCategory: Array<{
    category: string
    revenue: number
  }>
}