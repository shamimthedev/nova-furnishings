import Image from 'next/image'
import { Button } from '@/components/ui/button'
import HeroImg from '@/public/assets/images/hero-image.png'

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="container-custom py-8 md:py-12">
        <div className="bg-background-card rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
              NEW COLLECTION
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              The Beauty Of Design
            </h1>
            <p className="text-lg text-text-light leading-relaxed mb-8 max-w-md">
              Both functional and decorative, which feels artisan-made but has
              a contemporary look.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent-light">
              EXPLORE COLLECTION
            </Button>
          </div>
          <div className="relative h-80 md:h-96 lg:h-[500px]">
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

      <div className="container-custom py-6 border-b border-border">
        <p className="text-center text-text-light font-medium text-sm md:text-base">
          Place seasonal & targeted discount benefits here
        </p>
      </div>
    </section>
  )
}