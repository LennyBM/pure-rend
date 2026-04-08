import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";
import PortfolioGrid from "./PortfolioGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | PureRend — Plastering & Rendering, Bude Cornwall",
  description: "Real rendering and plastering projects by Ben Rod across Bude and North Cornwall. Silicone render, monocouche, EWI, internal plastering and more.",
  alternates: { canonical: "https://purerend.co.uk/portfolio" },
  openGraph: {
    title: "Portfolio | PureRend — Real Rendering & Plastering Projects",
    description: "Real rendering and plastering projects by Ben Rod across Bude and North Cornwall.",
    url: "https://purerend.co.uk/portfolio",
    type: "website",
    siteName: "PureRend",
    locale: "en_GB",
  },
};

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

      <PortfolioGrid />

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
