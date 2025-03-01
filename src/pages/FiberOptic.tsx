
import React from 'react';
import { ServicePage } from '@/components/service/ServicePage';

const FiberOptic = () => {
  const content = [
    "Our fiber optic solutions provide the highest speed and most reliable connectivity available in Al Ain and Abu Dhabi. We specialize in fiber optic installations for both residential and commercial properties, ensuring you have access to lightning-fast internet and data transfer capabilities.",
    "Our expert technicians are trained in the latest fiber optic technologies and installation methods. We handle everything from initial planning and design to installation, testing, and maintenance of your fiber optic network infrastructure.",
    "With 24/7 emergency support, we're always available to address any issues that may arise with your fiber optic connections, ensuring minimal downtime and maximum reliability for your critical communications."
  ];

  const features = [
    "High-speed fiber optic cable installation for residential and commercial buildings",
    "Fiber to the home (FTTH) and fiber to the premises (FTTP) solutions",
    "Fiber optic cable splicing and termination with precision equipment",
    "Detailed testing and certification of all fiber installations",
    "Underground fiber optic cable installation and repairs",
    "Integration with existing network infrastructure",
    "Fiber optic network maintenance and troubleshooting",
    "24/7 emergency support for critical connectivity issues"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fiber Optic Solutions",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Technical Services",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Al Ain",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "UAE"
      }
    },
    "serviceType": "Fiber Optic Installation",
    "areaServed": ["Al Ain", "Abu Dhabi", "UAE"],
    "description": "Expert fiber optic installations and repairs for residential and commercial properties in Al Ain and Abu Dhabi. 24/7 emergency support and professional installation services."
  };

  return (
    <ServicePage
      title="Fiber Optic Solutions"
      description="Expert fiber optic installations and repairs with 24/7 emergency support for residential and commercial properties in Al Ain and Abu Dhabi."
      metaDescription="Professional fiber optic installations and repairs in Al Ain and Abu Dhabi. Our expert technicians provide residential and commercial fiber solutions with 24/7 emergency support."
      metaKeywords="fiber optic, fiber cable installation, FTTH, fiber to the home, fiber optic repairs, high-speed internet, Al Ain, Abu Dhabi, network cabling"
      content={content}
      features={features}
      imageUrl="/placeholder.svg"
      schemaData={schemaData}
    />
  );
};

export default FiberOptic;
