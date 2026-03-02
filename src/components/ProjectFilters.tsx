"use client";

import { motion } from "framer-motion";
import { ProjectCategory, categories } from "@/data/projects";

interface ProjectFiltersProps {
  selectedCategory: ProjectCategory | "All";
  onCategoryChange: (cat: ProjectCategory | "All") => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  allTags: string[];
  activeTags: string[];
  onTagToggle: (tag: string) => void;
}

export default function ProjectFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  allTags,
  activeTags,
  onTagToggle,
}: ProjectFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 space-y-8"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Category dropdown */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) =>
              onCategoryChange(e.target.value as ProjectCategory | "All")
            }
            className="appearance-none bg-white border border-sand/60 px-5 py-3 pr-10 font-body text-sm text-charcoal tracking-wide cursor-pointer focus:outline-none focus:border-gold/50 transition-colors duration-300 w-full sm:w-auto"
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-softblack/50 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-softblack/50 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-white border border-sand/60 pl-11 pr-5 py-3 font-body text-sm text-softblack placeholder:text-softblack/40 tracking-wide focus:outline-none focus:border-gold/50 transition-colors duration-300"
          />
        </div>
      </div>

      {/* Tag chips */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`px-4 py-1.5 font-body text-xs tracking-wider uppercase border transition-all duration-300 ${isActive
                  ? "bg-softblack text-ivory border-softblack"
                  : "bg-transparent text-softblack/60 border-sand/50 hover:border-charcoal/30 hover:text-softblack"
                }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
