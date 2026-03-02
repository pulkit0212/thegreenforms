import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { aboutStory, brand, whyUs } from "@/data/siteContent";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = buildMetadata({
    title: "About",
    description: `Learn about ${brand.name} — a premium interior design studio serving ${brand.citiesServed.join(" & ")}. Our story, values, and design philosophy.`,
    path: "/about",
});

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="relative bg-softblack pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-softblack via-softblack/90 to-softblack" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-center">
                    <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-6">
                        Our Story
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-ivory leading-[1.1] max-w-5xl mx-auto">
                        Designing With
                        <br />
                        <span className="italic text-gold">Purpose</span>
                    </h1>
                </div>
            </section>

            {/* About Story */}
            <section className="py-20 md:py-28 bg-cream">
                <div className="mx-auto max-w-3xl px-6 md:px-12">
                    {aboutStory.split("\n\n").map((paragraph, i) => (
                        <p
                            key={i}
                            className="font-body text-base md:text-lg text-charcoal/70 leading-relaxed mb-6 last:mb-0"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>

            {/* Why Us */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <div className="text-center mb-16">
                        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                            Why Choose Us
                        </p>
                        <h2 className="font-display text-3xl md:text-5xl text-softblack">
                            The {brand.name} Difference
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyUs.map((item) => (
                            <div
                                key={item.title}
                                className="p-8 md:p-10 bg-white/60 border border-sand/40"
                            >
                                <h3 className="font-display text-lg text-softblack mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28 bg-softblack text-center">
                <div className="mx-auto max-w-4xl px-6 md:px-12">
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                        Ready to Start?
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl text-ivory mb-8">
                        Let&apos;s Work Together
                    </h2>
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
