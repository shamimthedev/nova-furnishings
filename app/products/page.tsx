import ProductListing from '@/components/ProductListing'
import { Suspense } from 'react'

export const metadata = {
  title: 'All Products | Nova Furnishings',
  description: 'Browse our complete collection of modern furniture and home decor',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductListing />
      </Suspense>
    </div>
  )
}