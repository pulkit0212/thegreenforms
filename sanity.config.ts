"use client";

/**
 * Sanity Studio Configuration
 * ───────────────────────────
 * Main configuration for the embedded Sanity Studio.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
    name: "the-green-forms",
    title: "The Green Forms CMS",

    projectId,
    dataset,

    plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],

    schema: {
        types: schemaTypes,
    },

    basePath: "/studio",
});
