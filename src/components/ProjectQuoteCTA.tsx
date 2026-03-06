"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { SITE_URL } from "@/lib/seo";

interface ProjectQuoteCTAProps {
    projectTitle: string;
    projectSlug: string;
    city?: string;
    service?: string;
}

/**
 * ProjectQuoteCTA
 * ───────────────
 * Compact CTA box for project detail pages.
 * "Want a similar space?" with WhatsApp + Book Consultation.
 */
export default function ProjectQuoteCTA({
    projectTitle,
    projectSlug,
    city,
    service,
}: ProjectQuoteCTAProps) {
    const projectUrl = `${SITE_URL}/projects/${projectSlug}`;

    const whatsappUrl = buildWhatsAppUrl({
        source: "ProjectDetail",
        city,
        service,
        projectTitle,
        projectUrl,
    });

    const handleWhatsApp = () => {
        trackEvent("whatsapp_click", {
            source: "ProjectDetail",
            projectSlug,
            ...(city && { city }),
            ...(service && { service }),
        });
    };

    const handleBook = () => {
        trackEvent("cta_book_consultation_click", { source: "ProjectDetail" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-7xl px-6 md:px-12 pb-20 md:pb-28"
        >
            <div className="bg-softblack p-10 md:p-14 text-center">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                    Inspired?
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-4">
                    Want a similar space?
                </h3>
                <p className="font-body text-sm text-white/70 max-w-md mx-auto leading-relaxed mb-8">
                    Get a personalised quote for your project. Share your requirements and
                    we&apos;ll craft a design tailored to your space.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsApp}
                        aria-label={`Get a WhatsApp quote for ${projectTitle}`}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-white font-body text-sm tracking-widest uppercase hover:bg-[#1fb855] transition-colors duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 shrink-0">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Get Quote on WhatsApp
                    </a>
                    <Link
                        href={`/contact?project=${projectSlug}&source=ProjectCTA`}
                        onClick={handleBook}
                        aria-label="Book a consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border border-gold/60 text-ivory font-body text-sm tracking-widest uppercase hover:bg-gold/20 transition-all duration-300"
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
