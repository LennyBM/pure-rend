import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ImageIcon } from "lucide-react";

export const metadata = {
  title: "Our Portfolio | PureRend Plastering & Rendering",
  description: "View our gallery of striking rendering transformations across Bude and North Cornwall.",
};

export default function PortfolioHub() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium tracking-wide mb-8">
          <ImageIcon className="w-4 h-4" />
          Our Work
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-light tracking-tight text-zinc-900 mb-6">
          Architectural <span className="font-bold text-blue-600">Transformations</span>
        </h1>
        <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto font-light">
          Explore our recent rendering and plastering projects. From heritage lime restorations to ultra-modern silicone finishes across North Cornwall.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widemouth Bay Coastal Project */}
          <Link
            href="/portfolio/widemouth-bay"
            className="group block relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-blue-600/50 transition-all duration-500 h-[400px]"
          >
            <div className="absolute inset-0 z-0">
               <Image
                 src="/images/real_portfolio/monster-new-build-ecorend-main.webp"
                 alt="Widemouth Bay Coastal Rendering Project"
                 fill
                 className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-4 self-start font-headline shadow-lg">
                Silicone
              </div>
              <h2 className="text-2xl font-headline font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                Widemouth Bay Coastal Protection
              </h2>
              <div className="font-bold text-lg font-headline text-blue-500 mb-3 border-l-2 border-blue-600 pl-3 py-1">
                Completed in 14 Days
              </div>
              <p className="text-zinc-400 text-sm line-clamp-2 mb-6">
                Complete eradication of penetrating damp and a stunning structural modernization using high-performance, hydrophobic silicone render.
              </p>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 tracking-wide">
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Placeholder items */}
          <div className="group block relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 h-[400px] flex flex-col items-center justify-center">
            <ImageIcon className="w-12 h-12 text-zinc-300 mb-4" />
            <h2 className="text-xl font-headline font-medium text-zinc-500 mb-2 px-8 text-center">More Case Studies Coming Soon</h2>
            <p className="text-zinc-400 text-sm px-8 text-center">We are currently curating the professional photography for our recent Bude projects.</p>
          </div>
          <div className="group block relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 h-[400px] flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-zinc-300" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 text-center px-6">
        <h2 className="text-3xl font-headline font-light text-zinc-900 mb-6">Want to see your home transformed?</h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold font-headline hover:bg-zinc-900 transition-colors shadow-lg"
        >
          Request Your Free Estimate <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
