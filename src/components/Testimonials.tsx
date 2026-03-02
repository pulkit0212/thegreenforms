"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/siteContent";

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-softblack">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Client Stories
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ivory">
            Kind Words
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-l border-gold/30 pl-8 md:pl-10"
            >
              <p className="font-display text-lg md:text-xl text-ivory/85 italic leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-body text-sm text-ivory/90 tracking-wide">
                  {testimonial.author}
                </p>
                <p className="font-body text-xs text-warmgray mt-1">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
