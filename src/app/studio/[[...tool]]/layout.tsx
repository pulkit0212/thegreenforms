import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studio | The Green Forms CMS",
    description: "Content management studio for The Green Forms.",
    robots: { index: false, follow: false },
};

/**
 * Studio Layout
 * ─────────────
 * Separate layout for /studio — no site fonts, no CTAs, no navigation.
 * The Sanity Studio renders its own UI independently.
 */
export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>{children}</body>
        </html>
    );
}
