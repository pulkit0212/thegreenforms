"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/siteContent";

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            How We Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-softblack">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative text-center md:text-left"
            >
              <span className="font-display text-5xl md:text-6xl text-sand/40 leading-none">
                {step.number}
              </span>
              <h3 className="font-display text-lg md:text-xl text-softblack mt-4 mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-charcoal/55 leading-relaxed max-w-[260px] mx-auto md:mx-0">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
