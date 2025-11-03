import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HeroImg from '@/public/assets/images/hero-image.png'

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="container-custom py-6 md:py-8 lg:py-12">
        <div className="bg-background-card rounded-xl md:rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center overflow-hidden">
          {/* Text Content */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-16 order-1">
            <p className="text-xs sm:text-sm font-medium text-accent tracking-wider uppercase mb-3 md:mb-4">
              NEW COLLECTION
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4 md:mb-6">
              The Beauty Of Design
            </h1>
            <p className="text-base sm:text-lg text-text-light leading-relaxed mb-6 md:mb-8 max-w-md">
              Both functional and decorative, which feels artisan-made but has
              a contemporary look.
            </p>
            <Link href="/products">
              <Button size="lg" className="bg-accent hover:bg-accent-light w-full sm:w-auto">
                EXPLORE COLLECTION
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-2">
            <Image
              src={HeroImg}
              alt="Modern furniture collection"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="container-custom py-4 md:py-6 border-b border-border">
        <p className="text-center text-text-light font-medium text-xs sm:text-sm md:text-base px-4">
          Place seasonal & targeted discount benefits here
        </p>
      </div>
    </section>
  )
}