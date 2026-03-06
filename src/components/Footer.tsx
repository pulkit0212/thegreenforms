"use client";

import Link from "next/link";
import { brand } from "@/data/siteContent";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const cityLinks = [
  { label: "Interior Designer Jaipur", href: "/interior-designer-jaipur" },
  { label: "Interior Designer Gurgaon", href: "/interior-designer-gurgaon" },
];

const socials = [
  { label: "Instagram", href: brand.socialLinks.instagram },
  { label: "Pinterest", href: brand.socialLinks.pinterest },
  { label: "LinkedIn", href: brand.socialLinks.linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-softblack pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-8 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="block hover:opacity-80 transition-opacity duration-300">
              <img
                src="/logo-light.svg"
                alt={brand.name}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 font-body text-sm text-white/70 leading-relaxed max-w-xs">
              Crafting timeless luxury interiors that tell your story. Serving
              clients in {brand.citiesServed.join(" & ")} &amp; beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/75 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* City Pages */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-6">
              Our Locations
            </h4>
            <ul className="space-y-3">
              {cityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/75 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] uppercase text-gold mb-6">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="font-body text-sm text-white/75 hover:text-gold transition-colors duration-300"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/60">
            &copy; {new Date().getFullYear()} {brand.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-white/50 hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <a
              href="/sitemap.xml"
              className="font-body text-xs text-white/50 hover:text-gold transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
          <p className="font-body text-xs text-white/50">
            Designed with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
