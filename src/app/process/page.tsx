import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Droplets, AlertTriangle, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Our Process | PureRend Bude",
  description: "Learn about our meticulous 4-step exterior rendering process, including site cleanup and vital render aftercare advice.",
};

const steps = [
  {
    number: "01",
    title: "Transparent Consultation",
    body: "Before any scaffolding arrives, we inspect the property in person. We assess geographical exposure to coastal winds, examine the existing wall structure and substrate, then provide a transparent, fixed-price quote. No hidden costs — ever.",
    image: "/images/real_portfolio/sand-cement-new-build-main.webp",
    imageAlt: "Property assessment before rendering",
  },
  {
    number: "02",
    title: "Substrate Engineering",
    body: "A render is only as strong as what it's attached to. We painstakingly prepare the substrate — stripping failed render, treating algae and organic growth, applying stabilizing primers, and embedding reinforcement mesh around high-stress areas like windows and doors to prevent micro-cracking.",
    image: "/images/real_portfolio/internal-works-aug-2024-main.webp",
    imageAlt: "Substrate preparation and primer application",
  },
  {
    number: "03",
    title: "Precision Application",
    body: "For flawless consistency we use state-of-the-art spray rendering machines where appropriate, guaranteeing the correct water-to-compound ratio for maximum structural integrity. Our master plasterers then hand-finish every surface to exact tolerances, achieving a result no machine alone can replicate.",
    image: "/images/real_portfolio/christmas-2022-review-child-6.webp",
    imageAlt: "Machine-applied monocouche rendering",
  },
  {
    number: "04",
    title: "Immaculate Site Cleanup",
    body: "Your home is not a building site. All windows, doors, driveways and gardens are extensively masked before a single drop of render is mixed. When the scaffolding comes down we leave the site completely spotless — no cement dust on the patio, no mess in the garden. Just a stunning architectural finish.",
    image: "/images/real_portfolio/summer-sprays-ecorend-main.webp",
    imageAlt: "Finished silicone render — clean site handover",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── HERO ── */}
      <header className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden pt-20">
        <Image
          src="/images/real_portfolio/monster-new-build-ecorend-child-6.webp"
          alt="PureRend precision rendering process"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/55 to-zinc-900/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-14 md:pb-18 w-full">
          <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs px-4 py-2 rounded-full mb-5 font-headline">
            The PureRend Standard
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight mb-4 max-w-3xl">
            Precision Engineering. <br /> Flawless Execution.
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl leading-relaxed">
            We don&apos;t just &ldquo;throw mud at a wall.&rdquo; Modern rendering is a chemical science — we manage every variable from substrate to site cleanup.
          </p>
        </div>
      </header>

      {/* ── PROCESS STEPS ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="space-y-28">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
            >
              {/* Text */}
              <div className="w-full md:w-1/2">
                <div className="text-[7rem] leading-none font-headline font-black text-blue-600/15 mb-2 select-none">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-zinc-900 mb-5 -mt-4">
                  {step.title}
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {step.body}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE PUREREND PROMISE STRIP ── */}
      <section className="bg-zinc-900 py-16 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { icon: CheckCircle, label: "Fixed-Price Quotes", sub: "No surprise costs added after the survey" },
              { icon: CheckCircle, label: "Full Site Protection", sub: "Every window, door and surface masked before we start" },
              { icon: CheckCircle, label: "10-Year Warranty", sub: "Every job backed by our workmanship guarantee" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <item.icon className="w-7 h-7 text-blue-600" />
                <span className="font-headline font-bold text-white text-lg">{item.label}</span>
                <span className="text-zinc-400 text-sm">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFTERCARE WARNING ── */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl border-l-4 border-red-500 shadow-xl overflow-hidden relative p-8 md:p-12">
            <AlertTriangle className="absolute -bottom-8 -right-8 w-56 h-56 text-red-500/5" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-red-500 mb-5 font-headline uppercase tracking-widest text-xs font-bold">
                <AlertTriangle className="w-4 h-4" /> Critical Aftercare Warning
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-zinc-900 mb-6 leading-tight">
                Never Pressure-Wash <br className="hidden md:block" /> Your Render.
              </h2>

              <div className="space-y-5 text-zinc-600 text-lg leading-relaxed">
                <p>
                  Modern through-coloured rendering acts as a breathable membrane. In the damp environment of North Cornwall, algae spores will eventually settle on the facade — this is completely normal.
                </p>
                <p>
                  <strong className="text-zinc-900">Do not blast it with a pressure washer.</strong> High-pressure water blows the microscopic top layer off the render, destroying its hydrophobic properties, stripping the manufacturer warranty, and leaving the surface porous — meaning algae returns twice as fast the following year.
                </p>
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-2 text-blue-600 mb-3 font-headline uppercase tracking-widest text-xs font-semibold">
                  <Droplets className="w-4 h-4" /> The Correct Solution: Soft-Washing
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  Render requires chemical <strong className="text-zinc-900">Soft-Washing</strong> — biocides applied with low-pressure pumps that kill algae at the root. The weather then washes the dead matter away naturally over a few days, leaving the render&apos;s surface completely intact. We offer this as a dedicated service —{" "}
                  <Link href="/services/soft-wash-aftercare" className="text-blue-600 font-semibold hover:underline">
                    learn more about our Soft-Wash service
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-zinc-900 mb-4">
          Ready to see the PureRend process first-hand?
        </h2>
        <p className="text-zinc-500 mb-10 max-w-xl mx-auto text-lg">
          Book a free, no-obligation site survey and get a fully transparent, fixed-price quote from Ben.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-base font-bold font-headline hover:bg-zinc-900 transition-colors shadow-lg"
          >
            Book a Free Survey <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:07469931758"
            className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 px-8 py-4 rounded-full text-base font-bold font-headline hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-5 h-5" /> 07469 931 758
          </a>
        </div>
      </section>

    </div>
  );
}
