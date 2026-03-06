"use client";

/**
 * Sanity Studio Route
 * ───────────────────
 * Catch-all route that renders the embedded Sanity Studio.
 * Accessible at /studio
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
    return <NextStudio config={config} />;
}
