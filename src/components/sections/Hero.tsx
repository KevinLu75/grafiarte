import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Camera } from 'lucide-react';
import { Button } from '../ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-3xl lg:py-space-4xl" id="inicio">
      {/* Atmospheric Neon Glows */}
      <div className="absolute -top-24 left-1/4 w-[32rem] h-[32rem] bg-primary-container/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[28rem] h-[28rem] bg-secondary-container/12 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-tertiary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop relative z-10 pt-20 lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

          {/* Left Editorial Copy */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-space-lg"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Workshop Active Micro-Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-surface-container-low border border-primary-container/30 shadow-[0_0_15px_rgba(0,102,255,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-container"></span>
              </span>
              <span className="font-label-sm text-xs font-semibold uppercase tracking-wider text-secondary-fixed">Fabricación Profesional en Taller Propio</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={fadeUp} className="font-headline-xl text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Hacemos que tu marca <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed-dim via-secondary-container to-primary drop-shadow-[0_0_24px_rgba(0,210,255,0.4)]">brille con fuerza</span> y destaque en la calle.
            </motion.h1>

            {/* Supporting Subtitle */}
            <motion.p variants={fadeUp} className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Especialistas en letreros luminosos 3D, cajas de luz, rotulación vehicular, carteles publicitarios, lonas y escenografías para potenciar la presencia e identidad arquitectónica de tu negocio.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <Button asChild variant="primary" size="lg" className="group">
                <a href="https://wa.me/526688334883?text=Hola%20Grafiarte,%20me%20interesa%20una%20cotización" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} className="transition-transform group-hover:scale-110" />
                  <span className="font-bold">Contactar por WhatsApp</span>
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="https://instagram.com/grafiarte07" target="_blank" rel="noopener noreferrer">
                  <Camera size={20} className="text-secondary" />
                  <span className="font-medium">Ver en Instagram</span>
                </a>
              </Button>
            </motion.div>

            {/* Spec Badges */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md">
              <div className="p-space-sm bg-surface-container-low border border-surface-container-high rounded-lg flex flex-col gap-1 shadow-sm">
                <span className="font-headline-sm text-xl font-bold text-secondary-fixed-dim">+10 Años</span>
                <span className="font-label-sm text-[11px] font-medium text-on-surface-variant uppercase">De Experiencia</span>
              </div>
              <div className="p-space-sm bg-surface-container-low border border-surface-container-high rounded-lg flex flex-col gap-1 shadow-sm">
                <span className="font-headline-sm text-xl font-bold text-primary">IP67 / UV</span>
                <span className="font-label-sm text-[11px] font-medium text-on-surface-variant uppercase">Máxima Durabilidad</span>
              </div>
              <div className="p-space-sm bg-surface-container-low border border-surface-container-high rounded-lg flex flex-col gap-1 shadow-sm">
                <span className="font-headline-sm text-xl font-bold text-tertiary">100% Propia</span>
                <span className="font-label-sm text-[11px] font-medium text-on-surface-variant uppercase">Diseño &amp; Taller</span>
              </div>
              <div className="p-space-sm bg-surface-container-low border border-surface-container-high rounded-lg flex flex-col gap-1 shadow-sm">
                <span className="font-headline-sm text-xl font-bold text-white">Garantía</span>
                <span className="font-label-sm text-[11px] font-medium text-on-surface-variant uppercase">En Instalación</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Featured Visual Card */}
          <motion.div
            className="lg:col-span-5 relative mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative bg-surface-container-low border border-surface-container-high/80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
              <div className="relative h-[440px] w-full overflow-hidden">
                <img
                  alt="Caja de Luz Vintage Brulée Coffee Fabricada por Grafiarte"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  src="/images/luminaria.jpeg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/30 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md border border-secondary-container/30 px-space-sm py-1.5 rounded-lg font-label-sm text-[11px] text-secondary font-semibold tracking-wider uppercase shadow-lg">
                  Proyecto Reciente • Acabado Cálido
                </div>
              </div>

              {/* Card Bottom Spec Meta */}
              <div className="p-space-md bg-surface-container-low flex flex-col gap-space-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs text-secondary-container font-semibold tracking-wider uppercase">Caja de Luz Arquitectónica</span>
                  <span className="font-label-sm text-xs text-tertiary-fixed flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary-container"></span> LED Cálido 3000K
                  </span>
                </div>
                <h2 className="font-headline-sm text-xl font-bold text-white">Luminaria Tipo Cubo Vintage - Brulée Coffee</h2>
                <p className="font-body-sm text-sm text-on-surface-variant">Estructura metálica termoesmaltada negra con acrílico difusor de alto contraste exterior.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
