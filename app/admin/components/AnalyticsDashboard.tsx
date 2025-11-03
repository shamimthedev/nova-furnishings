'use client'

import { useRouter } from 'next/navigation'
import { useAdminStore } from '@/lib/store/admin-store'
import AdminLayout from './AdminLayout'
import { Button } from '@/components/ui/button'
import { Download, Calendar, TrendingUp, Users, Package, DollarSign } from 'lucide-react'
import { analytics } from '@/lib/mock-data'

export default function AnalyticsDashboard() {
  const router = useRouter()
  const isLoggedIn = useAdminStore((state) => state.isLoggedIn)

  if (!isLoggedIn) {
    router.push('/admin')
    return null
  }

  // Calculate additional stats
  const averageOrderValue = analytics.totalSales / analytics.totalOrders
  const conversionRate = ((analytics.deliveredOrders / analytics.totalOrders) * 100).toFixed(1)

  const stats = [
    {
      name: 'Total Revenue',
      value: `$${analytics.totalSales.toLocaleString()}`,
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: DollarSign
    },
    {
      name: 'Total Orders',
      value: analytics.totalOrders.toString(),
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: Package
    },
    {
      name: 'Average Order Value',
      value: `$${averageOrderValue.toFixed(2)}`,
      change: '+4.3%',
      changeType: 'positive' as const,
      icon: TrendingUp
    },
    {
      name: 'Conversion Rate',
      value: `${conversionRate}%`,
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Users
    }
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary">Analytics</h1>
            <p className="text-text-light">Store performance and insights</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
            <div className="space-y-4">
              {analytics.monthlySales.map((month) => (
                <div key={month.month} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text">{month.month}</span>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-background-card rounded-full h-2">
                      <div 
                        className="bg-secondary h-2 rounded-full" 
                        style={{ 
                          width: `${(month.sales / 30000) * 100}%` 
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-primary w-16 text-right">
                      ${month.sales.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Products */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Popular Products</h2>
            <div className="space-y-4">
              {analytics.popularProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-background-card rounded-lg flex items-center justify-center text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-text">{product.name}</span>
                  </div>
                  <span className="text-sm text-text-light">{product.sales} sold</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue by Category */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Revenue by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analytics.revenueByCategory?.map((category) => (
              <div key={category.category} className="text-center p-4 border border-border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">
                  ${category.revenue.toLocaleString()}
                </div>
                <div className="text-sm text-text-light capitalize">
                  {category.category}
                </div>
              </div>
            )) || (
              // Fallback if revenueByCategory doesn't exist in mock data
              <>
                <div className="text-center p-4 border border-border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">$12,450</div>
                  <div className="text-sm text-text-light">Chairs</div>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">$8,920</div>
                  <div className="text-sm text-text-light">Sofas</div>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">$6,780</div>
                  <div className="text-sm text-text-light">Tables</div>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">$4,230</div>
                  <div className="text-sm text-text-light">Beds</div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Customer Stats */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-border rounded-lg">
              <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">
                {analytics.customerStats?.totalCustomers || 156}
              </div>
              <div className="text-sm text-text-light">Total Customers</div>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">
                {analytics.customerStats?.newCustomers || 24}
              </div>
              <div className="text-sm text-text-light">New This Month</div>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <Package className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">
                {analytics.customerStats?.returningCustomers || 89}
              </div>
              <div className="text-sm text-text-light">Returning Customers</div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}