import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ClientContentPlaceholderProps {
  className?: string;
  text?: string;
}

export default function ClientContentPlaceholder({ 
  className = "", 
  text = "Placeholder" 
}: ClientContentPlaceholderProps) {
  return (
    <div className={`absolute top-2 right-2 z-20 flex items-center justify-center pointer-events-none ${className}`}>
      <div className="bg-yellow-400/90 text-zinc-900 px-2 py-1 md:px-3 md:py-1.5 rounded shadow-lg font-headline font-bold text-[9px] md:text-[10px] tracking-wider uppercase flex items-center gap-1.5 border border-yellow-500/50 backdrop-blur-sm">
        <AlertCircle className="w-3 h-3 md:w-3.5 md:h-3.5" />
        {text}
      </div>
    </div>
  );
}
