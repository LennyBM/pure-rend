"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50); // 0–100
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(clamp((x / rect.width) * 100, 1, 99));
  }, []);

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setHasInteracted(true);
    updatePosition(e.clientX);
  };

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, updatePosition]);

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
    setIsDragging(true);
    setHasInteracted(true);
  };

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, [onTouchMove]);

  const onTouchEnd = () => setIsDragging(false);

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={containerRef}
        className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl select-none cursor-ew-resize ${isDragging ? "cursor-grabbing" : "cursor-ew-resize"}`}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="img"
        aria-label={`Before and after comparison: ${beforeAlt} and ${afterAlt}`}
      >
        {/* Skeleton loader */}
        {imagesLoaded < 2 && (
          <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 animate-pulse flex items-center justify-center z-0">
            <svg className="w-8 h-8 text-zinc-300 dark:text-zinc-600 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}

        {/* AFTER image — full width, background */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className={`object-cover transition-opacity duration-500 ${imagesLoaded >= 2 ? 'opacity-100' : 'opacity-0'}`}
            sizes="(max-width: 768px) 100vw, 800px"
            loading="lazy"
            draggable={false}
            onLoad={() => setImagesLoaded((prev) => prev + 1)}
          />
        </div>

        {/* BEFORE image — clipped to left side */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className={`object-cover transition-opacity duration-500 ${imagesLoaded >= 2 ? 'opacity-100' : 'opacity-0'}`}
            sizes="(max-width: 768px) 100vw, 800px"
            loading="lazy"
            draggable={false}
            onLoad={() => setImagesLoaded((prev) => prev + 1)}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Drag handle */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-white flex items-center justify-center pointer-events-none transition-opacity duration-500 ${imagesLoaded >= 2 ? 'opacity-100' : 'opacity-0'}`}
          style={{ left: `${position}%` }}
        >
          {!hasInteracted && imagesLoaded >= 2 && (
            <span className="absolute inset-0 rounded-full bg-white/60 animate-ping block" style={{ animationDuration: '2s' }} />
          )}
          <svg className="w-5 h-5 text-zinc-700 relative z-10" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 10l-3 3V7l3 3zm6 0l3-3v6l-3-3z" />
          </svg>
        </div>

        {/* Labels */}
        <div className={`absolute bottom-4 left-4 pointer-events-none transition-opacity duration-500 ${imagesLoaded >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          <span className="bg-zinc-900/80 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm">
            {beforeLabel}
          </span>
        </div>
        <div className={`absolute bottom-4 right-4 pointer-events-none transition-opacity duration-500 ${imagesLoaded >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          <span className="bg-blue-600/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>
      </div>

      {caption && (
        <p className="text-center text-sm text-zinc-500 mt-3 italic">{caption}</p>
      )}
    </div>
  );
}
