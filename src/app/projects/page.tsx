import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Explore our portfolio of luxury interior design projects — residential villas, commercial spaces, boutiques, and executive offices crafted with meticulous attention to detail.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
