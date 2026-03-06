import { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/getProjects";

const BASE_URL = "https://thegreenforms.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic project pages (from Sanity or static fallback)
    const projects = await getAllProjects();
    const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
        url: `${BASE_URL}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages];
}
