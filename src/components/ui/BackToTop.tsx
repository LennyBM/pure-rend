"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-4 sm:bottom-20 sm:right-6 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-800/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 hover:shadow-blue-500/30 transition-all duration-300"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
