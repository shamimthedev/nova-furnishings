'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/store/cart-store'
import { Product } from '@/types'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking cart button
    e.stopPropagation()
    addToCart(product)
  }

  const isListView = className?.includes('flex-row')

  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className={cn('group card overflow-hidden hover:shadow-lg transition-all duration-300', className)}>
        {/* Product Image */}
        <div className={cn(
          'relative overflow-hidden',
          isListView ? 'w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 flex-shrink-0' : 'aspect-square'
        )}>
          <Image
            src={product.src}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-accent text-white px-2 py-1 rounded text-xs font-medium">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className={cn('p-3 sm:p-4', isListView && 'flex-1 flex flex-col justify-between')}>
          <div>
            {/* Product Title */}
            <h3 className="font-semibold text-sm sm:text-base text-text mb-1 line-clamp-1 group-hover:text-secondary transition-colors">
              {product.title}
            </h3>
            
            {/* Product Description */}
            <p className="text-xs sm:text-sm text-text-light mb-2 sm:mb-3 line-clamp-2">
              {product.description}
            </p>
            
            {/* Price and Rating */}
            <div className="flex items-center justify-between mb-3 gap-2">
              {/* Price */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="text-base sm:text-lg font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs sm:text-sm text-text-light line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="flex text-accent text-xs sm:text-sm">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-xs text-text-light">({product.reviewCount})</span>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full bg-secondary hover:bg-secondary-light text-xs sm:text-sm"
            size="sm"
          >
            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  )
}