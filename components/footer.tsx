import { CircuitBoard } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-8 text-primary flex items-center justify-center">
                <CircuitBoard className="w-7 h-7" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                DevCortex
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              A hybrid digital agency bridging the gap between rapid deployment
              and enterprise-grade engineering.
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                href="#"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs">LN</span>
              </a>
              <a
                className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                href="#"
                aria-label="Twitter"
              >
                <span className="font-bold text-xs">TW</span>
              </a>
              <a
                className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                href="#"
                aria-label="Instagram"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Rapid CMS Launch
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Custom Web Apps
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  SEO &amp; Growth
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  Cloud Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/work"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/blogs"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4">
              Latest tech trends and agency updates.
            </p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Enter your email"
                type="email"
              />
              <button className="w-full py-3 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2026 DevCortex Agency. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <Link className="hover:text-slate-600" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-slate-600" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
