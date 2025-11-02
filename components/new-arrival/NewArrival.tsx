import { Button } from '@/components/ui/button'

export default function NewArrival() {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat py-20 md:py-32"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/new-arrival-background.png')"
      }}
    >
      <div className="container-custom">
        <div className="max-w-lg text-white">
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-accent">
            NEW ARRIVAL
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Everything you need for your living room
          </h2>
          <Button className="bg-accent hover:bg-accent-light">
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  )
}