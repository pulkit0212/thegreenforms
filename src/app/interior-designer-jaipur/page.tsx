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
import { getFeaturedProjectsFromCMS } from "@/lib/getProjects";

export const metadata: Metadata = buildMetadata({
    title: "Luxury Interior Designer in Jaipur",
    description:
        "Premium interior design studio in Jaipur, Rajasthan. The Green Forms crafts bespoke residential & commercial interiors with timeless elegance. Book your free consultation today.",
    path: "/interior-designer-jaipur",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Green Forms — Jaipur",
    url: `${SITE_URL}/interior-designer-jaipur`,
    description:
        "Premium luxury interior design studio serving Jaipur, Rajasthan. Bespoke residential and commercial interiors.",
    telephone: "+918209886849",
    email: "uccvib@gmail.com",
    areaServed: {
        "@type": "City",
        name: "Jaipur",
        containedInPlace: { "@type": "State", name: "Rajasthan" },
    },
    priceRange: "₹₹₹₹",
};

export default async function InteriorDesignerJaipur() {
    const featured = await getFeaturedProjectsFromCMS();
    return (
        <main>
            <SeoJsonLd data={localBusinessSchema} />
            <Navbar />

            {/* City Hero */}
            <section className="relative bg-softblack pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="absolute inset-0 bg-gradient-to-b from-softblack via-softblack/90 to-softblack" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-center">
                    <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-6">
                        Jaipur, Rajasthan
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-ivory leading-[1.1] max-w-5xl mx-auto">
                        Luxury Interior Design
                        <br />
                        <span className="italic text-gold">in Jaipur</span>
                    </h1>
                    <p className="mt-6 md:mt-8 font-body text-base md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
                        Crafting bespoke interiors that blend Rajasthani heritage with
                        modern sophistication. From opulent villas to premium commercial
                        spaces, we bring your vision to life.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact?city=Jaipur&source=CityPage"
                            className="px-10 py-4 bg-gold text-softblack font-body text-sm tracking-widest uppercase hover:bg-gold/80 transition-all duration-500"
                        >
                            Book Consultation in Jaipur
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
            <ProjectsPreview projects={featured} />
            <Testimonials />

            {/* City-specific CTA */}
            <section className="py-20 md:py-28 bg-softblack">
                <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                        Ready to Transform Your Space?
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl text-ivory mb-6">
                        Let&apos;s Design Your Dream Interior in Jaipur
                    </h2>
                    <p className="font-body text-base text-white/80 max-w-lg mx-auto leading-relaxed mb-10">
                        Whether it&apos;s a heritage haveli renovation or a contemporary
                        apartment, our team delivers luxury interiors tailored to
                        Jaipur&apos;s unique aesthetic.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact?city=Jaipur&source=CityPage"
                            className="px-10 py-4 bg-gold text-softblack font-body text-sm tracking-widest uppercase hover:bg-gold/80 transition-all duration-500"
                        >
                            Book Consultation
                        </Link>
                        <Link
                            href="/interior-designer-gurgaon"
                            className="px-10 py-4 border border-gold/60 text-ivory font-body text-sm tracking-widest uppercase hover:bg-gold/20 transition-all duration-500"
                        >
                            Also Serving Gurgaon →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
