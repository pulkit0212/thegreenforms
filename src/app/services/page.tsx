import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { services, brand } from "@/data/siteContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = buildMetadata({
    title: "Services",
    description: `Explore our interior design services — from full-home design and space planning to bespoke furnishing and commercial interiors. Serving ${brand.citiesServed.join(" & ")}.`,
    path: "/services",
});

export default function ServicesPage() {
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="relative bg-softblack pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-softblack via-softblack/90 to-softblack" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-center">
                    <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-6">
                        What We Offer
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-ivory leading-[1.1] max-w-5xl mx-auto">
                        Our
                        <span className="italic text-gold"> Services</span>
                    </h1>
                    <p className="mt-6 font-body text-base text-sand/70 max-w-xl mx-auto leading-relaxed">
                        Comprehensive design solutions tailored to create extraordinary
                        spaces for discerning clients.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 md:py-28 bg-cream">
                <div className="mx-auto max-w-5xl px-6 md:px-12 space-y-16">
                    {services.map((service, i) => (
                        <div
                            key={service.title}
                            className="grid md:grid-cols-2 gap-8 md:gap-16 items-start"
                        >
                            <div>
                                <span className="font-display text-5xl text-sand/30 leading-none">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <h2 className="font-display text-2xl md:text-3xl text-softblack mt-3 mb-4">
                                    {service.title}
                                </h2>
                                <p className="font-body text-base text-charcoal/60 leading-relaxed">
                                    {service.shortDesc}
                                </p>
                            </div>
                            <ul className="space-y-3 pt-2">
                                {service.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="flex items-start gap-3 font-body text-sm text-charcoal/70"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28 bg-softblack text-center">
                <div className="mx-auto max-w-4xl px-6 md:px-12">
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                        Let&apos;s Get Started
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl text-ivory mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="font-body text-base text-sand/60 max-w-lg mx-auto leading-relaxed mb-10">
                        Book a complimentary 30-minute consultation to discuss your vision.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-14 py-5 bg-gold text-softblack font-body text-sm tracking-widest uppercase hover:bg-gold/80 transition-colors duration-500"
                    >
                        Book Consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
