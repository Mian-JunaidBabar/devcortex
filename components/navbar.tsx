"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, CircuitBoard } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 text-primary flex items-center justify-center">
              <CircuitBoard className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              DevCortex
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="/work"
            >
              Work
            </Link>
            <Link
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              href="/contact"
            >
              Contact
            </Link>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-600 transition-colors shadow-lg shadow-primary/20">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-900"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors py-2"
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors py-2"
                href="/work"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors py-2"
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors py-2"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-600 transition-colors shadow-lg shadow-primary/20">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
