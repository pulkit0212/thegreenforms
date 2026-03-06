import { Suspense } from "react";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import ContactPageClient from "./ContactPageClient";
import SeoJsonLd from "@/components/SeoJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a free consultation with The Green Forms. Luxury interior design services in Jaipur & Gurgaon. We respond within 24 hours.",
  path: "/contact",
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact The Green Forms",
  url: `${SITE_URL}/contact`,
  description:
    "Get in touch with our luxury interior design studio serving Jaipur & Gurgaon for a free consultation.",
  mainEntity: {
    "@type": "Organization",
    name: "The Green Forms",
    telephone: "+918209886849",
    email: "thegeenforms@gmail.com",
    url: SITE_URL,
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "City", name: "Gurgaon" },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <SeoJsonLd data={contactSchema} />
      <Suspense>
        <ContactPageClient />
      </Suspense>
    </>
  );
}
