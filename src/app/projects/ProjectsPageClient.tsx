"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/data/projects";
import { filterProjects, getAllTags } from "@/lib/projectUtils";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPageClient() {
    const [category, setCategory] = useState<ProjectCategory | "All">("All");
    const [search, setSearch] = useState("");
    const [activeTags, setActiveTags] = useState<string[]>([]);

    const allTags = useMemo(() => getAllTags(projects), []);

    const filtered = useMemo(
        () => filterProjects(projects, category, search, activeTags),
        [category, search, activeTags]
    );

    const handleTagToggle = (tag: string) => {
        setActiveTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <>
            <Navbar />
            <main className="bg-cream min-h-screen">
                {/* Page header */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-20">
                    <div className="mx-auto max-w-7xl px-6 md:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Link
                                    href="/"
                                    className="font-body text-xs tracking-widest uppercase text-warmgray hover:text-gold transition-colors duration-300"
                                >
                                    Home
                                </Link>
                                <span className="w-4 h-px bg-sand" />
                                <span className="font-body text-xs tracking-widest uppercase text-charcoal">
                                    Projects
                                </span>
                            </div>

                            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                                Our Portfolio
                            </p>
                            <h1 className="font-display text-4xl md:text-6xl text-softblack">
                                Projects
                            </h1>
                            <p className="mt-4 font-body text-base text-charcoal/55 max-w-xl leading-relaxed">
                                A curated collection of spaces where vision meets meticulous
                                craftsmanship.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Filters + Grid */}
                <section className="pb-28 md:pb-36">
                    <div className="mx-auto max-w-7xl px-6 md:px-12">
                        <ProjectFilters
                            selectedCategory={category}
                            onCategoryChange={setCategory}
                            searchQuery={search}
                            onSearchChange={setSearch}
                            allTags={allTags}
                            activeTags={activeTags}
                            onTagToggle={handleTagToggle}
                        />

                        {filtered.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {filtered.map((project, i) => (
                                    <ProjectCard
                                        key={project.slug}
                                        project={project}
                                        index={i}
                                    />
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-24"
                            >
                                <p className="font-display text-2xl text-warmgray mb-3">
                                    No projects found
                                </p>
                                <p className="font-body text-sm text-warmgray/70">
                                    Try adjusting your filters or search query.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
