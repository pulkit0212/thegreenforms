"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { getFeaturedProjects } from "@/lib/projectUtils";

const featured = getFeaturedProjects(projects);

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-28 md:py-36 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-softblack">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-softblack/0 group-hover:bg-softblack/20 transition-all duration-700" />
                </div>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-forest mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-softblack group-hover:text-gold transition-colors duration-500">
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-block px-12 py-4 border border-softblack/20 text-softblack font-body text-sm tracking-widest uppercase hover:bg-softblack hover:text-ivory transition-all duration-500"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
