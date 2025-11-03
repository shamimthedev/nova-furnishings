import ProductCard from '@/components/product/ProductCard'
import { bestSellers } from '@/lib/mock-data'

export default function BestSeller() {
  return (
    <section className="container-custom py-12 md:py-16 lg:py-24 border-b border-border">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-10 md:mb-12 px-4">
        Shop Best Sellers
      </h2>
      
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {bestSellers.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}