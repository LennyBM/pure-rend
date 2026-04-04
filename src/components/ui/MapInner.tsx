'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
  iconUrl: '/location-pin.svg', // We will generate this or use a default
  iconRetinaUrl: '/location-pin.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface MapProps {
  center: [number, number];
  radius: number; // in meters (25 miles = ~40000 meters)
}

export default function MapInner({ center, radius }: MapProps) {
  // Fix leaflet icon path issues in Next.js
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden shadow-xl border border-teal-900/10">
      <MapContainer 
        center={center} 
        zoom={9} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', zIndex: 10 }}
        className="grayscale-[0.5] contrast-[1.2]" // Style filter for a muted coastal vibe
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // Clean modern basemap
        />
        <Circle 
          center={center} 
          radius={radius} 
          pathOptions={{ 
            color: '#0d9488', // teal-600
            fillColor: '#0d9488', // teal-600
            fillOpacity: 0.15,
            weight: 2
          }} 
        />
        <Marker position={center}>
          <Popup>
            <div className="font-headline font-bold text-teal-900">PureRend HQ</div>
            <div className="text-sm">Bude, Cornwall & Surrounding Areas</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
