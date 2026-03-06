import { defineField, defineType } from "sanity";

/**
 * Project Schema
 * ──────────────
 * Document type for interior design projects.
 * The client can add projects with a cover image,
 * gallery of many images, and all project details.
 */
export default defineType({
    name: "project",
    title: "Project",
    type: "document",

    fields: [
        /* ── Basic Info ── */
        defineField({
            name: "title",
            title: "Project Title",
            type: "string",
            description: "Name of the project (e.g. 'The Serene Villa')",
            validation: (rule) => rule.required().min(3).max(100),
        }),

        defineField({
            name: "slug",
            title: "URL Slug",
            type: "slug",
            description:
                "Auto-generated from title. Used in the project page URL.",
            options: { source: "title", maxLength: 96 },
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "category",
            title: "Category",
            type: "string",
            description: "Type of interior design project.",
            options: {
                list: [
                    { title: "Residential", value: "Residential" },
                    { title: "Commercial", value: "Commercial" },
                    { title: "Office", value: "Office" },
                    { title: "Retail", value: "Retail" },
                ],
                layout: "radio",
            },
            initialValue: "Residential",
        }),

        defineField({
            name: "city",
            title: "City",
            type: "string",
            description: "Where this project is located.",
            options: {
                list: [
                    { title: "Jaipur", value: "Jaipur" },
                    { title: "Gurgaon", value: "Gurgaon" },
                    { title: "Other", value: "Other" },
                ],
                layout: "radio",
            },
        }),

        defineField({
            name: "year",
            title: "Year",
            type: "string",
            description: "Year the project was completed (e.g. '2024').",
        }),

        defineField({
            name: "featured",
            title: "Featured Project",
            type: "boolean",
            description:
                "Turn on to show this project on the homepage and city pages.",
            initialValue: false,
        }),

        /* ── Descriptions ── */
        defineField({
            name: "shortDescription",
            title: "Short Description",
            type: "text",
            rows: 3,
            description:
                "Brief summary shown on the project card (1–2 sentences).",
            validation: (rule) => rule.required().min(10).max(300),
        }),

        defineField({
            name: "description",
            title: "Full Description",
            type: "text",
            rows: 8,
            description:
                "Detailed description shown on the project detail page. You can write multiple paragraphs.",
        }),

        /* ── Images ── */
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            description:
                "Main image shown on project cards and listing pages. Use a high-quality vertical or square photo.",
            options: { hotspot: true },
            validation: (rule) => rule.required(),
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    description: "Brief description of the image for accessibility.",
                }),
            ],
        }),

        defineField({
            name: "galleryImages",
            title: "Gallery Images",
            type: "array",
            description:
                "Upload all project photos here. You can add as many images as you like. Drag to reorder.",
            of: [
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: "alt",
                            title: "Alt Text",
                            type: "string",
                            description: "Brief description of this image.",
                        }),
                    ],
                },
            ],
            options: {
                layout: "grid",
            },
        }),

        /* ── Tags & Sorting ── */
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            description:
                "Add keywords like 'modern', 'minimalist', 'luxury' to help visitors find this project.",
            of: [{ type: "string" }],
            options: { layout: "tags" },
        }),

        defineField({
            name: "sortOrder",
            title: "Sort Order",
            type: "number",
            description:
                "Lower numbers appear first. Leave empty for default sorting.",
        }),
    ],

    /* ── Studio Preview ── */
    preview: {
        select: {
            title: "title",
            subtitle: "category",
            media: "coverImage",
            city: "city",
        },
        prepare({ title, subtitle, media, city }) {
            return {
                title: title || "Untitled Project",
                subtitle: [subtitle, city].filter(Boolean).join(" · "),
                media,
            };
        },
    },

    /* ── Default Ordering ── */
    orderings: [
        {
            title: "Featured First",
            name: "featuredFirst",
            by: [
                { field: "featured", direction: "desc" },
                { field: "sortOrder", direction: "asc" },
                { field: "_createdAt", direction: "desc" },
            ],
        },
        {
            title: "Sort Order",
            name: "sortOrder",
            by: [{ field: "sortOrder", direction: "asc" }],
        },
        {
            title: "Title A–Z",
            name: "titleAsc",
            by: [{ field: "title", direction: "asc" }],
        },
        {
            title: "Newest First",
            name: "yearDesc",
            by: [{ field: "year", direction: "desc" }],
        },
    ],
});
