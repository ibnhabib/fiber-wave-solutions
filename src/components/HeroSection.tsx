import { Button } from "./ui/button";
import { Wifi } from "lucide-react";
import { Link } from "react-router-dom";
export function HeroSection() {
  return <section className="relative pt-32 overflow-hidden bg-gradient-to-b from-white to-slate-50 py-[49px]">
      <div className="container px-4 mx-auto">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 space-x-2 animate-fade-in">
            <Wifi className="w-7 h-7 text-primary" />
            <span className="text-lg font-medium text-primary">Ethernet Installation Services</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl animate-slide-up">
            Expert Network Cabling & Fiber Optic Installation Services in Al Ain & Abu Dhabi
          </h1>
          <p className="mx-auto mb-8 text-xl leading-relaxed text-slate-600 max-w-2xl animate-fade-in">
            Same-Day WiFi Setup, NETGEAR Extender Installation, and Reliable Fiber Repairs
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button size="lg" className="animate-fade-in hover:bg-primary/90" onClick={() => window.location.href = 'tel:+971569811332'}>
              Get Free Consultation Today
            </Button>
            <Link to="/our-services">
              <Button size="lg" variant="outline" className="animate-fade-in">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Enhanced fiber optic animation background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="fiber-lines absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => <div key={i} className="absolute h-1 bg-gradient-to-r from-blue-400 to-primary rounded-full transform animate-fiber" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 300 + 200}px`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          opacity: 0.7
        }} />)}
        </div>
      </div>
    </section>;
}