"use client";

import { useState, useId, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const buttonId = useId();
  const contentId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const parent = buttonRef.current?.closest("[data-accordion]");
    if (!parent) return;
    const buttons = Array.from(parent.querySelectorAll<HTMLButtonElement>("button[data-accordion-trigger]"));
    const idx = buttons.indexOf(buttonRef.current!);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      buttons[(idx + 1) % buttons.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      buttons[(idx - 1 + buttons.length) % buttons.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      buttons[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      buttons[buttons.length - 1]?.focus();
    }
  };

  return (
    <div className="border border-white/20 bg-white/40 backdrop-blur-md rounded-2xl mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        ref={buttonRef}
        id={buttonId}
        data-accordion-trigger
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="font-headline font-bold text-lg md:text-xl text-zinc-900 group-hover:text-blue-600 transition-colors pr-8">
          {title}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 md:p-6 pt-0 text-zinc-600 leading-relaxed">
              {children}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div data-accordion className={`w-full ${className}`}>
      {children}
    </div>
  );
}
