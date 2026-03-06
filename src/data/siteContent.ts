/**
 * Site Content — Single Source of Truth
 * ──────────────────────────────────────
 * All copy, stats, and structured text lives here.
 * Components import from this file; no hardcoded strings in JSX.
 */

/* ── Brand ── */
export const brand = {
    name: "The Green Forms",
    tagline: "Interior Designs Studio",
    subTagline:
        "Premium interior design for homes and commercial spaces in Jaipur & Gurgaon. Sophistication meets comfort.",
    citiesServed: ["Jaipur", "Gurgaon"] as const,
    phone: "+91 8209886849",
    email: "thegeenforms@gmail.com",
    whatsappNumber: "918209886849",
    socialLinks: {
        instagram: "#",
        pinterest: "#",
        linkedin: "#",
    },
};

/* ── About Story ── */
export const aboutStory = `The Green Forms was born from a simple conviction — that the spaces we inhabit shape the lives we lead. Founded by a team of architects and design thinkers, we set out to bridge the gap between raw aspiration and refined reality.

Over a decade of practice in Jaipur and Gurgaon has deepened our appreciation for heritage and modernity in equal measure. In the Pink City, we draw from centuries of Rajasthani craftsmanship — ornate jaalis, hand-finished stone, and a palette drawn from desert sunsets. In Millennium City, our work speaks a language of contemporary minimalism, clean geometry, and technology-forward living.

Every project begins with listening. We believe luxury is not a price tag but a dialogue between space, light, material, and the people who call it home. From three-bedroom apartments to sprawling farmhouses, from boutique offices to flagship retail, we approach each brief with the same intensity of care and an unwavering commitment to timeless elegance.`;

/* ── Services ── */
export const services = [
    {
        title: "Interior Design",
        shortDesc:
            "Full-service interior design tailored to your lifestyle — from concept to completion with meticulous attention to detail.",
        bullets: [
            "Personalised concept development",
            "Material & finish selection",
            "Custom furniture & fixture design",
            "Complete project execution",
        ],
        icon: "home" as const,
    },
    {
        title: "Space Planning",
        shortDesc:
            "Strategic spatial layouts that maximise flow, function, and aesthetic harmony in every room.",
        bullets: [
            "Architectural layout optimisation",
            "Traffic flow analysis",
            "Furniture placement strategy",
            "3D visualisation & walk-throughs",
        ],
        icon: "grid" as const,
    },
    {
        title: "Bespoke Furnishing",
        shortDesc:
            "Custom furniture and curated collections sourced from the finest artisans and luxury brands worldwide.",
        bullets: [
            "Handcrafted furniture design",
            "Global fabric & material sourcing",
            "Upholstery & soft furnishing",
            "Art curation & accessories",
        ],
        icon: "sofa" as const,
    },
    {
        title: "Commercial Design",
        shortDesc:
            "High-impact commercial interiors for offices, retail, hospitality, and co-working spaces.",
        bullets: [
            "Brand-aligned spatial identity",
            "Employee wellness & productivity focus",
            "Retail experience design",
            "Turnkey fit-out management",
        ],
        icon: "building" as const,
    },
];

/* ── Why Us ── */
export const whyUs = [
    {
        title: "Design-Led Thinking",
        description:
            "We start with 'why' before 'what'. Every element serves a purpose — aesthetic and functional.",
    },
    {
        title: "Transparent Pricing",
        description:
            "No hidden costs. Detailed cost sheets and milestone-based billing from day one.",
    },
    {
        title: "On-Time Delivery",
        description:
            "100 % on-time track record. Dedicated project managers keep deadlines sacred.",
    },
    {
        title: "Pan-City Expertise",
        description:
            "Deep understanding of Jaipur's heritage aesthetics and Gurgaon's contemporary pulse.",
    },
    {
        title: "Artisan Partnerships",
        description:
            "Direct access to 200+ vetted artisans and luxury brand partnerships across India.",
    },
    {
        title: "Post-Handover Care",
        description:
            "12-month warranty on all installations plus dedicated support after project completion.",
    },
];

