"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import QuoteCalculator from "@/components/forms/QuoteCalculator";
import { 
  ArrowRight, 
  Home as HomeIcon,
  Layers, 
  ThermometerSnowflake, 
  PenTool, 
  Brush, 
  Wrench, 
  Shield, 
  Droplets,
  CheckCircle,
  Phone,
  Mail,
  ChevronsUpDown,
  MessageCircle 
} from "lucide-react";
import { Button } from "@/components/ui/Button";

import ClientContentPlaceholder from "@/components/ui/ClientContentPlaceholder";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = prefersReducedMotion ? {} : {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  const transformations = [
    {
      before: '/images/real_portfolio/monster-new-build-ecorend-child-4.webp',
      after: '/images/real_portfolio/monster-new-build-ecorend-main.webp',
      title: 'Silicone Rendering',
      description: 'Complete exterior transformation on ICF build with Ecorend silicone.',
    },
    {
      before: '/images/real_portfolio/multi-million-pound-new-build-child-4.webp',
      after: '/images/real_portfolio/multi-million-pound-new-build-main.webp',
      title: 'Monocouche Rendering',
      description: 'Stunning premium new build finish.',
    },
    {
      before: '/images/real_portfolio/garage-float-apartment-skim-child-3.webp',
      after: '/images/real_portfolio/garage-float-apartment-skim-main.webp',
      title: 'Internal Plastering',
      description: 'Float and skim internal transformation.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* 1. Cinematic Hero Section */}
      <header className="relative min-h-[calc(100svh-80px)] py-12 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <Image 
            src="/images/real_portfolio/monster-new-build-ecorend-main.webp"
            alt="PureRend rendering specialist covering Bude and North Cornwall"
            fill
            className="object-cover opacity-50 sm:opacity-70"
            priority
          />
          <ClientContentPlaceholder />
          <div className="absolute inset-0 bg-zinc-900/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-zinc-900/95 lg:via-zinc-900/70 lg:to-transparent" />
        </div>
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-headline text-white leading-[1.1] tracking-normal mb-2">
              Plastering and rendering <br />
              <span className="text-blue-600">done properly.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed">
              Based in Bude, covering North Cornwall and Devon. All work done by Ben — no subcontractors, no shortcuts. Backed by a 10-year workmanship guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex flex-col gap-2">
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild className="rounded-3xl h-auto py-4 px-8 text-lg font-bold font-headline shadow-[0_0_20px_rgba(20,142,179,0.4)] hover:bg-blue-500 text-zinc-900 border-none transition-colors">
                    <Link href="/contact" className="gap-2 flex items-center justify-center">
                      Get a Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="https://wa.me/447469931758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 font-medium transition-colors hover:bg-white/20 h-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Instant WhatsApp Chat
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* 2. Brand Trust Bar */}
      <section className="bg-zinc-50 py-12 border-b border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-16">
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-48 h-16 md:w-56 md:h-20 transition-all duration-300">
              <Image src="/logos/ecorend.svg" alt="EcoRend Logo" fill className="object-contain" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-56 h-16 md:w-64 md:h-20 transition-all duration-300">
              <Image src="/logos/british-gypsum.svg" alt="British Gypsum Logo" fill className="object-contain" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-40 h-16 md:w-48 md:h-16 transition-all duration-300">
              <Image src="/logos/weber.svg" alt="Weber Logo" fill className="object-contain" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-48 h-16 md:w-52 md:h-16 transition-all duration-300">
              <Image src="/logos/k-rend.svg" alt="K-Rend Logo" fill className="object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Authoritative Craftsmanship Section */}
      <section className="py-12 md:py-24 mesh-bg">
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image Col */}
            <div className="relative max-w-md lg:max-w-none mx-auto lg:mx-0 w-full">
              <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden relative shadow-2xl ring-1 ring-black/5">
                <Image 
                  src="/images/real_portfolio/internal-works-aug-2024-main.webp"
                  alt="PureRend precision craftsmanship"
                  fill
                  className="object-cover"
                />
                <ClientContentPlaceholder />
              </div>
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-10 rounded-3xl shadow-xl hidden sm:block shadow-blue-500/20"
              >
                <div className="text-5xl font-black font-headline text-center">10yr</div>
                <div className="uppercase tracking-widest text-xs font-bold font-headline mt-2 text-center whitespace-nowrap">
                  Workmanship Guarantee
                </div>
              </motion.div>
            </div>
            
            {/* Text Col */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-headline text-zinc-900 tracking-tight mb-6 leading-tight">
                Work that speaks for itself — and customers who do the same.
              </h2>
              <div className="bg-teal-50/50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
                <p className="text-xl text-zinc-800 font-medium leading-relaxed italic">
                  &quot;I don&apos;t subcontract. I don&apos;t cut corners. And I don&apos;t leave a job until it&apos;s right. Every bit of work I&apos;ve ever had has come through recommendation.&quot;
                </p>
                <p className="text-sm text-zinc-500 mt-2 not-italic font-semibold">— Ben Rod, PureRend</p>
              </div>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                I&apos;m Ben, and I do all the work myself. Living on the North Cornwall coast, I know exactly what render has to put up with — Atlantic weather, salt spray, driving rain. I use EcoRend&apos;s Generation 3 low-carbon systems and the right product for every job, whether that&apos;s silicone render for a coastal property or heritage lime for an old Cornish stone cottage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-zinc-800">All work done by Ben</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-zinc-800">NVQ Level 2 qualified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-zinc-800">Site left clean and tidy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-zinc-800">Day rate — no hidden costs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-12 md:py-24 bg-zinc-900">
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-3">What customers say</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-zinc-400 text-sm">Google · MyBuilder · Rated People</p>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: "Steve Allonby", source: "Google", text: "Excellent, wouldn't hesitate to recommend to anyone, great quality, value and very responsive, many thanks." },
              { author: "Darren Horstmann", source: "Google", text: "Ben and the team provided an outstanding rendering service. The attention to detail and quality of the finish completely transformed our property. Highly absolute class professionalism." },
              { author: "Verified Customer", source: "MyBuilder", text: "Ben is an outstanding tradesman! He responded promptly, gave me a competitive quote and worked really hard to the timetable agreed. Did an absolutely brilliant job and left everything neat and tidy. Would happily recommend to anyone." },
              { author: "Verified Customer", source: "Rated People", text: "Ben is hard working, punctual, reliable and the quality of his work is very good. Turned up on time, did the job in the timescale and price he said he would, and tidied away at the end of every day. A trustworthy chap, we would use again." },
            ].map((r, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 leading-relaxed mb-5 text-sm flex-grow">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-white text-sm">{r.author}</span>
                    <span className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{r.source}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </section>

      {/* 5. Project Transformations — Before & After Sliders */}
      {/* TODO: Replace placeholder before/after images with real client-supplied before/after photos */}
      <section className="py-12 md:py-24 bg-blue-50 border-y border-blue-100">
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-headline text-zinc-900 mb-4">Recent Work</h2>
            <p className="text-lg text-zinc-500">
              Drag the slider to see the difference. Real rendering and plastering projects across Bude and North Cornwall.
            </p>
          </div>

          <StaggerContainer className="max-w-4xl mx-auto space-y-12">
            {/* Featured slider */}
            <StaggerItem>
              <BeforeAfterSlider
                beforeImage="/images/purerend-silicone-rendering-before-1.webp"
                afterImage="/images/purerend-silicone-rendering-after-1.webp"
                beforeAlt="Property before silicone rendering in Bude, North Cornwall"
                afterAlt="Property after silicone rendering by PureRend in Bude, North Cornwall"
                beforeLabel="Before"
                afterLabel="After"
                caption="Silicone render — EcoRend system, North Cornwall"
              />
            </StaggerItem>

            {/* Two-up grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggerItem>
                <BeforeAfterSlider
                  beforeImage="/images/purerend-monocouche-render-before-2.webp"
                  afterImage="/images/purerend-monocouche-render-after-2.webp"
                  beforeAlt="Property before monocouche rendering in North Cornwall"
                  afterAlt="Property after monocouche rendering by PureRend"
                  beforeLabel="Before"
                  afterLabel="After"
                  caption="Monocouche render — through-coloured finish"
                />
              </StaggerItem>
              <StaggerItem>
                <BeforeAfterSlider
                  beforeImage="/images/purerend-external-wall-insulation-before-3.webp"
                  afterImage="/images/purerend-external-wall-insulation-after-3.webp"
                  beforeAlt="Property before external wall insulation in Cornwall"
                  afterAlt="Property after EWI installation by PureRend"
                  beforeLabel="Before"
                  afterLabel="After"
                  caption="External wall insulation — EWI system"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </motion.div>
      </section>

      {/* 5. Comprehensive 8-Grid Service Silos */}
      <section className="py-12 md:py-24 mesh-bg">
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold font-headline text-zinc-900 mb-4 text-center">Rendering &amp; Plastering Services</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto"></div>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, title: "Monocouche", desc: "One-coat, through-coloured render. The colour goes all the way through so there's no repainting needed — ever. Great on new builds and extensions." },
              { icon: Layers, title: "Silicone Renders", desc: "Water-repellent and self-cleaning. Brilliant for coastal properties that take a battering from Atlantic weather. Walls breathe, algae doesn't stick." },
              { icon: ThermometerSnowflake, title: "External Wall Insulation", desc: "Wrap the house in insulation board, then render over the top. Cuts heat loss, eliminates cold spots, and transforms the look in one job." },
              { icon: PenTool, title: "Thin Coat Systems", desc: "Flexible and crack-resistant. The right choice for timber frames and modern builds where movement is a factor." },
              { icon: Brush, title: "Heritage Lime Render", desc: "Breathable lime for older Cornish stone properties. Lets walls dry out naturally — the right material for the job, not just the cheapest." },
              { icon: Wrench, title: "Machine Application", desc: "Spray-applied render for consistent coverage on bigger jobs. Same quality as hand-finished, just faster on larger areas." },
              { icon: Shield, title: "Rendering Repair", desc: "Fixing cracked, blown, or failed render. I find out why it failed before I fix it — otherwise you're just patching the same problem twice." },
              { icon: Droplets, title: "Soft-Wash Aftercare", desc: "Chemical cleaning for algae and moss. No pressure washing — that strips the render. Low-pressure biocide that kills it at the root." },
              { icon: ChevronsUpDown, title: "Internal Plastering", desc: "Skimming, boarding, ceilings. Smooth, flat, paint-ready. Same care inside as out." }
            ].map((service, i) => (
              <StaggerItem key={i} className="h-full">
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }} 
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl group transition-all duration-300 shadow-lg border border-white/50 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col"
                >
                  <service.icon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform mb-6 drop-shadow-md" />
                  <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 border-l-4 border-blue-600 pl-3">{service.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </section>

      {/* 6. Location Silo Grid */}
      <section className="py-12 md:py-24 glass-surface my-12 mx-4 sm:mx-8">
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600 mb-3 block font-headline">North Cornwall &amp; Devon</span>
              <h2 className="text-4xl font-bold font-headline text-zinc-900">Areas I Cover</h2>
            </div>
            <p className="max-w-md text-zinc-600 text-lg">
              Based in Bude. I cover a 25-mile radius into North Cornwall and North Devon — most jobs are within 30 minutes of home.
            </p>
          </div>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Bude", tag: "Main Hub", href: "/locations/bude", cols: 1 },
              { name: "Stratton", tag: "Local", href: "/locations/stratton", cols: 1 },
              { name: "Kilkhampton", tag: "North Coast", href: "/locations/kilkhampton", cols: 1 },
              { name: "Widemouth Bay", tag: "Coastal", href: "/locations/widemouth-bay", cols: 1 },
              { name: "Marhamchurch", tag: "Valley", href: "/locations/marhamchurch", cols: 2 }
            ].map((loc, i) => (
              <StaggerItem
                key={loc.name}
                className={loc.cols === 2 ? "col-span-2 md:col-span-1 h-full" : "h-full"}
              >
                <motion.div 
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="h-full"
                >
                  <Link href={loc.href} className="bg-white/90 backdrop-blur-xl min-h-[14rem] flex flex-col items-center justify-center rounded-3xl shadow-lg border border-white/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group p-6 text-center h-full">
                    <span className="font-bold font-headline text-2xl mb-2 text-zinc-800 group-hover:text-blue-600 transition-colors">{loc.name}</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest mb-4">{loc.tag}</span>
                    <span className="text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      View Area Guide <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </section>

      {/* 7. 'No Dead End' CTA Section & Quote Calculator */}
      <section className="mesh-bg py-16 md:py-32 relative overflow-hidden">
        {/* Subtle mesh background effect for dark mode overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-zinc-900/0 to-zinc-900/0 pointer-events-none"></div>
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline text-zinc-900 tracking-tight leading-[1.1] mb-6">
              Get a free quote from Ben
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Fill in a few details and Ben will get back to you — usually same day.
            </p>
          </div>
          
          {/* Multi-Step Interactive Quote Form */}
          <QuoteCalculator />
          
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12 text-zinc-500 font-bold uppercase tracking-widest text-sm font-headline">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" /> 
              <span>07469 931 758</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" /> 
              <span>b.rplasteringsw@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LocalBusiness schema is now site-wide in layout.tsx */}
    </div>
  );
}
