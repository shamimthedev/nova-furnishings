import Image from 'next/image'
import Clock from '@/public/assets/images/clock-icon.svg'
import Shipping from '@/public/assets/images/shipping-icon.svg'
import Wallet from '@/public/assets/images/wallet-icon.svg'

const features = [
  {
    icon: Clock,
    title: 'Long-life Objects',
    description: 'Short text describing one of your product or service advantages. Try being creative.'
  },
  {
    icon: Shipping,
    title: 'Fast Shipping',
    description: 'Short text describing one of your product or service advantages. Try being creative.'
  },
  {
    icon: Wallet,
    title: '10% Cashback',
    description: 'Short text describing one of your product or service advantages. Try being creative.'
  }
]

export default function Feature() {
  return (
    <section className="container-custom py-12 md:py-16 lg:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center group px-4 sm:px-0">
            {/* Icon Container */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 md:mb-6">
              <Image
                src={feature.icon}
                alt={feature.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">
              {feature.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-xs mx-auto">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}