"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[3/4] mb-5">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-softblack/0 group-hover:bg-softblack/20 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-softblack/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="font-body text-xs text-ivory/80 leading-relaxed line-clamp-2">
              {project.shortDesc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-forest">
            {project.category}
          </p>
          {project.location && (
            <>
              <span className="w-px h-3 bg-sand" />
              <p className="font-body text-xs text-softblack/70">
                {project.location}
              </p>
            </>
          )}
        </div>

        <h3 className="font-display text-xl md:text-2xl text-softblack group-hover:text-gold transition-colors duration-500">
          {project.title}
        </h3>
      </Link>
    </motion.div>
  );
}
