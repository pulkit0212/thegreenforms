import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SITE_URL, BRAND } from "@/lib/seo";
import { getAllProjects, getProjectBySlug } from "@/lib/getProjects";
import { getSimilarProjects } from "@/lib/projectUtils";
import ProjectDetailClient from "./ProjectDetailClient";
import SeoJsonLd from "@/components/SeoJsonLd";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
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

export default async function ProjectDetailPage({ params }: PageProps) {
  const allProjects = await getAllProjects();
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const similar = getSimilarProjects(project, allProjects, 3);

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
