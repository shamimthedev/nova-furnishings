import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Nova Furnishings | Modern Furniture Store',
    template: '%s | Nova Furnishings'
  },
  description: 'Discover beautifully crafted modern furniture for every room. Premium quality, sustainable materials, and timeless design.',
  keywords: ['furniture', 'home decor', 'modern furniture', 'living room', 'bedroom', 'dining room'],
  authors: [{ name: 'Nova Furnishings' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novafurnishings.com',
    siteName: 'Nova Furnishings',
    title: 'Nova Furnishings | Modern Furniture Store',
    description: 'Discover beautifully crafted modern furniture for every room.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nova Furnishings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Furnishings | Modern Furniture Store',
    description: 'Discover beautifully crafted modern furniture for every room.',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background antialiased">
        <div className="flex flex-col min-h-screen">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}