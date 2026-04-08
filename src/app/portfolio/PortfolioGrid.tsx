"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";
import { useState } from "react";

const projects = [
  {
    title: "ICF New Build — Silicone Render",
    location: "North Cornwall",
    service: "Silicone render — EcoRend",
    serviceType: "Silicone Render",
    serviceSlug: "silicone-rendering",
    description: "Full external render on a large ICF new build. EcoRend silicone system throughout.",
    image: "/images/portfolio_hero.webp",
    href: "/portfolio/widemouth-bay",
  },
  {
    title: "New Build — Monocouche",
    location: "North Cornwall",
    service: "Monocouche — EcoRend",
    serviceType: "Monocouche",
    serviceSlug: "monocouche",
    description: "Premium through-coloured monocouche finish on a large new build. No repainting, ever.",
    image: "/images/monocouche_after.webp",
    href: null,
  },
  {
    title: "Double-Storey Extension",
    location: "North Cornwall",
    service: "Sand cement render",
    serviceType: "Rendering",
    serviceSlug: "silicone-rendering",
    description: "Full render on a substantial double-storey extension, matched to the existing property.",
    image: "/images/insulation_after.webp",
    href: null,
  },
  {
    title: "Sand Cement New Build",
    location: "Bude area",
    service: "Sand cement render",
    serviceType: "Rendering",
    serviceSlug: "monocouche",
    description: "Clean sand cement finish on a new build — solid, weatherproof substrate ready for topcoat.",
    image: "/images/silicone_after.webp",
    href: null,
  },
  {
    title: "Garage Float & Apartment Skim",
    location: "Bude area",
    service: "Internal plastering",
    serviceType: "Internal Plastering",
    serviceSlug: "internal-plastering",
    description: "Float and skim on a garage conversion and apartment. Smooth, paint-ready finish throughout.",
    image: "/images/craftsmanship_internal.webp",
    href: null,
  },
  {
    title: "Internal Works",
    location: "Bude area",
    service: "Internal plastering",
    serviceType: "Internal Plastering",
    serviceSlug: "internal-plastering",
    description: "Skimming and boarding — all internal rooms left with a smooth, flat finish ready for decorating.",
    image: "/images/insulation_before.webp",
    href: null,
  },
  {
    title: "Summer Spray Application",
    location: "North Cornwall",
    service: "Machine-applied EcoRend silicone",
    serviceType: "Machine Application",
    serviceSlug: "machine-application",
    description: "Spray-applied render on a larger property. Consistent coverage and a clean, sharp finish.",
    image: "/images/silicone_before.webp",
    href: null,
  },
  {
    title: "Winter Render Project",
    location: "Bude area",
    service: "Rendering",
    serviceType: "Rendering",
    serviceSlug: "monocouche",
    description: "External render job completed on a tight schedule. Scaffolding down, site left clean, customer happy.",
    image: "/images/monocouche_before.webp",
    href: null,
  },
  {
    title: "Autumn Render Project",
    location: "North Cornwall",
    service: "Rendering",
    serviceType: "Rendering",
    serviceSlug: "silicone-rendering",
    description: "Rendering job from a run of autumn/winter projects before the weather closes in.",
    image: "/images/cornish_hero_background.webp",
    href: null,
  },
];

const SERVICE_TYPES = ["All", "Silicone Render", "Monocouche", "Internal Plastering", "Machine Application", "Rendering"];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.serviceType === activeFilter);

  return (
    <>
      {/* Filter buttons */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {SERVICE_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveFilter(type)}
              aria-pressed={activeFilter === type}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeFilter === type
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const card = (
              <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-blue-600/50 transition-all duration-500 h-[280px] sm:h-[380px] flex flex-col">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={`${project.service} — ${project.location}`}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
                </div>

                <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                  <div className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-3 self-start font-headline shadow-lg">
                    {project.service}
                  </div>
                  <h2 className="text-xl font-headline font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                    {project.title}
                  </h2>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">{project.location}</p>
                  <p className="text-zinc-300 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex items-center gap-4">
                    {project.href && (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 tracking-wide">
                        View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                    <Link
                      href={`/services/${project.serviceSlug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-blue-400 transition-colors border border-zinc-700 hover:border-blue-600/50 rounded-full px-3 py-1"
                    >
                      About this service <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );

            return project.href ? (
              <StaggerItem key={project.title}><Link href={project.href}>{card}</Link></StaggerItem>
            ) : (
              <StaggerItem key={project.title}>{card}</StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>
    </>
  );
}
