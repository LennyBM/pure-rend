"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Lightbulb } from "lucide-react";
import type { LocationData } from "@/data/locations";

const SERVICE_SLUGS: Record<string, string> = {
  "Silicone Renders": "silicone-rendering",
  "Monocouche Rendering": "monocouche",
  "External Wall Insulation": "external-wall-insulation",
  "Heritage Lime Render": "heritage-lime-render",
  "Thin Coat Systems": "thin-coat-systems",
  "Rendering Repair": "rendering-repair",
  "Internal Plastering": "internal-plastering",
  "Soft-Wash Aftercare": "soft-wash-aftercare",
  "Machine Application": "machine-application",
};

export default function LocationPageClient({ location }: { location: LocationData }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-2 text-blue-600 text-sm font-bold uppercase tracking-widest mb-4">
          <MapPin className="w-4 h-4" />
          {location.county}
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-zinc-900 mb-6 max-w-3xl leading-tight">
          {location.h1}
        </h1>
        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-8">
          {location.shortDescription}
        </p>
        <a
          href="tel:07469931758"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-900 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Ben: 07469 931 758
        </a>
      </section>

      {/* Main Content */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-16">
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
          {/* Body copy */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-zinc-700 leading-relaxed font-medium">{location.longDescription}</p>
            {location.body.map((paragraph, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed text-base">{paragraph}</p>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key services for this location */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-7">
              <h2 className="text-lg font-headline font-bold text-zinc-900 mb-5">Services in {location.name}</h2>
              <ul className="space-y-2">
                {location.keyServices.map((service) => {
                  const serviceSlug = SERVICE_SLUGS[service];
                  return serviceSlug ? (
                    <li key={service}>
                      <Link
                        href={`/services/${serviceSlug}`}
                        className="flex items-center gap-3 text-sm text-zinc-700 hover:text-blue-600 transition-colors group"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                        {service}
                        <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ) : (
                    <li key={service} className="flex items-center gap-3 text-sm text-zinc-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      {service}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Tip */}
            {location.tip && (
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs mb-3">
                  <Lightbulb className="w-4 h-4" /> Local tip
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed">{location.tip}</p>
              </div>
            )}

            {/* Nearby locations */}
            {location.nearbyLocations.length > 0 && (
              <div className="bg-white rounded-2xl border border-zinc-200 p-7">
                <h3 className="text-sm font-headline font-bold text-zinc-900 mb-4 uppercase tracking-wider">Nearby Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {location.nearbyLocations.map((nearby) => (
                    <Link
                      key={nearby.slug}
                      href={`/locations/${nearby.slug}`}
                      className="inline-flex items-center gap-1.5 bg-zinc-50 border border-zinc-200 text-zinc-700 hover:border-blue-300 hover:text-blue-600 text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
                    >
                      {nearby.name} <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-16 px-6 text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4">
          Need rendering or plastering in {location.name}?
        </h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Ben covers {location.name} as part of his regular work area. Get in touch for a free site visit and honest quote.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:07469931758"
            className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 px-8 py-4 rounded-full font-bold hover:border-blue-500 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" /> 07469 931 758
          </a>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://purerend.co.uk" },
              { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://purerend.co.uk/locations" },
              { "@type": "ListItem", "position": 3, "name": location.name, "item": `https://purerend.co.uk/locations/${location.slug}` },
            ],
          }),
        }}
      />
    </div>
  );
}
