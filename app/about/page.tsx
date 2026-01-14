import {
  Code,
  Zap,
  CheckCircle2,
  Stethoscope,
  Boxes,
  Hammer,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 tech-noise opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              The Story
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            Two Brains.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500">
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
      <div className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
            {/* CTO Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white founder-card-bg rounded-[2rem] border border-slate-200 p-8 lg:p-12 shadow-sm overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>

                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 border border-blue-100 shadow-inner">
                  <Code className="w-12 h-12" />
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

                <p className="text-slate-600 leading-relaxed mb-8">
                  "Code without purpose is just poetry. We build systems that
                  don't just function—they scale, adapt, and drive measurable
                  efficiency."
                </p>

                <div className="mt-auto grid grid-cols-3 gap-2 w-full text-center">
                  <div className="bg-slate-50 rounded-lg p-2">
                    <span className="block text-lg font-bold text-slate-900">
                      10+
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">
                      Years Exp
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <span className="block text-lg font-bold text-slate-900">
                      Python
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">
                      Core
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <span className="block text-lg font-bold text-slate-900">
                      Cloud
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">
                      Native
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* COO Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white founder-card-bg rounded-[2rem] border border-slate-200 p-8 lg:p-12 shadow-sm overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>

                <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-6 border border-orange-100 shadow-inner">
                  <Zap className="w-12 h-12" />
                </div>

                <h2 className="text-xs font-bold text-orange-600 tracking-widest uppercase mb-2">
                  The Strategist
                </h2>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">
                  Chief Operating Officer
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  Growth &amp; Operations
                </p>

                <div className="w-full h-px bg-slate-100 mb-8"></div>

                <p className="text-slate-600 leading-relaxed mb-8">
                  "A beautiful product that no one sees is a failure. We bridge
                  the gap between technical excellence and market penetration."
                </p>

                <div className="mt-auto grid grid-cols-3 gap-2 w-full text-center">
                  <div className="bg-slate-50 rounded-lg p-2">
                    <span className="block text-lg font-bold text-slate-900">
                      $2M+
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">
                      Managed
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <span className="block text-lg font-bold text-slate-900">
                      SEO
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">
                      Expert
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <span className="block text-lg font-bold text-slate-900">
                      Ops
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">
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
                <span className="text-slate-900 font-semibold underline decoration-blue-400 decoration-2">
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
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-slate-700">
                    Data-First Decision Making
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Rapid Iteration Cycles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-slate-700">
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
                  style={{ animationDuration: "10s" }}
                ></div>

                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-md flex items-center justify-center border border-blue-200">
                  <span className="font-bold text-blue-600 -translate-x-4 -translate-y-4">
                    Code
                  </span>
                </div>

                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-md flex items-center justify-center border border-orange-200">
                  <span className="font-bold text-orange-600 translate-x-4 -translate-y-4">
                    Strategy
                  </span>
                </div>

                <div className="relative z-10 bg-white shadow-xl rounded-2xl p-6 text-center border border-slate-200">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center mx-auto mb-2">
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
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From Chaos to Clarity
            </h2>
            <p className="text-slate-600">
              Our proven roadmap for digital transformation.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 text-xl font-bold shadow-lg shadow-slate-900/20">
                  <Stethoscope className="w-6 h-6" />
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
              <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white text-slate-900 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                  <Boxes className="w-6 h-6" />
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
              <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white text-slate-900 border border-slate-200 rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                  <Hammer className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  3. Construction
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Agile development sprints with regular updates. Code meets
                  design.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6 text-xl font-bold shadow-lg shadow-primary/20">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  4. Ignition
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Launch, monitor, and optimize. Marketing campaigns go live to
                  drive traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 tech-noise opacity-10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to architect your future?
          </h2>

          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether you need a rapid CMS launch or a custom enterprise solution,
            we have the brainpower to execute.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white h-14 px-8 rounded-full font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center gap-2 text-lg">
              Book a Strategy Call
            </button>
            <button className="bg-transparent border border-slate-600 text-white h-14 px-8 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-lg">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
