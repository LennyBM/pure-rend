'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px (roughly past hero CTA)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[50] md:hidden bg-white/95 backdrop-blur-xl border-t border-zinc-200 px-4 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex items-center justify-between gap-3"
        >
          <a
            href="tel:+447469931758"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-4 rounded-xl font-headline font-bold text-sm transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Now</span>
          </a>
          <a
            href="mailto:b.rplasteringsw@gmail.com"
            className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 py-3.5 px-4 rounded-xl font-headline font-bold text-sm transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Email Us</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
