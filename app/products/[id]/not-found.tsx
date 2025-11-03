import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text mb-4">Product Not Found</h2>
        <p className="text-text-light mb-8 max-w-md">
          Sorry, we couldn&apos;t find the product you&apos;re looking for. It might have been moved or no longer available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/products" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Browse Products
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}