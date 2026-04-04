import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import LocationPageClient from "./LocationPageClient";
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

  return <LocationPageClient location={location} />;
}
