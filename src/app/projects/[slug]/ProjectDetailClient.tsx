"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import SimilarProjects from "@/components/SimilarProjects";

interface Props {
  project: Project;
  similarProjects: Project[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProjectDetailClient({
  project,
  similarProjects,
}: Props) {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Hero */}
        <section className="relative w-full h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-softblack/80 via-softblack/30 to-softblack/10" />

          <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <motion.div
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
              >
                {/* Breadcrumb */}
                <motion.div
                  custom={0.2}
                  variants={fadeUp}
                  className="flex items-center gap-3 mb-6"
                >
                  <Link
                    href="/"
                    className="font-body text-xs tracking-widest uppercase text-ivory/60 hover:text-ivory transition-colors"
                  >
                    Home
                  </Link>
                  <span className="w-4 h-px bg-ivory/30" />
                  <Link
                    href="/projects"
                    className="font-body text-xs tracking-widest uppercase text-ivory/60 hover:text-ivory transition-colors"
                  >
                    Projects
                  </Link>
                  <span className="w-4 h-px bg-ivory/30" />
                  <span className="font-body text-xs tracking-widest uppercase text-ivory/90">
                    {project.title}
                  </span>
                </motion.div>

                <motion.div
                  custom={0.3}
                  variants={fadeUp}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="font-body text-xs tracking-[0.25em] uppercase text-gold">
                    {project.category}
                  </span>
                  {project.location && (
                    <>
                      <span className="w-px h-3 bg-ivory/30" />
                      <span className="font-body text-xs text-ivory/60">
                        {project.location}
                      </span>
                    </>
                  )}
                  {project.year && (
                    <>
                      <span className="w-px h-3 bg-ivory/30" />
                      <span className="font-body text-xs text-ivory/60">
                        {project.year}
                      </span>
                    </>
                  )}
                </motion.div>

                <motion.h1
                  custom={0.4}
                  variants={fadeUp}
                  className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory leading-[1.1]"
                >
                  {project.title}
                </motion.h1>

                <motion.p
                  custom={0.55}
                  variants={fadeUp}
                  className="mt-5 font-body text-base md:text-lg text-ivory/70 max-w-xl leading-relaxed"
                >
                  {project.shortDesc}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="lg:col-span-2"
              >
                <h2 className="font-display text-2xl md:text-3xl text-softblack mb-8">
                  About the Project
                </h2>
                <p className="font-body text-base md:text-lg text-charcoal/70 leading-[1.9] whitespace-pre-line">
                  {project.description}
                </p>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-10"
              >
                {/* Details */}
                <div className="space-y-6 border-l border-sand/60 pl-6">
                  {project.location && (
                    <div>
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-warmgray mb-1">
                        Location
                      </p>
                      <p className="font-body text-sm text-charcoal">
                        {project.location}
                      </p>
                    </div>
                  )}
                  {project.year && (
                    <div>
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-warmgray mb-1">
                        Year
                      </p>
                      <p className="font-body text-sm text-charcoal">
                        {project.year}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-warmgray mb-1">
                      Category
                    </p>
                    <p className="font-body text-sm text-charcoal">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-warmgray mb-4">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 font-body text-xs tracking-wider uppercase border border-sand/50 text-warmgray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 space-y-3">
                  <Link
                    href={`/contact?project=${project.slug}&source=ProjectCTA`}
                    className="inline-block w-full text-center px-8 py-4 bg-softblack text-ivory font-body text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-500"
                  >
                    Get Quote for This Project
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center px-8 py-4 border border-softblack/20 text-softblack font-body text-sm tracking-widest uppercase hover:bg-softblack hover:text-ivory transition-all duration-500"
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Gallery
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-softblack">
                Project Images
              </h2>
            </motion.div>

            <ProjectGallery images={project.images} title={project.title} />
          </div>
        </section>

        {/* Similar */}
        <SimilarProjects projects={similarProjects} />
      </main>
      <Footer />
    </>
  );
}
