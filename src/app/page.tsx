import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectsPreview from "@/components/ProjectsPreview";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";
import { SITE_URL } from "@/lib/seo";
import { stats, whyUs, cityCards, brand } from "@/data/siteContent";
import { getFeaturedProjectsFromCMS } from "@/lib/getProjects";

export const metadata: Metadata = {
  title: `Luxury Interior Designer in ${brand.citiesServed.join(" & ")} | ${brand.name}`,
  description:
    `Premium interior design for residential and commercial projects in ${brand.citiesServed.join(" & ")}. View our portfolio, explore services, and book a free consultation with ${brand.name}.`,
  alternates: { canonical: SITE_URL },
};

export const revalidate = 60;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: brand.name,
  url: SITE_URL,
  logo: `${SITE_URL}/placeholders/hero-poster.svg`,
  description:
    `Premium interior design studio crafting bespoke luxury spaces for residential and commercial clients in ${brand.citiesServed.join(" and ")}.`,
  telephone: brand.phone,
  email: brand.email,
  areaServed: [
    {
      "@type": "City",
      name: "Jaipur",
      containedInPlace: { "@type": "State", name: "Rajasthan" },
    },
    {
      "@type": "City",
      name: "Gurgaon",
      containedInPlace: { "@type": "State", name: "Haryana" },
    },
    { "@type": "Place", name: "Delhi NCR" },
  ],
  priceRange: "₹₹₹₹",
  sameAs: [],
};

export default async function Home() {
  const featured = await getFeaturedProjectsFromCMS();
  return (
    <main>
      <SeoJsonLd data={localBusinessSchema} />
      <Navbar />
      <Hero />
      <Services />

      {/* Trust strip */}
      <section className="bg-softblack py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl md:text-4xl text-gold mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-forest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsPreview projects={featured} />

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
                className="p-8 md:p-10 bg-white/60 border border-sand/40 hover:border-gold/30 transition-colors duration-500"
              >
                <h3 className="font-display text-lg text-softblack mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-softblack/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />

      {/* Explore by City */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Where We Work
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-softblack">
              Explore by City
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cityCards.map((card) => (
              <Link
                key={card.city}
                href={card.href}
                className="group block p-10 md:p-12 bg-white/60 border border-sand/40 hover:border-gold/30 transition-all duration-500"
              >
                <p className="font-body text-xs tracking-[0.25em] uppercase text-forest mb-3">
                  {card.state}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-softblack mb-4 group-hover:text-gold transition-colors duration-300">
                  Interior Designer in {card.city}
                </h3>
                <p className="font-body text-sm text-softblack/75 leading-relaxed mb-6">
                  {card.desc}
                </p>
                <span className="font-body text-sm tracking-widest uppercase text-gold">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
