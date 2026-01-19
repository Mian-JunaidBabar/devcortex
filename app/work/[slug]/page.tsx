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
    return { title: "Project Not Found | DevCortex" };
  }

  return {
    title: `${project.title} | DevCortex Case Study`,
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
    SaaS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    AI: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Marketing: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {project.mainImage ? (
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-slate-900 to-slate-950" />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          {/* Back Link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Work</span>
          </Link>

          {/* Category & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-4 py-1.5 text-xs font-bold rounded-full border uppercase tracking-wider ${
                categoryColors[project.category] ||
                "bg-slate-800 text-slate-400 border-slate-700"
              }`}
            >
              {project.category}
            </span>
            <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50">
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {project.title}
          </h1>

          {/* Tagline */}
          {project.tagline && (
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              {project.tagline}
            </p>
          )}

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Narrative Content */}
            <div className="lg:col-span-2 order-2 lg:order-1">
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
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Project Info Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Folder className="w-5 h-5 text-orange-500" />
                    Project Details
                  </h3>

                  <div className="space-y-6">
                    {/* Category */}
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                        Category
                      </span>
                      <span className="text-white font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Status */}
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                        Status
                      </span>
                      <span
                        className={`inline-flex items-center gap-2 ${
                          project.status === "Completed"
                            ? "text-green-400"
                            : "text-orange-400"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    {/* Result Metric */}
                    {project.resultMetric && (
                      <div>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                          Key Result
                        </span>
                        <span className="text-2xl font-black text-orange-500">
                          {project.resultMetric}
                        </span>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {project.tech && project.tech.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">
                          Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
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
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Repository
                      </a>
                    )}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-linear-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
                  <h4 className="text-lg font-bold text-white mb-3">
                    Interested in similar results?
                  </h4>
                  <p className="text-slate-400 text-sm mb-6">
                    Let&apos;s discuss how we can help transform your business.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-lg transition-colors"
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
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">View All Projects</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
