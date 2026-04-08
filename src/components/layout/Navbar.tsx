"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Shield, Award } from "lucide-react";
import { m } from "framer-motion";

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
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
    <m.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-2">
            <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/images/pure-rend-logo-transparent.webp"
                  alt="PureRend Logo"
                  width={140}
                  height={140}
                  className="object-contain w-[100px] sm:w-[120px] drop-shadow-sm"
                  priority
                  quality={100}
                />
              </Link>
            </m.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <m.div key={link.href} whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={link.href}
                  className="text-sm font-bold text-zinc-800 hover:text-blue-600 transition-colors uppercase tracking-widest relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              </m.div>
            ))}
          </nav>

          {/* Desktop CTA + Trust */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="hidden xl:flex flex-col items-end text-[10px] uppercase font-bold tracking-widest text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-blue-600" /> Fully Insured
              </span>
              <span className="flex items-center gap-1.5 mt-1">
                <Award className="w-3 h-3 text-blue-600" /> NVQ Level 2
              </span>
            </div>
            <m.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-bold uppercase tracking-wider rounded-none text-white bg-zinc-900 border border-zinc-900 hover:bg-white hover:text-zinc-900 transition-all shadow-md"
              >
                Get Free Quote
              </Link>
            </m.div>
          </div>

          {/* Mobile menu toggle */}
          <button
            ref={toggleRef}
            type="button"
            className="flex lg:hidden items-center text-zinc-900 hover:text-blue-600 p-2 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <m.div
          ref={menuRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-zinc-100 shadow-xl overflow-hidden"
        >
          <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <m.div key={link.href} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={link.href}
                    className="block text-base font-bold uppercase tracking-widest text-zinc-800 hover:text-blue-600 hover:bg-zinc-50 px-4 py-4 rounded-lg transition-colors border-l-4 border-transparent hover:border-blue-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <m.div whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="block text-center w-full px-6 py-4 text-sm font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Quote
                </Link>
              </m.div>
            </div>
          </div>
        </m.div>
      )}
    </m.header>
    </>
  );
}
