import Image from 'next/image'
import { Button } from '@/components/ui/button'
import FurnitureImg from '@/public/assets/images/furniture-image.png'

export default function Furniture() {
  return (
    <section className="container-custom py-16 md:py-24">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Furniture designed for you
      </h2>
      
      <div className="card overflow-hidden">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={FurnitureImg}
            alt="Modern furniture design"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Short subtitle for a section
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-text-light leading-relaxed max-w-2xl">
              A small description of what you can offer your customers or why
              they should choose your service
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white whitespace-nowrap">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}