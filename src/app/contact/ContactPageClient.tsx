"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import FAQ from "@/components/FAQ";
import {
  leadSchema,
  LeadFormData,
  serviceOptions,
  budgetOptions,
  discoveryOptions,
} from "@/lib/validators";
import type { LeadSource } from "@/types/lead";
import { trackEvent } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

type FieldErrors = Partial<Record<keyof LeadFormData, string[]>>;

function emptyForm(source: LeadSource, projectSlug: string): LeadFormData {
  return {
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    budget: "",
    message: "",
    source,
    projectSlug,
    consent: false as unknown as true,
  };
}

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const projectSlug = searchParams.get("project") || "";
  const sourceParam = (searchParams.get("source") as LeadSource) || "Contact";
  const cityParam = searchParams.get("city") || "";

  const [form, setForm] = useState<LeadFormData>(() => {
    const initial = emptyForm(sourceParam, projectSlug);
    if (cityParam) initial.city = cityParam;
    return initial;
  });
  const [discovery, setDiscovery] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    visible: boolean;
  }>({ message: "", type: "success", visible: false });

  const showToast = useCallback(
    (message: string, type: "success" | "error") => {
      setToast({ message, type, visible: true });
    },
    []
  );

  const updateField = (field: keyof LeadFormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setErrors({});

    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors as FieldErrors);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) setErrors(data.errors);
        showToast(
          data.message || "Something went wrong. Please try again.",
          "error"
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(emptyForm(sourceParam, ""));
      setDiscovery("");
      showToast(
        "Thank you! Your enquiry has been sent. We'll get back to you within 24 hours.",
        "success"
      );

      // GA4 conversion tracking
      trackEvent("form_submit", {
        source: sourceParam,
        city: parsed.data.city || "",
        service: parsed.data.service || "",
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      showToast("Network error. Please check your connection.", "error");
      setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-white border border-sand/60 px-5 py-3.5 font-body text-sm text-softblack placeholder:text-softblack/40 tracking-wide focus:outline-none focus:border-gold/50 transition-colors duration-300";
  const selectCls =
    "w-full appearance-none bg-white border border-sand/60 px-5 py-3.5 pr-10 font-body text-sm text-charcoal tracking-wide cursor-pointer focus:outline-none focus:border-gold/50 transition-colors duration-300";
  const labelCls =
    "block font-body text-xs tracking-[0.2em] uppercase text-softblack/70 mb-2";
  const errorCls = "font-body text-xs text-red-500/80 mt-1.5";

  return (
    <>
      <Navbar />
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />

      <main className="bg-cream min-h-screen">
        {/* Header */}
        <section className="pt-32 pb-8 md:pt-40 md:pb-12">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/"
                  className="font-body text-xs tracking-widest uppercase text-softblack/60 hover:text-gold transition-colors duration-300"
                >
                  Home
                </Link>
                <span className="w-4 h-px bg-sand" />
                <span className="font-body text-xs tracking-widest uppercase text-charcoal">
                  Contact
                </span>
              </div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Get in Touch
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-softblack">
                Contact Us
              </h1>
              <p className="mt-3 font-body text-sm text-softblack/75">
                Serving Jaipur &amp; Gurgaon
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelCls}>Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your full name"
                        className={inputCls}
                      />
                      {errors.name && <p className={errorCls}>{errors.name[0]}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>Phone *</label>
                      <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-softblack/60">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                            updateField("phone", val);
                          }}
                          placeholder="10-digit number"
                          className={`${inputCls} pl-14`}
                        />
                      </div>
                      {errors.phone && <p className={errorCls}>{errors.phone[0]}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>Email</label>
                      <input
                        type="email"
                        value={form.email || ""}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@example.com"
                        className={inputCls}
                      />
                      {errors.email && <p className={errorCls}>{errors.email[0]}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>City *</label>
                      <div className="flex gap-2 mb-3">
                        {["Jaipur", "Gurgaon", "Other"].map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => updateField("city", c)}
                            className={`px-4 py-2 font-body text-xs tracking-wider uppercase border transition-all duration-300 ${form.city === c
                              ? "bg-gold/20 border-gold text-charcoal"
                              : "border-sand/60 text-softblack/60 hover:border-gold/40"
                              }`}
                          >
                            {c === "Other" ? "Other City" : `${c} Enquiry`}
                          </button>
                        ))}
                      </div>
                      {form.city === "Other" && (
                        <input
                          type="text"
                          value={form.city === "Other" ? "" : form.city || ""}
                          onChange={(e) => updateField("city", e.target.value)}
                          placeholder="Enter your city"
                          className={inputCls}
                        />
                      )}
                    </div>

                    <div className="relative">
                      <label className={labelCls}>Service *</label>
                      <select
                        value={form.service}
                        onChange={(e) => updateField("service", e.target.value)}
                        className={selectCls}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <SelectArrow />
                      {errors.service && <p className={errorCls}>{errors.service[0]}</p>}
                    </div>

                    <div className="relative">
                      <label className={labelCls}>Budget *</label>
                      <select
                        value={form.budget}
                        onChange={(e) => updateField("budget", e.target.value)}
                        className={selectCls}
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      <SelectArrow />
                      {errors.budget && <p className={errorCls}>{errors.budget[0]}</p>}
                    </div>

                    <div className="relative">
                      <label className={labelCls}>How did you find us?</label>
                      <select
                        value={discovery}
                        onChange={(e) => setDiscovery(e.target.value)}
                        className={selectCls}
                      >
                        <option value="">Select</option>
                        {discoveryOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <SelectArrow />
                    </div>

                    {projectSlug && (
                      <div>
                        <label className={labelCls}>Interested Project</label>
                        <input
                          type="text"
                          value={projectSlug}
                          readOnly
                          className={`${inputCls} bg-sand/20 cursor-not-allowed`}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className={labelCls}>Message *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      rows={5}
                      className={`${inputCls} resize-none`}
                    />
                    {errors.message && <p className={errorCls}>{errors.message[0]}</p>}
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.consent as boolean}
                        onChange={(e) => updateField("consent", e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-gold cursor-pointer"
                      />
                      <span className="font-body text-xs text-softblack/70 leading-relaxed">
                        I consent to The Green Forms storing my information and
                        contacting me regarding my enquiry. *
                      </span>
                    </label>
                    {errors.consent && (
                      <p className={`${errorCls} ml-7`}>{errors.consent[0]}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-3 px-14 py-4 bg-softblack text-ivory font-body text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" && (
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="opacity-25"
                        />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          className="opacity-75"
                        />
                      </svg>
                    )}
                    {status === "sending" ? "Sending..." : "Send Enquiry"}
                  </button>
                  <p className="font-body text-xs text-softblack/60 mt-3">
                    We&apos;ll never share your details with third parties.
                  </p>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-10"
              >
                <div className="border-l border-sand/60 pl-6 space-y-8">
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+918209886849"
                      className="font-body text-base text-charcoal hover:text-gold transition-colors duration-300"
                    >
                      +91 8209886849
                    </a>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:thegeenforms@gmail.com"
                      className="font-body text-base text-charcoal hover:text-gold transition-colors duration-300"
                    >
                      thegeenforms@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/918209886849?text=Hello%2C%20I%27m%20interested%20in%20your%20interior%20design%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-base text-charcoal hover:text-gold transition-colors duration-300"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="p-8 bg-ivory border border-sand/30">
                  <p className="font-display text-lg text-softblack mb-3">
                    Prefer a quick chat?
                  </p>
                  <p className="font-body text-sm text-softblack/75 leading-relaxed mb-6">
                    Reach out on WhatsApp for a faster response. We typically
                    reply within a few hours.
                  </p>
                  <a
                    href="https://wa.me/918209886849?text=Hello%2C%20I%27m%20interested%20in%20your%20interior%20design%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-body text-sm tracking-wide hover:bg-[#20bd5a] transition-colors duration-300"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-28 md:pb-36">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Common Questions
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-softblack">
                Frequently Asked
              </h2>
            </motion.div>
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SelectArrow() {
  return (
    <svg
      className="absolute right-3 bottom-[18px] w-4 h-4 text-softblack/50 pointer-events-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