/* ── Stats / Metrics ── */
export const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "150+", label: "Projects Delivered" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "4.9★", label: "Client Satisfaction" },
];

/* ── Process Steps ── */
export const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding your vision, lifestyle, and aspirations through an in-depth consultation.",
    },
    {
        number: "02",
        title: "Concept",
        description: "Crafting a design narrative unique to your space with mood boards and material palettes.",
    },
    {
        number: "03",
        title: "Design",
        description: "Detailed plans, material specifications, and photorealistic 3D renders for your approval.",
    },
    {
        number: "04",
        title: "Execution",
        description: "Meticulous project management with weekly updates from start to final walkthrough.",
    },
    {
        number: "05",
        title: "Styling",
        description: "Art, accessories, and soft furnishing styling that brings every room to life.",
    },
    {
        number: "06",
        title: "Handover",
        description: "A polished reveal, quality audit, and 12-month warranty for complete peace of mind.",
    },
];

/* ── Testimonials ── */
export const testimonials = [
    {
        quote:
            "They transformed our home into something beyond what we ever imagined. Every detail was thoughtfully curated — a true masterpiece.",
        author: "Priya & Rajesh M.",
        location: "Jaipur Villa",
    },
    {
        quote:
            "Working with The Green Forms was an extraordinary experience. Their eye for detail and understanding of luxury is unmatched.",
        author: "Sneha Agarwal",
        location: "Gurgaon Penthouse",
    },
    {
        quote:
            "Our office now reflects our brand perfectly — modern, warm, and inspiring. The team delivered beyond expectations.",
        author: "Vikram Rathore",
        location: "Jaipur Tech Office",
    },
    {
        quote:
            "From concept to execution, every step was seamless. They turned a dated apartment into a contemporary sanctuary.",
        author: "Ananya & Karan S.",
        location: "Gurgaon Apartment",
    },
];

/* ── FAQs ── */
export const faqs = [
    {
        question: "What is the typical timeline for an interior design project?",
        answer:
            "Timelines vary based on scope. A single-room redesign typically takes 4–8 weeks, while a full home project can span 3–6 months from concept to completion. During our initial consultation, we'll provide a detailed timeline tailored to your project.",
    },
    {
        question: "Do you work with clients outside of Jaipur and Gurgaon?",
        answer:
            "Yes. While our primary studios are in Jaipur and Gurgaon, we take on projects across India through a combination of virtual consultations, detailed 3D renderings, and on-site visits for key milestones.",
    },
    {
        question: "What budget range do your services cater to?",
        answer:
            "We work across a spectrum of budgets, starting from ₹5 Lakh for consultation-focused projects. Our design fee is typically 8–15% of the project budget. We believe luxury is about thoughtful design, not just price — and we'll help you achieve the best result within your means.",
    },
    {
        question: "Can I see your work before committing?",
        answer:
            "Absolutely. Browse our Projects page for a curated portfolio. We also offer a complimentary 30-minute consultation where we discuss your brief, share relevant case studies, and outline a preliminary approach — no obligation.",
    },
    {
        question: "Do you handle civil and structural work?",
        answer:
            "Our core expertise is interiors, but we partner with trusted civil and structural engineers for projects that require structural modifications. We manage the coordination end-to-end so you have a single point of contact.",
    },
];

/* ── CTA Copy ── */
export const ctaCopy = {
    eyebrow: "Start Your Journey",
    heading: "Let's Build Your Dream Space",
    body: "Every extraordinary space begins with a conversation. Tell us about your vision and let's create something remarkable together.",
    buttonText: "Get in Touch",
    buttonHref: "/contact",
};

/* ── City Cards (Home) ── */
export const cityCards = [
    {
        city: "Jaipur",
        state: "Rajasthan",
        href: "/interior-designer-jaipur",
        desc: "Heritage meets modern luxury — bespoke interiors for villas, apartments & commercial spaces in the Pink City.",
    },
    {
        city: "Gurgaon",
        state: "Haryana",
        href: "/interior-designer-gurgaon",
        desc: "Premium design for penthouses, offices & retail across Millennium City and Delhi NCR.",
    },
];
