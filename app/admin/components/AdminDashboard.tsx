'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminStore } from '@/lib/store/admin-store'
import AdminLayout from './AdminLayout'
import DashboardStats from './DashboardStats'
import RecentOrders from './RecentOrders'

export default function AdminDashboard() {
  const router = useRouter()
  const isLoggedIn = useAdminStore((state) => state.isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/admin')
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
          <p className="text-text-light">Welcome to your admin dashboard</p>
        </div>

        <DashboardStats />
        <RecentOrders />
      </div>
    </AdminLayout>
  )
}