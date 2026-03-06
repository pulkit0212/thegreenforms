/**
 * Sanity GROQ Queries
 * ───────────────────
 * Centralised queries for fetching projects from Sanity.
 */
import { groq } from "next-sanity";

/** Common project fields projection */
const projectFields = groq`
  _id,
  title,
  "slug": slug.current,
  category,
  "location": city,
  year,
  featured,
  "shortDesc": shortDescription,
  description,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  "images": galleryImages[].asset->url,
  tags,
  sortOrder
`;

/** All projects, sorted: featured first → sortOrder → newest */
export const allProjectsQuery = groq`
  *[_type == "project"] | order(featured desc, sortOrder asc, _createdAt desc) {
    ${projectFields}
  }
`;

/** Featured projects only */
export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(sortOrder asc, _createdAt desc) {
    ${projectFields}
  }
`;

/** Single project by slug */
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
  }
`;

/** All project slugs (for generateStaticParams) */
export const allProjectSlugsQuery = groq`
  *[_type == "project"] { "slug": slug.current }
`;

/** Similar projects (logic: same category OR shared tags) */
export const similarProjectsQuery = groq`
  *[_type == "project" && slug.current != $currentSlug && (category == $category || count(tags[@ in $tags]) > 0)] | order(featured desc, sortOrder asc) [0...$limit] {
    ${projectFields}
  }
`;
