
import React, { useEffect } from "react";
import { Phone } from "lucide-react";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const VOIP = () => {
  // SEO metadata
  useEffect(() => {
    document.title = "Professional VOIP & Business Phone System Solutions in Al Ain & Abu Dhabi";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert business phone system setup, cloud PBX integration and call center solutions for companies in Al Ain & Abu Dhabi.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Expert business phone system setup, cloud PBX integration and call center solutions for companies in Al Ain & Abu Dhabi.");
      document.head.appendChild(metaDescription);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "VOIP installation, business phone systems, cloud PBX, video conferencing, Al Ain, Abu Dhabi, call center solutions");
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", "VOIP installation, business phone systems, cloud PBX, video conferencing, Al Ain, Abu Dhabi, call center solutions");
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
              <Phone className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">VOIP Solutions</h1>
            <p className="text-xl text-slate-600 mb-8">Advanced voice over IP telephony systems in Al Ain & Abu Dhabi</p>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Expert VOIP Solutions in Al Ain & Abu Dhabi</h2>
              <p className="text-slate-600 mb-6">
                Our VOIP solutions provide modern communication systems for businesses in Al Ain and Abu Dhabi. We set up advanced business phone systems that leverage internet connectivity for cost-effective and feature-rich communications. Our technicians can integrate cloud PBX systems, configure call center solutions, and set up video conferencing capabilities. Our VOIP installations help businesses reduce communication costs while enhancing functionality and reliability.
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
                    <span className="text-slate-600">Business phone system setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">Cloud PBX integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">Call center solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">Video conferencing setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-slate-600">Cost-effective communication</span>
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

export default VOIP;
