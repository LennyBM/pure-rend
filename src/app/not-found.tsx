"use client";

import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { m, useReducedMotion } from 'framer-motion';

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = prefersReducedMotion ? {} : {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="min-h-screen flex items-center justify-center mesh-bg px-6 pt-24 pb-12">
      <m.div 
        {...reveal}
        className="max-w-2xl w-full text-center space-y-8 glass-surface p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <m.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white/50 backdrop-blur-sm border border-blue-100 rounded-[2rem] shadow-sm mb-6"
          >
            <Search className="w-12 h-12 text-blue-600 drop-shadow-md" />
          </m.div>
          
          <h1 className="text-4xl md:text-6xl font-headline font-black text-zinc-900 tracking-tight mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 max-w-xl mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable. Let&apos;s get you back to the right place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 w-full">
            <m.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold font-headline hover:bg-white hover:text-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all shadow-md"
              >
                Return Home
              </Link>
            </m.div>
            
            <m.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/60 text-zinc-900 border border-white/80 px-8 py-4 rounded-2xl font-bold font-headline hover:bg-white transition-colors backdrop-blur-md shadow-sm"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </m.div>
          </div>

          <div className="pt-10 mt-10 border-t border-zinc-200/50 w-full space-y-5">
             <p className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-widest">Popular Pages</p>
             <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
               <Link href="/services#silicone" className="text-xs sm:text-sm bg-white/80 hover:bg-blue-50 text-zinc-600 hover:text-blue-700 px-4 py-2.5 rounded-xl border border-zinc-200 transition-all shadow-sm hover:shadow">Silicone Render</Link>
               <Link href="/services#monocouche" className="text-xs sm:text-sm bg-white/80 hover:bg-blue-50 text-zinc-600 hover:text-blue-700 px-4 py-2.5 rounded-xl border border-zinc-200 transition-all shadow-sm hover:shadow">Monocouche</Link>
               <Link href="/services#insulation" className="text-xs sm:text-sm bg-white/80 hover:bg-blue-50 text-zinc-600 hover:text-blue-700 px-4 py-2.5 rounded-xl border border-zinc-200 transition-all shadow-sm hover:shadow">Wall Insulation</Link>
               <Link href="/locations" className="text-xs sm:text-sm bg-white/80 hover:bg-blue-50 text-zinc-600 hover:text-blue-700 px-4 py-2.5 rounded-xl border border-zinc-200 transition-all shadow-sm hover:shadow">Coverage Areas</Link>
             </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
