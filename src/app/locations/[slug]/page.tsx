import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import CoverageAreaMap from "@/components/ui/CoverageAreaMap";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found | PureRend",
    };
  }

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: {
      canonical: `https://purerend.co.uk/locations/${location.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: `https://purerend.co.uk/locations/${location.slug}`,
      type: 'website',
      siteName: 'PureRend',
      locale: 'en_GB',
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-24">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium tracking-wide">
            <MapPin className="w-4 h-4" />
            Serving {location.name}, {location.county}
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-light tracking-tight text-zinc-900 leading-[1.1]">
            <span className="font-bold text-blue-600">
              {location.h1}
            </span>
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl font-light">
            {location.shortDescription}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-900 transition-colors duration-300"
            >
              Get a Quote in {location.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Description & Local Details */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-24">
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-headline font-light text-white mb-6">Expertise in {location.name}</h2>
            <div className="text-zinc-400 leading-relaxed text-lg space-y-6">
              <p>{location.longDescription}</p>
              <p>
                A high-quality rendered finish is proven to increase property valuation and protect against damp.
                Whether you&apos;re upgrading an older property near {location.landmarks?.[0] || 'the centre'} or weather-proofing a new build,
                our local knowledge ensures the perfect application.
              </p>
            </div>
            {location.landmarks && location.landmarks.length > 0 && (
              <div className="mt-8">
                <h3 className="text-zinc-200 font-medium mb-4">Local areas &amp; landmarks we cover nearby:</h3>
                <div className="flex flex-wrap gap-2">
                  {location.landmarks.map((landmark, idx) => (
                    <span key={idx} className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700">
            {location.coordinates ? (
              <CoverageAreaMap center={[location.coordinates.lat, location.coordinates.lng]} radiusMiles={10} />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-medium">
                Map View
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-light text-zinc-900 mb-6">
            Services Available in {location.name}
          </h2>
          <p className="text-zinc-500 max-w-2xl text-lg">
            We offer our full range of specialist finishes throughout the {location.name} area.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              className="group block bg-zinc-50 border border-zinc-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-headline font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                {service.shortDescription}
              </p>
              <div className="inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 font-medium transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-zinc-900 to-zinc-900 opacity-50" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-headline font-light text-white">
              Ready to upgrade your {location.name} property?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Book a free site survey in {location.name} and get a transparent, comprehensive quote for your rendering or plastering project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-500 transition-colors duration-300"
              >
                Arrange a Survey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
