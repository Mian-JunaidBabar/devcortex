import { ProjectFilter } from "@/components/work/project-filter";
import { getProjects } from "@/services/project.service";
import Link from "next/link";

export const metadata = {
  title: "Our Work | DevCortex",
  description:
    "Explore our portfolio of high-performance digital products and case studies across SaaS, AI, and marketing.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-150 h-150 bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-150 h-150 bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Our Portfolio
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-white">
            Engineered for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-500">
              Impact
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We build high-performance digital products that drive measurable
            results. Precision engineering meets strategic design.
          </p>
        </div>
      </section>

      {/* Projects Filter & Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilter projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Engineer Your Next Success?
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can apply our technical precision to your
            business challenges.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold rounded-lg shadow-lg shadow-orange-500/20 transition-all"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-base font-bold rounded-lg transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
