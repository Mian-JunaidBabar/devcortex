"use client";

import {
  Calendar,
  ArrowRight,
  Smartphone,
  TrendingUp,
  Brain,
  Code,
  Megaphone,
  Search,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-slate-50 pt-24 pb-20 lg:pt-28 lg:pb-32 border-b border-slate-100">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-blue-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-red-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900">
            We Build Digital Products
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-red-600">
              & Scale Them to Profit.
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Stop juggling separate freelancers for dev and marketing. We combine
            custom <strong>Web & App Development</strong> with high-performance{" "}
            <strong>Ad Campaigns</strong> to grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white h-14 px-8 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-red-600/20 flex items-center justify-center gap-2 text-lg"
            >
              Book a Strategy Call
              <Calendar className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="bg-white border border-slate-200 text-slate-700 h-14 px-8 rounded-full font-bold hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-lg shadow-sm"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section (Build vs Grow) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* BUILD Card (Blue) */}
            <div className="group relative bg-blue-50/50 rounded-[2rem] p-10 border border-blue-100 hover:border-blue-300 transition-all hover:shadow-2xl hover:shadow-blue-600/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code className="w-32 h-32 text-blue-600" />
              </div>
              <div className="relative z-10">
                <div className="size-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-blue-600 border border-blue-100">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  Web & App Engineering
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Whether you need a rapid WordPress launch or a custom Mobile
                  App, we build platforms designed to convert visitors into
                  customers.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span>Custom React & Next.js Apps</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span>High-Performance WordPress</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center font-bold text-blue-600 group-hover:gap-2 transition-all"
                >
                  View Development Services
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* GROW Card (Red) */}
            <div className="group relative bg-red-50/50 rounded-[2rem] p-10 border border-red-100 hover:border-red-300 transition-all hover:shadow-2xl hover:shadow-red-600/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp className="w-32 h-32 text-red-600" />
              </div>
              <div className="relative z-10">
                <div className="size-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-red-600 border border-red-100">
                  <Megaphone className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  Growth & Marketing
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Building the product is only half the battle. We execute
                  rigorous SEO strategies and Ad campaigns to dominate your
                  market.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    <span>Google & Meta Ads (PPC)</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    <span>Technical SEO & Ranking</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center font-bold text-red-600 group-hover:gap-2 transition-all"
                >
                  View Marketing Services
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The DeepDev Solutions Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* AI & Automation */}
            <div className="md:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 overflow-hidden relative group hover:shadow-md transition-all">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-purple-100 rounded-full blur-3xl group-hover:bg-purple-200 transition-colors"></div>
              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold mb-4 uppercase tracking-wider border border-purple-100">
                  Efficiency
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  AI & Automation
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Streamline your operations. We deploy custom chatbots and
                  workflow automations that handle customer support and leads
                  24/7, saving you 20+ hours a week.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 border border-slate-200">
                    Chatbots
                  </span>
                  <span className="px-3 py-1 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 border border-slate-200">
                    Auto-Reply
                  </span>
                  <span className="px-3 py-1 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 border border-slate-200">
                    Workflows
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <Brain className="w-24 h-24 text-purple-500/80" />
              </div>
            </div>

            {/* Full Stack Development */}
            <div className="md:row-span-2 bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-blue-500 to-cyan-400"></div>
              <div className="mb-auto relative z-10">
                <div className="size-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Full-Stack Dev
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  From robust backends to pixel-perfect frontends. We build
                  scalable engines using modern tech stacks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{" "}
                    Next.js Websites
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{" "}
                    Mobile Apps (Flutter)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{" "}
                    E-Commerce Stores
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{" "}
                    Custom CRM/SaaS
                  </li>
                </ul>
              </div>
              <div className="mt-8 relative h-32 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-2 bg-slate-200 rounded-full w-1/2"></div>
                <div className="absolute top-8 left-4 right-4 h-2 bg-slate-200 rounded-full w-3/4"></div>
                <div className="absolute top-12 left-4 right-4 h-2 bg-slate-200 rounded-full w-2/3"></div>
              </div>
            </div>

            {/* Paid Acquisition */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-red-300 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-red-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Paid Acquisition
                </h3>
                <p className="text-slate-600 text-sm">
                  Meta (Facebook/Insta) & Google Ads optimized for low Cost Per
                  Lead.
                </p>
              </div>
            </div>

            {/* SEO & Analytics */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-300 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  SEO & Analytics
                </h3>
                <p className="text-slate-600 text-sm">
                  Technical SEO audits and real-time data dashboards to track
                  ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
