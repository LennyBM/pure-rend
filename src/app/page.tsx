"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import QuoteCalculator from "@/components/forms/QuoteCalculator";
import InteractiveSlider from "@/components/ui/InteractiveSlider";
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
          <div className="absolute inset-0 bg-zinc-900/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-zinc-900/95 lg:via-zinc-900/70 lg:to-transparent" />
        </div>
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="max-w-3xl space-y-8">
            <span className="inline-block bg-blue-600/20 text-blue-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm px-4 py-2 rounded-full font-headline border border-blue-500/30">
              Elite Architectural Finishes in Bude
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-headline text-white leading-[1.1] tracking-normal mb-2">
              Transform Your Space. <br />
              <span className="text-blue-600">Stop Losing Sleep Over Cracked Walls.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed">
              Making your dream home a reality with flawless finishes. Bude&apos;s most recommended rendering and plastering specialist — every project backed by our 10-year workmanship guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex flex-col gap-2">
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild className="rounded-3xl h-auto py-4 px-8 text-lg font-bold font-headline shadow-[0_0_20px_rgba(20,142,179,0.4)] hover:bg-blue-500 text-zinc-900 border-none transition-colors">
                    <Link href="/contact" className="gap-2 flex items-center justify-center">
                      Get My Free Plastering Quote
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
                  className="glass-surface text-zinc-900 px-8 py-4 text-lg font-bold hover:bg-white/10 transition-colors font-headline text-center flex items-center justify-center gap-2"
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
      <section className="bg-white py-16 border-b border-zinc-200">
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
              <div className="aspect-[4/5] bg-white rounded-sm overflow-hidden relative shadow-2xl">
                <Image 
                  src="/images/real_portfolio/internal-works-aug-2024-main.webp"
                  alt="PureRend precision craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-zinc-900 p-10 rounded-sm shadow-xl hidden sm:block">
                <div className="text-5xl font-black font-headline text-center">10yr</div>
                <div className="uppercase tracking-widest text-xs font-bold opacity-90 font-headline mt-2 text-center whitespace-nowrap">
                  Workmanship Guarantee
                </div>
              </div>
            </div>
            
            {/* Text Col */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-headline text-zinc-900 tracking-tight mb-6 leading-tight">
                You shouldn&apos;t have to choose between a smooth finish and a clean home.
              </h2>
              <div className="bg-teal-50/50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
                <p className="text-xl text-zinc-800 font-medium leading-relaxed italic">
                  &quot;We treat every job site with the same respect we give our own homes, ensuring a flawless result without the dust and debris.&quot;
                </p>
              </div>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                Ben Rod built PureRend on a simple belief — exceptional work speaks for itself. Every referral, every return customer, and every five-star review has come through recommendation rather than advertising. Modern rendering is a precise science, and coastal properties face unique challenges from salt spray and wind-driven rain. We engineer highly durable, breathable, and waterproof systems — from K-Rend to heritage lime — designed to increase your property&apos;s value and eliminate future maintenance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-zinc-800">Advanced Weatherproofing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-zinc-800">BBA-Approved Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-zinc-800">Meticulous Site Cleanup</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-zinc-800">Transparent & Inclusive Quoting</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Project Transformations Slider (Static Representation) */}
      <section className="py-12 md:py-24 bg-blue-50 border-y border-blue-100">
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-headline text-zinc-900 mb-4">Project Transformations</h2>
            <p className="text-lg text-zinc-500">
              Witness the evolution of local Bude properties from weathered brick to pristine modern architectural finishes.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm font-headline">Featured Project</span>
              <h3 className="text-3xl md:text-4xl font-bold font-headline text-zinc-900">Bude Coastal Extension</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                This project required a complete architectural finish for a major double-story extension. We applied a waterproof base coat and finished with a premium through-coloured system to protect against rapid coastal weathering, ensuring decades of vibrant, maintenance-free protection.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 border border-blue-100 rounded-sm shadow-sm">
                  <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-1 font-headline">System</div>
                  <div className="text-zinc-900 font-medium">Ecorend Silicone</div>
                </div>
                <div className="bg-white p-4 border border-blue-100 rounded-sm shadow-sm">
                  <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-1 font-headline">Location</div>
                  <div className="text-zinc-900 font-medium">North Cornwall</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image 
                src="/images/real_portfolio/double-story-extension-main.webp"
                alt="Completed PureRend Project"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Comprehensive 8-Grid Service Silos */}
      <section className="py-12 md:py-24 mesh-bg">
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold font-headline text-zinc-900 mb-4 text-center">Our Rendering Services</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-blue-100 border border-zinc-200 overflow-hidden rounded-sm">
            {/* Service 1 */}
            <div className="bg-white p-10 hover:bg-blue-600 hover:text-zinc-900 group transition-colors duration-300">
              <HomeIcon className="w-10 h-10 text-blue-600 group-hover:text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 group-hover:text-zinc-900">Monocouche</h3>
              <p className="text-zinc-600 group-hover:text-blue-50 text-sm leading-relaxed">Through-coloured, highly breathable formulation. Eliminates the need for future painting while resisting coastal weathering.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-10 hover:bg-blue-600 hover:text-zinc-900 group transition-colors duration-300">
              <Layers className="w-10 h-10 text-blue-600 group-hover:text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 group-hover:text-zinc-900">Silicone Renders</h3>
              <p className="text-zinc-600 group-hover:text-blue-50 text-sm leading-relaxed">Hydrophobic, self-cleaning technology. Repels moisture and biological growth. Ideal for extreme Atlantic exposure in Bude.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-10 hover:bg-blue-600 hover:text-zinc-900 group transition-colors duration-300">
              <ThermometerSnowflake className="w-10 h-10 text-blue-600 group-hover:text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 group-hover:text-zinc-900">External Wall Insulation</h3>
              <p className="text-zinc-600 group-hover:text-blue-50 text-sm leading-relaxed">Dramatically reduce heating bills by wrapping your home in engineered thermal mass. Eradicates cold bridging and condensation.</p>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-10 hover:bg-blue-600 hover:text-zinc-900 group transition-colors duration-300">
              <PenTool className="w-10 h-10 text-blue-600 group-hover:text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 group-hover:text-zinc-900">Thin Coat Systems</h3>
              <p className="text-zinc-600 group-hover:text-blue-50 text-sm leading-relaxed">Polymer-modified, highly flexible renders. Perfect for modern construction and timber frames requiring anti-crack resilience.</p>
            </div>
            {/* Service 5 */}
            <div className="bg-white p-10 hover:bg-blue-600 hover:text-zinc-900 group transition-colors duration-300">
              <Brush className="w-10 h-10 text-blue-600 group-hover:text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 group-hover:text-zinc-900">Heritage Lime Render</h3>
              <p className="text-zinc-600 group-hover:text-blue-50 text-sm leading-relaxed">Vapour-permeable natural lime. Essential for older Cornish stone properties, allowing walls to breathe and preventing trapped moisture.</p>
            </div>
            {/* Service 6 */}
            <div className="bg-white p-10 hover:bg-blue-600 hover:text-zinc-900 group transition-colors duration-300">
              <Wrench className="w-10 h-10 text-blue-600 group-hover:text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 group-hover:text-zinc-900">Machine Application</h3>
              <p className="text-zinc-600 group-hover:text-blue-50 text-sm leading-relaxed">High-velocity spray application for flawless consistency and rapid completion on larger commercial or residential projects.</p>
            </div>
            {/* Service 7 */}
            <div className="bg-white p-10 hover:bg-blue-600 hover:text-zinc-900 group transition-colors duration-300">
              <Shield className="w-10 h-10 text-blue-600 group-hover:text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 group-hover:text-zinc-900">Rendering Repair</h3>
              <p className="text-zinc-600 group-hover:text-blue-50 text-sm leading-relaxed">Precision restoration of damaged, cracked, or blown renders. We identify the root cause before applying structural fixes.</p>
            </div>
            {/* Service 8 */}
            <div className="bg-white p-10 hover:bg-blue-600 hover:text-zinc-900 group transition-colors duration-300">
              <Droplets className="w-10 h-10 text-blue-600 group-hover:text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 group-hover:text-zinc-900">Soft-Wash Aftercare</h3>
              <p className="text-zinc-600 group-hover:text-blue-50 text-sm leading-relaxed">Gentle fungicidal treatment to eradicate algae and salt build-up without high-pressure damage, keeping your render pristine.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. Location Silo Grid */}
      <section className="py-12 md:py-24 glass-surface my-12 mx-4 sm:mx-8">
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600 mb-3 block font-headline">Serving North Cornwall</span>
              <h2 className="text-4xl font-bold font-headline text-zinc-900">Primary Service Locations</h2>
            </div>
            <p className="max-w-md text-zinc-600 text-lg">
              We provide specialist architectural rendering services across Bude and the surrounding coastal villages.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link href="/locations/bude" className="bg-white min-h-[14rem] flex flex-col items-center justify-center rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 border border-transparent transition-all group p-6 text-center">
              <span className="font-bold font-headline text-2xl mb-2 text-zinc-800 group-hover:text-blue-600 transition-colors">Bude</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Main Hub</span>
              <span className="text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View Area Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/locations/stratton" className="bg-white min-h-[14rem] flex flex-col items-center justify-center rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 border border-transparent transition-all group p-6 text-center">
              <span className="font-bold font-headline text-2xl mb-2 text-zinc-800 group-hover:text-blue-600 transition-colors">Stratton</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Local</span>
              <span className="text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View Area Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/locations/kilkhampton" className="bg-white min-h-[14rem] flex flex-col items-center justify-center rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 border border-transparent transition-all group p-6 text-center">
              <span className="font-bold font-headline text-2xl mb-2 text-zinc-800 group-hover:text-blue-600 transition-colors">Kilkhampton</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mb-4">North Coast</span>
              <span className="text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View Area Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/locations/widemouth-bay" className="bg-white min-h-[14rem] flex flex-col items-center justify-center rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 border border-transparent transition-all group p-6 text-center">
              <span className="font-bold font-headline text-2xl mb-2 text-zinc-800 group-hover:text-blue-600 transition-colors">Widemouth Bay</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Coastal</span>
              <span className="text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View Area Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/locations/marhamchurch" className="bg-white min-h-[14rem] flex flex-col items-center justify-center rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200 border border-transparent transition-all col-span-2 md:col-span-1 group p-6 text-center">
              <span className="font-bold font-headline text-2xl mb-2 text-zinc-800 group-hover:text-blue-600 transition-colors">Marhamchurch</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Valley</span>
              <span className="text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View Area Guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 7. 'No Dead End' CTA Section & Quote Calculator */}
      <section className="bg-blue-50 py-16 md:py-32 border-t border-blue-100 relative overflow-hidden">
        {/* Subtle mesh background effect for dark mode */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-zinc-900/0 to-zinc-900/0 pointer-events-none"></div>
        <motion.div {...reveal} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-headline text-zinc-900 tracking-tight leading-[1.1] mb-6">
              Start your project with Ben Rod&apos;s <br className="hidden md:block"/>
              local coastal expertise.
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Get an instant, transparent quote. Complete the form below and Ben will review your requirements.
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

      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PureRend",
            "image": "https://purerend.co.uk/purerend-official-logo.webp",
            "description": "Bude's premier rendering specialists offering silicone render, monocouche, external wall insulation (EWI), and architectural finishes.",
            "url": "https://purerend.co.uk",
            "telephone": "+447761735022",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 50.8291,
                "longitude": -4.5452
              },
              "geoRadius": "25000"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bude",
              "addressRegion": "Cornwall",
              "addressCountry": "UK"
            },
            "sameAs": [
              "https://www.facebook.com/PureRend"
            ],
            "priceRange": "$$"
          })
        }}
      />
    </div>
  );
}
