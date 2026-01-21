"use client";

import Link from "next/link";
import {
  CheckCircle,
  Code,
  Megaphone,
  Smartphone,
  Globe,
  Bot,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-slate-50 pt-24 pb-24 lg:pt-32 lg:pb-32 border-b border-slate-100">
        <div className="absolute inset-0 tech-noise opacity-30 pointer-events-none mix-blend-multiply"></div>
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Now Onboarding New Clients
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-slate-900">
            Engineering Meets <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Modern Marketing
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            We don't just build the car; we fill the tank. A complete digital
            ecosystem designed to build your product and scale your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white h-12 px-8 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              Get a Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="bg-white border border-slate-300 text-slate-700 h-12 px-8 rounded-full font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* The Dual Engine Approach (Comparison) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Dual Engine Approach
            </h2>
            <p className="text-lg text-slate-500">
              How we integrate Engineering (Blue) with Growth (Red).
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl bg-white">
            <div className="grid grid-cols-12 divide-y divide-slate-100 lg:divide-y-0 lg:divide-x lg:divide-slate-100">
              {/* Intro Column */}
              <div className="col-span-12 lg:col-span-4 p-8 bg-slate-50 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                  Full-Cycle Matrix
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Most agencies only do one half. We unify the process to ensure
                  your product is actually marketable from day one.
                </p>
              </div>

              {/* LEFT COLUMN: The Build (BLUE) */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 bg-white relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    The Engine (Build)
                  </h4>
                </div>
                <ul className="space-y-6">
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Core Technology
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-bold">
                      Next.js, React, Flutter
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Objective
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Conversion & Performance
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Deliverable
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Custom Website / App
                    </div>
                  </li>
                </ul>
              </div>

              {/* RIGHT COLUMN: The Growth (RED) */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 bg-slate-50/50 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <Megaphone className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    The Fuel (Grow)
                  </h4>
                </div>
                <ul className="space-y-6">
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Core Channels
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-bold">
                      Google Ads, Meta, SEO
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Objective
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Leads & Revenue
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Deliverable
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Qualified Traffic
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Tech Stack */}
            <div className="flex flex-col gap-6">
              <div className="size-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 mb-2">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  App & Web Dev
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We specialize in <strong>Custom Development</strong> using
                  Next.js for web and <strong>Flutter</strong> for cross-platform
                  mobile apps. We also offer high-speed WordPress builds.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                  Flutter
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                  WordPress
                </span>
              </div>
            </div>

            {/* Marketing */}
            <div className="flex flex-col gap-6">
              <div className="size-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-red-600 mb-2">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Paid Acquisition
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Stop burning money on bad ads. We run highly targeted
                  campaigns on <strong>Google (PPC)</strong> and{" "}
                  <strong>Meta (Facebook/Instagram)</strong> focused strictly on
                  lowering your CPL.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                  Google Ads
                </span>
                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                  Meta Ads
                </span>
                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                  SEO
                </span>
              </div>
            </div>

            {/* AI */}
            <div className="flex flex-col gap-6">
              <div className="size-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-purple-600 mb-2">
                <Bot className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  AI & Automation
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Future-proof your business. We implement <strong>AI Chatbots</strong> 
                  to handle support tickets and automate repetitive workflows
                  using Zapier and Python.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full">
                  Chatbots
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full">
                  Python
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full">
                  RAG
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 tech-noise opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Engagement Models
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Transparent pricing designed to scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Package 1: Starter (Local/Small Biz) */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-xl hover:border-slate-300 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-extrabold uppercase tracking-wide mb-4">
                  Foundation
                </span>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">
                  $2,500
                  <span className="text-lg text-slate-400 font-normal">
                    +
                  </span>
                </h3>
                <p className="text-slate-500 text-sm">
                  Perfect for local businesses needing a fast, professional launch.
                </p>
              </div>
              <div className="w-full h-px bg-slate-100 mb-8"></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>High-Speed WordPress Site</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Local SEO Setup (GMB)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Basic Analytics Integration</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>1 Week Delivery</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-full border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                Select Foundation
              </button>
            </div>

            {/* Package 2: Growth (The Upsell) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-[2rem] p-8 shadow-2xl shadow-blue-600/20 border border-slate-700 relative flex flex-col h-full transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                Most Popular
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-[2rem] pointer-events-none"></div>

              <div className="mb-6 relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-white text-xs font-extrabold uppercase tracking-wide mb-4 ring-1 ring-white/10">
                  Growth System
                </span>
                <h3 className="text-4xl font-bold text-white mb-2">
                  Custom
                </h3>
                <p className="text-slate-300 text-sm">
                  Complete architecture for scaling startups and SMBs.
                </p>
              </div>
              <div className="w-full h-px bg-slate-700 mb-8 relative z-10"></div>
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Custom React / Next.js Build</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Paid Ad Campaign Management</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Advanced Technical SEO</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>CMS for Marketing Teams</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Monthly Maintenance & Reporting</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 relative z-10">
                Schedule Consult
              </button>
            </div>

            {/* Package 3: Enterprise */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-xl hover:border-slate-300 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-extrabold uppercase tracking-wide mb-4">
                  Enterprise
                </span>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">
                  Custom
                </h3>
                <p className="text-slate-500 text-sm">
                  Digital transformation, Mobile Apps, and AI integration.
                </p>
              </div>
              <div className="w-full h-px bg-slate-100 mb-8"></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Custom Mobile App (iOS/Android)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Custom AI Agent Development</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Cloud Infrastructure (AWS)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Global Expansion Strategy</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full py-4 rounded-full border border-slate-900 bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            Which model fits your business?
          </h2>
          <p className="text-slate-500 mb-10 text-lg">
            Not sure? Let's analyze your current digital footprint and find the
            gap.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 text-white h-14 px-10 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 text-lg flex items-center justify-center"
            >
              Start Project
            </Link>
            <Link
              href="/work"
              className="text-slate-900 font-bold hover:text-blue-600 transition-colors hover:underline underline-offset-4"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}