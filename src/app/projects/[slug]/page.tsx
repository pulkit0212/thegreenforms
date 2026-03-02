import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { getSimilarProjects } from "@/lib/projectUtils";
import { SITE_URL, BRAND } from "@/lib/seo";
import ProjectDetailClient from "./ProjectDetailClient";
import SeoJsonLd from "@/components/SeoJsonLd";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    title: `${project.title} — ${BRAND}`,
    description: project.shortDesc,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — ${BRAND}`,
      description: project.shortDesc,
      url,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${BRAND}`,
      description: project.shortDesc,
      images: [project.coverImage],
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const similar = getSimilarProjects(project, projects, 3);

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDesc,
    url: `${SITE_URL}/projects/${project.slug}`,
    image: project.images,
    creator: {
      "@type": "Organization",
      name: BRAND,
      url: SITE_URL,
    },
    ...(project.year && { dateCreated: project.year }),
    ...(project.location && {
      contentLocation: {
        "@type": "Place",
        name: project.location,
      },
    }),
    keywords: project.tags.join(", "),
  };

  return (
    <>
      <SeoJsonLd data={creativeWorkSchema} />
      <ProjectDetailClient project={project} similarProjects={similar} />
    </>
  );
}
