"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface SimilarProjectsProps {
  projects: Project[];
}

export default function SimilarProjects({ projects }: SimilarProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Explore More
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-softblack">
            Similar Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
