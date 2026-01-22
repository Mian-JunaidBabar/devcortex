import { ArrowLeft, ExternalLink, Github, Folder } from "lucide-react";
import { getProject, getProjects } from "@/services/project.service";
import { PortableTextRenderer } from "@/components/portable-text";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: "Project Not Found | Deep Dev Solutions" };
  }

  return {
    title: `${project.title} | Deep Dev Solutions Case Study`,
    description: project.tagline || `Case study for ${project.title}`,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    SaaS: "bg-gray-100 text-gray-600",
    AI: "bg-purple-50 text-purple-700",
    Marketing: "bg-green-50 text-green-700",
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden bg-white border-b border-gray-200">
        <div className="absolute inset-0 neural-bg opacity-40 pointer-events-none"></div>
        <div className="absolute inset-0 mesh-gradient pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-medium">
            <Link href="/work" className="hover:text-primary transition-colors">
              Work
            </Link>
            <span>›</span>
            <span className="text-slate-900">{project.title}</span>
          </div>

          {/* Category & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-2.5 py-1 text-xs font-bold rounded-sm uppercase tracking-wide ${
                categoryColors[project.category] || "bg-gray-100 text-gray-600"
              }`}
            >
              {project.category}
            </span>
            <span className="px-2.5 py-1 text-xs font-medium rounded-sm bg-slate-100 text-slate-600">
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            {project.title}
          </h1>

          {/* Tagline */}
          {project.tagline && (
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
              {project.tagline}
            </p>
          )}

          {/* Image */}
          {project.mainImage && (
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Narrative Content */}
            <div className="lg:col-span-2">
              {project.content ? (
                <PortableTextRenderer value={project.content} />
              ) : (
                <div className="text-center py-20">
                  <p className="text-slate-500 text-lg">
                    Detailed case study content coming soon.
                  </p>
                </div>
              )}
            </div>

            {/* Right: Sticky Project Data Card */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Project Info Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Folder className="w-5 h-5 text-primary" />
                    Project Details
                  </h3>

                  <div className="space-y-6">
                    {/* Category */}
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                        Category
                      </span>
                      <span className="text-slate-900 font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Status */}
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                        Status
                      </span>
                      <span
                        className={`inline-flex items-center gap-2 ${
                          project.status === "Completed"
                            ? "text-green-600"
                            : "text-orange-600"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    {/* Result Metric */}
                    {project.resultMetric && (
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                          Key Result
                        </span>
                        <span className="text-2xl font-black text-primary">
                          {project.resultMetric}
                        </span>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {project.tech && project.tech.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">
                          Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 text-gray-700 border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Site
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white hover:bg-gray-50 text-slate-900 font-medium rounded-lg border border-gray-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Repository
                      </a>
                    )}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    Interested in similar results?
                  </h4>
                  <p className="text-slate-600 text-sm mb-6">
                    Let&apos;s discuss how we can help transform your business.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-sm"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Work CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-primary hover:text-red-700 font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View All Projects</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
