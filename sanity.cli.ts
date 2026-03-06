/**
 * Sanity CLI Configuration
 * ────────────────────────
 * Used by `sanity` CLI commands (deploy studio, export dataset, etc).
 */
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
    api: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    },
});
