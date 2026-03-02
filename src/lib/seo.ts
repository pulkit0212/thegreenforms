import type { Metadata } from "next";

export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://thegreenedges.com";

export const BRAND = "The Green Forms";

/**
 * Build page-level metadata with sensible defaults.
 */
export function buildMetadata({
    title,
    description,
    path = "/",
    image,
}: {
    title: string;
    description: string;
    path?: string;
    image?: string;
}): Metadata {
    const url = `${SITE_URL}${path}`;
    const ogImage = image || "/placeholder-hero.jpg";

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title: `${title} | ${BRAND}`,
            description,
            url,
            images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            title: `${title} | ${BRAND}`,
            description,
            images: [ogImage],
        },
    };
}
