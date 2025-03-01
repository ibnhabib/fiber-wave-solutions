
import { Wifi, Cable, Network, Server, Camera, Phone } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Network,
    title: "Professional Network Installation",
    description: "Enterprise-grade network solutions for businesses and homes",
    highlights: [
      "CAT 6 cable installation",
      "Structured cabling solutions",
      "Network infrastructure setup",
    ],
    url: "/network-installation"
  },
  {
    icon: Cable,
    title: "Fiber Optic Solutions",
    description: "Expert fiber optic installations and repairs",
    highlights: [
      "Residential & commercial installations",
      "Underground cable repairs",
      "24/7 emergency support",
    ],
    url: "/fiber-optic"
  },
  {
    icon: Wifi,
    title: "WiFi & Networking Setup",
    description: "Seamless wireless solutions for optimal coverage",
    highlights: [
      "Home & office WiFi installation",
      "NETGEAR extender optimization",
      "IoT device integration",
    ],
    url: "/wifi-setup"
  },
  {
    icon: Server,
    title: "Ethernet & Home Networking",
    description: "Complete home networking solutions",
    highlights: [
      "High-speed ethernet cabling",
      "Smart home configuration",
      "Professional cable management",
    ],
    url: "/ethernet"
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional security camera solutions for home and business",
    highlights: [
      "HD & 4K camera installation",
      "Remote monitoring setup",
      "Night vision systems",
      "Motion detection configuration",
    ],
    url: "/cctv"
  },
  {
    icon: Phone,
    title: "VOIP Solutions",
    description: "Advanced voice over IP telephony systems",
    highlights: [
      "Business phone system setup",
      "Cloud PBX integration",
      "Call center solutions",
      "Video conferencing setup",
    ],
    url: "/voip"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive networking solutions delivered by certified local technicians
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link to={service.url} key={index} className="group">
                <ServiceCard {...service} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <FloatingButtons />
    </div>
  );
}

export default Index;
