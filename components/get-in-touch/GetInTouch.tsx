import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function GetInTouch() {
  return (
    <section className="bg-secondary text-white">
      <div className="container-custom text-center py-12 md:py-16 lg:py-20 xl:py-28 px-4 sm:px-6">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
          Request More Information
        </h2>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-9 md:mb-10 text-white/90 leading-relaxed px-2">
          If you have any questions about our products, please, don&apos;t hesitate
          to contact us. One of our consultant will reach back to you quickly.
        </p>
        
        {/* CTA Button */}
        <Link href="/contact">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-light mb-10 sm:mb-11 md:mb-12 w-full sm:w-auto"
          >
            CONTACT US
          </Button>
        </Link>
        
        {/* Footer */}
        <div className="pt-6 sm:pt-7 md:pt-8 border-t border-white/20">
          <p className="text-xs sm:text-sm text-white/80">
            © {new Date().getFullYear()} Nova Furnishings, LLC
          </p>
        </div>
      </div>
    </section>
  )
}