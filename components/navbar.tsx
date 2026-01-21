"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Brain Icon (Blue/Red Split) */}
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
              {/* Left Brain (Blue) */}
              <g stroke="#2563EB" strokeWidth="5" strokeLinecap="round">
                <path d="M46 25 C 20 25, 15 50, 20 80" />
                <path d="M46 45 L 35 45" />
                <path d="M46 65 L 30 65" />
                <path d="M46 25 V 85" />
              </g>
              {/* Right Brain (Red) */}
              <g stroke="#DC2626" strokeWidth="5" strokeLinecap="round">
                <path d="M54 25 C 80 25, 85 50, 80 80" />
                <path d="M54 45 L 65 45" />
                <path d="M54 65 L 70 65" />
                <path d="M54 25 V 85" />
              </g>
            </svg>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Deep Dev Solutions
            </h2>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "text-red-600 bg-red-50" // ACTIVE: Red Text + Background
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50" // INACTIVE
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="ml-4">
              <button className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                Get Started
              </button>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="mt-2 px-4">
                <button className="w-full bg-red-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
