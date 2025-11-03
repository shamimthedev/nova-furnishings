import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartStore, Product } from '@/types'

// Define the current version of the store structure
const CURRENT_VERSION = 1

// Define the persisted state type
interface PersistedCartState {
  cartItems: Array<Product & { quantity: number }>
  totalQuantity: number
  totalPrice: number
}

// Migration function to handle future store structure changes
const migrations = {
  0: (state: Partial<PersistedCartState>): PersistedCartState => {
    // Migration from version 0 to 1
    return {
      // Ensure all required fields exist with defaults
      cartItems: state.cartItems || [],
      totalQuantity: state.totalQuantity || 0,
      totalPrice: state.totalPrice || 0,
    }
  }
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      totalQuantity: 0,
      totalPrice: 0,

      addToCart: (product: Product) => {
        const { cartItems } = get()
        const existingItem = cartItems.find(item => item.id === product.id)

        if (existingItem) {
          set({
            cartItems: cartItems.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            totalQuantity: get().totalQuantity + 1,
            totalPrice: get().totalPrice + product.price,
          })
        } else {
          set({
            cartItems: [...cartItems, { ...product, quantity: 1 }],
            totalQuantity: get().totalQuantity + 1,
            totalPrice: get().totalPrice + product.price,
          })
        }

        // Trigger toast notification and cart animation
        if (typeof window !== 'undefined') {
          // Dispatch custom event with product data
          const event = new CustomEvent('cartItemAdded', { 
            detail: {
              productName: product.title,
              productImage: product.src,
              productPrice: product.price,
            }
          })
          window.dispatchEvent(event)
        }
      },

      removeFromCart: (id: string) => {
        const { cartItems } = get()
        const existingItem = cartItems.find(item => item.id === id)

        if (existingItem) {
          set({
            cartItems: cartItems.filter(item => item.id !== id),
            totalQuantity: get().totalQuantity - existingItem.quantity,
            totalPrice: get().totalPrice - existingItem.price * existingItem.quantity,
          })
        }
      },

      increaseQuantity: (id: string) => {
        const { cartItems } = get()
        const existingItem = cartItems.find(item => item.id === id)

        if (existingItem) {
          set({
            cartItems: cartItems.map(item =>
              item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            totalQuantity: get().totalQuantity + 1,
            totalPrice: get().totalPrice + existingItem.price,
          })
        }
      },

      decreaseQuantity: (id: string) => {
        const { cartItems } = get()
        const existingItem = cartItems.find(item => item.id === id)

        if (existingItem) {
          if (existingItem.quantity > 1) {
            set({
              cartItems: cartItems.map(item =>
                item.id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
              totalQuantity: get().totalQuantity - 1,
              totalPrice: get().totalPrice - existingItem.price,
            })
          } else {
            get().removeFromCart(id)
          }
        }
      },

      clearCart: () => {
        set({
          cartItems: [],
          totalQuantity: 0,
          totalPrice: 0,
        })
      },
    }),
    {
      name: 'cart-storage',
      version: CURRENT_VERSION,
      migrate: (persistedState: unknown, version: number) => {
        try {
          // If no version, assume it's version 0
          let currentVersion = version === undefined ? 0 : version
          
          let state = persistedState as Partial<PersistedCartState>
          
          // Apply migrations in order
          for (let i = currentVersion; i < CURRENT_VERSION; i++) {
            const migration = migrations[i as keyof typeof migrations]
            if (migration) {
              state = migration(state)
            }
          }
          
          return state
        } catch (error) {
          console.error('Migration failed, clearing storage:', error)
          // If migration fails, return initial state
          return {
            cartItems: [],
            totalQuantity: 0,
            totalPrice: 0,
          }
        }
      },
      // Add partialize to only persist specific state if needed
      partialize: (state) => ({
        cartItems: state.cartItems,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice,
      }),
    }
  )
)