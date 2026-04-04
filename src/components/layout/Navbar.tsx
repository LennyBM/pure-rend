"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Shield, Award } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-2">
            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/pure-rend-logo-transparent.webp"
                alt="PureRend Logo"
                width={120}
                height={120}
                className="object-contain w-[70px] h-[70px] sm:w-[92px] sm:h-[92px] scale-[1.26] origin-left"
                priority
                quality={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-zinc-600 hover:text-blue-600 transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Trust */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="hidden xl:flex flex-col items-end text-[10px] uppercase font-bold tracking-wider text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-blue-600" /> Fully Insured
              </span>
              <span className="flex items-center gap-1.5 mt-1">
                <Award className="w-3 h-3 text-blue-600" /> NVQ Level 2
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-sm text-white bg-blue-600 hover:bg-white hover:text-zinc-900 transition-all shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="flex lg:hidden items-center text-zinc-900 hover:text-blue-600 p-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-zinc-200 px-4 pb-6 shadow-2xl">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-bold uppercase tracking-wider text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 px-4 py-3 rounded-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-zinc-200">
            <Link
              href="/contact"
              className="block text-center w-full px-6 py-3 text-sm font-bold rounded-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
