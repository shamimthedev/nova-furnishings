'use client'

import { useParams, useRouter } from 'next/navigation'
import { useAdminStore } from '@/lib/store/admin-store'
import AdminLayout from './AdminLayout'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Printer, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function OrderDetails() {
  const params = useParams()
  const router = useRouter()
  const isLoggedIn = useAdminStore((state) => state.isLoggedIn)
  const { orders, updateOrderStatus } = useAdminStore()
  
  const orderId = params.id as string
  const order = orders.find(o => o.id === orderId)

  if (!isLoggedIn) {
    router.push('/admin')
    return null
  }

  if (!order) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-primary mb-4">Order Not Found</h1>
          <p className="text-text-light mb-6">The order you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/admin/orders">Back to Orders</Link>
          </Button>
        </div>
      </AdminLayout>
    )
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleStatusUpdate = (newStatus: string) => {
    updateOrderStatus(order.id, newStatus as any)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/orders">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Orders
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-primary">Order {order.id}</h1>
              <p className="text-text-light">Placed on {formatDate(order.createdAt)}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Order Items</h2>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-primary">{item.title}</h3>
                      <p className="text-sm text-text-light">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-primary">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="text-sm text-text-light">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="border-t border-border mt-4 pt-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-primary mb-2">Contact</h3>
                  <p className="text-text">{order.customer.name}</p>
                  <p className="text-text-light">{order.customer.email}</p>
                  <p className="text-text-light">{order.customer.phone}</p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Shipping Address</h3>
                  <p className="text-text">{order.customer.address}</p>
                  <p className="text-text-light">{order.customer.city}, {order.customer.district}</p>
                </div>
              </div>
            </div>

            {/* Order Notes */}
            {order.notes && (
              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-4">Order Notes</h2>
                <p className="text-text">{order.notes}</p>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Order Status */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Order Status</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Current Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text">
                    Update Status:
                  </label>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusUpdate(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-light">Method:</span>
                  <span className="font-medium capitalize">{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Status:</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    order.paymentStatus === 'paid' 
                      ? 'bg-green-100 text-green-800'
                      : order.paymentStatus === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Amount:</span>
                  <span className="font-medium">${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Order Timeline</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">Order Placed:</span>
                  <span>{formatDate(order.createdAt)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-light">Last Updated:</span>
                  <span>{formatDate(order.updatedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}