import Image from "next/image";
import { Code2, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 px-4 text-center bg-slate-50 dark:bg-slate-950">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
          Two Brains. <span className="text-blue-600 dark:text-blue-500">One Outcome.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          DevCortex was born from a frustration with fragmented agencies. We united elite engineering with aggressive growth strategy to create a hybrid powerhouse.
        </p>
      </section>

      {/* The Founders Split */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Junaid - Tech */}
          <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-end min-h-[500px] border border-slate-800">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Code2 size={200} />
             </div>
             <div className="relative z-10">
                <div className="inline-block p-2 bg-blue-600 rounded-lg mb-4">
                    <Code2 size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Junaid Babar</h3>
                <p className="text-blue-400 font-mono text-sm mb-6">CTO / Chief Architect</p>
                <p className="text-slate-300 leading-relaxed mb-6">
                    "Code is not just syntax; it's business logic crystalized. I focus on building systems that are secure, scalable, and built to handle millions of requests without blinking."
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">System Architecture</span>
                    <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700">AI Integration</span>
                </div>
             </div>
          </div>

          {/* Partner - Growth */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 p-8 md:p-12 text-slate-900 dark:text-white relative overflow-hidden flex flex-col justify-end min-h-[500px] border border-slate-200 dark:border-slate-800">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <TrendingUp size={200} />
             </div>
             <div className="relative z-10">
                <div className="inline-block p-2 bg-orange-500 text-white rounded-lg mb-4">
                    <TrendingUp size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Partner Name</h3>
                <p className="text-orange-500 font-mono text-sm mb-6">COO / Growth Strategist</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    "A product without distribution is a ghost town. I ensure that every line of code we write serves a specific market function—acquisition, retention, or revenue."
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs">Growth Hacking</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs">Operations</span>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">The Hybrid Model</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Most agencies are either "creative shops" that make pretty things that break, or "dev shops" that build robust systems no one uses. <br /><br />
            <strong>DevCortex is different.</strong> We operate as a single unit where engineering informs marketing strategy, and marketing data dictates architectural decisions. This feedback loop creates digital products that are not just functional, but formidable market competitors.
        </p>
      </section>
    </div>
  );
}