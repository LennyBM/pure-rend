import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";

export const metadata = {
  title: "Portfolio | PureRend — Plastering & Rendering, Bude Cornwall",
  description: "Real rendering and plastering projects by Ben Rod across Bude and North Cornwall. Silicone render, monocouche, EWI, internal plastering and more.",
};

const projects = [
  {
    title: "ICF New Build — Silicone Render",
    location: "North Cornwall",
    service: "Silicone render — EcoRend",
    description: "Full external render on a large ICF new build. EcoRend silicone system throughout.",
    image: "/images/portfolio_hero.webp",
    href: "/portfolio/widemouth-bay",
  },
  {
    title: "New Build — Monocouche",
    location: "North Cornwall",
    service: "Monocouche — EcoRend",
    description: "Premium through-coloured monocouche finish on a large new build. No repainting, ever.",
    image: "/images/monocouche_after.webp",
    href: null,
  },
  {
    title: "Double-Storey Extension",
    location: "North Cornwall",
    service: "Sand cement render",
    description: "Full render on a substantial double-storey extension, matched to the existing property.",
    image: "/images/insulation_after.webp",
    href: null,
  },
  {
    title: "Sand Cement New Build",
    location: "Bude area",
    service: "Sand cement render",
    description: "Clean sand cement finish on a new build — solid, weatherproof substrate ready for topcoat.",
    image: "/images/silicone_after.webp",
    href: null,
  },
  {
    title: "Garage Float & Apartment Skim",
    location: "Bude area",
    service: "Internal plastering",
    description: "Float and skim on a garage conversion and apartment. Smooth, paint-ready finish throughout.",
    image: "/images/craftsmanship_internal.webp",
    href: null,
  },
  {
    title: "Internal Works",
    location: "Bude area",
    service: "Internal plastering",
    description: "Skimming and boarding — all internal rooms left with a smooth, flat finish ready for decorating.",
    image: "/images/insulation_before.webp",
    href: null,
  },
  {
    title: "Summer Spray Application",
    location: "North Cornwall",
    service: "Machine-applied EcoRend silicone",
    description: "Spray-applied render on a larger property. Consistent coverage and a clean, sharp finish.",
    image: "/images/silicone_before.webp",
    href: null,
  },
  {
    title: "Winter Render Project",
    location: "Bude area",
    service: "Rendering",
    description: "External render job completed on a tight schedule. Scaffolding down, site left clean, customer happy.",
    image: "/images/monocouche_before.webp",
    href: null,
  },
  {
    title: "Autumn Render Project",
    location: "North Cornwall",
    service: "Rendering",
    description: "Rendering job from a run of autumn/winter projects before the weather closes in.",
    image: "/images/cornish_hero_background.webp",
    href: null,
  },
];

export default function PortfolioHub() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-headline font-light tracking-tight text-zinc-900 mb-6">
          Recent <span className="font-bold text-blue-600">Work</span>
        </h1>
        <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto font-light">
          Rendering and plastering jobs across Bude and North Cornwall. All done by Ben — no subcontractors.
        </p>
      </section>

      {/* Before & After Showcase */}
      {/* TODO: Replace placeholder before/after images with real client-supplied before/after photos */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-zinc-900 mb-3 text-center">
          Before & <span className="text-blue-600">After</span>
        </h2>
        <p className="text-zinc-500 text-center mb-10 max-w-xl mx-auto">
          Drag the slider to see the difference on real projects across Bude and North Cornwall.
        </p>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem>
            <BeforeAfterSlider
              beforeImage="/images/purerend-silicone-rendering-before-1.webp"
              afterImage="/images/purerend-silicone-rendering-after-1.webp"
              beforeAlt="Property before silicone rendering in Bude, North Cornwall"
              afterAlt="Property after silicone rendering by PureRend in Bude"
              caption="Silicone render — EcoRend"
            />
          </StaggerItem>
          <StaggerItem>
            <BeforeAfterSlider
              beforeImage="/images/purerend-monocouche-render-before-2.webp"
              afterImage="/images/purerend-monocouche-render-after-2.webp"
              beforeAlt="Property before monocouche rendering in North Cornwall"
              afterAlt="Property after monocouche rendering by PureRend"
              caption="Monocouche — through-coloured"
            />
          </StaggerItem>
          <StaggerItem>
            <BeforeAfterSlider
              beforeImage="/images/purerend-external-wall-insulation-before-3.webp"
              afterImage="/images/purerend-external-wall-insulation-after-3.webp"
              beforeAlt="Property before external wall insulation in Cornwall"
              afterAlt="Property after EWI installation by PureRend"
              caption="External wall insulation"
            />
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
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
                  {project.href && (
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 tracking-wide">
                      View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </div>
            );

            return project.href ? (
              <StaggerItem key={i}><Link href={project.href}>{card}</Link></StaggerItem>
            ) : (
              <StaggerItem key={i}>{card}</StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center px-6">
        <h2 className="text-3xl font-headline font-light text-zinc-900 mb-4">Want work like this on your property?</h2>
        <p className="text-zinc-500 mb-8 max-w-md mx-auto">Get in touch for a free quote — Ben will visit the site and give you a straight answer on what it needs.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold font-headline hover:bg-zinc-900 transition-colors shadow-lg"
        >
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
