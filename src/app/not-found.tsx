import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-cream min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Page Not Found
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-softblack mb-6">
                404
            </h1>
            <p className="font-body text-base text-softblack/75 max-w-md leading-relaxed mb-10">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
                Let us guide you back.
            </p>
            <Link
                href="/"
                className="px-10 py-4 bg-softblack text-ivory font-body text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-500"
            >
                Return Home
            </Link>
        </main>
    );
}
