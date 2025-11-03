import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NewArrival() {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20 lg:py-32"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/new-arrival-background.png')"
      }}
    >
      <div className="container-custom px-6 sm:px-8">
        <div className="max-w-lg text-white">
          <p className="text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 md:mb-4 text-accent">
            NEW ARRIVAL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 md:mb-6">
            Everything you need for your living room
          </h2>
          <Link href="/products">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-light w-full sm:w-auto"
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}