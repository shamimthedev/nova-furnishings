import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import FurnitureImg from '@/public/assets/images/furniture-image.png'

export default function Furniture() {
  return (
    <section className="container-custom py-12 md:py-16 lg:py-24">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-10 md:mb-12 px-4">
        Furniture designed for you
      </h2>
      
      {/* Card Container */}
      <div className="card overflow-hidden">
        {/* Image */}
        <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 w-full">
          <Image
            src={FurnitureImg}
            alt="Modern furniture design"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8 lg:p-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-3 sm:mb-4">
            Short subtitle for a section
          </h3>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-5 md:gap-6">
            <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-2xl">
              A small description of what you can offer your customers or why
              they should choose your service
            </p>
            
            <Link href="/about" className="w-full md:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white whitespace-nowrap w-full md:w-auto flex-shrink-0"
              >
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}