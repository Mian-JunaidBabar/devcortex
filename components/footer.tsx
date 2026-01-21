import Link from "next/link";
import { Linkedin, Twitter, Instagram, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-slate-900 to-red-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Custom Brain Logo */}
              <svg
                viewBox="0 0 100 115"
                className="w-8 h-8 transition-transform group-hover:scale-105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 L50 5Z"
                  stroke="#0F172A"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g stroke="#2563EB" strokeWidth="5" strokeLinecap="round">
                  <path d="M46 25 C 20 25, 15 50, 20 80" />
                  <path d="M46 45 L 35 45" />
                  <path d="M46 65 L 30 65" />
                  <path d="M46 25 V 85" />
                </g>
                <g stroke="#DC2626" strokeWidth="5" strokeLinecap="round">
                  <path d="M54 25 C 80 25, 85 50, 80 80" />
                  <path d="M54 45 L 65 45" />
                  <path d="M54 65 L 70 65" />
                  <path d="M54 25 V 85" />
                </g>
              </svg>
              <span className="text-xl font-bold tracking-tight text-slate-900">
<<<<<<< HEAD
                DeepDev
=======
                Deep Dev Solutions
>>>>>>> 8efb205d3696e8c858dd27ad60c87ae4918f22c0
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Engineering digital products. Scaling revenue. The full-cycle partner for growth-minded businesses.
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                href="#"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                className="size-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                href="#"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                className="size-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                href="#"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  href="/services"
                >
                  Web &amp; App Development
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-red-600 transition-colors"
                  href="/services"
                >
                  Growth Marketing (Ads)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  href="/services"
                >
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-red-600 transition-colors"
                  href="/services"
                >
                  Technical SEO
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition-colors"
                  href="/services"
                >
                  SaaS Architecture
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
                  className="hover:text-slate-900 transition-colors"
                  href="/about"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-slate-900 transition-colors"
                  href="/work"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-slate-900 transition-colors"
                  href="/blogs"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-slate-900 transition-colors"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Stay Ahead</h4>
            <p className="text-slate-500 text-sm mb-4">
              Join 2,000+ founders receiving weekly growth &amp; tech insights.
            </p>
            <form className="flex flex-col gap-3">
              <input
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                placeholder="Enter your email"
                type="email"
              />
              <button className="w-full py-3 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                Subscribe
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
<<<<<<< HEAD
            © {new Date().getFullYear()} DeepDev All rights reserved.
=======
            © 2026 Deep Dev Solutions. All rights reserved.
>>>>>>> 8efb205d3696e8c858dd27ad60c87ae4918f22c0
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <Link className="hover:text-slate-600 transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-slate-600 transition-colors" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};