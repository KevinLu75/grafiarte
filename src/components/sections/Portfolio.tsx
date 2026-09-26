import React from 'react';
import { motion } from 'framer-motion';
import { Verified, ArrowRight, Camera } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const portfolioItems = [
  {
    id: 1,
    title: "Brulée Coffee",
    category: "Caja de Luz Clásica",
    description: "Luminaria tipo cubo con iluminación cálida vintage, estructura esmaltada y difusores acrílicos.",
    specsLeft: "Luz LED 3000K",
    specsRight: "Acabado Comercial",
    image: "/images/brulee-cafe.jpeg",
    badgeClass: "text-secondary border-white/10",
    hoverClass: "hover:border-primary-container/60 hover:shadow-[0_0_24px_rgba(0,102,255,0.25)]",
    titleHover: "group-hover:text-secondary",
    specColor: "text-secondary"
  },
  {
    id: 2,
    title: "Bola 9 Sport Bar",
    category: "Neón / LED • Escudo 3D",
    description: "Escudo tridimensional volumétrico con relieve corpóreo y halo lumínico verde esmeralda de alto poder nocturno.",
    specsLeft: "Neón Flex Verde",
    specsRight: "Impacto Nocturno",
    image: "/images/bola-9.jpeg",
    badgeClass: "text-secondary-fixed",
    hoverClass: "hover:border-secondary-container/60 hover:shadow-[0_0_24px_rgba(0,210,255,0.3)]",
    titleHover: "group-hover:text-secondary-container",
    specColor: "text-secondary-container"
  },
  {
    id: 3,
    title: "Medical Scrubs",
    category: "Acrílico con Relieve",
    description: "Rótulo luminoso para fachada comercial exterior, con tipografía en alto relieve y retroiluminación uniforme.",
    specsLeft: "Acrílico Láser + LED",
    specsRight: "Fachada Exterior",
    image: "/images/medical-scrubs.jpeg",
    badgeClass: "text-primary-fixed",
    hoverClass: "hover:border-primary-container/60 hover:shadow-[0_0_24px_rgba(0,102,255,0.3)]",
    titleHover: "group-hover:text-primary",
    specColor: "text-secondary-fixed-dim"
  },
  {
    id: 4,
    title: "Van Comercial - Grupo La Invención",
    category: "Rotulación Vehicular",
    description: "Vinilo automotriz blanco de máxima durabilidad y corte computarizado para transporte de equipo y músicos.",
    specsLeft: "Vinilo Polimérico UV",
    specsRight: "Flota Móvil",
    image: "/images/van-rotulada.jpeg",
    badgeClass: "text-secondary",
    hoverClass: "hover:border-primary-container/60 hover:shadow-[0_0_24px_rgba(0,102,255,0.25)]",
    titleHover: "group-hover:text-secondary",
    specColor: "text-secondary"
  },
  {
    id: 5,
    title: "Astro-Ink Tattoo Studio",
    category: "Círculo Neón Flex",
    description: "Disco luminoso circular con halo azul cian ultra brillante y vectorización tipográfica estilizada de alta estética.",
    specsLeft: "Base Acrílica Ahumada",
    specsRight: "Interior & Estudio",
    image: "/images/astro-ink-circulo.jpeg",
    badgeClass: "text-secondary-fixed",
    hoverClass: "hover:border-secondary-container/60 hover:shadow-[0_0_24px_rgba(0,210,255,0.35)]",
    titleHover: "group-hover:text-secondary-container",
    specColor: "text-secondary-fixed-dim"
  },
  {
    id: 6,
    title: "Fitness 3 Calzado y Ropa",
    category: "Corpóreo 3D Exterior",
    description: "Letras corpóreas negras mate con silueta de calzado deportivo en relieve dimensional sobre marquesina exterior.",
    specsLeft: "PVC / Acrílico 3D",
    specsRight: "Marquesina Comercial",
    image: "/images/fitnes3-cartel.jpeg",
    badgeClass: "text-tertiary-fixed",
    hoverClass: "hover:border-primary-container/60 hover:shadow-[0_0_24px_rgba(0,102,255,0.25)]",
    titleHover: "group-hover:text-primary",
    specColor: "text-tertiary"
  },
  {
    id: 7,
    title: "Torii Japonés & Cherry Blossom",
    category: "Escenografía & Photobooth",
    description: "Portal torii bermellón tradicional, biombos con patrones florales y abanico gigante fabricado para ambientación inmersiva de eventos.",
    specsLeft: "Montaje Temático",
    specsRight: "Eventos & Ferias",
    image: "/images/esc-china.jpeg",
    badgeClass: "text-secondary",
    hoverClass: "hover:border-secondary-container/60 hover:shadow-[0_0_24px_rgba(0,210,255,0.25)]",
    titleHover: "group-hover:text-secondary",
    specColor: "text-secondary-fixed"
  },
  {
    id: 8,
    title: "Vasos LED Personalizados",
    category: "Merchandising Glow",
    description: "Lotes de cristalería acrílica con base luminosa multicolor y tipografía grabada para activaciones de marca y eventos exclusivos.",
    specsLeft: "Luz LED Interna",
    specsRight: "Souvenir de Impacto",
    image: "/images/vasos-led.jpeg",
    badgeClass: "text-primary-fixed",
    hoverClass: "hover:border-primary-container/60 hover:shadow-[0_0_24px_rgba(0,102,255,0.3)]",
    titleHover: "group-hover:text-primary",
    specColor: "text-secondary-fixed-dim"
  },
  {
    id: 9,
    title: "Letras Monumentales - Astro Ink",
    category: "Branding de Muro",
    description: "Rotulación arquitectónica de gran formato e isotipo en muro principal de estudio creativo con acabado mate antirreflejo.",
    specsLeft: "Corte Tipográfico Pro",
    specsRight: "Identidad Interior",
    image: "/images/astro-ink-letras.jpeg",
    badgeClass: "text-tertiary-fixed",
    hoverClass: "hover:border-secondary-container/60 hover:shadow-[0_0_24px_rgba(0,210,255,0.25)]",
    titleHover: "group-hover:text-secondary-container",
    specColor: "text-secondary"
  }
];

