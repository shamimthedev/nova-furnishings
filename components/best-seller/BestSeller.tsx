import ProductCard from '@/components/product/ProductCard'
import Product1 from '@/public/assets/images/product-1.png'
import Product2 from '@/public/assets/images/product-2.png'
import Product3 from '@/public/assets/images/product-3.png'
import Product4 from '@/public/assets/images/product-4.png'
import Product5 from '@/public/assets/images/product-5.png'
import Product6 from '@/public/assets/images/product-6.png'
import Product7 from '@/public/assets/images/product-7.png'
import Product8 from '@/public/assets/images/product-8.png'

const products = [
  {
    id: '1',
    src: Product1,
    title: 'Modern Chair',
    price: 49.99,
    originalPrice: 69.99,
    category: 'Chairs',
    tags: ['modern', 'living room'],
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    features: ['Ergonomic design', 'Easy assembly'],
    materials: ['Wood', 'Fabric']
  },
  {
    id: '2',
    src: Product2,
    title: 'Elegant Sofa',
    price: 199.99,
    category: 'Sofas',
    tags: ['elegant', 'living room'],
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
    features: ['3-seater', 'Removable covers'],
    materials: ['Wood', 'Linen']
  },
  {
    id: '3',
    src: Product3,
    title: 'Wooden Table',
    price: 89.99,
    originalPrice: 119.99,
    category: 'Tables',
    tags: ['wooden', 'dining'],
    inStock: true,
    rating: 4.3,
    reviewCount: 156,
    features: ['Extendable', 'Scratch resistant'],
    materials: ['Solid Oak']
  },
  {
    id: '4',
    src: Product4,
    title: 'Luxury Lamp',
    price: 39.99,
    category: 'Lighting',
    tags: ['luxury', 'decor'],
    inStock: true,
    rating: 4.6,
    reviewCount: 203,
    features: ['Dimmable', 'LED'],
    materials: ['Metal', 'Glass']
  },
  {
    id: '5',
    src: Product5,
    title: 'Cozy Bed',
    price: 299.99,
    category: 'Beds',
    tags: ['cozy', 'bedroom'],
    inStock: true,
    rating: 4.7,
    reviewCount: 67,
    features: ['Storage drawers', 'Headboard'],
    materials: ['Wood', 'Fabric']
  },
  {
    id: '6',
    src: Product6,
    title: 'Stylish Shelf',
    price: 59.99,
    category: 'Storage',
    tags: ['stylish', 'storage'],
    inStock: true,
    rating: 4.4,
    reviewCount: 94,
    features: ['Wall mounted', 'Adjustable shelves'],
    materials: ['Metal', 'Wood']
  },
  {
    id: '7',
    src: Product7,
    title: 'Minimalist Clock',
    price: 19.99,
    category: 'Decor',
    tags: ['minimalist', 'wall decor'],
    inStock: true,
    rating: 4.2,
    reviewCount: 178,
    features: ['Silent movement', 'Battery operated'],
    materials: ['Wood', 'Metal']
  },
  {
    id: '8',
    src: Product8,
    title: 'Classic Rug',
    price: 79.99,
    originalPrice: 99.99,
    category: 'Rugs',
    tags: ['classic', 'living room'],
    inStock: true,
    rating: 4.5,
    reviewCount: 112,
    features: ['Non-slip', 'Washable'],
    materials: ['Wool', 'Cotton']
  }
]

export default function BestSeller() {
  return (
    <section className="container-custom py-16 md:py-24 border-b border-border">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Shop Best Sellers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}