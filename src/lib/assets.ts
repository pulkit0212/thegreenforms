/**
 * Asset Helpers
 * ──────────────
 * Centralised paths for placeholder images.
 * When real photos arrive, update the path logic here — no component changes needed.
 */

const PLACEHOLDER_DIR = "/placeholders";

/** Return cover image path for a project */
export function getProjectCover(index: number): string {
    // 6 placeholder covers, cycling
    const i = (index % 6) + 1;
    return `${PLACEHOLDER_DIR}/project-cover-${i}.svg`;
}

/** Return gallery images for a project */
export function getProjectGallery(index: number, count = 5): string[] {
    return Array.from({ length: count }, (_, k) => {
        const i = ((index * count + k) % 12) + 1;
        return `${PLACEHOLDER_DIR}/project-gallery-${i}.svg`;
    });
}

/** Hero poster fallback */
export const heroPoster = `${PLACEHOLDER_DIR}/hero-poster.svg`;
