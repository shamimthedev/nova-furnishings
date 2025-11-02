import Image from 'next/image'
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
    bgColor: 'bg-background-card'
  },
  {
    title: 'Kitchen & Dining',
    description: '',
    image: Plate,
    mobileImage: Plate2,
    buttonText: 'Show More',
    bgColor: 'bg-background-card'
  },
  {
    title: 'Shop Furniture',
    description: '',
    image: Chair,
    buttonText: 'Show More',
    bgColor: 'bg-background-card'
  }
]

const brandLogos = [BrandLogo1, BrandLogo2, BrandLogo3, BrandLogo4, BrandLogo5, BrandLogo6]

export default function NewCollection() {
  return (
    <>
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`${collection.bgColor} rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="p-6 md:p-8 text-center">
                {collection.description && (
                  <p className="text-xs font-medium text-accent tracking-wider uppercase mb-4">
                    {collection.description}
                  </p>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
                  {collection.title}
                </h3>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  {collection.buttonText}
                </Button>
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {collection.mobileImage && (
                  <Image
                    src={collection.mobileImage}
                    alt={collection.title}
                    fill
                    className="object-cover md:hidden group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="container-custom py-12 md:py-20">
        <div className="flex overflow-x-auto gap-8 md:gap-16 lg:gap-24 justify-center items-center py-4 scrollbar-hide">
          {brandLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={logo}
                alt={`Brand ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}