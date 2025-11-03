'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminStore } from '@/lib/store/admin-store'
import AdminLayout from './AdminLayout'
import { Button } from '@/components/ui/button'
import { Search, Mail, Phone, MapPin, Calendar } from 'lucide-react'

export default function CustomersManagement() {
  const router = useRouter()
  const isLoggedIn = useAdminStore((state) => state.isLoggedIn)
  const { orders } = useAdminStore()

  if (!isLoggedIn) {
    router.push('/admin')
    return null
  }

  // Extract unique customers from orders
  const customers = Array.from(new Map(
    orders.map(order => [order.customer.email, {
      ...order.customer,
      orderCount: orders.filter(o => o.customer.email === order.customer.email).length,
      totalSpent: orders
        .filter(o => o.customer.email === order.customer.email)
        .reduce((sum, o) => sum + o.total, 0),
      lastOrder: orders
        .filter(o => o.customer.email === order.customer.email)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0]?.createdAt
    }])
  ).values())

  const [searchTerm, setSearchTerm] = useState('')

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  )

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
          <h1 className="text-3xl font-bold text-primary">Customers</h1>
          <p className="text-text-light">Manage your customer database</p>
        </div>

        {/* Search */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-light" />
              <input
                type="text"
                placeholder="Search customers by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="flex items-center justify-end text-sm text-text-light">
              {filteredCustomers.length} customers found
            </div>
          </div>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map((customer) => (
            <div key={customer.email} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-primary">{customer.name}</h3>
                  <p className="text-text-light text-sm">{customer.email}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">${customer.totalSpent.toFixed(2)}</div>
                  <div className="text-xs text-text-light">{customer.orderCount} orders</div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-text-light">
                  <Phone className="h-4 w-4" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-text-light">
                  <MapPin className="h-4 w-4" />
                  <span>{customer.city}, {customer.district}</span>
                </div>
                {customer.lastOrder && (
                  <div className="flex items-center gap-2 text-text-light">
                    <Calendar className="h-4 w-4" />
                    <span>Last order: {formatDate(customer.lastOrder)}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  View Orders
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12 text-text-light">
            <p>No customers found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}