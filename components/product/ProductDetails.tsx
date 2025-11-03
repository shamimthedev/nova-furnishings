'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Truck, Shield, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/product/ProductCard'
import { useCartStore } from '@/lib/store/cart-store'
import { getRelatedProducts } from '@/lib/mock-data'
import { Product } from '@/types'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const addToCart = useCartStore((state) => state.addToCart)
  const relatedProducts = getRelatedProducts(product)

  const images = [product.src, product.src, product.src] // Using same image for demo

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const handleQuantityChange = (value: number) => {
    if (value < 1) return
    setQuantity(value)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container-custom py-3 md:py-4 px-4">
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-text-light overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="text-primary capitalize">{product.category}</span>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="text-primary truncate max-w-[150px] sm:max-w-none">{product.title}</span>
        </nav>
      </div>

      <div className="container-custom py-6 md:py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-3 md:space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-xl md:rounded-2xl overflow-hidden border border-border">
              <Image
                src={images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImage === index 
                      ? 'border-accent' 
                      : 'border-border hover:border-accent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-5 md:space-y-6">
            <div>
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 leading-tight">
                {product.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="flex text-accent text-sm sm:text-base">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-xs sm:text-sm text-text-light">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 md:mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg sm:text-xl text-text-light line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="bg-accent text-white px-2 py-1 rounded text-xs sm:text-sm font-medium">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-text-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-text-light">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-3">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <span
                    key={index}
                    className="px-2.5 sm:px-3 py-1 bg-background-card text-text text-xs sm:text-sm rounded-full border border-border"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            {product.dimensions && (
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-3">Dimensions</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
                  <div className="text-center p-2 sm:p-3 bg-background-card rounded-lg">
                    <div className="font-semibold text-primary mb-1">Width</div>
                    <div className="text-text-light">{product.dimensions.width}cm</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-background-card rounded-lg">
                    <div className="font-semibold text-primary mb-1">Height</div>
                    <div className="text-text-light">{product.dimensions.height}cm</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-background-card rounded-lg">
                    <div className="font-semibold text-primary mb-1">Depth</div>
                    <div className="text-text-light">{product.dimensions.depth}cm</div>
                  </div>
                </div>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className="space-y-4 pt-5 md:pt-6 border-t border-border">
              {/* Quantity Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="font-medium text-sm sm:text-base">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg w-fit">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 sm:px-4 py-2 hover:bg-background-card transition-colors text-lg rounded-lg"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-3 sm:px-4 py-2 min-w-10 sm:min-w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 sm:px-4 py-2 hover:bg-background-card transition-colors text-lg rounded-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 bg-secondary hover:bg-secondary-light"
                >
                  Add to Cart ({quantity})
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-5 md:pt-6 border-t border-border">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">Free Shipping</div>
                  <div className="text-text-light">Dhaka & Chittagong</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">2-Year Warranty</div>
                  <div className="text-text-light">Quality Guaranteed</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">14-Day Returns</div>
                  <div className="text-text-light">Easy Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}