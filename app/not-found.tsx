"use client";

import Link from "next/link";
import { ChevronRight, Home, ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-white">
      {/* Hero 404 Section */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 mesh-gradient pointer-events-none"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* 404 Visual */}
            <div className="mb-12 relative">
              <div className="text-9xl md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500 leading-none tracking-tighter">
                404
              </div>
              <div className="absolute inset-0 text-9xl md:text-[180px] font-black text-slate-900/5 blur-lg leading-none tracking-tighter">
                404
              </div>
            </div>

            {/* Content */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                Page Not Found
              </h1>
              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-2">
                The page you're looking for has wandered off into the digital
                ether. But don't worry—we'll help you get back on track.
              </p>
              <p className="text-base text-slate-500">
                Error Code: 404 | Resource Missing
              </p>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-12 font-medium">
              <Home className="w-4 h-4" />
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary">Not Found</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                Back to Home
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-8 py-4 rounded-full text-base font-bold hover:bg-slate-200 transition-all border border-slate-200"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Helpful Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/"
                  className="group p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏠</span>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 group-hover:text-primary">
                        Home
                      </p>
                      <p className="text-sm text-slate-500">
                        Return to the homepage
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/services"
                  className="group p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚙️</span>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 group-hover:text-primary">
                        Services
                      </p>
                      <p className="text-sm text-slate-500">
                        Explore what we offer
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/work"
                  className="group p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💼</span>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 group-hover:text-primary">
                        Work
                      </p>
                      <p className="text-sm text-slate-500">
                        Check out our case studies
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="group p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 group-hover:text-primary">
                        Contact
                      </p>
                      <p className="text-sm text-slate-500">
                        Get in touch with us
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_40%)]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Still lost?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Our team is ready to help. Reach out and let's get you where you
            need to be.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white h-14 px-10 rounded-full font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-xl shadow-primary/20 text-lg"
          >
            Start a Conversation
            <span>💬</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="size-8 text-primary flex items-center justify-center">
                  🔷
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Deep Dev Solutions
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                A hybrid digital agency bridging the gap between rapid
                deployment and enterprise-grade engineering.
              </p>
              <div className="flex gap-4">
                <a
                  className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <span className="font-bold text-xs">LN</span>
                </a>
                <a
                  className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <span className="font-bold text-xs">TW</span>
                </a>
                <a
                  className="size-10 rounded-full bg-gray-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  <span className="font-bold text-xs">IG</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/services"
                  >
                    Rapid CMS Launch
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/services"
                  >
                    Custom Web Apps
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/services"
                  >
                    AI & Automation
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/services"
                  >
                    SEO & Growth
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/services"
                  >
                    Cloud Architecture
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/work"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/blogs"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
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
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2024 Deep Dev Solutions. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-slate-400">
              <a className="hover:text-slate-600" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-slate-600" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
