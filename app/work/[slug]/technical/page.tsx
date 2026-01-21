"use client";

import Link from "next/link";
import {
  ChevronRight,
  Layers,
  CheckCircle,
  TrendingUp,
  FolderOpen,
  Quote,
  ArrowRight,
} from "lucide-react";

interface CaseStudyDetail {
  category: string;
  title: string;
  tagline: string;
  client: string;
  timeline: string;
  services: string[];
  techStack: string[];
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
  gallery: {
    title: string;
    description: string;
    aspect: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

const projects: Record<string, CaseStudyDetail> = {
  omniblox: {
    category: "FinTech • Enterprise",
    title: "OmniBlox Financial Suite",
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
        color: "orange",
      },
      {
        metric: "-40%",
        value: "Latency Reduction",
        label: "Optimized API calls",
        color: "blue",
      },
      {
        metric: "99.9%",
        value: "Uptime Reliability",
        label: "Self-healing infrastructure",
        color: "red",
      },
    ],
    gallery: [
      {
        title: "Dashboard Overview",
        description: "Main command center for traders",
        aspect: "4/3",
      },
      {
        title: "Mobile Responsiveness",
        description: "Full functionality on the go",
        aspect: "3/4",
      },
      {
        title: "Design System",
        description: "Atomic components & Tokens",
        aspect: "1/1",
      },
      {
        title: "Analytics Modules",
        description: "Real-time data visualization",
        aspect: "4/3",
      },
    ],
    testimonial: {
      quote:
        "Deep Dev Solutions transformed our MVP into a robust, enterprise-ready platform. The speed of execution and attention to performance detail was unmatched.",
      author: "Sarah Jenkins",
      role: "CTO, OmniBlox",
      avatar: "SJ",
    },
  },
};

export default function ProjectTechnicalPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Link href="/work" className="text-primary font-bold hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/work" className="flex items-center gap-2 group">
              <div className="size-8 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                🔷
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Deep Dev Solutions
              </h2>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="/work"
                className="text-sm font-medium text-primary hover:text-primary transition-colors"
              >
                Work
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                Contact
              </a>
              <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-600 transition-colors shadow-lg shadow-primary/20">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white border-b border-gray-200">
        <div className="absolute inset-0 neural-bg opacity-40 pointer-events-none"></div>
        <div className="absolute inset-0 mesh-gradient pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title Section */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-500 text-xs font-bold mb-6 uppercase tracking-wider border border-orange-100">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Browser Mockup */}
          <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-gray-200 bg-slate-50 aspect-video group">
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden">
              <div className="w-[90%] h-[90%] bg-white rounded-t-xl shadow-lg border border-slate-200 flex flex-col overflow-hidden relative top-[10%] transition-transform duration-700 group-hover:-translate-y-2">
                {/* Browser Tab Bar */}
                <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-2 bg-white">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Browser Content */}
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
            {/* Platform Label */}
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

      {/* Main Content Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-32 space-y-10">
                {/* Project Details Card */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-primary" />
                    Project Details
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Client
                      </p>
                      <p className="text-base font-medium text-slate-900">
                        {project.client}
                      </p>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Timeline
                      </p>
                      <p className="text-base font-medium text-slate-900">
                        {project.timeline}
                      </p>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Services
                      </p>
                      <ul className="text-base text-slate-600 space-y-1">
                        {project.services.map((service, idx) => (
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
                        {project.techStack.map((tech, idx) => (
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
                    <a className="flex items-center justify-between w-full text-slate-900 font-bold hover:text-primary transition-colors group">
                      Visit Live Site
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="relative p-8 bg-blue-50 rounded-3xl border border-blue-100">
                  <Quote className="w-8 h-8 text-blue-600/20 absolute top-6 right-6" />
                  <p className="text-slate-800 italic font-medium leading-relaxed mb-4 relative z-10">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">
                      {project.testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {project.testimonial.author}
                      </p>
                      <p className="text-xs text-slate-500">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-16">
              {/* Challenge Section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="size-8 rounded-full bg-red-100 text-primary flex items-center justify-center">
                    ⚠️
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {project.challenge}
                  </h2>
                </div>
                <div className="text-slate-600 text-lg leading-relaxed">
                  <p>{project.challengeDetail}</p>
                </div>
              </section>

              {/* Solution Section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    🧠
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {project.solution}
                  </h2>
                </div>
                <div className="mb-8">
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    We engineered a decoupled architecture using{" "}
                    <strong>Next.js</strong> for the frontend and a{" "}
                    <strong>Python (FastAPI)</strong> microservices layer for
                    data processing. By implementing an optimistic UI approach
                    and WebSockets, we ensured that users see data updates
                    instantly.
                  </p>
                  <ul className="space-y-4">
                    {project.solutionPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Architecture */}
                <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h4 className="text-white font-bold mb-6 relative z-10">
                    System Architecture Overview
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <Layers className="w-6 h-6 text-orange-500 mb-2" />
                      <p className="text-slate-300 text-sm font-bold">
                        Data Layer
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        Postgres + Redis
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <Layers className="w-6 h-6 text-blue-600 mb-2" />
                      <p className="text-slate-300 text-sm font-bold">
                        Client Layer
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        Next.js + React
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Impact Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <span className="size-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    📈
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">
                    The Impact
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {project.impact.map((item, idx) => (
                    <div
                      key={idx}
                      className={`bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-${item.color}-200 transition-colors`}
                    >
                      <p
                        className={`text-4xl font-black mb-2 ${
                          item.color === "orange"
                            ? "text-orange-500"
                            : item.color === "blue"
                              ? "text-blue-600"
                              : "text-primary"
                        }`}
                      >
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
                <p className="text-slate-600 text-lg leading-relaxed">
                  Following the launch, OmniBlox secured Series B funding and
                  onboarded three major institutional partners. The new
                  infrastructure now processes over $2M in daily volume with
                  complete stability.
                </p>
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
          <div className="masonry-grid">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="break-inside-avoid mb-6 group">
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`bg-slate-100 relative p-8 flex items-center justify-center aspect-[${item.aspect}]`}
                  >
                    <div
                      className={`w-full h-full bg-white rounded-lg shadow-sm border border-slate-200 ${
                        idx === 2
                          ? "bg-slate-900 flex items-center justify-center"
                          : ""
                      }`}
                    >
                      {idx === 2 ? (
                        <div className="text-center">
                          <span className="text-6xl text-blue-600 mb-4 block">
                            🎨
                          </span>
                          <div className="flex gap-2 justify-center">
                            <div className="size-6 rounded-full bg-primary"></div>
                            <div className="size-6 rounded-full bg-blue-600"></div>
                            <div className="size-6 rounded-full bg-orange-500"></div>
                            <div className="size-6 rounded-full bg-white"></div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
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
            <span>📅</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="size-8 text-primary flex items-center justify-center">
                  🔷
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Deep Dev Solutions
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                A hybrid digital agency bridging the gap between rapid
                deployment and enterprise-grade engineering.
              </p>
              <div className="flex gap-4">
                <a
                  className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <span className="font-bold text-xs">LN</span>
                </a>
                <a
                  className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <span className="font-bold text-xs">TW</span>
                </a>
                <a
                  className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <span className="font-bold text-xs">IG</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Rapid CMS Launch
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Custom Web Apps
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    AI & Automation
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    SEO & Growth
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Cloud Architecture
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Stay Updated</h4>
              <p className="text-slate-500 text-sm mb-4">
                Latest tech trends and agency updates.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="w-full py-3 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2024 Deep Dev Solutions. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-slate-400">
              <a className="hover:text-slate-600" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-slate-600" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
