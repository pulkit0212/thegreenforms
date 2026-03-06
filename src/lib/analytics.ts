/**
 * Google Analytics 4 — Utilities
 * ───────────────────────────────
 * Client-side only. Uses NEXT_PUBLIC_GA_ID env var.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

/* Extend Window for gtag */
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

/** Send a pageview event */
export function pageview(url: string) {
    if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
    window.gtag("config", GA_ID, { page_path: url });
}

/** Send a custom event */
export function trackEvent(
    name: string,
    params?: Record<string, string | number | boolean>
) {
    if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", name, params);
}
