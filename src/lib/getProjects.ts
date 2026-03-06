/**
 * Project Data Fetcher
 * ────────────────────
 * Fetches projects from Sanity CMS with automatic fallback
 * to static data when Sanity returns empty or is not configured.
 */
import { getClient } from "@/lib/sanityClient";
import {
    allProjectsQuery,
    featuredProjectsQuery,
    projectBySlugQuery,
    allProjectSlugsQuery,
    similarProjectsQuery,
} from "@/lib/sanityQueries";
import {
    projects as staticProjects,
    Project,
} from "@/data/projects";
import { isSanityConfigured } from "@/sanity/env";

/**
 * Normalise a Sanity project result into the frontend Project shape.
 * Guarantees all required fields have sensible defaults.
 */
function normaliseSanityProject(doc: Record<string, unknown>): Project {
    return {
        slug: (doc.slug as string) || "",
        title: (doc.title as string) || "Untitled",
        category: (doc.category as Project["category"]) || "Residential",
        location: (doc.location as string) || undefined,
        year: (doc.year as string) || undefined,
        coverImage: (doc.coverImage as string) || "/placeholders/placeholder-1.jpg",
        images: Array.isArray(doc.images) && doc.images.length > 0
            ? (doc.images as string[])
            : [(doc.coverImage as string) || "/placeholders/placeholder-1.jpg"],
        shortDesc: (doc.shortDesc as string) || "",
        description: (doc.description as string) || "",
        tags: Array.isArray(doc.tags) ? (doc.tags as string[]) : [],
        featured: (doc.featured as boolean) || false,
    };
}

/** All projects — Sanity first, static fallback */
export async function getAllProjects(): Promise<Project[]> {
    if (!isSanityConfigured()) return staticProjects;

    const client = getClient();
    if (!client) return staticProjects;

    try {
        const docs = await client.fetch(allProjectsQuery);
        if (!docs || docs.length === 0) return staticProjects;
        return docs.map(normaliseSanityProject);
    } catch (err) {
        console.error("[getProjects] Sanity fetch failed, using static data:", err);
        return staticProjects;
    }
}

/** Featured projects only — Sanity first, static fallback */
export async function getFeaturedProjectsFromCMS(): Promise<Project[]> {
    if (!isSanityConfigured()) {
        return staticProjects.filter((p) => p.featured);
    }

    const client = getClient();
    if (!client) return staticProjects.filter((p) => p.featured);

    try {
        const docs = await client.fetch(featuredProjectsQuery);
        if (!docs || docs.length === 0) {
            return staticProjects.filter((p) => p.featured);
        }
        return docs.map(normaliseSanityProject);
    } catch (err) {
        console.error("[getProjects] Sanity featured fetch failed:", err);
        return staticProjects.filter((p) => p.featured);
    }
}

/** Single project by slug — Sanity first, static fallback */
export async function getProjectBySlug(
    slug: string
): Promise<Project | null> {
    if (!isSanityConfigured()) {
        return staticProjects.find((p) => p.slug === slug) || null;
    }

    const client = getClient();
    if (!client) return staticProjects.find((p) => p.slug === slug) || null;

    try {
        const doc = await client.fetch(projectBySlugQuery, { slug });
        if (!doc) {
            return staticProjects.find((p) => p.slug === slug) || null;
        }
        return normaliseSanityProject(doc);
    } catch (err) {
        console.error("[getProjects] Sanity slug fetch failed:", err);
        return staticProjects.find((p) => p.slug === slug) || null;
    }
}

/** All slugs for static generation */
export async function getAllProjectSlugs(): Promise<string[]> {
    if (!isSanityConfigured()) {
        return staticProjects.map((p) => p.slug);
    }

    const client = getClient();
    if (!client) return staticProjects.map((p) => p.slug);

    try {
        const docs: { slug: string }[] = await client.fetch(allProjectSlugsQuery);
        if (!docs || docs.length === 0) {
            return staticProjects.map((p) => p.slug);
        }
        // Merge Sanity + static slugs (deduplicated)
        const sanitySlug = docs.map((d) => d.slug);
        const staticSlug = staticProjects.map((p) => p.slug);
        return Array.from(new Set([...sanitySlug, ...staticSlug]));
    } catch (err) {
        console.error("[getProjects] Sanity slugs fetch failed:", err);
        return staticProjects.map((p) => p.slug);
    }
}

/** Similar projects (fetch from CMS) */
export async function getSimilarProjectsFromCMS(
    project: Project,
    limit: number = 3
): Promise<Project[]> {
    if (!isSanityConfigured()) {
        return staticProjects.filter(p => p.category === project.category && p.slug !== project.slug).slice(0, limit);
    }

    const client = getClient();
    if (!client) return [];

    try {
        const docs = await client.fetch(similarProjectsQuery, {
            currentSlug: project.slug,
            category: project.category,
            tags: project.tags,
            limit,
        });
        return (docs || []).map(normaliseSanityProject);
    } catch (err) {
        console.error("[getSimilarProjects] Sanity fetch failed:", err);
        return [];
    }
}
