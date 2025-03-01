
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ServiceHero } from './ServiceHero';
import { ServiceContent } from './ServiceContent';
import { ServiceFeatures } from './ServiceFeatures';
import { ServiceCta } from './ServiceCta';

interface ServicePageProps {
  title: string;
  description: string;
  metaDescription: string;
  metaKeywords: string;
  content: string[];
  features: string[];
  imageUrl: string;
  schemaData: any;
}

export function ServicePage({ 
  title, 
  description, 
  metaDescription, 
  metaKeywords,
  content, 
  features, 
  imageUrl,
  schemaData 
}: ServicePageProps) {
  // SEO metadata
  useEffect(() => {
    // Set document title
    document.title = `${title} - Technical Services in Al Ain & Abu Dhabi`;
    
    // Update meta description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", metaDescription);
    } else {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute("name", "description");
      metaDescriptionTag.setAttribute("content", metaDescription);
      document.head.appendChild(metaDescriptionTag);
    }
    
    // Update meta keywords
    let metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (metaKeywordsTag) {
      metaKeywordsTag.setAttribute("content", metaKeywords);
    } else {
      metaKeywordsTag = document.createElement('meta');
      metaKeywordsTag.setAttribute("name", "keywords");
      metaKeywordsTag.setAttribute("content", metaKeywords);
      document.head.appendChild(metaKeywordsTag);
    }

    // Add schema.org data
    const existingSchema = document.querySelector('script[data-service-schema]');
    if (existingSchema) {
      existingSchema.textContent = JSON.stringify(schemaData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaData);
      script.setAttribute('data-service-schema', '');
      document.head.appendChild(script);
    }

    return () => {
      // Clean up schema when component unmounts
      const schemaScript = document.querySelector('script[data-service-schema]');
      if (schemaScript) {
        document.head.removeChild(schemaScript);
      }
    };
  }, [title, metaDescription, metaKeywords, schemaData]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ServiceHero title={title} description={description} imageUrl={imageUrl} />
      <ServiceContent content={content} />
      <ServiceFeatures title="Key Features & Benefits" features={features} />
      <ServiceCta />
      <FloatingButtons />
    </div>
  );
}
