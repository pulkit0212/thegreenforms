/**
 * Sanity Environment Variables
 * ────────────────────────────
 * Supports both naming conventions:
 *   NEXT_PUBLIC_SANITY_*  (Next.js client-side)
 *   SANITY_STUDIO_*       (Sanity CLI / Studio)
 *
 * Falls back gracefully when not configured.
 */

export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
    process.env.SANITY_STUDIO_API_VERSION ||
    "2026-03-06";

export const dataset =
    process.env.NEXT_PUBLIC_SANITY_DATASET ||
    process.env.SANITY_STUDIO_DATASET ||
    "production";

export const projectId =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.SANITY_STUDIO_PROJECT_ID ||
    "";

/**
 * Check whether Sanity is properly configured.
 * Returns false if using a placeholder or missing env var.
 */
export function isSanityConfigured(): boolean {
    if (!projectId) return false;
    if (projectId === "YOUR_PROJECT_ID") return false;
    return /^[a-z0-9-]+$/.test(projectId);
}
