"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── Visual states ── */
  const isHeroState = isHome && !scrolled;

  const navBg = isHeroState
    ? "bg-black/12 backdrop-blur-md border-b border-white/12"
    : "bg-cream/95 backdrop-blur-md shadow-sm";

  const linkColor = isHeroState
    ? "text-white/90 hover:text-white"
    : "text-charcoal/80 hover:text-softblack";
  const hamburgerColor = isHeroState ? "bg-white" : "bg-softblack";

  const textShadowStyle: React.CSSProperties = isHeroState
    ? { textShadow: "0 2px 10px rgba(0,0,0,0.35)" }
    : {};

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${navBg}`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-12 py-5">
          <Link href="/" className="block transition-opacity duration-500 hover:opacity-80">
            <img
              src={isHeroState ? "/logo-light.png" : "/logo.png"}
              alt="The Green Forms"
              className="h-12 w-auto object-contain transition-all duration-500"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`group relative font-body text-sm tracking-widest uppercase transition-colors duration-300 ${linkColor} ${isActive ? "font-semibold" : ""}`}
                    style={textShadowStyle}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 transition-all duration-300 ${hamburgerColor} ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${hamburgerColor} ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-lg md:hidden flex items-center justify-center"
          >
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl text-softblack tracking-wide"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
