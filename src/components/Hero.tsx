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
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  /**
   * Whether to skip video entirely.
   * Only skip for prefers-reduced-motion or save-data.
   * Do NOT skip for small screens — try video, fall back to poster.
   */
  const [skipVideo, setSkipVideo] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const conn =
      typeof navigator !== "undefined" && "connection" in navigator
        ? (navigator as unknown as { connection?: { saveData?: boolean } })
          .connection
        : undefined;
    const saveData = conn?.saveData === true;

    if (prefersReduced || saveData) {
      setSkipVideo(true);
      return;
    }

    /* ── Try to play the video ── */
    const video = videoRef.current;
    if (!video) return;

    const handlePlaying = () => setVideoPlaying(true);
    const handleError = () => setVideoFailed(true);

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);

    /* ── IntersectionObserver: play/pause video based on visibility ── */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blocked — poster stays visible
            setVideoFailed(true);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
    };
  }, []);

  /** Show poster when: video hasn't started playing, or video errored/blocked */
  const showPoster = !videoPlaying || videoFailed;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: "100svh", maxHeight: "1200px" }}
    >
      {/* ── Layer 0: Video ── */}
      {!skipVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.05)" }}
        >
          <source src="/placeholder-hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* ── Layer 1: Poster image (visible until video is confirmed playing) ── */}
      <img
        src={heroPoster}
        alt="The Green Forms – luxury interior design"
        aria-hidden={!showPoster}
        className={`absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-1000 ease-out ${showPoster ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.05)" }}
      />

      {/* ── Layer 2: Subtle colour overlay ──
           Desktop: bg-black/20 (original)
           Mobile:  bg-black/10 (lighter to keep hero visible) */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/20 z-10" />

      {/* ── Layer 3: Edge gradients for text readability ──
           Mobile: lighter gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 md:from-black/30 md:to-black/40 z-[15]" />

      {/* ── Layer 4: Hero Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100svh" }}
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
