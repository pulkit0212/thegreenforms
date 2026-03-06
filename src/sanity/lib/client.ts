import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "../env";

/**
 * Sanity Client
 * ─────────────
 * Lazy-initialised — only creates the client if Sanity is properly configured.
 * This avoids build errors when using placeholder env values.
 */
let _client: SanityClient | null = null;

export function getClient(): SanityClient | null {
    if (!isSanityConfigured()) return null;

    if (!_client) {
        _client = createClient({
            projectId,
            dataset,
            apiVersion,
            useCdn: true,
        });
    }
    return _client;
}

/** Legacy export for backward compatibility */
export const client = isSanityConfigured()
    ? createClient({ projectId, dataset, apiVersion, useCdn: true })
    : (null as unknown as SanityClient);
