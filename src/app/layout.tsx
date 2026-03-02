import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/* ── Fonts ── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

/* ── Metadata ── */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thegreenedges.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Green Forms — Interior Designs Studio",
    template: "%s | The Green Forms",
  },
  description:
    "The Green Forms is a premium interior designs studio crafting bespoke environments for discerning clients in Jaipur, Gurgaon & beyond.",
  keywords: [
    "luxury interior designer",
    "interior design studio",
    "bespoke interiors",
    "Gurgaon interior designer",
    "Delhi NCR interior design",
    "premium home design",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "The Green Forms",
    title: "The Green Forms — Interior Designs Studio",
    description:
      "Designing timeless luxury spaces. Premium interior design studio crafting bespoke environments.",
    images: [
      {
        url: "/placeholder-hero.jpg",
        width: 1200,
        height: 630,
        alt: "The Green Forms — Interior Designs Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Green Forms — Interior Designs Studio",
    description:
      "Designing timeless luxury spaces. Premium interior design studio crafting bespoke environments.",
    images: ["/placeholder-hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#1A1A1A",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
