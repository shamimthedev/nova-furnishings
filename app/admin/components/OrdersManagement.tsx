'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminStore } from '@/lib/store/admin-store'
import AdminLayout from './AdminLayout'
import { Button } from '@/components/ui/button'
import { Search, Filter, Eye, Calendar } from 'lucide-react'
import Link from 'next/link'

const statusFilters = ['all', 'pending', 'confirmed', 'shipped', 'delivered', 'cancelled']

export default function OrdersManagement() {
  const router = useRouter()
  const isLoggedIn = useAdminStore((state) => state.isLoggedIn)
  const { orders, updateOrderStatus } = useAdminStore()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('')

  if (!isLoggedIn) {
    router.push('/admin')
    return null
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    const matchesDate = !dateFilter || order.createdAt.startsWith(dateFilter)
    
    return matchesSearch && matchesStatus && matchesDate
  })

  const handleStatusUpdate = (orderId: string, newStatus: string) => {
    updateOrderStatus(orderId, newStatus as any)
  }

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

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'failed': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-BD', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-primary">Orders</h1>
          <p className="text-text-light">Manage customer orders and fulfillment</p>
        </div>

        {/* Filters */}
        <div className="card p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-light" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              {statusFilters.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>

            {/* Date Filter */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-light" />
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-end text-sm text-text-light">
              {filteredOrders.length} orders found
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="card p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-text">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-text">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-text">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-text">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-text">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-text">Payment</th>
                  <th className="text-left py-3 px-4 font-medium text-text">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-b-0 hover:bg-background-card">
                    <td className="py-4 px-4">
                      <div className="font-medium text-primary">{order.id}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-primary">{order.customer.name}</div>
                        <div className="text-sm text-text-light">{order.customer.email}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-text-light">
                        {formatDate(order.createdAt)}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-primary">
                        ${order.total.toFixed(2)}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                        className={`px-2 py-1 rounded text-xs font-medium border-0 focus:ring-2 focus:ring-secondary ${
                          getStatusColor(order.status)
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        getPaymentStatusColor(order.paymentStatus)
                      }`}>
                        {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                      </span>
                      <div className="text-xs text-text-light mt-1 capitalize">
                        {order.paymentMethod}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                        >
                          <Link href={`/admin/orders/${order.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredOrders.length === 0 && (
              <div className="text-center py-12 text-text-light">
                <p>No orders found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('')
                    setStatusFilter('all')
                    setDateFilter('')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}