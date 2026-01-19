import { getProjects, type Project } from "@/services/project.service";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function WorkPage() {
  const projects = await getProjects();

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "Enterprise SaaS" },
    { id: "ai", label: "AI Solutions" },
    { id: "marketing", label: "Marketing Sites" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 to-white pt-20 pb-24 lg:pt-32 lg:pb-32 border-b border-slate-100">
        <div className="absolute inset-0 tech-noise opacity-30 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-150 h-150 bg-blue-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-red-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Latest Works
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-slate-900">
            Engineered for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-red-600">
              Impact
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            We build high-performance digital products that drive measurable
            results across industries. Precision engineering meets strategic
            design.
          </p>
        </div>
      </section>

      {/* Filters & Grid Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Filters */}
          <div className="mb-12 border-b border-slate-100">
            <div className="flex overflow-x-auto gap-8 no-scrollbar pb-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  className="group relative pb-4 font-bold text-sm whitespace-nowrap transition-colors text-slate-600 hover:text-slate-900"
                >
                  {tab.label}
                  <span className="absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 w-0 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-slate-500 text-lg font-medium">
                  🚀 Exciting projects coming soon!
                </p>
              </div>
            )}
          </div>

          {/* Load More */}
          {projects.length > 0 && (
            <div className="mt-20 flex justify-center">
              <button className="group flex items-center justify-center gap-2 h-12 px-8 border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 bg-transparent text-slate-900 dark:text-dark hover:text-red-600 text-sm font-bold rounded transition-all duration-300">
                <Plus className="w-5 h-5" />
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
            Ready to Engineer Your Next Success?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can apply our technical precision to your
            business challenges.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center h-12 px-8 bg-red-600 hover:bg-red-700 text-white text-base font-bold rounded shadow-lg shadow-red-600/20 hover:shadow-xl transition-all"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center h-12 px-8 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-900 dark:text-white border border-gray-200 dark:border-gray-700 text-base font-bold rounded transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
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
    <article className="group card-zoom flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
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
    </article>
  );
}
