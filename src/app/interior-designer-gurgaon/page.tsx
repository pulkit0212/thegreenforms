import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ProjectsPreview from "@/components/ProjectsPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";

export const metadata: Metadata = buildMetadata({
    title: "Luxury Interior Designer in Gurgaon",
    description:
        "Premium interior design studio in Gurgaon, Haryana. The Green Forms delivers bespoke luxury interiors for modern homes, offices, and commercial spaces in Gurgaon & Delhi NCR.",
    path: "/interior-designer-gurgaon",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Green Forms — Gurgaon",
    url: `${SITE_URL}/interior-designer-gurgaon`,
    description:
        "Premium luxury interior design studio serving Gurgaon, Haryana and Delhi NCR. Bespoke residential and commercial interiors.",
    telephone: "+918209886849",
    email: "uccvib@gmail.com",
    areaServed: [
        { "@type": "City", name: "Gurgaon" },
        { "@type": "Place", name: "Delhi NCR" },
    ],
    priceRange: "₹₹₹₹",
};

export default function InteriorDesignerGurgaon() {
    return (
        <main>
            <SeoJsonLd data={localBusinessSchema} />
            <Navbar />

            {/* City Hero */}
            <section className="relative bg-softblack pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-softblack via-softblack/90 to-softblack" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-center">
                    <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-6">
                        Gurgaon, Haryana
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-ivory leading-[1.1] max-w-5xl mx-auto">
                        Luxury Interior Design
                        <br />
                        <span className="italic text-gold">in Gurgaon</span>
                    </h1>
                    <p className="mt-6 md:mt-8 font-body text-base md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
                        Transforming modern apartments, penthouses, and commercial spaces
                        across Gurgaon and Delhi NCR with design that commands attention
                        and exudes refinement.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact?city=Gurgaon&source=CityPage"
                            className="px-10 py-4 bg-gold text-softblack font-body text-sm tracking-widest uppercase hover:bg-gold/80 transition-all duration-500"
                        >
                            Book Consultation in Gurgaon
                        </Link>
                        <Link
                            href="/projects"
                            className="px-10 py-4 border border-gold/60 text-ivory font-body text-sm tracking-widest uppercase hover:bg-gold/20 transition-all duration-500"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </section>

            <Services />
            <ProjectsPreview />
            <Testimonials />

            {/* City-specific CTA */}
            <section className="py-20 md:py-28 bg-softblack">
                <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                        Ready to Transform Your Space?
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl text-ivory mb-6">
                        Let&apos;s Design Your Dream Interior in Gurgaon
                    </h2>
                    <p className="font-body text-base text-white/80 max-w-lg mx-auto leading-relaxed mb-10">
                        From DLF Phase V penthouses to Golf Course Road offices, we craft
                        interiors that reflect the ambition and sophistication of
                        Millennium City.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact?city=Gurgaon&source=CityPage"
                            className="px-10 py-4 bg-gold text-softblack font-body text-sm tracking-widest uppercase hover:bg-gold/80 transition-all duration-500"
                        >
                            Book Consultation
                        </Link>
                        <Link
                            href="/interior-designer-jaipur"
                            className="px-10 py-4 border border-gold/60 text-ivory font-body text-sm tracking-widest uppercase hover:bg-gold/20 transition-all duration-500"
                        >
                            Also Serving Jaipur →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
