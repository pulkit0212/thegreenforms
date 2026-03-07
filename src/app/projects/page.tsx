import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getAllProjects } from "@/lib/getProjects";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Explore our portfolio of luxury interior design projects — residential villas, commercial spaces, boutiques, and executive offices crafted with meticulous attention to detail.",
  path: "/projects",
});

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  console.log(`[ProjectsPage] Fetched ${projects.length} projects from data layer`);
  return <ProjectsPageClient projects={projects} />;
}
