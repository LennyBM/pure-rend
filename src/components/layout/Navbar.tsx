"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="absolute top-4 left-4 right-4 max-w-7xl mx-auto z-50 glass-surface shadow-2xl"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-2">
            <motion.div whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}>
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
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={link.href}
                  className="text-sm font-bold text-zinc-900 hover:text-blue-700 transition-colors uppercase tracking-wider relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA + Trust */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="hidden xl:flex flex-col items-end text-[10px] uppercase font-bold tracking-wider text-zinc-600">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-blue-700" /> Fully Insured
              </span>
              <span className="flex items-center gap-1.5 mt-1">
                <Award className="w-3 h-3 text-blue-700" /> NVQ Level 2
              </span>
            </div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-2xl text-white bg-blue-600 hover:bg-white hover:text-zinc-900 transition-all shadow-lg"
              >
                Get Free Quote
              </Link>
            </motion.div>
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          id="mobile-menu" 
          className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-zinc-200 px-4 pb-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] mx-[-1rem] mt-4 pt-2 rounded-b-3xl rounded-t-none relative z-50"
        >
          <nav className="flex flex-col gap-1 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileTap={{ scale: 0.95 }}>
                <Link
                  href={link.href}
                  className="block text-base font-bold uppercase tracking-wider text-zinc-900 hover:text-blue-700 hover:bg-white/40 px-4 py-3 rounded-2xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/20">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="block text-center w-full px-6 py-3 text-sm font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
