import Link from "next/link";
import { ArrowRight, Rocket, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32 max-w-7xl mx-auto text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-transparent dark:from-blue-900/40" />
        
        <div className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Accepting new enterprise partners for Q4
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          We Build <span className="text-blue-600 dark:text-blue-500">Digital Engines</span> That <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">Grow Your Business.</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          Stop choosing between good code and good marketing. We bridge high-performance software engineering with strategic growth to build scalable systems that convert.
        </p>

        <div className="flex items-center justify-center gap-x-6">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105"
          >
            Start Your Project
          </Link>
          <Link href="/work" className="text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-1 hover:text-blue-500 transition-colors">
            View Case Studies <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* The Split: Comparison Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
          
          {/* Rapid Launch */}
          <div className="bg-white dark:bg-slate-900 p-10 md:p-16 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Rocket size={200} className="text-orange-500" />
            </div>
            <div className="relative z-10">
              <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">The Launchpad</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Rapid Launch</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Perfect for startups and D2C brands. We deploy optimized WordPress or Shopify instances designed for speed-to-market and immediate ROI.
              </p>
              <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-300">
                <li className="flex gap-2"><Rocket size={18} className="text-orange-500" /> 2-Week Turnaround</li>
                <li className="flex gap-2"><Rocket size={18} className="text-orange-500" /> CMS Integration</li>
                <li className="flex gap-2"><Rocket size={18} className="text-orange-500" /> SEO Optimized</li>
              </ul>
              <Link href="/services" className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Launch Fast <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Enterprise Scale */}
          <div className="bg-slate-50 dark:bg-slate-950 p-10 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck size={200} className="text-blue-500" />
            </div>
            <div className="relative z-10">
              <h3 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">The Ecosystem</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Scale</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                For SaaS and complex platforms. Bespoke Next.js architectures, scalable microservices, and AI-driven workflows built for millions of users.
              </p>
              <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-300">
                <li className="flex gap-2"><Zap size={18} className="text-blue-500" /> React / Next.js / Node</li>
                <li className="flex gap-2"><Zap size={18} className="text-blue-500" /> Custom AI Agents</li>
                <li className="flex gap-2"><Zap size={18} className="text-blue-500" /> Advanced Security</li>
              </ul>
              <Link href="/services" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Scale Up <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Powering Next-Gen Companies</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex space-x-12">
            {["Next.js", "OpenAI", "Shopify", "Stripe", "Vercel", "Supabase", "React", "AWS"].map((logo) => (
              <span key={logo} className="mx-8 text-2xl font-bold text-slate-300 dark:text-slate-700 uppercase">
                {logo}
              </span>
            ))}
             {["Next.js", "OpenAI", "Shopify", "Stripe", "Vercel", "Supabase", "React", "AWS"].map((logo) => (
              <span key={`${logo}-duplicate`} className="mx-8 text-2xl font-bold text-slate-300 dark:text-slate-700 uppercase">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 dark:to-blue-900/20 -z-10" />
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Ready to engineer your growth?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          We only take on 3 new partners per quarter to ensure dedicated execution. Secure your slot now.
        </p>
        <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-8 py-4 text-base font-bold text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
          >
            Get a Proposal <ArrowRight size={18} />
          </Link>
      </section>
    </div>
  );
}