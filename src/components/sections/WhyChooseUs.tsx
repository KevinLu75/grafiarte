import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Palette, HardHat, Gauge, Hammer, HeadphonesIcon, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export const WhyChooseUs = () => {
  return (
    <section className="w-full py-space-3xl bg-surface border-t border-surface-container-high/50" id="por-que-elegirnos">
      <div className="w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-space-2xl flex flex-col gap-space-2xs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-semibold">Confianza &amp; Durabilidad</span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">Por Qué Trabajar con Grafiarte</h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            Construimos letreros que no sólo se ven espectaculares el día de la inauguración, sino que perduran firmes y brillantes con el paso del tiempo.
          </p>
        </motion.div>

        {/* 3 Columns Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-space-xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Pillar 1 */}
          <motion.div variants={fadeUp} className="bg-surface-container-low border border-surface-container-high/70 hover:border-primary-container/50 p-space-xl rounded-2xl flex flex-col gap-space-md shadow-md hover:bg-surface-container transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-surface-container-high border border-primary-container/30 flex items-center justify-center text-secondary-container shadow-inner">
              <Shield size={32} />
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-lg font-bold text-white group-hover:text-secondary-container transition-colors">Materiales Resistentes al Clima</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Utilizamos aluminio compuesto (ACM), acrílicos vírgenes de grado óptico con protección UV y módulos LED impermeables IP67. Soportan lluvia, calor extremo y polvo sin perder intensidad ni color.
              </p>
            </div>
            <div className="pt-space-sm mt-auto">
              <div className="flex items-center gap-2 text-secondary-container font-label-sm text-xs font-semibold">
                <CheckCircle2 size={16} />
                <span>Protección contra decoloración</span>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div variants={fadeUp} className="bg-surface-container-low border border-surface-container-high/70 hover:border-secondary-container/50 p-space-xl rounded-2xl flex flex-col gap-space-md shadow-md hover:bg-surface-container transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-surface-container-high border border-secondary-container/30 flex items-center justify-center text-primary shadow-inner">
              <Palette size={32} />
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-lg font-bold text-white group-hover:text-primary transition-colors">Asesoría de Diseño Personalizada</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                No eres un número más. Evaluamos el entorno físico de tu local, la distancia visual desde la calle y la iluminación circundante para recomendar el tipo de letrero exacto que maximice tus ventas.
              </p>
            </div>
            <div className="pt-space-sm mt-auto">
              <div className="flex items-center gap-2 text-primary font-label-sm text-xs font-semibold">
                <CheckCircle2 size={16} />
                <span>Renders y fotomontajes previos</span>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div variants={fadeUp} className="bg-surface-container-low border border-surface-container-high/70 hover:border-tertiary-container/50 p-space-xl rounded-2xl flex flex-col gap-space-md shadow-md hover:bg-surface-container transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-surface-container-high border border-tertiary-container/30 flex items-center justify-center text-tertiary shadow-inner">
              <HardHat size={32} />
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-lg font-bold text-white group-hover:text-tertiary-fixed transition-colors">Tiempos Ágiles &amp; Instalación Experta</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Equipo técnico capacitado para anclajes seguros en alturas, conexiones eléctricas con cajas herméticas y certificadas, entregando en la fecha acordada sin retrasar tu apertura comercial.
              </p>
            </div>
            <div className="pt-space-sm mt-auto">
              <div className="flex items-center gap-2 text-tertiary font-label-sm text-xs font-semibold">
                <CheckCircle2 size={16} />
                <span>Montajes diurnos y nocturnos</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Industrial Stats / Trust Ribbon */}
        <motion.div 
          className="mt-space-2xl p-space-lg bg-surface-container-lowest border border-surface-container-high rounded-xl shadow-lg flex flex-wrap items-center justify-around gap-space-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-space-sm">
            <Gauge className="text-secondary-container" size={32} />
            <div className="flex flex-col">
              <span className="font-label-lg text-sm font-bold text-white">Cotizaciones en 24h</span>
              <span className="font-body-sm text-xs text-on-surface-variant">Respuesta rápida con desglose</span>
            </div>
          </div>
          <div className="w-px h-10 bg-surface-container-high hidden md:block"></div>
          <div className="flex items-center gap-space-sm">
            <Hammer className="text-primary" size={32} />
            <div className="flex flex-col">
              <span className="font-label-lg text-sm font-bold text-white">Taller Metalmecánico</span>
              <span className="font-body-sm text-xs text-on-surface-variant">Corte router CNC y termoformado</span>
            </div>
          </div>
          <div className="w-px h-10 bg-surface-container-high hidden md:block"></div>
          <div className="flex items-center gap-space-sm">
            <HeadphonesIcon className="text-tertiary" size={32} />
            <div className="flex flex-col">
              <span className="font-label-lg text-sm font-bold text-white">Garantía Escrita</span>
              <span className="font-body-sm text-xs text-on-surface-variant">En LEDs, fuentes y sujeción</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
