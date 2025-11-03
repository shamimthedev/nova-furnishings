'use client'

import Link from 'next/link'
import { useAdminStore } from '@/lib/store/admin-store'
import { Button } from '@/components/ui/button'
import { Eye, Calendar } from 'lucide-react'

export default function RecentOrders() {
  const { orders } = useAdminStore()
  const recentOrders = orders.slice(0, 5)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'confirmed': return 'bg-blue-100 text-blue-800'
      case 'shipped': return 'bg-purple-100 text-purple-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-primary">Recent Orders</h2>
        <Button asChild variant="outline">
          <Link href="/admin/orders">View All</Link>
        </Button>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-background-card rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-text-light" />
              </div>
              <div>
                <p className="font-medium text-primary">Order {order.id}</p>
                <p className="text-sm text-text-light">{order.customer.name}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold text-primary">${order.total.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/orders/${order.id}`}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {recentOrders.length === 0 && (
        <div className="text-center py-8 text-text-light">
          No recent orders found.
        </div>
      )}
    </div>
  )
}