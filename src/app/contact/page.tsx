import QuoteCalculator from "@/components/forms/QuoteCalculator";
import { Mail, MapPin, Phone, Camera, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import CoverageAreaMap from "@/components/ui/CoverageAreaMap";
import GoogleReviewSlider from "@/components/ui/GoogleReviewSlider";

export const metadata: Metadata = {
  title: "Contact PureRend | Silicone Rendering & Plastering in Bude",
  description: "Get a free, instant quote for your rendering or plastering project in Bude, Cornwall. Contact the material experts at PureRend today.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-80" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-multiply" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/50 border border-blue-100 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-blue-700">AVAILABLE FOR Q2 BOOKINGS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-headline text-zinc-900 mb-6 drop-shadow-sm">
            Get a <span className="text-blue-600">Free Quote</span>
          </h1>

          <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s a full external render, internal plastering, or just a repair job — fill in the form and Ben will get back to you the same day. No hard sell, no pressure.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Direct Contact & Trust */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-3xl font-bold font-headline text-zinc-900 mb-8 border-b border-zinc-200 pb-4">
                Direct Contact
              </h2>
              
              <div className="flex flex-col gap-6">
                <a 
                  href="tel:07469931758" 
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white border border-zinc-200 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Call Ben Direct</p>
                    <p className="text-xl font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">07469 931 758</p>
                  </div>
                </a>

                <a 
                  href="mailto:b.rplasteringsw@gmail.com" 
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white border border-zinc-200 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-xl font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">b.rplasteringsw@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-zinc-200">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-lg font-medium text-zinc-900">Bude, Cornwall, EX23</p>
                    <p className="text-sm text-zinc-500 mt-1">Serving a 25-mile radius</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof & Socials */}
            <div className="bg-blue-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <h3 className="text-xl font-bold font-headline text-zinc-900 mb-6 relative z-10">See the work in progress</h3>
              <p className="text-zinc-500 mb-8 relative z-10 leading-relaxed">
                Ben documents jobs from start to finish on Instagram and TikTok — real work, not showreel stuff.
              </p>

              <a
                href="https://www.instagram.com/purerendsw/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 transition-all group relative z-10"
              >
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-zinc-600" />
                  <span className="font-semibold text-zinc-900">@purerendsw</span>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Peake Management Footer Branding per user request */}
            <div className="text-center mt-4">
              <p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase">
                Created By{" "}
                <Link href="https://www.peakemanagement.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 hover:underline underline-offset-4 transition-colors">
                  Peake Management
                </Link>
              </p>
            </div>
            
          </div>

          {/* Right Column: Quote Calculator */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="mb-6">
                <h2 className="text-3xl font-bold font-headline text-zinc-900 mb-2">
                  Get a Free Quote
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Takes two minutes. Ben will review your details and be in touch — no obligation.
                </p>
              </div>
              
              <div className="relative z-10">
                <QuoteCalculator />
              </div>
              
              {/* Decorative Elements behind calculator */}
              <div className="absolute inset-0 -z-10 translate-y-8 translate-x-4 mix-blend-multiply opacity-20">
                <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="bg-white py-12 border-t border-zinc-100">
        <GoogleReviewSlider />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline text-zinc-900 mb-4">
              Our Coverage Area
            </h2>
            <p className="text-zinc-600">
              We provide priority specialist rendering and plastering services to Bude and the surrounding 25-mile radius.
            </p>
          </div>
          <div className="w-full aspect-[16/9] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl relative">
            <CoverageAreaMap center={[50.8290, -4.5447]} radiusMiles={25} />
          </div>
        </div>
      </section>
    </div>
  );
}
