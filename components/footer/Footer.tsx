'use client'

import Link from 'next/link'
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  Shield,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'

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
      { name: 'Living Room', href: '/products?category=sofas' },
      { name: 'Bedroom', href: '/products?category=beds' },
      { name: 'Kitchen', href: '/products?category=kitchen' },
      { name: 'Dining', href: '/products?category=tables' },
      { name: 'Office', href: '/products?category=chairs' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/' },
      { name: 'Careers', href: '/' },
      { name: 'Sustainability', href: '/' },
      { name: 'Press', href: '/' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/' },
      { name: 'Shipping & Returns', href: '/' },
      { name: 'Warranty', href: '/' },
      { name: 'FAQ', href: '/' }
    ]
  },
  {
    title: 'Admin',
    links: [
      { name: 'Admin Dashboard', href: '/admin' },
      { name: 'Demo Access', href: '/admin' }
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
            {/* Text-based Logo */}
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-[1.8rem] md:text-[2.2rem] tracking-[0.08em] uppercase">
                <span className="text-white font-bold">NOVA</span>
                <span className="text-accent">FURNISHINGS</span>
              </h2>
            </Link>
            
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
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                {section.title}
                {section.title === 'Admin' && (
                  <Shield className="h-4 w-4 text-accent" />
                )}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors duration-200 flex items-center gap-2"
                    >
                      {link.name}
                      {link.name === 'Demo Access' && (
                        <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                          Demo
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Demo Notice Banner */}
        <div className="mt-8 p-4 bg-accent/20 border border-accent/30 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Shield className="h-5 w-5 text-accent flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white mb-1">
                Demo Admin Access Available
              </p>
              <p className="text-xs text-white/80 break-words">
                Username: <strong>admin</strong> | Password: <strong>admin123</strong>
              </p>
            </div>
            <Button 
              asChild 
              size="sm" 
              className="bg-accent hover:bg-accent-light w-full sm:w-auto flex-shrink-0"
            >
              <Link href="/admin">
                Try Admin Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Nova Furnishings. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-white/70 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-white/70 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="text-white/70 hover:text-accent transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Agency Credit with Animation */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
            <span className="text-white/60 flex items-center gap-2">
              Crafted with 
              <span className="inline-block animate-pulse text-accent">❤️</span>
              by
            </span>
            <a 
              href="https://bebshardost.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 font-semibold text-white hover:text-accent transition-colors duration-300"
            >
              <Sparkles className="h-4 w-4 text-accent animate-spin-slow" />
              <span className="relative">
                Bebshar Dost
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </footer>
  )
}