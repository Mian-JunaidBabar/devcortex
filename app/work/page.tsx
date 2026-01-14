"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "OmniBlox",
    category: "SaaS",
    desc: "A scalable ERP system for logistics built with Nest.js.",
    tech: ["Nest.js", "React", "PostgreSQL"],
    metric: "40% Efficiency Boost",
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Harmoni AI",
    category: "AI",
    desc: "Collaboration tool integrating LLMs for real-time suggestions.",
    tech: ["OpenAI", "Next.js", "Tailwind"],
    metric: "10k+ Daily Users",
    color: "bg-purple-600"
  },
  {
    id: 3,
    title: "BetCerto",
    category: "SaaS",
    desc: "Real-time Fintech dashboard with sub-second latency.",
    tech: ["WebSockets", "Redis", "Vue"],
    metric: "99.99% Uptime",
    color: "bg-green-600"
  },
  {
    id: 4,
    title: "Local Business Launch",
    category: "Marketing",
    desc: "High-conversion WordPress site for a retail chain.",
    tech: ["WordPress", "SEO", "Analytics"],
    metric: "300% ROAS",
    color: "bg-orange-500"
  },
];

const categories = ["All", "SaaS", "Marketing", "AI"];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Selected Work
        </h1>
        
        {/* Filter Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        {...({ layout: true } as any)} 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              {...({
                layout: true,
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
              } as any)}
              key={project.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Placeholder Image Area */}
              <div className="h-64 w-full overflow-hidden">
                <div className={`h-full w-full ${project.color} opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 flex items-center justify-center`}>
                  <span className="text-white font-bold text-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">{project.title}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm">{project.category}</p>
                  </div>
                  <div className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                   <div className="flex gap-2">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {t}
                        </span>
                    ))}
                   </div>
                   <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                       {project.metric}
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}