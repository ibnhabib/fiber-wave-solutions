
import React, { useEffect } from "react";
import { Cable } from "lucide-react";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const FiberOptic = () => {
  // SEO metadata
  useEffect(() => {
    document.title = "Expert Fiber Optic Installation & Repair Services in Al Ain & Abu Dhabi";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional fiber optic installations, repairs and 24/7 emergency support for residential and commercial properties across Al Ain & Abu Dhabi.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Professional fiber optic installations, repairs and 24/7 emergency support for residential and commercial properties across Al Ain & Abu Dhabi.");
      document.head.appendChild(metaDescription);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "fiber optic installation, fiber cable repair, underground fiber, fiber optic solutions, Al Ain, Abu Dhabi, internet cable installation");
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", "fiber optic installation, fiber cable repair, underground fiber, fiber optic solutions, Al Ain, Abu Dhabi, internet cable installation");
      document.head.appendChild(metaKeywords);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Cable className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Fiber Optic Solutions</h1>
            <p className="text-xl text-slate-600 mb-8">Expert fiber optic installations and repairs in Al Ain & Abu Dhabi</p>
            <Button 
              size="lg" 
              className="animate-fade-in"
              onClick={() => window.location.href = 'tel:+971569811332'}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Expert Fiber Optic Solutions in Al Ain & Abu Dhabi</h2>
              <p className="text-slate-600 mb-6">
                Our fiber optic solutions provide the fastest and most reliable connectivity options available in Al Ain and Abu Dhabi. We handle everything from initial installations to emergency repairs with precision and care. Our team of certified fiber optic technicians can diagnose and resolve fiber issues quickly, minimizing downtime for your home or business. We provide 24/7 emergency support for critical situations and maintain the highest standards in fiber optic installation and repair.
              </p>
              <p className="text-slate-600 mb-6">
                Our team of certified technicians brings years of experience and expertise to every project. We serve both residential and commercial clients throughout Al Ain and Abu Dhabi with prompt, professional service.
              </p>
              <p className="text-slate-600 mb-8">
                Contact us today for a free consultation and experience the difference that professional technical services can make for your property.
              </p>
              <Button 
                size="lg" 
                className="mb-8"
                onClick={() => window.location.href = 'tel:+971569811332'}
              >
                Call Us Now
              </Button>
            </div>
            <div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">Residential & commercial installations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">Underground cable repairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">24/7 emergency support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">Fast response times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">Certified fiber optic technicians</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      <FloatingButtons />
    </div>
  );
};

export default FiberOptic;
