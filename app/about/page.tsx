"use client";

import {
  Code,
  Zap,
  CheckCircle2,
  Stethoscope,
  Boxes,
  Hammer,
  Rocket,
  TrendingUp,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 tech-noise opacity-[0.03] pointer-events-none"></div>
        {/* Updated Blobs to Blue & Red */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50/80 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              The Story
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900">
            Two Brains.
            <br />
            {/* Gradient updated to Blue -> Red */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
              One Outcome.
            </span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We are a hybrid digital agency merging high-performance engineering
            with ruthless business strategy for the global SMB market.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
            {/* CTO Card (BLUE - Tech) */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white rounded-[2rem] border border-slate-200 p-8 lg:p-12 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>

                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 border border-blue-100 shadow-inner">
                  <Code className="w-10 h-10" />
                </div>

                <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">
                  The Architect
                </h2>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">
                  Chief Technology Officer
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  System Design &amp; Scalability
                </p>

                <div className="w-full h-px bg-slate-100 mb-8"></div>

                <p className="text-slate-600 leading-relaxed mb-8 italic">
                  "Code without purpose is just poetry. We build systems that
                  don't just function—they scale, adapt, and drive measurable
                  efficiency."
                </p>

                {/* Improved Stats Styling */}
                <div className="mt-auto grid grid-cols-3 gap-2 w-full text-center">
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <span className="block text-xl font-black text-blue-700">
                      10+
                    </span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                      Years Exp
                    </span>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <span className="block text-xl font-black text-blue-700">
                      Py
                    </span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                      Core
                    </span>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <span className="block text-xl font-black text-blue-700">
                      AWS
                    </span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                      Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* COO Card (RED - Strategy - Changed from Orange) */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-red-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white rounded-[2rem] border border-slate-200 p-8 lg:p-12 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>

                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-6 border border-red-100 shadow-inner">
                  {/* Changed Icon to TrendingUp to match Strategy/Growth */}
                  <TrendingUp className="w-10 h-10" />
                </div>

                <h2 className="text-xs font-bold text-red-600 tracking-widest uppercase mb-2">
                  The Strategist
                </h2>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">
                  Chief Operating Officer
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  Growth &amp; Operations
                </p>

                <div className="w-full h-px bg-slate-100 mb-8"></div>

                <p className="text-slate-600 leading-relaxed mb-8 italic">
                  "A beautiful product that no one sees is a failure. We bridge
                  the gap between technical excellence and market penetration."
                </p>

                {/* Improved Stats Styling */}
                <div className="mt-auto grid grid-cols-3 gap-2 w-full text-center">
                  <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                    <span className="block text-xl font-black text-red-700">
                      $2M+
                    </span>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">
                      Managed
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
                      Ops
                    </span>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">
                      Lead
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                Our Philosophy
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                The DevCortex Way
              </h2>

              <p className="text-lg text-slate-600 mb-6">
                Most agencies are either purely creative or purely technical. We
                occupy the rare middle ground where{" "}
                {/* Changed underline to Red to flow with the text */}
                <span className="text-slate-900 font-semibold underline decoration-red-500 decoration-2 underline-offset-4">
                  logic meets leverage
                </span>
                .
              </p>

              <p className="text-slate-500 leading-relaxed mb-8">
                We don't just take orders. We diagnose the business bottleneck
                first, then prescribe the exact digital intervention
                needed—whether that's a simple CMS site or a complex AI-driven
                SaaS platform.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Data-First Decision Making
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Rapid Iteration Cycles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    Scalable Architecture by Default
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
                    Code
                  </span>
                </div>

                {/* Red Orb (Strategy) - Changed from Orange */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-xl flex items-center justify-center border border-red-100/50">
                  <span className="font-bold text-red-600 translate-x-4 -translate-y-4">
                    Strategy
                  </span>
                </div>

                <div className="relative z-10 bg-white shadow-2xl shadow-slate-200/50 rounded-2xl p-6 text-center border border-slate-100">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg shadow-slate-900/20">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    Digital
                    <br />
                    Intelligence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From Chaos to Clarity
            </h2>
            <p className="text-slate-600">
              Our proven roadmap for digital transformation.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Hidden on Mobile, Block on LG */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-sm group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  1. Diagnosis
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We audit your current tech stack and market position to
                  identify inefficiencies.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-sm group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                  <Boxes className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  2. Blueprint
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Mapping out the architecture, selecting the right tools (CMS
                  vs Custom), and strategy.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-sm group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                  <Hammer className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  3. Construction
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Agile development sprints with regular updates. Code meets
                  design.
                </p>
              </div>

              {/* Step 4 - Ignition (Highlighted Red) */}
              <div className="relative z-10 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl shadow-slate-900/20 transform md:-translate-y-2">
                <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 text-xl font-bold shadow-lg shadow-red-600/30">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  4. Ignition
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Launch, monitor, and optimize. Marketing campaigns go live to
                  drive traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white text-slate-900 overflow-hidden relative border-t border-slate-100">
        <div className="absolute inset-0 tech-noise opacity-30 pointer-events-none"></div>
        {/* Background Gradients consistent with Theme */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900">
            Ready to architect your future?
          </h2>

          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Whether you need a rapid CMS launch or a custom enterprise solution,
            we have the brainpower to execute.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white h-14 px-8 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-red-600/25 flex items-center justify-center gap-2 text-lg">
              Book a Strategy Call
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 h-14 px-8 rounded-full font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-lg shadow-sm">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </>
  );
}