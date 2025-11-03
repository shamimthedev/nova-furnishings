'use client'

import { useAdminStore } from '@/lib/store/admin-store'
import { analytics } from '@/lib/mock-data'
import { Package, ShoppingCart, Truck, CheckCircle } from 'lucide-react'

const stats = [
  {
    name: 'Total Sales',
    value: `$${analytics.totalSales.toFixed(2)}`,
    icon: ShoppingCart,
    change: '+12%',
    changeType: 'positive' as const
  },
  {
    name: 'Total Orders',
    value: analytics.totalOrders.toString(),
    icon: Package,
    change: '+8%',
    changeType: 'positive' as const
  },
  {
    name: 'Pending Orders',
    value: analytics.pendingOrders.toString(),
    icon: Truck,
    change: '+3%',
    changeType: 'negative' as const
  },
  {
    name: 'Delivered Orders',
    value: analytics.deliveredOrders.toString(),
    icon: CheckCircle,
    change: '+15%',
    changeType: 'positive' as const
  }
]

export default function DashboardStats() {
  const { orders } = useAdminStore()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-text-light">{stat.name}</p>
              <p className="text-2xl font-bold text-primary mt-1">{stat.value}</p>
              <p className={`text-sm mt-1 ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from last month
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <stat.icon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}