import {
  Calendar,
  ArrowRight,
  RocketIcon,
  Database,
  Brain,
  Code,
  TrendingUp,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gray-50 pt-24 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 neural-bg opacity-40 pointer-events-none"></div>
        <div className="absolute inset-0 mesh-gradient pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-150 h-150 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-150 h-125 bg-accent-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900">
            We Build Digital Engines
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-blue via-slate-800 to-accent-orange">
              That Grow Your Business
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Merging custom enterprise architecture with rapid deployment
            strategies to scale your digital footprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white h-14 px-8 rounded-full font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 text-lg"
            >
              Book a Strategy Call
              <Calendar className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="bg-white border border-gray-200 text-slate-700 h-14 px-8 rounded-full font-bold hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-lg shadow-sm"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Rapid Launch Card */}
            <div className="group relative bg-orange-50/50 rounded-3xl p-10 border border-orange-100 hover:border-orange-300 transition-all hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <RocketIcon className="w-30 h-30 text-accent-orange" />
              </div>
              <div className="relative z-10">
                <div className="size-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-accent-orange border border-orange-100">
                  <RocketIcon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  Rapid Launch
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  High-performance CMS solutions designed for speed,
                  flexibility, and immediate market impact.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-orange" />
                    <span>Optimized WordPress/Webflow</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-orange" />
                    <span>Deployment in Days</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center font-bold text-accent-orange group-hover:gap-2 transition-all"
                >
                  Explore Rapid Launch
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Enterprise Scale Card */}
            <div className="group relative bg-blue-50/50 rounded-3xl p-10 border border-blue-100 hover:border-blue-300 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-30 h-30 text-accent-blue" />
              </div>
              <div className="relative z-10">
                <div className="size-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-accent-blue border border-blue-100">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  Enterprise Scale
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Custom-engineered React &amp; Python architectures for complex
                  data needs and global scalability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                    <span>Next.js &amp; Cloud Infrastructure</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                    <span>Full Digital Transformation</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center font-bold text-accent-blue group-hover:gap-2 transition-all"
                >
                  Explore Enterprise
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The DevCortex Ecosystem
            </h2>
            <p className="text-slate-500 text-lg">
              A comprehensive suite of technologies working in harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* AI & Automation - Spans 2 columns */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8 overflow-hidden relative group">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-4 uppercase tracking-wider">
                  Intelligence
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  AI &amp; Automation
                </h3>
                <p className="text-slate-600 mb-6">
                  Deploy autonomous agents and RAG systems that handle support,
                  lead gen, and internal knowledge management 24/7.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-slate-600 border border-gray-200">
                    LLMs
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-slate-600 border border-gray-200">
                    Chatbots
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-slate-600 border border-gray-200">
                    Python
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <Brain className="w-24 h-24 text-primary/80" />
              </div>
            </div>

            {/* Web Development - Spans 2 rows */}
            <div className="md:row-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-accent-blue to-cyan-400"></div>
              <div className="mb-auto relative z-10">
                <div className="size-12 rounded-xl bg-blue-50 text-accent-blue flex items-center justify-center mb-6">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Web Development
                </h3>
                <p className="text-slate-600 mb-6 text-sm">
                  From pixel-perfect frontends to robust serverless backends. We
                  build scalable engines.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>{" "}
                    React &amp; Next.js
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>{" "}
                    Node.js / Python
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>{" "}
                    Postgres &amp; Supabase
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>{" "}
                    AWS / Vercel
                  </li>
                </ul>
              </div>
              <div className="mt-8 relative h-32 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                <div className="absolute top-4 left-4 right-4 h-2 bg-gray-200 rounded-full w-1/2"></div>
                <div className="absolute top-8 left-4 right-4 h-2 bg-gray-200 rounded-full w-3/4"></div>
                <div className="absolute top-12 left-4 right-4 h-2 bg-gray-200 rounded-full w-2/3"></div>
              </div>
            </div>

            {/* Growth Marketing */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between group hover:border-accent-orange/30 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-10 rounded-lg bg-orange-50 text-accent-orange flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Growth Marketing
                </h3>
                <p className="text-slate-600 text-sm">
                  Data-driven campaigns, SEO, and CRO strategies.
                </p>
              </div>
            </div>

            {/* Data Analytics */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Data Analytics
                </h3>
                <p className="text-slate-600 text-sm">
                  Real-time dashboards and conversion tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
