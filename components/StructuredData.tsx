export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Nova Furnishings",
    "description": "Modern furniture store",
    "url": "https://nova-furnishings.vercel.app",
    "logo": "https://nova-furnishings.vercel.app/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BD"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 09:00-21:00"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}