import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench } from "lucide-react";
import { services } from "@/data/services";
import ClientContentPlaceholder from "@/components/ui/ClientContentPlaceholder";

export const metadata = {
  title: "Specialist Rendering Services | PureRend",
  description: "Explore our range of premium rendering and plastering services across North Cornwall and Devon. From silicone systems to heritage lime finishes.",
};

export default function ServicesHub() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium tracking-wide mb-8">
          <Wrench className="w-4 h-4 opacity-70" />
          Our Expertise
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-light text-zinc-900 mb-8 leading-tight">
          Architectural <span className="font-bold text-blue-600">Exteriors &amp; Interiors</span>
        </h1>
        <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto font-light">
          We deliver highly engineered rendering systems and flawless internal plastering designed to protect and transform your property.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative rounded-2xl overflow-hidden h-72 block border border-zinc-200 hover:border-blue-600/40 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Background image */}
              <Image
                src={service.heroImage}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <ClientContentPlaceholder className="opacity-70 group-hover:opacity-100 transition-opacity" />
              {/* Gradient overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/50 to-zinc-900/10 pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h2 className="text-xl font-headline font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-4">
                  {service.shortDescription}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 tracking-wide">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
