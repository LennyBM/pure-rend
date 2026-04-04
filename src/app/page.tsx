"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import QuoteCalculator from "@/components/forms/QuoteCalculator";
import InteractiveSlider from "@/components/ui/InteractiveSlider";
import ClientContentPlaceholder from "@/components/ui/ClientContentPlaceholder";
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
          <ClientContentPlaceholder text="Placeholder Image" />
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
              <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden relative shadow-2xl ring-1 ring-black/5">
                <Image 
                  src="/images/real_portfolio/internal-works-aug-2024-main.webp"
                  alt="PureRend precision craftsmanship"
                  fill
                  className="object-cover"
                />
                <ClientContentPlaceholder text="Stock Representation" />
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
                <div className="bg-white/80 backdrop-blur-md p-5 border border-blue-100 rounded-2xl shadow-sm">
                  <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-1 font-headline">System</div>
                  <div className="text-zinc-900 font-bold">Ecorend Silicone</div>
                </div>
                <div className="bg-white/80 backdrop-blur-md p-5 border border-blue-100 rounded-2xl shadow-sm">
                  <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-1 font-headline">Location</div>
                  <div className="text-zinc-900 font-bold">North Cornwall</div>
                </div>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="order-1 md:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
            >
              <Image 
                src="/images/real_portfolio/double-story-extension-main.webp"
                alt="Completed PureRend Project"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <ClientContentPlaceholder text="Stock Representation" />
            </motion.div>
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
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: HomeIcon, title: "Monocouche", desc: "Through-coloured, highly breathable formulation. Eliminates the need for future painting while resisting coastal weathering." },
              { icon: Layers, title: "Silicone Renders", desc: "Hydrophobic, self-cleaning technology. Repels moisture and biological growth. Ideal for extreme Atlantic exposure in Bude." },
              { icon: ThermometerSnowflake, title: "External Wall Insulation", desc: "Dramatically reduce heating bills by wrapping your home in engineered thermal mass. Eradicates cold bridging and condensation." },
              { icon: PenTool, title: "Thin Coat Systems", desc: "Polymer-modified, highly flexible renders. Perfect for modern construction and timber frames requiring anti-crack resilience." },
              { icon: Brush, title: "Heritage Lime Render", desc: "Vapour-permeable natural lime. Essential for older Cornish stone properties, allowing walls to breathe and preventing trapped moisture." },
              { icon: Wrench, title: "Machine Application", desc: "High-velocity spray application for flawless consistency and rapid completion on larger commercial or residential projects." },
              { icon: Shield, title: "Rendering Repair", desc: "Precision restoration of damaged, cracked, or blown renders. We identify the root cause before applying structural fixes." },
              { icon: Droplets, title: "Soft-Wash Aftercare", desc: "Gentle fungicidal treatment to eradicate algae and salt build-up without high-pressure damage, keeping your render pristine." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                }}
                whileHover={{ y: -5, scale: 1.02 }} 
                className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl group transition-all duration-300 shadow-lg border border-white/50 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <service.icon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform mb-6 drop-shadow-md" />
                <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 border-l-4 border-blue-600 pl-3">{service.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {[
              { name: "Bude", tag: "Main Hub", href: "/locations/bude", cols: 1 },
              { name: "Stratton", tag: "Local", href: "/locations/stratton", cols: 1 },
              { name: "Kilkhampton", tag: "North Coast", href: "/locations/kilkhampton", cols: 1 },
              { name: "Widemouth Bay", tag: "Coastal", href: "/locations/widemouth-bay", cols: 1 },
              { name: "Marhamchurch", tag: "Valley", href: "/locations/marhamchurch", cols: 2 }
            ].map((loc, i) => (
              <motion.div 
                key={loc.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 60 } }
                }}
                whileHover={{ y: -5, scale: 1.03 }}
                className={loc.cols === 2 ? "col-span-2 md:col-span-1" : ""}
              >
                <Link href={loc.href} className="bg-white/90 backdrop-blur-xl min-h-[14rem] flex flex-col items-center justify-center rounded-3xl shadow-lg border border-white/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group p-6 text-center h-full">
                  <span className="font-bold font-headline text-2xl mb-2 text-zinc-800 group-hover:text-blue-600 transition-colors">{loc.name}</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest mb-4">{loc.tag}</span>
                  <span className="text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    View Area Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 7. 'No Dead End' CTA Section & Quote Calculator */}
      <section className="mesh-bg py-16 md:py-32 relative overflow-hidden">
        {/* Subtle mesh background effect for dark mode overlay */}
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
