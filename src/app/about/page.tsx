import Link from "next/link";
import { ArrowRight, Shield, Award, Phone } from "lucide-react";

export const metadata = {
  title: "About PureRend | Meet Ben Rod | Bude's Rendering Specialist",
  description: "I'm Ben Rod, the founder of PureRend. Specialised in high-performance silicone render and external wall insulation across Bude and North Cornwall.",
  alternates: { canonical: "https://purerend.co.uk/about" },
  openGraph: {
    title: "About PureRend | Meet Ben Rod",
    description: "Specialised rendering and plastering by Ben Rod, based in Bude, Cornwall. No subcontracting — every job done personally.",
    url: "https://purerend.co.uk/about",
    type: "website" as const,
    siteName: "PureRend",
    locale: "en_GB",
    images: [{ url: "/images/purerend-founder-ben-rod-plasterer.webp", width: 1200, height: 630, alt: "Ben Rod, founder of PureRend" }],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-semibold tracking-wide mb-4">
            ABOUT PUREREND
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-light tracking-tight text-zinc-900 leading-[1.1]">
            The Hands Behind <br />
            <span className="font-bold text-blue-600">
              Every Finish
            </span>
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl font-light">
            I&apos;m Ben Rod, the founder of PureRend, and I&apos;m based right here in Bude.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
             <a
               href="tel:+447761735022"
               className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-900 transition-colors duration-300"
             >
               <Phone className="w-5 h-5" />
               Call me: 07761 735022
             </a>
          </div>
        </div>
      </section>

      {/* Split Layout: Image & First-Person Copy */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-24">
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
          <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-medium z-0">
               <span className="text-center px-4">Portrait of Ben Rod</span>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-headline font-light text-white mb-8">My Approach</h2>
            <div className="text-zinc-400 leading-relaxed space-y-6 text-lg font-light">
              <p>
                I got into rendering because I&apos;m obsessed with the craft — the precision of building up a perfect coat, the discipline of getting clean, razor-sharp lines, and the satisfaction of standing back at the end of the day knowing I&apos;ve transformed someone&apos;s home. It&apos;s not just a job for me. It&apos;s the part of the build I look forward to most.
              </p>
              <p>
                I specialise in high-performance silicone render, monocouche one-coat systems, and external wall insulation — working with BBA-approved products from EcoRend to deliver finishes that aren&apos;t just beautiful, but engineered to perform. Their Generation 3 low-carbon technology means I&apos;m using some of the most advanced render materials manufactured in the UK.
              </p>
              <p className="pl-6 border-l-2 border-blue-600 text-zinc-300 font-medium italic">
                &quot;Living on the North Cornwall coast means your walls take a beating — Atlantic storms, salt-laden air, and driving rain. I understand these conditions because I live and work in them every day.&quot;
              </p>
              <p>
                Whether it&apos;s a sleek silicone finish on a contemporary new-build overlooking Widemouth Bay, or a full EWI system to weatherproof an older cottage in Stratton, I bring the same approach: meticulous preparation, premium materials, and a finish that speaks for itself.
              </p>
              <p>
                <strong className="text-white">I don&apos;t subcontract. I don&apos;t cut corners. And I don&apos;t leave a job until it&apos;s right.</strong> That&apos;s why my work comes through word-of-mouth — builders recommend me to their clients, homeowners to their neighbours, and the results speak louder than any advert.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-500 transition-colors"
               >
                Let&apos;s Talk About Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="bg-white py-16 px-6 md:px-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 md:p-8 md:gap-8 md:gap-16 text-center">
          <div>
            <div className="text-4xl font-headline font-bold text-blue-600 mb-2">5★</div>
            <div className="text-sm text-zinc-500 tracking-wider">TOP RATED</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-blue-600 mb-2 flex justify-center"><Shield className="w-10 h-10" /></div>
            <div className="text-sm text-zinc-500 tracking-wider uppercase">Fully Insured</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-blue-600 mb-2 flex justify-center"><Award className="w-10 h-10" /></div>
            <div className="text-sm text-zinc-500 tracking-wider uppercase">EcoRend Systems</div>
          </div>
          <div>
            <div className="text-4xl font-headline font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-zinc-500 tracking-wider uppercase">Recommended</div>
          </div>
        </div>
      </section>

      {/* Why Render Block */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-zinc-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Why Render Your Home?
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-light text-zinc-900 mb-6">
            More Than Just a Fresh Face
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Rendering isn&apos;t cosmetic — it&apos;s structural protection. A properly applied system shields your walls from moisture penetration and dramatically extends the lifespan of your exterior masonry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-8">
          <div className="bg-zinc-50 p-4 md:p-8 rounded-2xl border border-zinc-200">
            <h3 className="text-xl font-semibold text-zinc-900 mb-4">Flexible. Breathable.<br/>Self-Cleaning.</h3>
            <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
              The gold standard for exposed and coastal properties. Silicone render is water-repellent yet allows walls to breathe, preventing trapped moisture.
            </p>
            <div className="text-blue-600 text-sm font-medium">Best for: Older homes, renovations, exposed locations</div>
          </div>

          <div className="bg-zinc-50 p-4 md:p-8 rounded-2xl border border-zinc-200">
            <h3 className="text-xl font-semibold text-zinc-900 mb-4">One Coat. Through-Coloured.<br/>Zero Repainting.</h3>
            <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
              A high-performance cement-based system with pigment throughout. Using EcoRend&apos;s low-carbon technology, monocouche delivers a solid, uniform finish.
            </p>
            <div className="text-blue-600 text-sm font-medium">Best for: New builds, extensions, stable substrates</div>
          </div>

          <div className="bg-zinc-50 p-4 md:p-8 rounded-2xl border border-zinc-200">
            <h3 className="text-xl font-semibold text-zinc-900 mb-4">Warmer Home. Lower Bills.<br/>Better Looking.</h3>
            <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
              EWI wraps your property in a thermal blanket, finished with a premium render topcoat. It cuts heat loss and transforms curb appeal in one.
            </p>
            <div className="text-blue-600 text-sm font-medium">Best for: Solid-wall properties, energy upgrades</div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-zinc-900 border-t border-zinc-800 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-headline font-light text-white mb-6">
          If you&apos;re thinking about rendering, I&apos;d love to chat.
        </h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          No hard sell, no pressure — just an honest conversation about what would work best for your home.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-500 transition-colors"
        >
          Let&apos;s get something in the diary
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
