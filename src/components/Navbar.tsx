
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Wifi } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wifi className="w-8 h-8 text-primary" />
              <span className="text-lg font-bold text-slate-900">Technical Services</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/network-installation" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Network Installation
            </Link>
            <Link to="/fiber-optic" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Fiber Optic
            </Link>
            <Link to="/wifi-setup" className="text-slate-700 hover:text-primary font-medium transition-colors">
              WiFi Setup
            </Link>
            <Link to="/ethernet" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Ethernet
            </Link>
            <Link to="/cctv" className="text-slate-700 hover:text-primary font-medium transition-colors">
              CCTV
            </Link>
            <Link to="/voip" className="text-slate-700 hover:text-primary font-medium transition-colors">
              VOIP
            </Link>
            <Button 
              size="sm" 
              className="ml-4"
              onClick={() => window.location.href = 'tel:+971569811332'}
            >
              Call Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-2">
          <nav className="flex flex-col space-y-3 py-4">
            <Link to="/" className="text-slate-700 hover:text-primary font-medium py-2 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/network-installation" className="text-slate-700 hover:text-primary font-medium py-2 transition-colors" onClick={toggleMenu}>
              Network Installation
            </Link>
            <Link to="/fiber-optic" className="text-slate-700 hover:text-primary font-medium py-2 transition-colors" onClick={toggleMenu}>
              Fiber Optic
            </Link>
            <Link to="/wifi-setup" className="text-slate-700 hover:text-primary font-medium py-2 transition-colors" onClick={toggleMenu}>
              WiFi Setup
            </Link>
            <Link to="/ethernet" className="text-slate-700 hover:text-primary font-medium py-2 transition-colors" onClick={toggleMenu}>
              Ethernet
            </Link>
            <Link to="/cctv" className="text-slate-700 hover:text-primary font-medium py-2 transition-colors" onClick={toggleMenu}>
              CCTV
            </Link>
            <Link to="/voip" className="text-slate-700 hover:text-primary font-medium py-2 transition-colors" onClick={toggleMenu}>
              VOIP
            </Link>
            <Button 
              size="sm" 
              className="mt-4 w-full"
              onClick={() => window.location.href = 'tel:+971569811332'}
            >
              Call Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
