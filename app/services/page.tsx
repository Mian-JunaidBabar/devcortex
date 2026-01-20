"use client";

import Link from "next/link";
import {
  CheckCircle,
  Rocket,
  Database,
  Layers,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 to-white pt-20 pb-24 lg:pt-32 lg:pb-32 border-b border-slate-100">
        <div className="absolute inset-0 tech-noise opacity-30 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-150 h-150 bg-blue-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-red-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Now Accepting New Projects
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-slate-900">
            End-to-End <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-red-600">
              Digital Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            From rapid CMS deployment to custom enterprise architectures focused
            on speed, scalability, and intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white h-12 px-8 rounded-full font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
              View Packages
              <span className="text-sm">↓</span>
            </button>
            <Link
              href="/contact"
              className="bg-white border border-slate-300 text-slate-700 h-12 px-8 rounded-full font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Compare Architectures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compare Architectures
            </h2>
            <p className="text-lg text-slate-500">
              Choose the right foundation for your digital growth.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
            <div className="grid grid-cols-12 divide-y divide-slate-100 lg:divide-y-0 lg:divide-x lg:divide-slate-100">
              <div className="col-span-12 lg:col-span-4 p-8 bg-slate-50 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  Feature Matrix
                </h3>
                <p className="text-sm text-slate-500">
                  A detailed breakdown of our two primary delivery models.
                </p>
              </div>

              {/* LEFT COLUMN: Rapid Launch (BLUE) */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 bg-white relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Rapid Launch (CMS)
                  </h4>
                </div>
                <ul className="space-y-6">
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Deployment Speed
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[90%] rounded-full shadow-sm"></div>
                      </span>
                      <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                        Fast (Days)
                      </span>
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Security Level
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Standard (Plugins)
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Cost Efficiency
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Low Initial Investment
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Scalability
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Linear Growth
                    </div>
                  </li>
                </ul>
              </div>

              {/* RIGHT COLUMN: Enterprise Scale (RED/CUSTOM) */}
              {/* Changed 'bg-primary' and 'text-primary' to 'red' colors to match image */}
              <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 bg-slate-50/50 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <Database className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Enterprise Scale (Custom)
                  </h4>
                </div>
                <ul className="space-y-6">
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Deployment Speed
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        {/* Changed bar color to red */}
                        <div className="bg-red-500 h-full w-[40%] rounded-full shadow-sm"></div>
                      </span>
                      <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                        Phased (Weeks)
                      </span>
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Security Level
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Advanced (Custom Auth)
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Cost Efficiency
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      High Long-term ROI
                    </div>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Scalability
                    </span>
                    <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      Exponential & Global
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <div className="size-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 mb-2">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Modern Development Stack
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We build on the bleeding edge. For enterprise clients, we
                  leverage <strong>Next.js</strong>, <strong>Python</strong>{" "}
                  backends, and serverless Cloud infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full">
                  AWS
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full">
                  PostgreSQL
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="size-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-red-600 mb-2">
                <Lightbulb className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  AI & Automation
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Stop doing busy work. We implement custom{" "}
                  <strong>Chatbots</strong> for customer support,{" "}
                  <strong>RAG</strong> for internal knowledge bases, and
                  workflow automation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                  LLMs
                </span>
                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                  Vector DB
                </span>
                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">
                  Zapier
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="size-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 mb-2">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Growth & Marketing
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Building is half the battle. Our data-driven approach includes
                  technical <strong>SEO</strong> audits, high-performance ad
                  campaigns, and rigorous CRO.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                  SEO
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                  PPC
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                  Analytics
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
              Service Packages
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Transparent pricing models tailored to your stage of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-xl hover:border-slate-300 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-extrabold uppercase tracking-wide mb-4">
                  Starter
                </span>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">
                  $2,500
                  <span className="text-lg text-slate-400 font-normal">
                    /project
                  </span>
                </h3>
                <p className="text-slate-500 text-sm">
                  Perfect for small businesses needing a robust online presence
                  quickly.
                </p>
              </div>
              <div className="w-full h-px bg-slate-100 mb-8"></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>WordPress CMS Setup</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Basic SEO Configuration</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Mobile Responsive Design</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Google Analytics Integration</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-full border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                Select Starter
              </button>
            </div>

            {/* Professional (Featured) */}
            <div className="bg-linear-to-b from-slate-900 to-slate-800 rounded-[2rem] p-8 shadow-2xl shadow-blue-600/20 border border-slate-700 relative flex flex-col h-full transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-blue-600 to-red-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                Most Popular
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-blue-600/10 to-transparent rounded-[2rem] pointer-events-none"></div>

              <div className="mb-6 relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-white text-xs font-extrabold uppercase tracking-wide mb-4 ring-1 ring-white/10">
                  Professional
                </span>
                <h3 className="text-4xl font-bold text-white mb-2">
                  $8,000
                  <span className="text-lg text-slate-400 font-normal">
                    /project
                  </span>
                </h3>
                <p className="text-slate-300 text-sm">
                  Custom architecture for scaling brands and startups.
                </p>
              </div>
              <div className="w-full h-px bg-slate-700 mb-8 relative z-10"></div>
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Next.js Custom Build</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Performance Ad Campaign Setup</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Advanced API Integrations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>CMS for Marketing Team</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>1 Month Support Included</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 relative z-10">
                Select Professional
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-xl hover:border-slate-300 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-extrabold uppercase tracking-wide mb-4">
                  Enterprise
                </span>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">
                  Custom
                </h3>
                <p className="text-slate-500 text-sm">
                  Full digital transformation and SaaS product development.
                </p>
              </div>
              <div className="w-full h-px bg-slate-100 mb-8"></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Full SaaS Product Development</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Dedicated AI Engineer Retainer</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Cloud Infrastructure Architecture</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Enterprise SLA Support</span>
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
            Ready to upgrade your digital infrastructure?
          </h2>
          <p className="text-slate-500 mb-10 text-lg">
            Schedule a 15-minute discovery call to discuss your architecture.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <button className="bg-blue-600 text-white h-14 px-10 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25 text-lg">
              Start Project
            </button>
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
