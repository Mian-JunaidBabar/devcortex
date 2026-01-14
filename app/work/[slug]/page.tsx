"use client";

import Link from "next/link";
import {
  ChevronRight,
  Code,
  Database,
  Terminal,
  Cloud,
  Code2,
  HardDrive,
  Zap,
  ShoppingCart,
} from "lucide-react";

interface CaseStudyProject {
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  timeline: string;
  client: string;
  heroImage: string;
  stats: {
    metric: string;
    value: string;
  }[];
  challenge: string;
  challengeText: string;
  architectureTitle: string;
  architectureText: string;
  solution: string;
  solutionText: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  techStack: {
    category: string;
    items: {
      name: string;
      icon: string;
      color: string;
    }[];
  }[];
  deliverables: string[];
  relatedProjects: {
    id: string;
    category: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
}

const projects: Record<string, CaseStudyProject> = {
  "global-logistics": {
    title: "Global Logistics",
    subtitle: "Intelligence Dashboard",
    category: "Enterprise",
    tags: ["Migration", "Enterprise"],
    timeline: "8 Months",
    client: "TransGlobal Inc.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7Db6RmgLKdSGY17U6-vArmWktwpItS0bFNA_fASQsBn2twtbdiOTr_mkFJTSVNeJxbHKyQgCSbdjt4crNS1wfbRGKVQOPsiryDN9F5kKxNtwezuXQWRHWf7lA8WO7nHzeMvplo4gfjoMKUvUuUPZCbN1SeNQQl_Eoftwf8gyxoQ7nWGe9cqU0oFdby7oKRoOCQsRNVJnwEEhGFHQs-iYeDuPpNkpfN80MBpoIDx7qClvOZ6PxBRH3asppj3vCHrsHr-sNG6cZrA",
    stats: [
      { metric: "+300%", value: "Query Performance" },
      { metric: "40ms", value: "Avg. Latency" },
      { metric: "-45%", value: "Infra Costs" },
      { metric: "99.99%", value: "System Uptime" },
    ],
    challenge: "The Challenge",
    challengeText:
      "TransGlobal Inc. was operating on a decade-old monolithic architecture that was struggling to keep up with their rapid expansion into Asian markets. Data synchronization took upwards of 4 hours, and the system experienced frequent downtimes during peak logistics windows. They needed a complete overhaul without disrupting ongoing operations.",
    architectureTitle: "Technical Architecture",
    architectureText:
      "We approached the problem by decoupling the core services. We identified high-velocity data domains (Shipment Tracking, Inventory) and low-velocity domains (User Mgmt, Billing).",
    solution: "The Solution",
    solutionText:
      "Transitioning to a Serverless-First mindset for the frontend delivery allowed us to utilize edge caching, reducing load times for global users. For the backend, we implemented an Event-Driven Architecture using Kafka. This meant that when a shipment status changed, it asynchronously updated inventory, notifications, and analytics without locking the database.",
    testimonial: {
      quote:
        "The new architecture didn't just solve our speed issues; it enabled us to launch two new product lines in Q4 without any additional infrastructure overhead.",
      author: "Sarah Jenkins",
      role: "CTO at TransGlobal",
    },
    techStack: [
      {
        category: "Frontend",
        items: [
          { name: "React", icon: "code", color: "sky" },
          { name: "TypeScript", icon: "code2", color: "blue" },
          { name: "Tailwind", icon: "palette", color: "cyan" },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", icon: "terminal", color: "green" },
          { name: "Postgres", icon: "database", color: "slate" },
          { name: "Redis", icon: "zap", color: "red" },
        ],
      },
      {
        category: "Infrastructure",
        items: [
          { name: "AWS", icon: "cloud", color: "orange" },
          { name: "Docker", icon: "square", color: "blue" },
        ],
      },
    ],
    deliverables: [
      "Microservices Migration Plan",
      "Real-time WebSocket API",
      "Automated CI/CD Pipeline",
      "Design System (Figma to React)",
    ],
    relatedProjects: [
      {
        id: "telemed-ai",
        category: "Healthcare",
        title: "Telemed AI Platform",
        description: "HIPAA compliant video consultation engine.",
        icon: "medical_services",
        color: "blue",
      },
      {
        id: "headless-shopify",
        category: "E-Commerce",
        title: "Headless Shopify Build",
        description: "Custom storefront with 99/100 Lighthouse score.",
        icon: "shopping_cart",
        color: "orange",
      },
    ],
  },
};

export default function ProjectDetailPage({
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
      {/* Header */}
      <section className="relative w-full pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-medium">
            <Link href="/work" className="hover:text-primary transition-colors">
              Work
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>{project.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">{project.title}</span>
          </div>

          {/* Title Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
                {project.title} <br />
                <span className="text-slate-400">{project.subtitle}</span>
              </h1>
            </div>
            <div className="flex flex-col gap-2 md:text-right">
              <div className="inline-flex md:justify-end gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                Timeline: {project.timeline}
              </p>
              <p className="text-sm text-slate-500">Client: {project.client}</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative mx-auto bg-gray-900 rounded-[2rem] shadow-2xl shadow-slate-300 border-[10px] border-gray-800 aspect-[16/10] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
              </div>
              <div className="w-full h-full bg-white overflow-hidden relative group">
                <img
                  alt="Dashboard Screen"
                  className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-700"
                  src={project.heroImage}
                />
                {/* Hover Stat Card */}
                <div className="absolute top-20 right-10 w-64 bg-white rounded-xl shadow-lg p-4 border border-gray-100 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      📈
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">
                        Daily Revenue
                      </div>
                      <div className="text-lg font-bold text-slate-900">
                        $48,290
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-green-500 h-1.5 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto bg-gray-800 h-4 w-[110%] -z-10 rounded-b-xl shadow-xl -mt-1"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(30deg, #2563eb 12%, transparent 12.5%, transparent 87%, #2563eb 87.5%, #2563eb), linear-gradient(150deg, #2563eb 12%, transparent 12.5%, transparent 87%, #2563eb 87.5%, #2563eb), linear-gradient(30deg, #2563eb 12%, transparent 12.5%, transparent 87%, #2563eb 87.5%, #2563eb), linear-gradient(150deg, #2563eb 12%, transparent 12.5%, transparent 87%, #2563eb 87.5%, #2563eb), linear-gradient(60deg, #ea2a3377 25%, transparent 25.5%, transparent 75%, #ea2a3377 75%, #ea2a3377), linear-gradient(60deg, #ea2a3377 25%, transparent 25.5%, transparent 75%, #ea2a3377 75%, #ea2a3377)",
            backgroundSize: "80px 140px",
            backgroundPosition:
              "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="px-4 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white bg-tech-grid tech-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
              {/* Tech Stack */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  📚 Stack Overview
                </h3>
                <div className="space-y-6">
                  {project.techStack.map((stack, idx) => (
                    <div key={idx}>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {stack.category}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.items.map((item, itemIdx) => (
                          <span
                            key={itemIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-gray-200 text-sm font-medium text-slate-700 shadow-sm"
                          >
                            <span className={`w-4 h-4 text-${item.color}-500`}>
                              💻
                            </span>
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Key Deliverables
                </h3>
                <ul className="space-y-3">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-500 mt-0.5 text-lg">✓</span>
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-8">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {project.challenge}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {project.challengeText}
                </p>
              </div>

              {/* Technical Architecture */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {project.architectureTitle}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {project.architectureText}
                </p>

                {/* Architecture Diagram */}
                <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-10 overflow-hidden relative">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(#94a3b8 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="flex flex-col gap-4">
                      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                        <span className="text-2xl mb-2">📱</span>
                        <span className="font-bold text-slate-800 text-sm">
                          Client Layer
                        </span>
                        <span className="text-xs text-slate-500">
                          React / Mobile
                        </span>
                      </div>
                      <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                      <div className="bg-white p-4 rounded-xl border-2 border-blue-600/20 shadow-sm flex flex-col items-center text-center">
                        <span className="text-2xl mb-2">🔌</span>
                        <span className="font-bold text-slate-800 text-sm">
                          API Gateway
                        </span>
                        <span className="text-xs text-slate-500">
                          Kong / Nginx
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-full h-px bg-gray-300 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
                        <span className="text-2xl mb-2">🔄</span>
                        <span className="font-bold text-slate-800 text-sm">
                          Event Bus
                        </span>
                        <span className="text-xs text-slate-500">Kafka</span>
                      </div>
                      <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
                          <span className="text-lg mb-1">📦</span>
                          <span className="text-[10px] font-bold text-slate-700">
                            Inventory
                          </span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
                          <span className="text-lg mb-1">🚚</span>
                          <span className="text-[10px] font-bold text-slate-700">
                            Logistics
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  {project.solution}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.solutionText}
                </p>

                {/* Testimonial */}
                <div className="border-l-4 border-primary pl-6 py-2 my-8 bg-orange-50/50 rounded-r-lg">
                  <p className="text-slate-700 italic font-medium mb-4">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-slate-200"></div>
                    <div className="text-sm">
                      <span className="font-bold text-slate-900 block">
                        {project.testimonial.author}
                      </span>
                      <span className="text-slate-500">
                        {project.testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            More Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.relatedProjects.map((proj, idx) => (
              <Link
                key={idx}
                href={`/work/${proj.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-slate-200 group-hover:scale-110 transition-transform">
                    {proj.icon === "medical_services" ? "🏥" : "🛒"}
                  </span>
                </div>
                <div className="p-6 text-left">
                  <div className="text-xs font-bold text-primary mb-2">
                    {proj.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-500">{proj.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
