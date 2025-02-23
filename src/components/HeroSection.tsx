
import { useEffect } from "react";
import { Button } from "./ui/button";
import { Wifi } from "lucide-react";
import { renderCanvas } from "./ui/canvas";

export function HeroSection() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 space-x-2 animate-fade-in">
            <Wifi className="w-8 h-8 text-secondary" />
            <span className="text-sm font-medium text-secondary">Technical Services</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl animate-slide-up">
            Expert Network Cabling & Fiber Optic Installation Services in Al Ain & Abu Dhabi
          </h1>
          <p className="mx-auto mb-8 text-xl leading-relaxed text-slate-600 max-w-2xl animate-fade-in">
            Same-Day WiFi Setup, NETGEAR Extender Installation, and Reliable Fiber Repairs
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button 
              size="lg" 
              className="animate-fade-in hover:bg-secondary/90"
              onClick={() => window.location.href = 'tel:+971569811332'}
            >
              Get Free Consultation Today
            </Button>
            <Button size="lg" variant="outline" className="animate-fade-in">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
      <canvas
        className="pointer-events-none absolute inset-0 -z-10"
        id="canvas"
      ></canvas>
    </section>
  );
}
