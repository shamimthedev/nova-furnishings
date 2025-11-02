import Image from 'next/image'
import Link from 'next/link'
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/public/assets/images/footer-logo.png'

const socialLinks = [
  {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  },
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  },
  {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  },
  {
    icon: Youtube,
    href: '#',
    label: 'YouTube'
  }
]

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { name: 'Living Room', href: '/living-room' },
      { name: 'Bedroom', href: '/bedroom' },
      { name: 'Kitchen', href: '/kitchen' },
      { name: 'Dining', href: '/dining' },
      { name: 'Office', href: '/office' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Press', href: '/press' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Warranty', href: '/warranty' },
      { name: 'FAQ', href: '/faq' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Image
              src={Logo}
              alt="Nova Furnishings"
              className="w-40 h-auto mb-6"
            />
            <p className="text-white/80 leading-relaxed max-w-md mb-6">
              Creating beautiful, functional spaces with sustainably sourced 
              materials and timeless design. Transform your home with pieces 
              that last.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 border border-white/20"
                  asChild
                >
                  <Link href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Nova Furnishings. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/70 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-white/70 hover:text-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}