"use client";

import Link from "next/link";
import {
  FolderOpen,
  CheckCircle,
  ArrowRight,
  Quote,
  Calendar,
} from "lucide-react";

interface CaseStudy {
  title: string;
  category: string;
  tagline: string;
  client: string;
  timeline: string;
  services: string[];
  techStack: string[];
  liveLink: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  challenge: string;
  challengeDetail: string;
  solution: string;
  solutionPoints: string[];
  impact: {
    metric: string;
    value: string;
    label: string;
    color: string;
  }[];
  impactSummary: string;
  gallery: {
    title: string;
    description: string;
    aspect: string;
  }[];
}

const caseStudies: Record<string, CaseStudy> = {
  omniblox: {
    title: "OmniBlox Financial Suite",
    category: "FinTech • Enterprise",
    tagline:
      "Redefining institutional DeFi trading with a sub-millisecond data engine and a modular dashboard architecture.",
    client: "OmniBlox Inc.",
    timeline: "4 Months (Q3 2023)",
    services: [
      "UI/UX Design",
      "Frontend Architecture",
      "Smart Contract Integration",
    ],
    techStack: ["Next.js 14", "Python", "PostgreSQL", "AWS", "Web3.js"],
    liveLink: "#",
    testimonial: {
      quote:
        "DevCortex transformed our MVP into a robust, enterprise-ready platform. The speed of execution and attention to performance detail was unmatched.",
      author: "Sarah Jenkins",
      role: "CTO, OmniBlox",
      avatar: "SJ",
    },
    challenge: "The Challenge",
    challengeDetail:
      "OmniBlox was facing severe scalability bottlenecks. Their initial MVP, built on a monolithic architecture, struggled to handle real-time data synchronization for over 50,000 concurrent users during market volatility. The client needed a complete overhaul of their frontend infrastructure to support high-frequency trading data updates without freezing the UI. Key requirements included reducing Time-to-Interactive (TTI) and ensuring zero downtime during deployment cycles.",
    solution: "The Solution",
    solutionPoints: [
      "Migrated from CSR to SSR/ISR hybrid model for 3x faster load times.",
      "Implemented Redis caching layer to offload 60% of database queries.",
      "Custom design system with Tailwind CSS for consistent UI scaling.",
    ],
    impact: [
      {
        metric: "500%",
        value: "User Growth Support",
        label: "Scaled without downtime",
        color: "accent-orange",
      },
      {
        metric: "-40%",
        value: "Latency Reduction",
        label: "Optimized API calls",
        color: "accent-blue",
      },
      {
        metric: "99.9%",
        value: "Uptime Reliability",
        label: "Self-healing infrastructure",
        color: "primary",
      },
    ],
    impactSummary:
      "Following the launch, OmniBlox secured Series B funding and onboarded three major institutional partners. The new infrastructure now processes over $2M in daily volume with complete stability.",
    gallery: [
      {
        title: "Dashboard Overview",
        description: "Main command center for traders",
        aspect: "[4/3]",
      },
      {
        title: "Mobile Responsiveness",
        description: "Full functionality on the go",
        aspect: "[3/4]",
      },
      {
        title: "Design System",
        description: "Atomic components & Tokens",
        aspect: "square",
      },
      {
        title: "Analytics Modules",
        description: "Real-time data visualization",
        aspect: "[4/3]",
      },
    ],
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Case Study Not Found
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/work" className="text-primary font-bold hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white border-b border-gray-200">
        <div className="absolute inset-0 neural-bg opacity-40 pointer-events-none"></div>
        <div className="absolute inset-0 mesh-gradient pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold mb-6 uppercase tracking-wider border border-orange-100">
              {caseStudy.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
              {caseStudy.tagline}
            </p>
          </div>

          {/* Project Showcase */}
          <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-gray-200 bg-slate-50 aspect-video group">
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden">
              <div className="w-[90%] h-[90%] bg-white rounded-t-xl shadow-lg border border-slate-200 flex flex-col overflow-hidden relative top-[10%] transition-transform duration-700 group-hover:-translate-y-2">
                <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-2 bg-white">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 p-8 grid grid-cols-12 gap-6 bg-slate-50/50">
                  <div className="col-span-3 bg-white rounded-lg shadow-sm border border-slate-100 h-40"></div>
                  <div className="col-span-9 grid grid-rows-2 gap-6">
                    <div className="flex gap-6">
                      <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-100 h-24"></div>
                      <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-100 h-24"></div>
                      <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-100 h-24"></div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-slate-100 h-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-200 shadow-lg z-20 hidden md:block">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                Platform
              </p>
              <p className="text-lg font-bold text-slate-900">
                Web Dashboard & Mobile App
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-32 space-y-10">
                {/* Project Details Card */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <FolderOpen className="w-6 h-6 text-primary" />
                    Project Details
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Client
                      </p>
                      <p className="text-base font-medium text-slate-900">
                        {caseStudy.client}
                      </p>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Timeline
                      </p>
                      <p className="text-base font-medium text-slate-900">
                        {caseStudy.timeline}
                      </p>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Services
                      </p>
                      <ul className="text-base text-slate-600 space-y-1">
                        {caseStudy.services.map((service, idx) => (
                          <li key={idx}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <a
                      className="flex items-center justify-between w-full text-slate-900 font-bold hover:text-primary transition-colors group"
                      href={caseStudy.liveLink}
                    >
                      Visit Live Site
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative p-8 bg-blue-50 rounded-3xl border border-blue-100">
                  <Quote className="w-12 h-12 text-blue-600/20 absolute top-6 right-6" />
                  <p className="text-slate-800 italic font-medium leading-relaxed mb-4 relative z-10">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">
                      {caseStudy.testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {caseStudy.testimonial.author}
                      </p>
                      <p className="text-xs text-slate-500">
                        {caseStudy.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              {/* Challenge */}
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="size-8 rounded-full bg-red-100 text-primary flex items-center justify-center">
                    ✕
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {caseStudy.challenge}
                  </h2>
                </div>
                <div className="prose prose-lg prose-slate text-slate-600 max-w-none">
                  <p className="leading-relaxed mb-6">
                    {caseStudy.challengeDetail}
                  </p>
                </div>
              </section>

              {/* Solution */}
              <section className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    💡
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {caseStudy.solution}
                  </h2>
                </div>
                <div className="prose prose-lg prose-slate text-slate-600 max-w-none mb-8">
                  <p className="leading-relaxed mb-6">
                    We engineered a decoupled architecture using{" "}
                    <strong>Next.js</strong> for the frontend and a{" "}
                    <strong>Python (FastAPI)</strong> microservices layer for
                    data processing. By implementing an optimistic UI approach
                    and WebSockets, we ensured that users see data updates
                    instantly.
                  </p>
                  <ul className="space-y-4 my-8">
                    {caseStudy.solutionPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Box */}
                <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h4 className="text-white font-bold mb-6 relative z-10">
                    System Architecture Overview
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <span>🔐</span>
                      <p className="text-slate-300 text-sm font-bold mt-2">
                        Data Layer
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        Postgres + Redis
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <span>→</span>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <span>📱</span>
                      <p className="text-slate-300 text-sm font-bold mt-2">
                        Client Layer
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        Next.js + React
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Impact */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <span className="size-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    📈
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    The Impact
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {caseStudy.impact.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-orange-200 transition-colors"
                    >
                      <p className="text-4xl font-black text-orange-600 mb-2">
                        {item.metric}
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {item.value}
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="prose prose-lg prose-slate text-slate-600 max-w-none">
                  <p className="leading-relaxed">{caseStudy.impactSummary}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Interface Gallery */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Visual Interface
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              A closer look at the design system and application views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.gallery.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-slate-100 flex items-center justify-center">
                  <div className="text-4xl">📊</div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-bold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_40%)]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to scale your product?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            We build digital engines that grow your business. Let's discuss your
            next project.
          </p>
          <button className="bg-primary text-white h-14 px-10 rounded-full font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 text-lg mx-auto">
            Book a Strategy Call
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
