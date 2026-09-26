import { Phone, Mail, MessageCircle, Clock, Calendar, MapPin, Camera, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/60 py-space-3xl">
      <div className="w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">

        {/* Brand column */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center gap-3">
            <img alt="Grafiarte" className="w-10 h-10 rounded-full border border-secondary-container/40" src="/images/logo-fondo.jpeg" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-lg font-bold text-white uppercase">Grafiarte</span>
              <span className="font-label-sm text-[10px] text-secondary tracking-widest uppercase -mt-0.5">Giro Creativo</span>
            </div>
          </div>
          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Fabricación de letreros luminosos de gran formato, letras corpóreas 3D con luz LED, rotulación vehicular integral y branding comercial arquitectónico de alto impacto.
          </p>
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            <span className="font-label-sm text-xs font-semibold text-secondary-fixed">Taller Activo • Fabricando Hoy</span>
          </div>
        </div>

        {/* Direct Channels */}
        <div className="flex flex-col gap-space-sm">
          <span className="font-headline-sm text-base font-bold text-white uppercase tracking-wider">Canales Directos</span>
          <div className="flex flex-col gap-space-xs font-body-sm text-sm text-on-surface-variant">
            <a className="flex items-center gap-space-xs hover:text-white transition-colors" href="tel:+526688334883">
              <Phone size={18} className="text-secondary-container" />
              +52 668 833 4883
            </a>
            <a className="flex items-center gap-space-xs hover:text-white transition-colors" href="mailto:contacto@grafiarte.com">
              <Mail size={18} className="text-secondary-container" />
              contacto@grafiarte.com
            </a>
            <a className="flex items-center gap-space-xs hover:text-secondary transition-colors" href="https://wa.me/526688334883" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} className="text-secondary-container" />
              WhatsApp Presupuestos
            </a>
          </div>
        </div>

        {/* Workshop Schedule */}
        <div className="flex flex-col gap-space-sm">
          <span className="font-headline-sm text-base font-bold text-white uppercase tracking-wider">Horarios &amp; Taller</span>
          <div className="flex flex-col gap-space-2xs font-body-sm text-sm text-on-surface-variant">
            <p className="flex items-center gap-space-xs">
              <Clock size={18} className="text-primary" />
              Lunes a Viernes: 08:30 - 18:30
            </p>
            <p className="flex items-center gap-space-xs">
              <Calendar size={18} className="text-primary" />
              Sábados: 09:00 - 14:00
            </p>
            <p className="font-label-sm text-xs text-secondary-fixed uppercase mt-space-xs font-semibold">
              Instalaciones Técnicas Nocturnas Disponibles
            </p>
          </div>
        </div>

        {/* Location & Socials */}
        <div className="flex flex-col gap-space-sm">
          <span className="font-headline-sm text-base font-bold text-white uppercase tracking-wider">Ubicación &amp; Cobertura</span>
          <p className="font-body-sm text-sm text-on-surface-variant flex items-start gap-space-xs">
            <MapPin size={18} className="text-secondary-container shrink-0 mt-0.5" />
            Zona Industrial y Comercial. Servicio, producción e instalación local y cobertura regional.
          </p>
          <div className="flex items-center gap-space-sm mt-space-xs">
            <a className="w-9 h-9 rounded-xl bg-surface-container border border-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-secondary-container hover:border-secondary-container/40 transition-colors" href="https://instagram.com/grafiarte" target="_blank" rel="noopener noreferrer">
              <Camera size={18} />
            </a>
            <a className="w-9 h-9 rounded-xl bg-surface-container border border-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-colors" href="#">
              <Globe size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop mt-space-2xl pt-space-lg border-t border-surface-container-high/40 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-sm text-xs text-on-surface-variant">
        <p>© 2024 Grafiarte - Giro Creativo. Todos los derechos reservados.</p>
        <p className="font-label-sm text-[11px] tracking-wider uppercase text-secondary">Publicidad Exterior • Rotulación • Letreros LED</p>
      </div>
    </footer>
  );
};
