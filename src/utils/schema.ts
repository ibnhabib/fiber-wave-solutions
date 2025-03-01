
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Technical Services",
  "description": "Expert network cabling & fiber optic installation services in Al Ain & Abu Dhabi",
  "image": "/og-image.png",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Abu Dhabi",
    "addressCountry": "UAE"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Al Ain"
    },
    {
      "@type": "City",
      "name": "Abu Dhabi"
    }
  ],
  "priceRange": "$$",
  "telephone": "+971569811332",
  "sameAs": [
    "https://www.facebook.com/technicalservices",
    "https://www.instagram.com/technicalservices"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  }
};
