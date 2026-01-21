"use client";

import { useState } from "react";
import { Mail, MapPin, Send, ChevronDown, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    service: "",
    details: "",
    newsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, type, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-blue-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-red-100 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Info */}
            <div className="pt-3">
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm  block">
                Start the conversation
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-2">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-red-600">
                  Scale Digital?
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed max-w-lg">
                Whether you need to <strong>build</strong> a new platform or{" "}
                <strong>scale</strong> your traffic with ads, we have the team
                to execute. Tell us about your goals.
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-red-600 shadow-sm group-hover:border-red-600 transition-colors shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      Email Us
                    </h3>
                    <p className="text-slate-500 mb-1">
                      For project proposals and inquiries.
                    </p>
                    <a
                      className="text-slate-900 font-medium hover:text-red-600 transition-colors"
                      href="mailto:hello@deepdevsolutions.com"
                    >
                      hello@DeepDev.com
                    </a>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm group-hover:border-blue-600 transition-colors shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      Visit HQ
                    </h3>
                    <p className="text-slate-500 mb-1">
                      Lahore, Pakistan &amp; Remote Global.
                    </p>
                    <p className="text-slate-900 font-medium">
                      Model Town, Block C, 54700
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm group-hover:border-slate-900 transition-colors shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      Response Time
                    </h3>
                    <p className="text-slate-500 mb-1">
                      We typically reply within 24 hours.
                    </p>
                    <p className="text-slate-900 font-medium">
                      Mon - Fri, 9am - 6pm (PKT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl shadow-slate-200 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-bold text-slate-700 block"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:bg-white transition-all placeholder:text-slate-400 outline-none"
                      id="name"
                      placeholder="John Doe"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-bold text-slate-700 block"
                      htmlFor="email"
                    >
                      Work Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:bg-white transition-all placeholder:text-slate-400 outline-none"
                      id="email"
                      placeholder="john@company.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Budget & Service Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-bold text-slate-700 block"
                      htmlFor="budget"
                    >
                      Investment Range
                    </label>
                    <div className="relative">
                      <select
                        className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-600 focus:text-slate-900 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:bg-white transition-all outline-none cursor-pointer"
                        id="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option>Select Budget</option>
                        <option>&lt; $2,500 (MVP / Local)</option>
                        <option>$2,500 - $10,000 (Growth)</option>
                        <option>$10,000+ (Enterprise)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-bold text-slate-700 block"
                      htmlFor="service"
                    >
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-600 focus:text-slate-900 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:bg-white transition-all outline-none cursor-pointer"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option>Select Service</option>
                        <option>Web &amp; App Engineering</option>
                        <option>Growth Marketing (Ads/SEO)</option>
                        <option>AI &amp; Automation</option>
                        <option>Full Ecosystem (Dev + Growth)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold text-slate-700 block"
                    htmlFor="details"
                  >
                    Project Details
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 focus:bg-white transition-all placeholder:text-slate-400 min-h-35 resize-y outline-none"
                    id="details"
                    placeholder="Tell us about your business goals, current challenges, and timeline..."
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center gap-3 py-2">
                  <input
                    className="w-4 h-4 rounded border-slate-300 text-red-600 focus:ring-red-600 cursor-pointer"
                    id="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                  <label
                    className="text-sm text-slate-600 cursor-pointer"
                    htmlFor="newsletter"
                  >
                    Subscribe to our weekly growth insights newsletter.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2"
                  type="submit"
                >
                  Start Project
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
