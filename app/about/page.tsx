"use client";

import Link from "next/link";
import {
  Code,
  TrendingUp,
  CheckCircle2,
  Stethoscope,
  Boxes,
  Hammer,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 tech-noise opacity-[0.03] pointer-events-none"></div>
        {/* Blobs */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-blue-50/80 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-red-50/80 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Our DNA
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900">
            Solid - Engineering
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-red-600">
              Explosive Growth
            </span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We are the intersection where{" "}
            <strong className="text-slate-700">Silicon Valley tech</strong>{" "}
            meets{" "}
            <strong className="text-slate-700">Madison Avenue strategy</strong>.
            We build digital engines that pay for themselves.
          </p>
        </div>
      </section>

      {/* Founders Section (The Dual Brain) */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
            {/* BUILD Card (The Architect - Blue) */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-linear-to-b from-blue-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white rounded-[2rem] border border-slate-200 p-8 lg:p-12 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>

                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 border border-blue-100 shadow-inner">
                  <Code className="w-10 h-10" />
                </div>

                <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">
                  The Builder
                </h2>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">
                  Head of Engineering
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  Architecture &amp; Development
                </p>

                <div className="w-full h-px bg-slate-100 mb-8"></div>

                <p className="text-slate-600 leading-relaxed mb-8 italic">
                  "Your website or app isn't just a brochure; it's a business
                  asset. I ensure it loads fast, never breaks, and scales
                  effortlessly when the ads start running."
                </p>

                <div className="mt-auto grid grid-cols-3 gap-2 w-full text-center">
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <span className="block text-xl font-black text-blue-700">
                      100%
                    </span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                      Uptime
                    </span>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <span className="block text-xl font-black text-blue-700">
                      Full
                    </span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                      Stack
                    </span>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <span className="block text-xl font-black text-blue-700">
                      Cloud
                    </span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                      Native
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* GROW Card (The Strategist - Red) */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-linear-to-b from-red-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white rounded-[2rem] border border-slate-200 p-8 lg:p-12 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>

                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-6 border border-red-100 shadow-inner">
                  <TrendingUp className="w-10 h-10" />
                </div>

                <h2 className="text-xs font-bold text-red-600 tracking-widest uppercase mb-2">
                  The Marketer
                </h2>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">
                  Head of Growth
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  Acquisition &amp; ROI
                </p>

                <div className="w-full h-px bg-slate-100 mb-8"></div>

                <p className="text-slate-600 leading-relaxed mb-8 italic">
                  "A beautiful product that no one sees is a failure. My job is
                  to flood your new digital engine with qualified traffic
                  through SEO and paid campaigns."
                </p>

                <div className="mt-auto grid grid-cols-3 gap-2 w-full text-center">
                  <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                    <span className="block text-xl font-black text-red-700">
                      High
                    </span>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">
                      ROI
                    </span>
                  </div>
                  <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                    <span className="block text-xl font-black text-red-700">
                      SEO
                    </span>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">
                      Expert
                    </span>
                  </div>
                  <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                    <span className="block text-xl font-black text-red-700">
                      Ads
                    </span>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">
                      Pro
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                Our Philosophy
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Stop juggling freelancers.
              </h2>

              <p className="text-lg text-slate-600 mb-6">
                Most businesses have a "web guy" and a "marketing guy," and they
                rarely talk to each other. This creates broken funnels.
              </p>

              <p className="text-slate-500 leading-relaxed mb-8">
                At DeepDev, we unify the process. We build the site
                <span className="italic"> knowing </span> it needs to rank for
                SEO. We build the app <span className="italic"> knowing </span>{" "}
                it needs to convert ad traffic.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Technical SEO built-in, not added on.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Landing pages optimized for Ad Quality Score.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Data analytics setup to track every dollar.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Animated Circle */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-slate-50 rounded-full flex items-center justify-center p-8 border border-slate-100">
                <div
                  className="absolute inset-0 rounded-full border border-dashed border-slate-300 animate-spin"
                  style={{ animationDuration: "15s" }}
                ></div>

                {/* Blue Orb (Code) */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl flex items-center justify-center border border-blue-100/50">
                  <span className="font-bold text-blue-600 -translate-x-4 -translate-y-4">
                    Build
                  </span>
                </div>

                {/* Red Orb (Strategy) */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-xl flex items-center justify-center border border-red-100/50">
                  <span className="font-bold text-red-600 translate-x-4 -translate-y-4">
                    Scale
                  </span>
                </div>

                <div className="relative z-10 bg-white shadow-2xl shadow-slate-200/50 rounded-2xl p-6 text-center border border-slate-100">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg shadow-slate-900/20">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    Full Cycle
                    <br />
                    Growth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From Concept to Customer
            </h2>
            <p className="text-slate-600">
              Our proven roadmap for digital transformation.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Hidden on Mobile */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 group hover:border-slate-800 hover:shadow-xl hover:shadow-slate-900/20">
                <div className="w-14 h-14 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  1. Discovery
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We analyze your business goals, target audience, and current
                  bottlenecks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 group hover:border-slate-800 hover:shadow-xl hover:shadow-slate-900/20">
                <div className="w-14 h-14 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                  <Boxes className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  2. Architecture
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We design the technical stack (Web/App) and the marketing
                  funnel strategy.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 group hover:border-slate-800 hover:shadow-xl hover:shadow-slate-900/20">
                <div className="w-14 h-14 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                  <Hammer className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  3. Construction
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed  ">
                  Agile development sprints with regular updates. Code meets
                  design.
                </p>
              </div>

              {/* Step 4 - Ignition (now consistent with others) */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 group hover:border-slate-800 hover:shadow-xl hover:shadow-slate-900/20">
                <div className="w-14 h-14 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 ">
                  4. Ignition
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed  ">
                  Launch, monitor, and optimize. Marketing campaigns go live to
                  drive traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-slate-900 overflow-hidden relative border-t border-slate-100">
        <div className="absolute inset-0 tech-noise opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-100/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-red-100/50 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900">
            Ready to scale your business?
          </h2>

          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Whether you need a new website, a custom app, or more leads from
            Google & Meta—we have the team to make it happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white h-14 px-8 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-red-600/25 flex items-center justify-center gap-2 text-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="/work"
              className="bg-white border border-slate-200 text-slate-900 h-14 px-8 rounded-full font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-lg shadow-sm"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
