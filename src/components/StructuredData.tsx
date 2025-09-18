export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mehrmarke",
    "description": "Digitale Sichtbarkeit für lokale Unternehmen - Professionelle Websites, Google-Optimierung und Social Media Marketing",
    "url": "https://mehrmarke.de",
    "logo": "https://mehrmarke.de/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-123-456-789",
      "contactType": "Customer Service",
      "email": "hallo@mehrmarke.com",
      "availableLanguage": "German"
    },
    "sameAs": [
      "https://instagram.com/mehrmarke",
      "https://facebook.com/mehrmarke"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Entwicklung",
            "description": "Moderne, responsive Websites für lokale Unternehmen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Unternehmensprofil",
            "description": "Optimierung für lokale Sucherergebnisse"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Content-Erstellung und Social Media Betreuung"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}