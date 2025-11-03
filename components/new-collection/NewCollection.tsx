import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Vase from '@/public/assets/images/vase.png'
import Plate from '@/public/assets/images/plates.png'
import Plate2 from '@/public/assets/images/plates-2.png'
import Chair from '@/public/assets/images/chair.png'
import BrandLogo1 from '@/public/assets/images/brand-logo-1.png'
import BrandLogo2 from '@/public/assets/images/brand-logo-2.png'
import BrandLogo3 from '@/public/assets/images/brand-logo-3.png'
import BrandLogo4 from '@/public/assets/images/brand-logo-4.png'
import BrandLogo5 from '@/public/assets/images/brand-logo-5.png'
import BrandLogo6 from '@/public/assets/images/brand-logo-6.png'

const collections = [
  {
    title: 'Decor & Wellness',
    description: 'NEW COLLECTION',
    image: Vase,
    buttonText: 'Show More',
    bgColor: 'bg-background-card',
    href: '/products?category=decor'
  },
  {
    title: 'Kitchen & Dining',
    description: '',
    image: Plate,
    mobileImage: Plate2,
    buttonText: 'Show More',
    bgColor: 'bg-background-card',
    href: '/products?category=kitchen'
  },
  {
    title: 'Shop Furniture',
    description: '',
    image: Chair,
    buttonText: 'Show More',
    bgColor: 'bg-background-card',
    href: '/products'
  }
]

const brandLogos = [BrandLogo1, BrandLogo2, BrandLogo3, BrandLogo4, BrandLogo5, BrandLogo6]

export default function NewCollection() {
  return (
    <>
      {/* Collections Section */}
      <section className="container-custom py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`${collection.bgColor} rounded-xl md:rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Text Content */}
              <div className="p-5 sm:p-6 md:p-8 text-center">
                {collection.description && (
                  <p className="text-xs font-medium text-accent tracking-wider uppercase mb-3 md:mb-4">
                    {collection.description}
                  </p>
                )}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
                  {collection.title}
                </h3>
                <Link href={collection.href}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto"
                  >
                    {collection.buttonText}
                  </Button>
                </Link>
              </div>

              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-80">
                {/* Desktop/Tablet Image */}
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${collection.mobileImage ? 'hidden sm:block' : ''}`}
                />
                {/* Mobile Image (if available) */}
                {collection.mobileImage && (
                  <Image
                    src={collection.mobileImage}
                    alt={collection.title}
                    fill
                    className="object-cover sm:hidden group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="container-custom py-8 md:py-12 lg:py-20">
        {/* Desktop View - All logos visible */}
        <div className="hidden md:flex flex-wrap gap-8 lg:gap-16 xl:gap-24 justify-center items-center py-4">
          {brandLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo}
                alt={`Brand ${index + 1}`}
                width={100}
                height={50}
                className="object-contain w-20 lg:w-24 xl:w-28 h-auto"
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Horizontal scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-6 sm:gap-8 py-4 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory">
            {brandLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 grayscale opacity-60 snap-center"
              >
                <Image
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  width={80}
                  height={40}
                  className="object-contain w-20 sm:w-24 h-auto"
                />
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <p className="text-center text-xs text-text-light mt-2">
            Swipe to see more brands
          </p>
        </div>
      </section>
    </>
  )
}