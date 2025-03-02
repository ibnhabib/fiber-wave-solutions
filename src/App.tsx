
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { localBusinessSchema } from "./utils/schema";
import { useEffect } from "react";
import NetworkInstallation from "./pages/NetworkInstallation";
import FiberOptic from "./pages/FiberOptic";
import WifiSetup from "./pages/WifiSetup";
import Ethernet from "./pages/Ethernet";
import CCTV from "./pages/CCTV";
import VOIP from "./pages/VOIP";
import OurServices from "./pages/OurServices";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/network-installation" element={<NetworkInstallation />} />
          <Route path="/fiber-optic" element={<FiberOptic />} />
          <Route path="/wifi-setup" element={<WifiSetup />} />
          <Route path="/ethernet" element={<Ethernet />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/voip" element={<VOIP />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
