import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import QuoteCalculator from "@/components/forms/QuoteCalculator";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { ArrowRight, Phone, Mail, CheckCircle, ChevronDown } from "lucide-react";
import Script from "next/script";
import ClientContentPlaceholder from "@/components/ui/ClientContentPlaceholder";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | PureRend" };
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `https://purerend.co.uk/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `https://purerend.co.uk/services/${service.slug}`,
      type: 'website',
      siteName: 'PureRend',
      locale: 'en_GB',
    },
  };
}

export default async function ServiceSiloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const hasBeforeAfter = !!(service.beforeImage && service.afterImage);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── 1. HERO ── */}
      <header className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <ClientContentPlaceholder className="opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/60 to-zinc-900/10 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-20">
          <span className="inline-block bg-blue-600/20 text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs px-4 py-2 rounded-full mb-5 border border-blue-500/30 font-headline">
            Specialist Service
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight mb-5 max-w-3xl">
            {service.h1}
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8">
            {service.shortDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-500 transition-colors shadow-lg"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:07469931758"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/20 px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" /> 07469 931 758
            </a>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce z-10">
          <ChevronDown className="w-5 h-5" />
        </div>
      </header>

      {/* ── 2. OVERVIEW + SIDEBAR ── */}
      <section className="py-20 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Main copy */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 block font-headline">
              Technical Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-zinc-900 mb-8 leading-tight">
              {service.name} in North Cornwall
            </h2>
            <p className="text-zinc-600 leading-relaxed text-lg">
              {service.longDescription}
            </p>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">

            {/* Process timeline */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-7">
              <h3 className="text-lg font-headline font-bold text-zinc-900 mb-6">Application Process</h3>
              <div className="space-y-5">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-zinc-200 last:border-l-transparent">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-50" />
                    <h4 className="font-bold text-zinc-900 font-headline text-sm mb-0.5">{step.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote CTA box */}
            <div className="bg-zinc-900 rounded-2xl p-7 text-white">
              <h3 className="font-headline font-bold text-lg mb-2">Discuss this service</h3>
              <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                Get a transparent, itemised quote directly from Ben.
              </p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-full text-sm font-bold hover:bg-blue-500 transition-colors mb-5"
              >
                Request Fast Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="space-y-3 pt-4 border-t border-zinc-800">
                <a href="tel:+447469931758" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> 07469 931 758
                </a>
                <a href="mailto:b.rplasteringsw@gmail.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4 shrink-0" /> b.rplasteringsw@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. BENEFITS ── */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-zinc-900 mb-10 inline-block border-b-2 border-blue-600 pb-2">
            Core Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => {
              const Icon = benefit.icon || CheckCircle;
              return (
                <div key={idx} className="bg-white border border-zinc-200 rounded-2xl p-7 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-headline font-bold text-zinc-900 text-lg mb-2">{benefit.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. BEFORE / AFTER (conditional) ── */}
      {hasBeforeAfter && (
        <section className="py-20 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-zinc-900 mb-3">
                See the Difference
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                Drag the slider to reveal the before and after on a real {service.name.toLowerCase()} project.
              </p>
            </div>
            {/* TODO: Replace with real client-supplied before/after photos */}
            <div className="max-w-3xl mx-auto">
              <BeforeAfterSlider
                beforeImage={service.beforeImage!}
                afterImage={service.afterImage!}
                beforeAlt={`Property before ${service.name.toLowerCase()} in North Cornwall`}
                afterAlt={`Property after ${service.name.toLowerCase()} by PureRend in North Cornwall`}
                beforeLabel="Before"
                afterLabel="After"
                caption={`${service.name} — real project, North Cornwall`}
              />
            </div>
          </div>
        </section>
      )}

      {/* ── 5. PRICING ASSURANCE ── */}
      <section className="py-14 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { label: "All prep & materials included", sub: "No surprise add-ons" },
              { label: "No hidden scaffolding fees", sub: "Access costs quoted upfront" },
              { label: "10-Year Workmanship Warranty", sub: "Backed by PureRend" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-headline font-bold text-zinc-900">{item.label}</span>
                <span className="text-zinc-500 text-sm">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQs ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-zinc-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-7">
                <h3 className="font-headline font-bold text-zinc-900 mb-3 flex gap-3">
                  <span className="text-blue-600 shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-zinc-600 leading-relaxed pl-6">
                  <span className="font-bold text-zinc-400 mr-2">A.</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. INTERNAL PLASTERING DRYING GUIDE ── */}
      {service.slug === "internal-plastering" && (
        <section className="pb-12 px-6 md:px-12 max-w-3xl mx-auto w-full">
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
            <h3 className="text-lg font-bold font-headline text-amber-900 mb-2">Essential Drying Guide</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Allow <strong>4 to 7 days</strong> for the plaster to transition from dark pink to light pink. Keep the room well-ventilated but avoid direct heaters — forced drying causes cracking. Once fully light pink, apply a mist coat (50/50 water/paint) before final decoration.
            </p>
          </div>
        </section>
      )}

      {/* ── 8. QUOTE CALCULATOR ── */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-zinc-900 mb-4">
              Get Your {service.name} Estimate
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Complete the form below for a rapid, transparent baseline estimate in under 60 seconds.
            </p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* ── 9. FINAL CTA STRIP ── */}
      <section className="bg-zinc-900 py-20 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-headline font-light text-white mb-4">
          Ready to get started in North Cornwall?
        </h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Call Ben direct or use the form above. We reply within 1 business day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-colors"
          >
            Book a Free Survey <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:07469931758"
            className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" /> 07469 931 758
          </a>
        </div>
      </section>

      <Script
        id={`schema-service-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.name,
            "serviceType": service.name,
            "url": `https://purerend.co.uk/services/${service.slug}`,
            "description": service.shortDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "PureRend",
              "telephone": "+447469931758",
              "url": "https://purerend.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "64 High Street",
                "addressLocality": "Bideford",
                "addressRegion": "Devon",
                "postalCode": "EX39 2AR",
                "addressCountry": "GB"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Bude" },
              { "@type": "City", "name": "Holsworthy" },
              { "@type": "City", "name": "Bideford" },
              { "@type": "City", "name": "Barnstaple" },
              { "@type": "City", "name": "Stratton" },
              { "@type": "City", "name": "Launceston" },
              { "@type": "City", "name": "Camelford" }
            ]
          })
        }}
      />

      {/* BreadcrumbList schema */}
      <Script
        id={`schema-breadcrumb-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://purerend.co.uk" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://purerend.co.uk/services" },
              { "@type": "ListItem", "position": 3, "name": service.name, "item": `https://purerend.co.uk/services/${service.slug}` }
            ]
          })
        }}
      />

      {/* FAQPage schema */}
      {service.faqs.length > 0 && (
        <Script
          id={`schema-faq-${service.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": service.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      )}
    </div>
  );
}
