import { Wifi, Cable, Network, Server } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FloatingButtons } from "@/components/FloatingButtons";

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
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <FloatingButtons />
    </div>
  );
};

export default Index;
