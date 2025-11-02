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