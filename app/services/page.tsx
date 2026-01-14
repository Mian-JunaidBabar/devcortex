import { Check, X, Code, Rocket, Brain } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Growth Architectures
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          We don't sell "websites." We sell digital assets designed to appreciate in value, generate leads, and automate operations.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-24 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">Feature</th>
              <th className="p-6 text-lg font-bold text-orange-500">CMS (Wordpress)</th>
              <th className="p-6 text-lg font-bold text-blue-500">Custom (Next.js)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            <tr>
              <td className="p-6 font-medium">Speed to Market</td>
              <td className="p-6">Rapid (2-4 Weeks)</td>
              <td className="p-6">Phased (4-12 Weeks)</td>
            </tr>
            <tr>
              <td className="p-6 font-medium">Scalability</td>
              <td className="p-6 text-slate-500">Limited (Plugins)</td>
              <td className="p-6 font-bold text-blue-500">Infinite</td>
            </tr>
            <tr>
              <td className="p-6 font-medium">Performance (Lighthouse)</td>
              <td className="p-6">Good (70-90)</td>
              <td className="p-6 font-bold text-green-500">Perfect (95-100)</td>
            </tr>
            <tr>
              <td className="p-6 font-medium">Cost Efficiency</td>
              <td className="p-6 font-bold text-green-500">Low CapEx</td>
              <td className="p-6">High ROI Long-term</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {/* Card 1 */}
        <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col">
          <div className="mb-4 p-3 bg-orange-100 dark:bg-orange-900/20 w-fit rounded-xl">
            <Rocket className="text-orange-500" size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">The Launchpad</h3>
          <p className="text-slate-500 text-sm mt-2 mb-6">Ideal for startups & local businesses.</p>
          <ul className="space-y-4 mb-8 flex-1">
            {['WordPress / Shopify Setup', 'Basic SEO Configuration', '2 Week Delivery', 'Google Analytics Setup'].map((item) => (
              <li key={item} className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <Check size={18} className="text-orange-500" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="w-full py-3 text-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-orange-500 hover:text-white transition-all">
            Start Project
          </Link>
        </div>

        {/* Card 2 - Featured */}
        <div className="p-8 rounded-3xl border-2 border-blue-500 bg-slate-50 dark:bg-slate-900/50 flex flex-col relative shadow-2xl shadow-blue-500/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Most Popular
          </div>
          <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/20 w-fit rounded-xl">
            <Code className="text-blue-500" size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">The Growth Engine</h3>
          <p className="text-slate-500 text-sm mt-2 mb-6">Full-stack web + aggressive marketing.</p>
          <ul className="space-y-4 mb-8 flex-1">
            {['Next.js Custom Website', 'Technical SEO Audit', 'Conversion Rate Optimization', 'Performance Ad Setup', 'Bi-Weekly Sprints'].map((item) => (
              <li key={item} className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <Check size={18} className="text-blue-500" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="w-full py-3 text-center rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all">
            Get Growth Plan
          </Link>
        </div>

        {/* Card 3 */}
        <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col">
          <div className="mb-4 p-3 bg-purple-100 dark:bg-purple-900/20 w-fit rounded-xl">
            <Brain className="text-purple-500" size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">The AI Ecosystem</h3>
          <p className="text-slate-500 text-sm mt-2 mb-6">For automating complex workflows.</p>
          <ul className="space-y-4 mb-8 flex-1">
            {['Custom Web App (SaaS)', 'AI Agent Integration', 'Database Architecture', 'API Development', 'Enterprise Security'].map((item) => (
              <li key={item} className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm">
                <Check size={18} className="text-purple-500" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="w-full py-3 text-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-purple-600 hover:text-white transition-all">
            Book Consultation
          </Link>
        </div>
      </div>

      {/* Capabilities Grid */}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Specific Capabilities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['AI Integration', 'API Development', 'Bug Fixing', 'UI/UX Design', 'Cloud Hosting', 'Speed Optimization', 'Mobile Apps', 'Data Analytics'].map((skill) => (
          <div key={skill} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-blue-500 transition-colors">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}