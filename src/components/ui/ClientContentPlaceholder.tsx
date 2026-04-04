import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ClientContentPlaceholderProps {
  className?: string;
  text?: string;
}

export default function ClientContentPlaceholder({ 
  className = "", 
  text = "Awaiting Client Content" 
}: ClientContentPlaceholderProps) {
  return (
    <div className={`absolute inset-0 z-20 flex items-center justify-center p-4 bg-teal-900/40 backdrop-blur-[2px] ${className}`}>
      <div className="bg-white/90 text-teal-900 px-4 py-2 rounded-full font-headline font-bold text-xs md:text-sm tracking-wider uppercase flex items-center gap-2 shadow-xl border border-teal-500/20">
        <AlertCircle className="w-4 h-4 text-teal-600" />
        {text}
      </div>
    </div>
  );
}
