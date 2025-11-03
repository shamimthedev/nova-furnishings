'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AdminUser, Order } from '@/types'

interface AdminStore {
  isLoggedIn: boolean
  currentUser: AdminUser | null
  login: (username: string, password: string) => boolean
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

      login: (username: string, password: string) => {
        // Import here to avoid circular dependencies
        const { verifyAdminLogin } = require('@/lib/mock-data')
        const user = verifyAdminLogin(username, password)
        
        if (user) {
          set({ 
            isLoggedIn: true, 
            currentUser: user,
            orders: require('@/lib/mock-data').orders
          })
          return true
        }
        return false
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