import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import BackToTop from "@/components/ui/BackToTop";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://purerend.co.uk'),
  title: "PureRend | Plastering & Rendering Specialist in Bude, Cornwall",
  description: "Plastering and rendering specialist based in Bude. Silicone render, monocouche, EWI, heritage lime, and internal plastering across North Cornwall and Devon. All work done by Ben.",
  icons: {
    icon: '/favicon.ico',
    apple: '/images/purerend-official-logo.webp',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://purerend.co.uk',
    siteName: 'PureRend',
    title: 'PureRend | Plastering & Rendering Specialist in Bude, Cornwall',
    description: 'Plastering and rendering specialist based in Bude. Silicone render, monocouche, EWI, heritage lime, and internal plastering across North Cornwall and Devon.',
    images: [
      {
        url: '/images/purerend-rendering-specialist-hero.webp',
        width: 1200,
        height: 630,
        alt: 'PureRend — Rendering & Plastering Specialist, Bude Cornwall',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PureRend | Plastering & Rendering Specialist in Bude, Cornwall',
    description: 'Plastering and rendering specialist based in Bude. Silicone render, monocouche, EWI, and internal plastering across North Cornwall and Devon.',
    images: ['/images/purerend-rendering-specialist-hero.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://tile.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://basemaps.cartocdn.com" />
      </head>
      <body className="font-sans min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <MotionProvider>
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col w-full h-full min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <BackToTop />
        <MobileStickyCTA />
        <a 
          href="https://wa.me/447761735022"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex fixed bottom-6 right-6 z-[60] items-center gap-3 bg-blue-50/90 backdrop-blur-xl border border-white/10 text-zinc-900 px-5 py-3 rounded-full shadow-2xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:bg-blue-100 hover:-translate-y-1 transition-all duration-300 font-medium tracking-wide text-sm"
          aria-label="Chat with us on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 sm:w-6 sm:h-6 fill-current shrink-0 text-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          <div className="hidden sm:flex flex-col text-left">
            <span>Chat on WhatsApp</span>
            <span className="text-[10px] text-zinc-500 font-normal mt-0.5">We reply within 1 business day</span>
          </div>
        </a>

        {/* Site-wide LocalBusiness + Reviews structured data */}
        </MotionProvider>

        {/* WebSite schema — enables Google Sitelinks search */}
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PureRend",
              "url": "https://purerend.co.uk",
              "potentialAction": {
                "@type": "SearchAction",
                "target": { "@type": "EntryPoint", "urlTemplate": "https://purerend.co.uk/?q={search_term_string}" },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        <script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "PureRend",
              "description": "Plastering and rendering specialist in Bude, Cornwall. Silicone render, monocouche, EWI, internal plastering, and heritage lime render.",
              "url": "https://purerend.co.uk",
              "image": "https://purerend.co.uk/images/purerend-official-logo.webp",
              "telephone": "+447761735022",
              "email": "b.rplasteringsw@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bude",
                "addressRegion": "Cornwall",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.8261,
                "longitude": -4.5437
              },
              "areaServed": [
                { "@type": "City", "name": "Bude" },
                { "@type": "City", "name": "Holsworthy" },
                { "@type": "City", "name": "Bideford" },
                { "@type": "City", "name": "Barnstaple" },
                { "@type": "City", "name": "Stratton" },
                { "@type": "City", "name": "Launceston" },
                { "@type": "City", "name": "Camelford" }
              ],
              "founder": {
                "@type": "Person",
                "name": "Ben Rod"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "££",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100063442040968",
                "https://www.instagram.com/purerendsw/"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "2",
                "bestRating": "5"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Steve Allonby" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "reviewBody": "Excellent, wouldn't hesitate to recommend to anyone, great quality, value and very responsive, many thanks.",
                  "datePublished": "2024-01-01"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Darren Horstmann" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "reviewBody": "Ben and the team provided an outstanding rendering service. The attention to detail and quality of the finish completely transformed our property. Highly absolute class professionalism.",
                  "datePublished": "2024-01-01"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
