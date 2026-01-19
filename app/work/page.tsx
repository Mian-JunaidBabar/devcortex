"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  metric?: {
    label: string;
    value: string;
  };
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "OmniBlox",
    description:
      "An enterprise-grade SaaS platform leveraging neural networks for predictive analytics in manufacturing supply chains.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8crbEsKdmz18eD-guJJP5pS0eg3enWK9lE5BQBDw-CN0GMI7LzbwNenCcjLIL_LjF86S0vz7mR37X6SgXRbMx7q6sajGLmGyXEf_k6ojF1QZFww2fQKZzSwCMIeFoD4QNjC0uhfAuXFoagILqnckiLcUqKFUrdC9ktoauQ7VLH48Bkf9PIUAOMEx0koCVSUEZSXjRQomXvg8zLPgsj_swk7Be4wCCabuaaWAGsrXe_fiAO4323guy48-RL8Dvuz2hM9E3uqo3R5k",
    tags: ["Next.js", "AI Integration", "SaaS"],
    metric: {
      label: "Metric",
      value: "97% Accuracy",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Global Logistics",
    description:
      "A complete digital overhaul for a logistics giant, focusing on lead generation pipelines and technical SEO optimization.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCl236BEdTnsF9lKgdKr3fqEvANpwWy-yyQxX9ld3ZU9rT-rva9UWc106bcYyKnwb6gsWk9whT-g2d5_qQOT9K3xhoHd7VERoR-31XDyXKs0AJo7whguxc1zcMFTSYsYIBXK-lhZ_2kXrgNIdLgQeQ-R-mCw8vaWTernB3nmN2vD0y2WX-JTnbogwpG7cY3zOamiIKNQ-f7JBAz1MMRhK2xfH7woB-Nl1es03mNtuYo2cgr0zvDfLZiWeeUrIvkC1X--eIaZGMy7w0",
    tags: ["WordPress", "SEO Strategy", "Marketing"],
    metric: {
      label: "Result",
      value: "40% Growth",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Harmoni AI",
    description:
      "Music generation tool using generative adversarial networks to create royalty-free background tracks.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQaGUqUkNlrZay_-hL8rEm5GYx0eKl5pNTXUOjUKEHLXzJmp1AWDh6ILxbD4K7ZUeJ_Nqne2b2rsSI073vNwqgX7f7VFXC-txTzscy0LB3acEoqeRLUsDKz_bPhQxscwxdL43AKsZ3lODptpDVtaGHQ5FyasR-OQwVh6kTXr03xkiGEtVdz4Ho4wPlewIp9AQFaFOw1-5J_1IxW1sHo5pxMoulG9ykcInXJc56rMAfAMfDeXb3HjXKQEhotD2ny84HoSXvDDtLMNI",
    tags: ["Python", "Product"],
    featured: false,
  },
  {
    id: 4,
    title: "FinTech Pak",
    description:
      "Comprehensive financial dashboard for a Southeast Asian banking startup, featuring real-time crypto tracking.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbp7HATlQtg05ELMUtG8J5dUPiCdrWm1Vlv1hmTzGJF-v6I63v_jydLcHWsfWTSQdfqcBKsirpRRvvOzeplowgS4q5J9F3Iuc4ur3W8O5nGbBs1eRfFKNun6ZUW3chIAIqDnDWzYF-1hnE8AkguzmRAl91nk_myNULOn1WBNEODMlUSH0IRkeg0fN42BOZWO_HvXpsUd40t5c_CLkP7TvYYBYf3MKDQ5FHm_UyX4Dpcdp8L4DOSwFY8H0ppo2uBE0EP7Wp_QwBDGA",
    tags: ["React", "FinTech"],
    featured: false,
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

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
                  onClick={() => setActiveFilter(tab.id)}
                  className={`group relative pb-4 font-bold text-sm whitespace-nowrap transition-colors ${
                    activeFilter === tab.id
                      ? "text-red-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      activeFilter === tab.id ? "w-full" : "w-0"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`group card-zoom flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                  project.featured ? "lg:col-span-1" : "lg:col-span-1"
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full overflow-hidden bg-gray-100">
                  <div className={`aspect-video overflow-hidden`}>
                    <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-gray-900/0 transition-colors z-10"></div>
                    <div
                      className="card-img w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
                      style={{
                        backgroundImage: `url("${project.image}")`,
                      }}
                    ></div>

                    {/* Floating Metric Badge */}
                    {project.metric && (
                      <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur shadow-lg border-l-4 border-red-600 px-4 py-2 rounded-sm">
                        <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">
                          {project.metric.label}
                        </span>
                        <span className="block text-lg font-black text-red-600">
                          {project.metric.value}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col grow p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 text-xs font-bold rounded-sm uppercase tracking-wide ${
                          tag === "SaaS" ||
                          tag === "Marketing" ||
                          tag === "FinTech" ||
                          tag === "Product"
                            ? "bg-gray-100 text-gray-600"
                            : "bg-red-50 text-red-700" /* Changed from blue-50/blue-700 to match Red theme */
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">
                      {project.featured ? "Project Deep-Dive" : "View Project"}
                    </span>
                    <Link
                      href={`/work/${project.id}`}
                      className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors"
                    >
                      {project.featured ? "View Case Study" : "Explore Project"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-20 flex justify-center">
            <button className="group flex items-center justify-center gap-2 h-12 px-8 border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 bg-transparent text-slate-900 dark:text-dark hover:text-red-600 text-sm font-bold rounded transition-all duration-300">
              <Plus className="w-5 h-5" />
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Changed bg-gray-100 to bg-slate-50 to match ServicesPage consistency */}
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
            <button className="flex items-center justify-center h-12 px-8 bg-red-600 hover:bg-red-700 text-white text-base font-bold rounded shadow-lg shadow-red-600/20 hover:shadow-xl transition-all">
              Start a Project
            </button>
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
