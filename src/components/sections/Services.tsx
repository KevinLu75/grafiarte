import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Truck, Maximize, Tent, GlassWater, ArrowRight } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  {
    id: 1,
    title: "Letreros Luminosos & Cajas de Luz",
    description: "Letras 3D retroiluminadas con módulos LED de bajo consumo, acrílico termoformado, neón flex siliconado y perfiles de aluminio para máxima visibilidad tanto diurna como nocturna.",
    specs: "LED IP67 • Acrílico 3mm & 5mm • Perfiles de Aluminio",
    icon: <Lightbulb size={26} />,
    colorClass: "text-secondary-container group-hover:bg-primary-container group-hover:text-white border-primary-container/20",
    titleHover: "group-hover:text-secondary",
    cardHover: "hover:border-primary-container/60",
    colSpan: "col-span-1"
  },
  {
    id: 2,
    title: "Rotulación Vehicular & Flotas",
    description: "Vinilo fundido de alta adherencia y corte de precisión computarizado con laminado protector anti-rayones y filtro UV. Transformamos utilitarios, camionetas y trailers en vallas publicitarias móviles.",
    specs: "Vinilo polimérico / fundido • Corte plotter • Resistencia lavado",
    icon: <Truck size={26} />,
    colorClass: "text-secondary-fixed-dim group-hover:bg-secondary-container group-hover:text-on-secondary border-secondary-container/20",
    titleHover: "group-hover:text-secondary-container",
    cardHover: "hover:border-secondary-container/60",
    colSpan: "col-span-1"
  },
  {
    id: 3,
    title: "Cartelería & Lonas Publicitarias",
    description: "Impresión digital en gran formato sobre lonas frontlit, backlite de alto brillo y microperforados para cristales con estructuras de soporte soldadas y tensado profesional de alta resistencia al viento.",
    specs: "Gran Formato 1440 DPI • Refuerzo perimetral • Ojalillos metálicos",
    icon: <Maximize size={26} />,
    colorClass: "text-tertiary group-hover:bg-tertiary-container group-hover:text-white border-tertiary-container/20",
    titleHover: "group-hover:text-tertiary-fixed",
    cardHover: "hover:border-tertiary-container/60",
    colSpan: "col-span-1"
  },
  {
    id: 4,
    title: "Ambientación & Escenografías",
    description: "Stands temáticos para ferias y congresos, photobooths fotogénicos de gran formato, arcos corpóreos y señalética arquitectónica integral pensada para generar fotos memorables e interacción social.",
    specs: "Madera estructural • Corpóreos EPS • Montaje rápido",
    icon: <Tent size={26} />,
    colorClass: "text-primary group-hover:bg-primary-container group-hover:text-white border-primary-container/20",
    titleHover: "group-hover:text-primary",
    cardHover: "hover:border-primary-container/60",
    colSpan: "col-span-1"
  },
  {
    id: 5,
    title: "Artículos Promocionales & Merchandising Glow LED",
    description: "Desarrollo de activaciones de marca, vasos con iluminación LED personalizada multicolor, recuerdos de alto impacto para eventos corporativos, bodas, XV años y uniformes técnicos con marcaje publicitario de máxima fidelidad.",
    specs: "Tecnología lumínica LED • Serigrafía y vinilo premium • Producción en volumen",
    icon: <GlassWater size={26} />,
    colorClass: "text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary border-secondary-container/20",
    titleHover: "group-hover:text-secondary-container",
    cardHover: "hover:border-secondary-container/60",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    hasButton: true
  }
];

export const Services = () => {
  return (
    <section className="w-full py-space-3xl bg-surface border-t border-surface-container-high/50" id="servicios">
      <div className="w-full max-w-[80rem] mx-auto px-gutter-mobile lg:px-gutter-desktop">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl"
        >
          <div className="flex flex-col gap-space-2xs">
            <span className="font-label-sm text-xs text-secondary-container uppercase tracking-widest font-semibold">Nuestras Capacidades Técnicas</span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">Servicios Especializados de Fabricación</h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md text-sm sm:text-base leading-relaxed">
            Transformamos ideas en piezas corpóreas e iluminación de precisión listas para resistir lluvia, sol y altas exigencias comerciales.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className={`bg-surface-container-low border border-surface-container-high/60 rounded-xl p-space-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group ${service.cardHover} ${service.colSpan}`}
            >
              <div className="flex flex-col gap-space-md">
                <div className={`w-12 h-12 rounded-xl bg-surface-container-high border flex items-center justify-center transition-all shadow-sm ${service.colorClass}`}>
                  {service.icon}
                </div>
                <div className="flex flex-col gap-space-2xs">
                  <h3 className={`font-headline-sm text-lg font-bold text-white transition-colors ${service.titleHover}`}>
                    {service.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className={`pt-space-md mt-space-md bg-surface-container-lowest/70 border border-surface-container-high/50 rounded-lg p-space-sm ${service.hasButton ? 'flex flex-wrap items-center justify-between gap-space-sm' : 'flex flex-col gap-1'}`}>
                <div className="flex flex-col">
                  <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Especificaciones:</span>
                  <span className="font-body-sm text-xs text-on-surface-variant">{service.specs}</span>
                </div>

                {service.hasButton && (
                  <a
                    className="px-space-md py-space-xs bg-primary-container/20 hover:bg-primary-container text-white border border-primary-container/40 font-label-sm text-xs rounded-lg uppercase tracking-wider transition-all inline-flex items-center gap-1 font-semibold"
                    href="https://wa.me/526688334883?text=Hola%20Grafiarte,%20deseo%20cotizar%20artículos%20promocionales%20luminosos"
                  >
                    <span>Cotizar Lotes</span>
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
