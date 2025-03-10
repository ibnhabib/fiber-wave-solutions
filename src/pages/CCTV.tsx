
import React from 'react';
import { ServicePage } from '@/components/service/ServicePage';

const CCTV = () => {
  const content = [
    "Our CCTV installation services provide comprehensive security camera solutions for homes and businesses throughout Al Ain and Abu Dhabi. We design and implement surveillance systems that help protect your property, assets, and loved ones with reliable monitoring capabilities.",
    "Our experienced technicians are skilled in installing a wide range of security cameras, from basic HD systems to advanced 4K cameras with night vision capabilities. We ensure your cameras are strategically placed for maximum coverage and effectiveness.",
    "We also set up remote monitoring solutions that allow you to view your security footage from anywhere using your smartphone, tablet, or computer, giving you peace of mind whether you're at home, at work, or traveling."
  ];

  const features = [
    "HD and 4K security camera installation for crystal-clear footage",
    "Strategic camera placement for optimal coverage and deterrence",
    "Night vision camera systems for 24/7 monitoring capabilities",
    "Digital video recorder (DVR) and network video recorder (NVR) setup",
    "Remote monitoring configuration for smartphone and tablet access",
    "Motion detection and automated alert systems",
    "Wired and wireless CCTV options to suit your property",
    "Professional cable management for clean, discreet installations"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CCTV Installation",
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
    "serviceType": "Security Camera Installation",
    "areaServed": ["Al Ain", "Abu Dhabi", "UAE"],
    "description": "Professional CCTV and security camera installation services for homes and businesses in Al Ain and Abu Dhabi. HD and 4K camera systems with remote monitoring capabilities."
  };

  return (
    <ServicePage
      title="CCTV Installation"
      description="Professional security camera solutions for home and business with HD/4K cameras and remote monitoring in Al Ain and Abu Dhabi."
      metaDescription="Professional CCTV and security camera installation services in Al Ain and Abu Dhabi. We provide HD and 4K camera systems with night vision and remote monitoring capabilities for homes and businesses."
      metaKeywords="CCTV installation, security cameras, surveillance systems, night vision cameras, remote monitoring, HD cameras, 4K cameras, Al Ain, Abu Dhabi"
      content={content}
      features={features}
      imageUrl="https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg"
      schemaData={schemaData}
    />
  );
};

export default CCTV;
