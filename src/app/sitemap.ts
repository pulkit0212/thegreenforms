import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

/**
 * Sitemap Generation
 * ──────────────────
 * Generates the sitemap.xml for the website.
 * Includes all static pages and dynamic project detail pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://thegreenforms.com";

    // Static routes
    const routes = [
        "",
        "/projects",
        "/contact",
        "/about",
        "/services",
        "/interior-designer-jaipur",
        "/interior-designer-gurgaon",
        "/privacy",
    ];

    const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic project pages
    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages];
}
