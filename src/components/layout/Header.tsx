import React, { useState, useEffect } from 'react';
import { MessageCircle, Camera, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería de Trabajos', href: '#galeria' },
    { name: 'Por Qué Elegirnos', href: '#por-que-elegirnos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-surface/85 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)] py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="h-16 w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">

        {/* Logo Branding */}
        <a className="flex items-center gap-3 group" href="#inicio">
          <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-primary-container via-secondary-container to-blue-500 shadow-[0_0_15px_rgba(0,102,255,0.4)] group-hover:shadow-[0_0_22px_rgba(0,210,255,0.6)] transition-all shrink-0">
            <img
              alt="Grafiarte Logo Oficial"
              className="w-full h-full object-cover rounded-full"
              src="/images/logo-fondo.jpeg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-lg font-bold text-white tracking-tight uppercase group-hover:text-secondary transition-colors">Grafiarte</span>
            <span className="font-label-sm text-[10px] tracking-[0.2em] text-secondary-fixed-dim uppercase -mt-1">Giro Creativo</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-lg font-label-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-on-surface-variant hover:text-white uppercase tracking-wider transition-colors font-medium"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden lg:flex items-center gap-space-xs">
          <a
            className="px-space-sm py-space-xs bg-gradient-to-r from-primary-container to-tertiary-container text-white font-label-md text-label-md uppercase rounded-lg hover:brightness-110 transition-all flex items-center gap-space-2xs shadow-[0_0_18px_rgba(0,102,255,0.4)] active:scale-95"
            href="https://wa.me/526688334883?text=Hola%20Grafiarte,%20me%20interesa%20una%20cotización"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            <span className="font-semibold">WhatsApp</span>
          </a>
          <a
            className="px-space-sm py-space-xs bg-surface-container-low border border-surface-container-highest/80 text-on-surface-variant font-label-md text-label-md uppercase rounded-lg hover:bg-surface-container-high hover:text-white transition-all flex items-center gap-space-2xs"
            href="https://instagram.com/grafiarte07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Camera size={16} className="text-secondary" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-surface-container/95 backdrop-blur-xl border-b border-surface-container-high/60 shadow-xl flex flex-col p-space-md gap-space-md">
          <nav className="flex flex-col gap-space-sm font-label-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="text-on-surface-variant hover:text-white uppercase tracking-wider transition-colors font-medium py-2 border-b border-white/5"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-space-xs pt-2">
            <a
              className="px-space-sm py-space-sm bg-gradient-to-r from-primary-container to-tertiary-container text-white font-label-md text-center uppercase rounded-lg shadow-[0_0_18px_rgba(0,102,255,0.4)] flex items-center justify-center gap-2"
              href="https://wa.me/526688334883?text=Hola%20Grafiarte,%20me%20interesa%20una%20cotización"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              className="px-space-sm py-space-sm bg-surface-container-low border border-surface-container-highest/80 text-on-surface-variant font-label-md text-center uppercase rounded-lg flex items-center justify-center gap-2"
              href="https://instagram.com/grafiarte07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Camera size={18} className="text-secondary" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
