"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronsUpDown } from "lucide-react";
import ClientContentPlaceholder from "./ClientContentPlaceholder";

interface InteractiveSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function InteractiveSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: InteractiveSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const onUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchend", onUp);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[400px] md:h-[600px] group border border-white/10 select-none ${isDragging ? 'cursor-ew-resize' : 'cursor-default'}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const percent = Math.max(0, Math.min(((e.clientX - rect.left) / rect.width) * 100, 100));
          setSliderPosition(percent);
        }
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const percent = Math.max(0, Math.min(((e.touches[0].clientX - rect.left) / rect.width) * 100, 100));
          setSliderPosition(percent);
        }
      }}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image 
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
        />
        <ClientContentPlaceholder />
        <div className="absolute top-6 right-6 bg-blue-600 text-zinc-900 px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase font-headline rounded-none shadow-lg z-10">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground with clip-path) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none border-r-2 border-white/80"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
        />
        {/* Before Label (Fixed to left) */}
        <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md text-zinc-900 px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase font-headline rounded-none z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Center Dragger Icon */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 transition-transform cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 28px)` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <ChevronsUpDown className="w-8 h-8 text-blue-700 rotate-90 pointer-events-none" />
      </div>
    </div>
  );
}
