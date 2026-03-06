import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Privacy Policy",
    description:
        "Privacy policy for The Green Forms interior design studio. Learn how we handle your personal data.",
    path: "/privacy",
});

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main className="bg-cream min-h-screen">
                <section className="pt-32 pb-20 md:pt-40 md:pb-28">
                    <div className="mx-auto max-w-3xl px-6 md:px-12">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-3 mb-6">
                            <Link
                                href="/"
                                className="font-body text-xs tracking-widest uppercase text-softblack/60 hover:text-gold transition-colors duration-300"
                            >
                                Home
                            </Link>
                            <span className="w-4 h-px bg-sand" />
                            <span className="font-body text-xs tracking-widest uppercase text-charcoal">
                                Privacy Policy
                            </span>
                        </div>

                        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                            Legal
                        </p>
                        <h1 className="font-display text-4xl md:text-5xl text-softblack mb-12">
                            Privacy Policy
                        </h1>

                        <div className="prose-custom space-y-8">
                            <p className="font-body text-sm text-softblack/80 leading-relaxed">
                                Last updated: March 2026
                            </p>

                            <div className="space-y-4">
                                <h2 className="font-display text-xl text-softblack">
                                    1. Information We Collect
                                </h2>
                                <p className="font-body text-sm text-softblack/80 leading-relaxed">
                                    When you submit an enquiry through our contact form, we
                                    collect: your name, phone number, email address, city,
                                    service interest, budget range, and any message you provide.
                                    We only collect information that you voluntarily submit.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-display text-xl text-softblack">
                                    2. How We Use Your Information
                                </h2>
                                <p className="font-body text-sm text-softblack/80 leading-relaxed">
                                    Your information is used solely to respond to your enquiry,
                                    provide you with a consultation, and follow up regarding our
                                    interior design services. We do not use your data for
                                    unsolicited marketing.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-display text-xl text-softblack">
                                    3. Data Sharing
                                </h2>
                                <p className="font-body text-sm text-softblack/80 leading-relaxed">
                                    We do not sell, trade, or share your personal information with
                                    third parties. Your data is only accessible to our internal
                                    team for the purpose of service delivery.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-display text-xl text-softblack">
                                    4. Data Storage &amp; Security
                                </h2>
                                <p className="font-body text-sm text-softblack/80 leading-relaxed">
                                    Your enquiry data is transmitted securely and stored with
                                    industry-standard encryption. We retain your information only
                                    as long as necessary to fulfil your request and comply with
                                    applicable regulations.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-display text-xl text-softblack">
                                    5. Cookies
                                </h2>
                                <p className="font-body text-sm text-softblack/80 leading-relaxed">
                                    This website uses essential cookies for functionality. We do
                                    not use third-party tracking cookies or analytics that
                                    identify individual users.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-display text-xl text-softblack">
                                    6. Your Rights
                                </h2>
                                <p className="font-body text-sm text-softblack/80 leading-relaxed">
                                    You may request access to, correction of, or deletion of any
                                    personal data we hold about you by contacting us at{" "}
                                    <a
                                        href={`mailto:${"uccvib@gmail.com"
                                            }`}
                                        className="text-gold hover:underline"
                                    >
                                        uccvib@gmail.com
                                    </a>
                                    .
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-display text-xl text-softblack">
                                    7. Contact
                                </h2>
                                <p className="font-body text-sm text-softblack/80 leading-relaxed">
                                    For any privacy-related questions, please reach out to us at{" "}
                                    <a
                                        href={`mailto:${"uccvib@gmail.com"}`}
                                        className="text-gold hover:underline"
                                    >
                                        uccvib@gmail.com
                                    </a>{" "}
                                    or call{" "}
                                    <a
                                        href="tel:+918209886849"
                                        className="text-gold hover:underline"
                                    >
                                        +91 8209886849
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
