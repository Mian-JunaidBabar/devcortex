"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";

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
    >
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
    // Here you would typically send the data to your backend
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Info & Contact Details */}
            <div className="pt-8">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                Contact Us
              </span>

              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary">
                  Scale Digital?
                </span>
              </h1>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Whether you need a rapid CMS launch or a custom enterprise
                architecture, our team is ready to engineer your growth. Tell us
                about your vision.
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm group-hover:border-primary transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      Email Us
                    </h3>
                    <p className="text-slate-500 mb-1">
                      For general inquiries and project proposals.
                    </p>
                    <a
                      className="text-slate-900 font-medium hover:text-primary transition-colors"
                      href="mailto:hello@devcortex.com"
                    >
                      hello@devcortex.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm group-hover:border-blue-600 transition-colors flex-shrink-0">
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

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm group-hover:border-slate-900 transition-colors flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      Working Hours
                    </h3>
                    <p className="text-slate-500 mb-1">
                      Mon - Fri, 9am - 6pm (PKT)
                    </p>
                    <p className="text-slate-900 font-medium">
                      Weekend Support for Enterprise
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-slate-200 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-bold text-slate-700"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      id="name"
                      placeholder="John Doe"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-bold text-slate-700"
                      htmlFor="email"
                    >
                      Work Email
                    </label>
                    <input
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-colors placeholder:text-slate-400"
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
                      className="text-sm font-bold text-slate-700"
                      htmlFor="budget"
                    >
                      Estimated Budget
                    </label>
                    <select
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-colors text-slate-600"
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option>Select Range</option>
                      <option>&lt; $2,500 (Starter)</option>
                      <option>$2,500 - $10,000 (Growth)</option>
                      <option>$10,000+ (Enterprise)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-bold text-slate-700"
                      htmlFor="service"
                    >
                      Service Type
                    </label>
                    <select
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-colors text-slate-600"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option>Select Service</option>
                      <option>Custom Development</option>
                      <option>CMS Implementation</option>
                      <option>AI &amp; Automation</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold text-slate-700"
                    htmlFor="details"
                  >
                    Project Details
                  </label>
                  <textarea
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary focus:bg-white transition-colors placeholder:text-slate-400 min-h-[140px] resize-none"
                    id="details"
                    placeholder="Describe your project goals, timeline, and current challenges..."
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center gap-3 py-2">
                  <input
                    className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                    id="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                  <label
                    className="text-sm text-slate-600 cursor-pointer"
                    htmlFor="newsletter"
                  >
                    Subscribe to our weekly tech insights newsletter.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2"
                  type="submit"
                >
                  Send Message
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
