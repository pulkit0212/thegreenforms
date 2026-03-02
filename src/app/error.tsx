"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="bg-cream min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Something Went Wrong
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-softblack mb-6">
                Oops
            </h1>
            <p className="font-body text-base text-softblack/75 max-w-md leading-relaxed mb-10">
                An unexpected error occurred. Please try again or return to our
                homepage.
            </p>
            <button
                onClick={reset}
                className="px-10 py-4 bg-softblack text-ivory font-body text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-500"
            >
                Try Again
            </button>
        </main>
    );
}
