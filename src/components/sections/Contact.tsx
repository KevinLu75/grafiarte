import { motion } from 'framer-motion';
import { MessageCircle, Camera, Smartphone, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-lowest relative overflow-hidden border-t border-surface-container-high/50" id="contacto">
      {/* Ambient Backdrop Light Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[44rem] h-[22rem] bg-primary-container/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10">

        {/* CTA Container Card */}
        <motion.div
          className="bg-gradient-to-br from-surface-container-low via-surface-container-low to-surface-container-lowest border border-primary-container/30 rounded-3xl p-space-xl lg:p-space-3xl shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">

            {/* Left CTA Content */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-container border border-primary-container/30 self-start">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">Atención Inmediata</span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                ¿Listo para renovar la imagen de tu negocio?
              </h2>
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Escríbenos directamente y recibe una cotización o asesoría sin compromiso. Dinos qué tienes en mente, compártenos las medidas aproximadas o fotos de tu fachada y te orientamos con la mejor solución.
              </p>

              {/* Prominent Touchpoint Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-sm">
                <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                  <a href="https://wa.me/526688334883?text=Hola%20Grafiarte,%20me%20gustaría%20recibir%20una%20cotización%20inmediata" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={22} />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <a href="https://instagram.com/grafiarte07" target="_blank" rel="noopener noreferrer">
                    <Camera size={22} className="text-secondary" />
                    <span>Seguir en Instagram</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Direct Contact Info Card */}
            <div className="lg:col-span-5 bg-surface-container-lowest/90 border border-surface-container-high/80 p-space-xl rounded-2xl shadow-xl flex flex-col gap-space-lg">
              <div className="flex items-center justify-between border-b border-surface-container-high pb-space-sm">
                <span className="font-label-md text-xs font-bold uppercase text-secondary-container tracking-widest">Información Directa de Taller</span>
                <div className="w-8 h-8 rounded-full p-[1px] bg-primary-container/40">
                  <img alt="Grafiarte" className="w-full h-full object-cover rounded-full" src="/images/logo-fondo.jpeg" />
                </div>
              </div>

              <div className="flex flex-col gap-space-md">
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-primary-container/20 flex items-center justify-center text-secondary-container shrink-0 mt-1">
                    <Smartphone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[11px] font-medium text-on-surface-variant uppercase">Teléfono / WhatsApp Oficial</span>
                    <a className="font-headline-sm text-xl font-bold text-white hover:text-secondary transition-colors" href="tel:+526688334883">
                      668 833 4883
                    </a>
                    <span className="font-body-sm text-xs text-secondary-container font-medium">Respuesta directa por WhatsApp</span>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-secondary-container/20 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[11px] font-medium text-on-surface-variant uppercase">Horarios de Atención</span>
                    <p className="font-body-sm text-sm text-white font-semibold">Lunes a Viernes: 08:30 – 18:30</p>
                    <p className="font-body-sm text-xs text-on-surface-variant">Sábados: 09:00 – 14:00 (Con cita previa)</p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-tertiary-container/20 flex items-center justify-center text-tertiary shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[11px] font-medium text-on-surface-variant uppercase">Cobertura de Servicio</span>
                    <p className="font-body-sm text-sm text-white font-semibold">Servicio Local y Envíos Regionales</p>
                    <p className="font-body-sm text-xs text-on-surface-variant">Instalación especializada en sitio y embalaje seguro.</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Fast-Message Link */}
              <a className="w-full py-space-sm bg-primary-container/15 border border-primary-container/40 hover:bg-primary-container text-white font-label-md text-xs rounded-xl text-center uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 font-bold shadow-sm" href="https://wa.me/526688334883?text=Hola%20Grafiarte,%20quiero%20cotizar%20un%20letrero%20luminoso" target="_blank" rel="noopener noreferrer">
                <span>Escribir Mensaje al 668 833 4883</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
