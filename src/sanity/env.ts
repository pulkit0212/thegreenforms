/**
 * Sanity Environment Variables
 * ────────────────────────────
 * Returns undefined if not properly configured (safe for build).
 */

export const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset =
    process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/**
 * Check whether Sanity is properly configured.
 * Returns false if using the placeholder or missing env var.
 */
export function isSanityConfigured(): boolean {
    return !!projectId && projectId !== "YOUR_PROJECT_ID" && /^[a-z0-9-]+$/.test(projectId);
}
