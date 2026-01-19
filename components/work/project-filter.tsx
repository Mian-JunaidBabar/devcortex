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
      <div className="mb-12 border-b border-slate-200 dark:border-slate-800">
        <div className="flex overflow-x-auto gap-8 no-scrollbar pb-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`group relative pb-4 font-bold text-sm whitespace-nowrap transition-colors ${
                activeFilter === tab.id
                  ? "text-orange-500"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
              <motion.span
                layoutId="activeTab"
                className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 ${
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
    SaaS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    AI: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Marketing: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden">
        <div className="aspect-16/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent z-10" />
          {project.mainImage ? (
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <span className="text-6xl font-black text-slate-700">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Floating Metric Badge */}
          {project.resultMetric && (
            <div className="absolute top-4 right-4 z-20 bg-slate-950/90 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-lg">
              <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                Result
              </span>
              <span className="block text-lg font-black text-orange-500">
                {project.resultMetric}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Category Tag */}
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-wide ${
              categoryColors[project.category] ||
              "bg-slate-800 text-slate-400 border-slate-700"
            }`}
          >
            {project.category}
          </span>

          {/* Tech Tags */}
          {project.tech?.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-6 line-clamp-2">{project.tagline}</p>

        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            {project.status}
          </span>
          <Link
            href={`/work/${project.slug}`}
            className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-orange-400 transition-colors"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
