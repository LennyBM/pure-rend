'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const MapInner = dynamic(() => import('./MapInner'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-3xl bg-zinc-100 animate-pulse flex items-center justify-center border border-zinc-200">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-blue-700 animate-spin mx-auto mb-4" />
        <p className="text-zinc-500 font-medium text-sm">Loading service area map...</p>
      </div>
    </div>
  ),
});

interface CoverageAreaMapProps {
  center?: [number, number];
  radiusMiles?: number;
}

export default function CoverageAreaMap({ 
  center = [50.8290, -4.5447], // Bude coordinates
  radiusMiles = 25 
}: CoverageAreaMapProps) {
  // Convert miles to meters for Leaflet (1 mile = 1609.34 meters)
  const radiusMeters = radiusMiles * 1609.34;

  return (
    <div className="w-full h-full relative isolate">
      <div className="absolute -inset-4 bg-teal-900/5 rounded-3xl blur-2xl -z-10" />
      <MapInner center={center} radius={radiusMeters} />
    </div>
  );
}
