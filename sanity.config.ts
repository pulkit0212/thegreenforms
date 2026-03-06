"use client";

/**
 * Sanity Studio Configuration
 * ───────────────────────────
 * Main configuration for the embedded Sanity Studio.
 * Reads from env with clear error messages if not configured.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

/* ── Read env with dual-prefix support ── */
const resolvedProjectId =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.SANITY_STUDIO_PROJECT_ID ||
    "";

const resolvedDataset =
    process.env.NEXT_PUBLIC_SANITY_DATASET ||
    process.env.SANITY_STUDIO_DATASET ||
    "production";

const resolvedApiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
    process.env.SANITY_STUDIO_API_VERSION ||
    "2026-03-06";

/* ── Validate before creating config ── */
if (!resolvedProjectId || resolvedProjectId === "YOUR_PROJECT_ID") {
    throw new Error(
        [
            "",
            "╔═══════════════════════════════════════════════════════════╗",
            "║  Sanity Studio: Missing Project ID                       ║",
            "╠═══════════════════════════════════════════════════════════╣",
            "║                                                         ║",
            "║  Set one of these in your .env.local:                    ║",
            "║                                                         ║",
            "║    NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id         ║",
            "║    SANITY_STUDIO_PROJECT_ID=your-project-id              ║",
            "║                                                         ║",
            "║  Get your project ID from: https://sanity.io/manage      ║",
            "║                                                         ║",
            "╚═══════════════════════════════════════════════════════════╝",
            "",
        ].join("\n")
    );
}

export default defineConfig({
    name: "the-green-forms",
    title: "The Green Forms CMS",

    projectId: resolvedProjectId,
    dataset: resolvedDataset,

    plugins: [
        structureTool(),
        visionTool({ defaultApiVersion: resolvedApiVersion }),
    ],

    schema: {
        types: schemaTypes,
    },

    basePath: "/studio",
});
