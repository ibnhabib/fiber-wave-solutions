
import React from 'react';
import { ServicePage } from '@/components/service/ServicePage';

const VOIP = () => {
  const content = [
    "Our VOIP solutions provide advanced voice over IP telephony systems for businesses throughout Al Ain and Abu Dhabi. We design and implement reliable, cost-effective phone systems that leverage internet connectivity to deliver enhanced communications capabilities.",
    "Our experienced technicians are skilled in configuring a wide range of VOIP equipment and services, from simple small business setups to comprehensive enterprise-grade solutions with advanced features and call center capabilities.",
    "We ensure your VOIP system integrates seamlessly with your existing network infrastructure while providing the reliability, call quality, and features your business needs to communicate effectively with clients and colleagues."
  ];

  const features = [
    "Complete business phone system setup and configuration",
    "Cloud PBX integration for flexible, scalable telephony",
    "Call center and IVR (Interactive Voice Response) solutions",
    "Mobile integration for remote work capabilities",
    "HD voice quality with proper QoS (Quality of Service) configuration",
    "Conference calling and video conferencing setup",
    "Voicemail to email and fax to email services",
    "Detailed call reporting and analytics"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "VOIP Solutions",
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
    "serviceType": "VOIP Installation",
    "areaServed": ["Al Ain", "Abu Dhabi", "UAE"],
    "description": "Advanced VOIP and telephony solutions for businesses in Al Ain and Abu Dhabi. Business phone system setup, cloud PBX integration, and call center solutions."
  };

  return (
    <ServicePage
      title="VOIP Solutions"
      description="Advanced voice over IP telephony systems with business phone setup and call center solutions in Al Ain and Abu Dhabi."
      metaDescription="Professional VOIP and telephony solutions for businesses in Al Ain and Abu Dhabi. We provide business phone system setup, cloud PBX integration, and comprehensive call center solutions."
      metaKeywords="VOIP, voice over IP, business phone system, cloud PBX, call center solutions, telephony, Al Ain, Abu Dhabi, phone installation"
      content={content}
      features={features}
      imageUrl="/placeholder.svg"
      schemaData={schemaData}
    />
  );
};

export default VOIP;
