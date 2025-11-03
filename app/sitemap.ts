import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nova-furnishings.vercel.app'
  
  // Static pages
  const staticPages = [
    '',
    '/products',
    '/cart',
    '/checkout',
  ]

  // Product categories
  const categories = [
    '/products?category=beds',
    '/products?category=sofas',
    '/products?category=kitchen',
    '/products?category=storage',
    '/products?category=chairs',
    '/products?category=tables',
  ]

  // Admin pages (with lower priority)
  const adminPages = [
    '/admin',
  ]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const categoryRoutes = categories.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  const adminRoutes = adminPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  return [...staticRoutes, ...categoryRoutes, ...adminRoutes]
}