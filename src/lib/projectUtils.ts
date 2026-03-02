import { Project, ProjectCategory } from "@/data/projects";

export function filterProjects(
  projects: Project[],
  category: ProjectCategory | "All",
  searchQuery: string,
  activeTags: string[]
): Project[] {
  return projects.filter((p) => {
    if (category !== "All" && p.category !== category) return false;

    if (activeTags.length > 0) {
      const hasTag = activeTags.some((tag) => p.tags.includes(tag));
      if (!hasTag) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = p.title.toLowerCase().includes(q);
      const matchesTags = p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesLocation = p.location?.toLowerCase().includes(q);
      if (!matchesTitle && !matchesTags && !matchesLocation) return false;
    }

    return true;
  });
}

export function getSimilarProjects(
  current: Project,
  allProjects: Project[],
  limit = 3
): Project[] {
  const others = allProjects.filter((p) => p.slug !== current.slug);

  const scored = others.map((p) => {
    let score = 0;
    if (p.category === current.category) score += 3;
    const sharedTags = p.tags.filter((t) => current.tags.includes(t));
    score += sharedTags.length;
    return { project: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.project);
}

export function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter((p) => p.featured);
}
