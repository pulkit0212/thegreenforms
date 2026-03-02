export type ProjectCategory = "Residential" | "Commercial" | "Office" | "Retail";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location?: string;
  year?: string;
  coverImage: string;
  images: string[];
  shortDesc: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const categories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Office",
  "Retail",
];

export const projects: Project[] = [
  {
    slug: "the-serene-villa",
    title: "The Serene Villa",
    category: "Residential",
    location: "Jaipur, Rajasthan",
    year: "2024",
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    ],
    shortDesc:
      "A heritage-inspired sanctuary where natural light meets understated elegance.",
    description:
      "Nestled in the heart of Jaipur, The Serene Villa blends traditional Rajasthani craftsmanship with contemporary living. The open-plan ground floor leads to a courtyard pool framed by hand-carved jaali screens. Warm stone, brass accents, and locally sourced textiles create an atmosphere of effortless sophistication.",
    tags: ["Modern", "Luxury", "Minimal", "Heritage"],
    featured: true,
  },
  {
    slug: "maison-noir",
    title: "Maison Noir",
    category: "Residential",
    location: "Gurgaon, Haryana",
    year: "2024",
    coverImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f73a09edca62?w=1200&q=80",
    ],
    shortDesc:
      "A bold monochromatic penthouse defined by drama and precision.",
    description:
      "Maison Noir is a study in contrasts. Dark Italian marble floors meet walls of textured lime plaster in charcoal and bone white. Floor-to-ceiling glass frames panoramic views of the Gurgaon skyline, while bespoke walnut joinery and brushed-black metal detailing add warmth to an otherwise arresting palette.",
    tags: ["Dark", "Luxury", "Contemporary", "Penthouse"],
    featured: true,
  },
  {
    slug: "atelier-lumiere",
    title: "Atelier Lumière",
    category: "Commercial",
    location: "Jaipur, Rajasthan",
    year: "2023",
    coverImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1200&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1200&q=80",
    ],
    shortDesc:
      "A boutique fashion atelier where light choreographs the customer experience.",
    description:
      "Designed for one of Jaipur's premier fashion houses, Atelier Lumière uses light as a primary material. Recessed cove lighting, backlit onyx partitions, and a showpiece brass staircase transform retail into theatre. Each fitting room offers a tailored ambiance controlled by the client.",
    tags: ["Retail", "Luxury", "Light Design", "Boutique"],
    featured: true,
  },
  {
    slug: "casa-pietra",
    title: "Casa Pietra",
    category: "Residential",
    location: "Gurgaon, Haryana",
    year: "2023",
    coverImage:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18f63c052?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80",
    ],
    shortDesc:
      "A stone-clad family home that celebrates tactile materiality.",
    description:
      "Inspired by Italian countryside estates, Casa Pietra layers natural stone, reclaimed oak, and hand-forged iron across four floors. The double-height living room anchored by an open fireplace becomes the heart of family gatherings. Outdoor-indoor flow through folding glass walls connects the garden to the kitchen seamlessly.",
    tags: ["Stone", "Rustic", "Family Home", "Luxury"],
  },
  {
    slug: "the-glass-loft",
    title: "The Glass Loft",
    category: "Residential",
    location: "Gurgaon, Haryana",
    year: "2023",
    coverImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f73a09edca62?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1200&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80",
    ],
    shortDesc:
      "An industrial-chic loft conversion with floor-to-ceiling transparency.",
    description:
      "Occupying the top two floors of a converted Gurgaon warehouse, The Glass Loft exposes raw concrete columns alongside polished resin floors and custom steel-frame glazing. A floating mezzanine library and a rooftop terrace with skyline views complete this urban retreat for a young entrepreneur.",
    tags: ["Industrial", "Modern", "Loft", "Urban"],
  },
  {
    slug: "zenith-tower-offices",
    title: "Zenith Tower Offices",
    category: "Office",
    location: "Gurgaon, Haryana",
    year: "2022",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=1200&q=80",
    ],
    shortDesc:
      "A 12,000 sq ft corporate headquarters designed for collaboration and focus.",
    description:
      "For a leading fintech company in Gurgaon's Cyber Hub, we designed a workspace that balances collaborative energy with deep-focus zones. Acoustic timber pods, a biophilic atrium, and a rooftop breakout area redefine the modern Indian office. The palette of warm oak, sage linen, and gunmetal hardware reflects the brand's ethos of trust and innovation.",
    tags: ["Corporate", "Biophilic", "Modern", "Tech"],
  },
  {
    slug: "velvet-rose-boutique",
    title: "Velvet Rose Boutique",
    category: "Retail",
    location: "Jaipur, Rajasthan",
    year: "2022",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80",
    ],
    shortDesc:
      "A jewellery boutique wrapped in velvet, rose gold, and soft luminescence.",
    description:
      "Velvet Rose required an interior as precious as the jewellery it houses. Rose-gold mesh curtains, backlit alabaster display plinths, and deep sapphire velvet seating create a sensory journey from entrance to private viewing suite. Concealed LED tracks allow each display to be spot-lit like a gallery installation.",
    tags: ["Retail", "Jewellery", "Luxury", "Artisan"],
  },
  {
    slug: "nordic-haven",
    title: "Nordic Haven",
    category: "Residential",
    location: "Jaipur, Rajasthan",
    year: "2022",
    coverImage:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    ],
    shortDesc:
      "Scandinavian serenity meets Rajasthani warmth in a minimalist four-bedroom home.",
    description:
      "Nordic Haven draws from the Danish concept of hygge and filters it through a Rajasthani lens. Whitewashed lime plaster walls, pale ash timber, and handwoven khadi textiles form the backdrop. Splashes of terracotta and indigo — sourced from local artisan clusters — add character without clutter.",
    tags: ["Scandinavian", "Minimal", "Warm", "Artisan"],
  },
  {
    slug: "the-ember-club",
    title: "The Ember Club",
    category: "Commercial",
    location: "Gurgaon, Haryana",
    year: "2021",
    coverImage:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f73a09edca62?w=1200&q=80",
    ],
    shortDesc:
      "A members-only lounge bar where smoked oak and amber create an intimate world.",
    description:
      "The Ember Club channels the atmosphere of a 1920s speakeasy reimagined for modern Gurgaon. Smoked-oak panelling, hand-stitched leather banquettes, and a 12-metre long marble bar anchor the space. Bespoke copper pendant lights and a discreet cigar terrace complete the mood.",
    tags: ["Hospitality", "Dark", "Luxury", "Bar"],
  },
  {
    slug: "horizon-workspace",
    title: "Horizon Workspace",
    category: "Office",
    location: "Jaipur, Rajasthan",
    year: "2021",
    coverImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    ],
    shortDesc:
      "A 5,000 sq ft creative studio for a digital agency that prizes openness and flexibility.",
    description:
      "Horizon Workspace replaces rigid cubicles with a modular landscape of movable partitions, standing desks, and soft-seating nooks. A central 'town square' with a terraced amphitheatre hosts daily standups and Friday socials. Jaipur's blue pottery tiles feature as an accent wall, connecting the space to its locale.",
    tags: ["Creative", "Open Plan", "Modular", "Tech"],
  },
];
