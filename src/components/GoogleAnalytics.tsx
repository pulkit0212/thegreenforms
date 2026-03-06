"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GA_ID, pageview } from "@/lib/analytics";

/**
 * GoogleAnalytics
 * ───────────────
 * Loads the GA4 script and tracks route changes.
 * Renders nothing if NEXT_PUBLIC_GA_ID is not set.
 */
export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!GA_ID) return;
        const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
        pageview(url);
    }, [pathname, searchParams]);

    if (!GA_ID) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: false
          });
        `}
            </Script>
        </>
    );
}
