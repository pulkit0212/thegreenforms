import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "@/sanity/env";

/**
 * Image URL Builder
 * ─────────────────
 * Generate optimized image URLs from Sanity image references.
 *
 * Usage:
 *   urlForImage(source)?.width(800).url()
 */
const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: Image) {
    return imageBuilder?.image(source).auto("format").fit("max");
}
