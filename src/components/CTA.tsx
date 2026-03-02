"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ctaCopy } from "@/data/siteContent";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-32 md:py-44 bg-cream relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
            {ctaCopy.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-softblack leading-[1.1]">
            {ctaCopy.heading.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="italic">
              {ctaCopy.heading.split(" ").slice(2).join(" ")}
            </span>
          </h2>
          <p className="mt-6 md:mt-8 font-body text-base md:text-lg text-softblack/80 max-w-lg mx-auto leading-relaxed">
            {ctaCopy.body}
          </p>
          <Link
            href={ctaCopy.buttonHref}
            className="inline-block mt-10 md:mt-14 px-14 py-5 bg-softblack text-ivory font-body text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-500"
          >
            {ctaCopy.buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
