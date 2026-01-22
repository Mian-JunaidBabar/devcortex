import { ProjectFilter } from "@/components/work/project-filter";
import { getProjects } from "@/services/project.service";
import Link from "next/link";

export const metadata = {
  title: "Our Work | Deep Dev Solutions",
  description:
    "Explore our portfolio of high-performance digital products and case studies across SaaS, AI, and marketing.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilter projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
            Ready to Engineer Your Next Success?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can apply our technical precision to your
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
    </main>
  );
}
