"use client";

import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Talk Business.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Whether you need a rapid MVP launch or a complete enterprise overhaul, our architects are ready. Expect a tactical response within 24 hours.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Email Us</h3>
                <p className="text-slate-600 dark:text-slate-400">hello@devcortex.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">WhatsApp</h3>
                <p className="text-slate-600 dark:text-slate-400">+92 300 1234567</p>
                <p className="text-xs text-slate-500 mt-1">Direct Business Line</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">HQ Location</h3>
                <p className="text-slate-600 dark:text-slate-400">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <form className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="John Doe"
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="john@company.com"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-600 dark:text-slate-400">
                    <option value="" disabled selected>Select your investment...</option>
                    <option value="micro">Under $500 (Consultation)</option>
                    <option value="small">$500 - $1,500 (Rapid Launch)</option>
                    <option value="medium">$1,500 - $5,000 (Growth Engine)</option>
                    <option value="enterprise">Enterprise (Custom)</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Details</label>
                <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="Tell us about your goals..."
                ></textarea>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                Send Proposal Request <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}