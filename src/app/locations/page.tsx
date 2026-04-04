import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { locations } from "@/data/locations";

export const metadata = {
  title: "Areas We Cover | PureRend Plastering & Rendering",
  description: "PureRend provides specialist rendering and internal plastering services across North Cornwall and North Devon. Find out if we cover your area.",
};

export default function LocationsHub() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium tracking-wide mb-8">
          <MapPin className="w-4 h-4" />
          Our Service Area
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-light tracking-tight text-zinc-900 mb-6">
          Serving Cornwall &amp; <span className="font-bold text-blue-600">Devon</span>
        </h1>
        <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto font-light">
          We bring highly engineered exterior rendering and flawless internal plastering right to your doorstep. Explore our service areas below.
        </p>
      </section>

      {/* Locations Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, idx) => (
            <Link
              key={idx}
              href={`/locations/${location.slug}`}
              className="group block relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-headline font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      {location.name}
                    </h2>
                    <p className="text-zinc-500 text-sm mt-1">{location.county}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-zinc-200 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <p className="text-zinc-500 leading-relaxed mb-6 flex-grow text-sm">
                  {location.shortDescription}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 tracking-wide mt-auto">
                  View Area Guide
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
