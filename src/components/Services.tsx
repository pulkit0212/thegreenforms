"use client";

import { motion } from "framer-motion";
import { services } from "@/data/siteContent";

const iconMap = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-10 h-10">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-10 h-10">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-10 h-10">
      <path d="M20 7H4a2 2 0 00-2 2v6h20V9a2 2 0 00-2-2z" />
      <path d="M2 15v2a2 2 0 002 2h16a2 2 0 002-2v-2" />
      <line x1="6" y1="19" x2="6" y2="21" />
      <line x1="18" y1="19" x2="18" y2="21" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-10 h-10">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="6" x2="9" y2="6.01" />
      <line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" />
      <line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" />
      <line x1="15" y1="14" x2="15" y2="14.01" />
      <path d="M9 18h6v4H9z" />
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Our Expertise
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-softblack">
            What We Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-10 md:p-12 bg-white/60 border border-sand/40 hover:border-gold/30 transition-colors duration-500 cursor-default"
            >
              <div className="text-warmgray group-hover:text-gold transition-colors duration-500 mb-8">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-display text-xl md:text-2xl text-softblack mb-4">
                {service.title}
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                {service.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
