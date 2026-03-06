import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyBar from "@/components/MobileStickyBar";
import DesktopFloatingCTA from "@/components/DesktopFloatingCTA";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thegreenforms.com";

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
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
      <body className="antialiased pb-[72px] md:pb-0">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <WhatsAppFloat />
        <MobileStickyBar />
        <DesktopFloatingCTA />
      </body>
    </html>
  );
}
