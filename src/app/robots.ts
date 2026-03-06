import { MetadataRoute } from "next";

/**
 * Robots.txt Generation
 * ─────────────────────
 * Configures search engine crawling behavior.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://thegreenforms.com/sitemap.xml",
    };
}
