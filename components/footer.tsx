import Link from "next/link";
import { CircuitBoard, MapPin, Mail, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-1 bg-blue-600 rounded">
                <CircuitBoard className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                DevCortex
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Intelligence meets Execution. We bridge the gap between high-performance software engineering and strategic growth marketing.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Custom SaaS Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Rapid CMS Launch</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">AI & Automation</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Performance Marketing</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition-colors">Technical SEO</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-blue-500 transition-colors">Our Work</Link></li>
              <li><Link href="/insights" className="hover:text-blue-500 transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-500 mt-0.5" />
                <span>hello@devcortex.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-0.5" />
                <span>Lahore, Pakistan<br />Innovation District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} DevCortex. All rights reserved.
          </p>
          <div className="text-xs text-slate-500 font-mono">
            Built with Next.js 14 & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};