"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { brand } from "@/data/siteContent";
import { heroPoster } from "@/lib/assets";

/* ── Animations ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [showVideo, setShowVideo] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    /* ── Reduced motion / saveData / small mobile → poster only ── */
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const conn = typeof navigator !== "undefined" && "connection" in navigator
      ? (navigator as unknown as { connection?: { saveData?: boolean } }).connection
      : undefined;
    const saveData = conn?.saveData === true;

    const isSmallMobile =
      typeof window !== "undefined" && window.innerWidth < 640;

    if (prefersReduced || saveData || isSmallMobile) {
      setShowVideo(false);
      return;
    }

    /* ── IntersectionObserver: play/pause video based on visibility ── */
    const video = videoRef.current;
    if (!video) return;

    const handlePlaying = () => setVideoPlaying(true);
    video.addEventListener("playing", handlePlaying);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden"
    >
      {/* Layer 1: Video or Poster */}
      {showVideo ? (
        <>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            className="absolute inset-0 w-full h-full object-cover opacity-75 z-0"
            style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.05)" }}
          >
            <source src="/placeholder-hero.mp4" type="video/mp4" />
          </video>
          {/* Poster overlay — stays visible until video actually starts playing */}
          <img
            src={heroPoster}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-1000 ease-out ${videoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.05)" }}
          />
        </>
      ) : (
        <img
          src={heroPoster}
          alt="The Green Edges – luxury interior design"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.05)" }}
        />
      )}

      {/* Layer 2: Subtle colour overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Layer 3: Edge gradients for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-[15]" />

      {/* Layer 4: Hero Content – NO blur, NO backdrop-filter here */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          variants={fadeUp}
          className="font-body text-xs md:text-sm tracking-[0.35em] uppercase text-white mb-6"
        >
          Luxury Interior Design Studio in {brand.citiesServed.join(" & ")}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.1] max-w-5xl"
        >
          {brand.tagline.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="italic text-gold">
            {brand.tagline.split(" ").slice(2).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 md:mt-8 font-body text-base md:text-lg text-white/85 max-w-xl leading-relaxed"
        >
          {brand.subTagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/projects"
            className="px-10 py-4 border border-gold/60 text-ivory font-body text-sm tracking-widest uppercase hover:bg-gold/20 transition-all duration-500"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 bg-gold text-softblack font-body text-sm tracking-widest uppercase hover:bg-gold/80 transition-all duration-500"
          >
            Book Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
