
import React from "react";
import { useParams } from "react-router-dom";
import { Wifi, Cable, Network, Server, Camera, Phone } from "lucide-react";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const services = {
  "network-installation": {
    icon: Network,
    title: "Professional Network Installation",
    description: "Enterprise-grade network solutions for businesses and homes in Al Ain & Abu Dhabi",
    highlights: [
      "CAT 6 cable installation",
      "Structured cabling solutions",
      "Network infrastructure setup",
      "Professional technicians",
      "Warranty on all installations",
    ],
    content: "Our professional network installation services provide comprehensive solutions for both residential and commercial properties in Al Ain and Abu Dhabi. We specialize in CAT 6 cable installation, structured cabling, and complete network infrastructure setups that ensure reliable, high-speed connectivity. Our certified technicians deliver meticulous installations with attention to detail, ensuring your network infrastructure is built to last and perform optimally.",
    metaTitle: "Professional Network Cabling & Installation Services in Al Ain & Abu Dhabi",
    metaDescription: "Expert CAT 6 cable installation and structured cabling solutions for homes and businesses across Al Ain & Abu Dhabi. Professional network infrastructure setup.",
    metaKeywords: "network cabling, CAT 6 cable installation, structured cabling, network infrastructure, Al Ain, Abu Dhabi, internet cable installation"
  },
  "fiber-optic": {
    icon: Cable,
    title: "Fiber Optic Solutions",
    description: "Expert fiber optic installations and repairs in Al Ain & Abu Dhabi",
    highlights: [
      "Residential & commercial installations",
      "Underground cable repairs",
      "24/7 emergency support",
      "Fast response times",
      "Certified fiber optic technicians",
    ],
    content: "Our fiber optic solutions provide the fastest and most reliable connectivity options available in Al Ain and Abu Dhabi. We handle everything from initial installations to emergency repairs with precision and care. Our team of certified fiber optic technicians can diagnose and resolve fiber issues quickly, minimizing downtime for your home or business. We provide 24/7 emergency support for critical situations and maintain the highest standards in fiber optic installation and repair.",
    metaTitle: "Expert Fiber Optic Installation & Repair Services in Al Ain & Abu Dhabi",
    metaDescription: "Professional fiber optic installations, repairs and 24/7 emergency support for residential and commercial properties across Al Ain & Abu Dhabi.",
    metaKeywords: "fiber optic installation, fiber cable repair, underground fiber, fiber optic solutions, Al Ain, Abu Dhabi, internet cable installation"
  },
  "wifi-setup": {
    icon: Wifi,
    title: "WiFi & Networking Setup",
    description: "Seamless wireless solutions for optimal coverage in Al Ain & Abu Dhabi",
    highlights: [
      "Home & office WiFi installation",
      "NETGEAR extender optimization",
      "IoT device integration",
      "Wireless network security",
      "Same-day service available",
    ],
    content: "Our WiFi setup services deliver seamless wireless connectivity throughout your home or office in Al Ain and Abu Dhabi. We specialize in optimizing coverage, eliminating dead zones, and ensuring your wireless network performs at its best. Our technicians are experts in NETGEAR extender installation and configuration, IoT device integration, and implementing proper security measures to protect your network. We offer same-day service for urgent WiFi needs to get you connected quickly.",
    metaTitle: "Professional WiFi Installation & Setup Services in Al Ain & Abu Dhabi",
    metaDescription: "Expert WiFi installation, NETGEAR extender setup and IoT device integration for homes and businesses in Al Ain & Abu Dhabi. Same-day service available.",
    metaKeywords: "wifi installation, wireless network setup, NETGEAR extender, IoT configuration, Al Ain, Abu Dhabi, wifi setup"
  },
  "ethernet": {
    icon: Server,
    title: "Ethernet & Home Networking",
    description: "Complete home networking solutions in Al Ain & Abu Dhabi",
    highlights: [
      "High-speed ethernet cabling",
      "Smart home configuration",
      "Professional cable management",
      "Network security implementation",
      "Custom networking solutions",
    ],
    content: "Our ethernet and home networking services provide reliable wired connections for homes and businesses in Al Ain and Abu Dhabi. We install high-speed ethernet cabling with professional cable management to ensure both performance and aesthetics. Our technicians can configure your entire smart home ecosystem, integrating various devices into a cohesive network. We implement robust security measures and provide custom networking solutions tailored to your specific needs.",
    metaTitle: "Expert Ethernet & Home Networking Services in Al Ain & Abu Dhabi",
    metaDescription: "Professional ethernet cabling, smart home configuration and custom networking solutions for properties in Al Ain & Abu Dhabi.",
    metaKeywords: "ethernet installation, home networking, smart home setup, cable management, Al Ain, Abu Dhabi, internet cable installation"
  },
  "cctv": {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional security camera solutions for home and business in Al Ain & Abu Dhabi",
    highlights: [
      "HD & 4K camera installation",
      "Remote monitoring setup",
      "Night vision systems",
      "Motion detection configuration",
      "Complete security solutions",
    ],
    content: "Our CCTV installation services provide comprehensive security solutions for homes and businesses in Al Ain and Abu Dhabi. We install high-definition and 4K security cameras with night vision capabilities to ensure round-the-clock monitoring. Our technicians set up remote viewing access so you can monitor your property from anywhere. We configure motion detection systems and can integrate your CCTV system with other security measures for complete protection.",
    metaTitle: "Professional CCTV & Security Camera Installation in Al Ain & Abu Dhabi",
    metaDescription: "Expert HD & 4K security camera installation with remote monitoring and night vision systems for properties in Al Ain & Abu Dhabi.",
    metaKeywords: "CCTV installation, security cameras, remote monitoring, motion detection, Al Ain, Abu Dhabi, HD cameras"
  },
  "voip": {
    icon: Phone,
    title: "VOIP Solutions",
    description: "Advanced voice over IP telephony systems in Al Ain & Abu Dhabi",
    highlights: [
      "Business phone system setup",
      "Cloud PBX integration",
      "Call center solutions",
      "Video conferencing setup",
      "Cost-effective communication",
    ],
    content: "Our VOIP solutions provide modern communication systems for businesses in Al Ain and Abu Dhabi. We set up advanced business phone systems that leverage internet connectivity for cost-effective and feature-rich communications. Our technicians can integrate cloud PBX systems, configure call center solutions, and set up video conferencing capabilities. Our VOIP installations help businesses reduce communication costs while enhancing functionality and reliability.",
    metaTitle: "Professional VOIP & Business Phone System Solutions in Al Ain & Abu Dhabi",
    metaDescription: "Expert business phone system setup, cloud PBX integration and call center solutions for companies in Al Ain & Abu Dhabi.",
    metaKeywords: "VOIP installation, business phone systems, cloud PBX, video conferencing, Al Ain, Abu Dhabi, call center solutions"
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceId && services[serviceId] ? services[serviceId] : null;
  
  if (!service) {
    return <div>Service not found</div>;
  }

  // Set meta tags dynamically
  React.useEffect(() => {
    document.title = service.metaTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", service.metaDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", service.metaDescription);
      document.head.appendChild(metaDescription);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", service.metaKeywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", service.metaKeywords);
      document.head.appendChild(metaKeywords);
    }
  }, [service]);

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <ServiceIcon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h1>
            <p className="text-xl text-slate-600 mb-8">{service.description}</p>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Expert {service.title} in Al Ain & Abu Dhabi</h2>
              <p className="text-slate-600 mb-6">{service.content}</p>
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
                  {service.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-slate-600">{highlight}</span>
                    </li>
                  ))}
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

export default ServicePage;
