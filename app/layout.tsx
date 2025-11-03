import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import BackToTop from '@/components/ui/BackToTop'
import { Toaster } from 'sonner'
import StructuredData from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://nova-furnishings.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nova Furnishings | Modern Furniture Store',
    template: '%s | Nova Furnishings'
  },
  description: 'Discover beautifully crafted modern furniture for every room. Premium quality, sustainable materials, and timeless design. Shop beds, sofas, tables, chairs, and more.',
  keywords: [
    'furniture',
    'home decor',
    'modern furniture',
    'living room furniture',
    'bedroom furniture',
    'dining room furniture',
    'office furniture',
    'sustainable furniture',
    'premium furniture',
    'furniture store',
    'nova furnishings',
    'buy furniture online',
  ],
  authors: [
    { name: 'Nova Furnishings' },
    { name: 'Bebshar Dost', url: 'https://bebshardost.com' }
  ],
  creator: 'Bebshar Dost',
  publisher: 'Nova Furnishings',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Nova Furnishings',
    title: 'Nova Furnishings | Modern Furniture Store',
    description: 'Discover beautifully crafted modern furniture for every room. Premium quality, sustainable materials, and timeless design.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nova Furnishings - Modern Furniture Store',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Furnishings | Modern Furniture Store',
    description: 'Discover beautifully crafted modern furniture for every room.',
    images: ['/twitter-image.jpg'],
    creator: '@novafurnishings',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here after creating accounts
    google: 'google8a122e0b0ebd53f3.html',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'furniture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="pt-20 flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              style: {
                background: 'white',
                border: '1px solid #e5e7eb',
              },
              duration: 5000,
            }}
          />
        </div>
      </body>
    </html>
  )
}