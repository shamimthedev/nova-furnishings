import { Button } from '@/components/ui/button'

export default function GetInTouch() {
  return (
    <section className="bg-secondary text-white">
      <div className="container-custom text-center py-16 md:py-28">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Request More Information
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed">
          If you have any questions about our products, please, don't hesitate
          to contact us. One of our consultant will reach back to you quickly.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent-light mb-12"
        >
          CONTACT US
        </Button>
        
        <div className="pt-8 border-t border-white/20">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Nova Furnishings, LLC
          </p>
        </div>
      </div>
    </section>
  )
}