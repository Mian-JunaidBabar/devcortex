"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/services/project.service";

interface ProjectFilterProps {
  projects: Project[];
}

type FilterCategory = "all" | "SaaS" | "Marketing" | "AI";

const filterTabs: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "SaaS", label: "Enterprise SaaS" },
  { id: "AI", label: "AI Solutions" },
  { id: "Marketing", label: "Marketing Sites" },
];

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      {/* Tab Filters */}
      <div className="mb-12 border-b border-slate-100">
        <div className="flex overflow-x-auto gap-8 no-scrollbar pb-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`group relative pb-4 font-bold text-sm whitespace-nowrap transition-colors ${
                activeFilter === tab.id
                  ? "text-red-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
              <motion.span
                layoutId="activeTab"
                className={`absolute bottom-0 left-0 h-0.5 bg-red-600 ${
                  activeFilter === tab.id ? "w-full" : "w-0"
                }`}
                initial={false}
                animate={{ width: activeFilter === tab.id ? "100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center py-16"
            >
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                🚀 Exciting projects coming soon!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const categoryColors: Record<string, string> = {
    SaaS: "bg-gray-100 text-gray-600",
    AI: "bg-purple-50 text-purple-700",
    Marketing: "bg-green-50 text-green-700",
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group card-zoom flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden bg-gray-100">
        <div className="aspect-video overflow-hidden relative">
          <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-gray-900/0 transition-colors z-10"></div>
          {project.mainImage ? (
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <span className="text-4xl font-black text-slate-400">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Floating Metric Badge */}
          {project.resultMetric && (
            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur shadow-lg border-l-4 border-red-600 px-4 py-2 rounded-sm">
              <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Result
              </span>
              <span className="block text-lg font-black text-red-600">
                {project.resultMetric}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Category Tag */}
          <span
            className={`px-2.5 py-1 text-xs font-bold rounded-sm uppercase tracking-wide ${
              categoryColors[project.category] || "bg-gray-100 text-gray-600"
            }`}
          >
            {project.category}
          </span>

          {/* Tech Tags */}
          {project.tech?.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-bold rounded-sm uppercase tracking-wide bg-red-50 text-red-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
          {project.tagline}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400">
            {project.status}
          </span>
          <Link
            href={`/work/${project.slug}`}
            className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors"
          >
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
