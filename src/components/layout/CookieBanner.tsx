"use client";

import { useState, useEffect } from "react";
import { X, Shield } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("purerend_cookie_consent");
    if (!consent) {
      // Small delay just to let the page load before sliding in
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("purerend_cookie_consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("purerend_cookie_consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[100] max-w-sm w-[calc(100%-3rem)] bg-white rounded-2xl shadow-2xl border border-blue-100 p-5 backdrop-blur-xl bg-white/90"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-blue-500" />
            </div>
            
            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-zinc-900 font-headline font-bold text-sm">We value your privacy</h3>
                <button 
                  onClick={decline}
                  className="text-zinc-500 hover:text-zinc-900 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                We use cookies to improve your experience and analyse site traffic. Read our{" "}
                <Link href="/privacy" className="text-blue-500 hover:underline underline-offset-2">Privacy Policy</Link> to learn more.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={accept}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-zinc-900 text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Accept
                </button>
                <button
                  onClick={decline}
                  className="flex-1 bg-blue-100 hover:bg-zinc-700 text-zinc-600 text-xs font-medium py-2.5 rounded-lg transition-colors border border-zinc-700"
                >
                  Reject Non-Essential
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
