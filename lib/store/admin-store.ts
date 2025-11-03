'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AdminUser, Order } from '@/types'

interface AdminStore {
  isLoggedIn: boolean
  currentUser: AdminUser | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  orders: Order[]
  updateOrderStatus: (orderId: string, status: Order['status']) => void
}

export const useAdminStore = create<AdminStore>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      currentUser: null,
      orders: [], // Will be populated from mock data

      login: async (username: string, password: string) => {
        try {
          // Dynamic import to avoid circular dependencies
          const { verifyAdminLogin, orders } = await import('@/lib/mock-data')
          const user = verifyAdminLogin(username, password)
          
          if (user) {
            set({ 
              isLoggedIn: true, 
              currentUser: user,
              orders: orders
            })
            return true
          }
          return false
        } catch (error) {
          console.error('Login failed:', error)
          return false
        }
      },

      logout: () => {
        set({ 
          isLoggedIn: false, 
          currentUser: null,
          orders: []
        })
      },

      updateOrderStatus: (orderId: string, status: Order['status']) => {
        const { orders } = get()
        const updatedOrders = orders.map(order => 
          order.id === orderId 
            ? { 
                ...order, 
                status, 
                updatedAt: new Date().toISOString() 
              }
            : order
        )
        set({ orders: updatedOrders })
      }
    }),
    {
      name: 'admin-storage',
      version: 1,
    }
  )
)