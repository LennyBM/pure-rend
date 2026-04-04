"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import CoverageAreaMap from "@/components/ui/CoverageAreaMap";
import { services } from "@/data/services";

export default function LocationPageClient({ location }: { location: any }) {
  const prefersReducedMotion = useReducedMotion();
  
  const sectionReveal = prefersReducedMotion ? {} : {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  const staggerContainer = prefersReducedMotion ? undefined : {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const staggerItem = prefersReducedMotion ? undefined : {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
  };

  return (
    <div className="min-h-screen mesh-bg text-zinc-900 pt-32 pb-12 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        {...sectionReveal}
        className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-24 relative z-10"
      >
        <div className="max-w-4xl space-y-8 glass-surface p-8 md:p-12 rounded-[2rem] shadow-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-200 text-blue-700 text-sm font-bold tracking-wide shadow-inner">
            <MapPin className="w-4 h-4" />
            Serving {location.name}, {location.county}
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tight text-zinc-900 leading-[1.1]">
            <span className="text-blue-600 drop-shadow-sm">
              {location.h1}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed max-w-2xl font-medium">
            {location.shortDescription}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold font-headline hover:bg-white hover:text-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 shadow-md"
              >
                Get a Quote in {location.name}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Description & Local Details */}
      <motion.section 
        {...sectionReveal}
        className="glass-surface-dark border-y border-white/10 py-24 mx-4 sm:mx-8 rounded-[3rem] shadow-2xl relative mb-24"
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-6 drop-shadow-md">Expertise in {location.name}</h2>
            <div className="text-zinc-300 leading-relaxed text-lg space-y-6">
              <p>{location.longDescription}</p>
              <p>
                A high-quality rendered finish is proven to increase property valuation and protect against damp.
                Whether you&apos;re upgrading an older property near {location.landmarks?.[0] || 'the centre'} or weather-proofing a new build,
                our local knowledge ensures the perfect application.
              </p>
            </div>
            {location.landmarks && location.landmarks.length > 0 && (
              <div className="mt-8">
                <h3 className="text-zinc-100 font-bold mb-4 tracking-wide text-sm uppercase">Local areas &amp; landmarks we cover nearby:</h3>
                <div className="flex flex-wrap gap-2">
                  {location.landmarks.map((landmark: string, idx: number) => (
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      key={idx} 
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-inner"
                    >
                      {landmark}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square md:aspect-video lg:aspect-square bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/20 shadow-2xl ring-1 ring-white/10"
          >
            {location.coordinates ? (
              <CoverageAreaMap center={[location.coordinates.lat, location.coordinates.lng]} radiusMiles={10} />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold uppercase tracking-widest bg-zinc-800/80 backdrop-blur-sm">
                Map View
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Available */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <motion.div {...sectionReveal} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-black text-zinc-900 mb-6 drop-shadow-sm">
            Services Available in {location.name}
          </h2>
          <p className="text-zinc-600 max-w-2xl text-xl font-medium">
            We offer our full range of specialist finishes throughout the {location.name} area.
          </p>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.slice(0, 4).map((service: any, idx: number) => (
            <motion.div key={idx} variants={staggerItem} whileHover={{ y: -5, scale: 1.02 }}>
              <Link
                href={`/services/${service.slug}`}
                className="group block glass-surface p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 border-white/60"
              >
                <h3 className="text-xl font-headline font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors drop-shadow-sm border-l-4 border-blue-600 pl-3">
                  {service.name}
                </h3>
                <p className="text-zinc-600 text-sm mb-6 leading-relaxed flex-grow">
                  {service.shortDescription}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 tracking-wide mt-auto">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div {...sectionReveal} className="mt-16 text-center">
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link href="/services" className="inline-flex items-center gap-2 text-zinc-900 hover:text-blue-600 font-bold uppercase tracking-wider transition-colors font-headline bg-white/50 px-6 py-3 rounded-xl border border-zinc-200/50 shadow-sm backdrop-blur-sm hover:bg-white">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        {...sectionReveal}
        className="px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="glass-surface-dark p-10 md:p-16 text-center relative overflow-hidden rounded-[3rem] shadow-2xl border-white/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-80" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-white drop-shadow-md">
              Ready to upgrade your {location.name} property?
            </h2>
            <p className="text-blue-100/80 text-xl max-w-2xl mx-auto font-medium">
              Book a free site survey in {location.name} and get a transparent, comprehensive quote for your rendering or plastering project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold font-headline hover:bg-white hover:text-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 shadow-lg border border-blue-500/50"
                >
                  Arrange a Survey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