export const Portfolio = () => {
  return (
    <section className="w-full py-space-3xl bg-surface-container-lowest border-t border-surface-container-high/50" id="galeria">
      <div className="w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">

        {/* Portfolio Intro */}
        <motion.div
          className="flex flex-col gap-space-xs text-center max-w-3xl mx-auto mb-space-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center justify-center gap-space-xs text-secondary-container font-label-md text-xs font-semibold uppercase tracking-widest">
            <Verified size={18} />
            <span>Galería de Trabajos Reales</span>
          </div>
          <h2 className="font-headline-xl text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Proyectos Fabricados • Resultados en Calle</h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            Cada letrero, rotulación y escenografía es producido a medida en nuestras instalaciones con materiales de grado industrial e inspección de iluminación exhaustiva.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className={`bg-surface-container-low border border-surface-container-high/70 rounded-xl overflow-hidden shadow-xl flex flex-col group transition-all duration-300 ${item.hoverClass}`}
            >
              <div className="relative h-72 w-full overflow-hidden bg-surface-container-high">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                />
                <span className={`absolute top-3 left-3 bg-surface-container-lowest/85 backdrop-blur-md border border-white/10 px-space-xs py-1 rounded font-label-sm text-[10px] font-semibold uppercase tracking-wider ${item.badgeClass}`}>
                  {item.category}
                </span>
              </div>
              <div className="p-space-md flex flex-col gap-space-2xs flex-1 justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className={`font-headline-sm text-lg font-bold text-white transition-colors ${item.titleHover}`}>{item.title}</h3>
                  <p className="font-body-sm text-sm text-on-surface-variant">{item.description}</p>
                </div>
                <div className="mt-space-sm pt-space-xs border-t border-surface-container-high flex items-center justify-between text-on-surface-variant font-label-sm text-xs">
                  <span>{item.specsLeft}</span>
                  <span className={`font-semibold ${item.specColor}`}>{item.specsRight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Live Workshop Banner */}
        <motion.div
          className="mt-space-2xl bg-gradient-to-r from-surface-container to-surface-container-low border border-primary-container/30 rounded-2xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-primary-container/20 border border-primary-container/40 text-secondary-container flex items-center justify-center shrink-0">
              <Camera size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-base sm:text-lg font-bold text-white">¿Quieres ver más fotos de procesos y montajes?</span>
              <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">Publicamos letreros encendiéndose por primera vez y rotulaciones todos los días en Instagram.</span>
            </div>
          </div>
          <a
            className="px-space-lg py-space-sm bg-surface-container-high border border-outline-variant/60 text-white hover:text-secondary-container hover:border-secondary-container/50 rounded-xl font-label-md text-xs uppercase tracking-wider transition-all inline-flex items-center gap-space-xs shrink-0 font-semibold"
            href="https://instagram.com/grafiarte07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Explorar @grafiarte07</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
