
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
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Technical Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Network Installation",
          "description": "Professional network cabling and infrastructure setup"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fiber Optic Solutions",
          "description": "Expert fiber optic installations and repairs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WiFi Setup",
          "description": "Seamless wireless solutions for optimal coverage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ethernet & Home Networking",
          "description": "Complete home networking solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CCTV Installation",
          "description": "Professional security camera solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VOIP Solutions",
          "description": "Advanced voice over IP telephony systems"
        }
      }
    ]
  }
};

export const networkInstallationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Network Installation Services",
  "description": "Professional network cabling and infrastructure setup in Al Ain & Abu Dhabi",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Technical Services"
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
  "serviceType": "Network Installation"
};

export const fiberSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fiber Optic Solutions",
  "description": "Expert fiber optic installations and repairs in Al Ain & Abu Dhabi",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Technical Services"
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
  "serviceType": "Fiber Optic Installation"
};

export const wifiSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WiFi & Networking Setup",
  "description": "Seamless wireless solutions for optimal coverage in Al Ain & Abu Dhabi",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Technical Services"
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
  "serviceType": "WiFi Installation"
};

export const ethernetSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ethernet & Home Networking",
  "description": "Complete home networking solutions in Al Ain & Abu Dhabi",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Technical Services"
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
  "serviceType": "Ethernet Installation"
};

export const cctvSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CCTV Installation",
  "description": "Professional security camera solutions for home and business in Al Ain & Abu Dhabi",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Technical Services"
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
  "serviceType": "CCTV Installation"
};

export const voipSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VOIP Solutions",
  "description": "Advanced voice over IP telephony systems in Al Ain & Abu Dhabi",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Technical Services"
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
  "serviceType": "VOIP Installation"
};
