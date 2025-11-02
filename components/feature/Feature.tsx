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
    <section className="container-custom py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center group">
            <div className="relative w-16 h-16 mx-auto mb-6">
              <Image
                src={feature.icon}
                alt={feature.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              {feature.title}
            </h3>
            <p className="text-text-light leading-relaxed max-w-xs mx-auto">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}