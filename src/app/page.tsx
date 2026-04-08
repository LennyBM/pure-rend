import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const QuoteCalculator = dynamic(() => import("@/components/forms/QuoteCalculator"), {
  loading: () => <div className="w-full max-w-2xl mx-auto h-[420px] bg-zinc-100 rounded-3xl animate-pulse" />,
});
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
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import ClientContentPlaceholder from "@/components/ui/ClientContentPlaceholder";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerReveal";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import CoverageAreaMap from "@/components/ui/CoverageAreaMap";

export default function Home() {
  const transformations = [
    {
      before: '/images/silicone_before.webp',
      after: '/images/silicone_after.webp',
      title: 'Silicone Rendering',
      description: 'Complete exterior transformation on ICF build with Ecorend silicone.',
    },
    {
      before: '/images/monocouche_before.webp',
      after: '/images/monocouche_after.webp',
      title: 'Monocouche Rendering',
      description: 'Stunning premium new build finish.',
    },
    {
      before: '/images/insulation_before.webp',
      after: '/images/insulation_after.webp',
      title: 'External Wall Insulation',
      description: 'Substantial thermal upgrade with premium silicone render finish.',
    },
  ];

  const services = [
    { icon: HomeIcon, title: "Monocouche", desc: "One-coat, through-coloured render. The colour goes all the way through so there's no repainting needed — ever. Great on new builds and extensions." },
    { icon: Layers, title: "Silicone Renders", desc: "Water-repellent and self-cleaning. Brilliant for coastal properties that take a battering from Atlantic weather. Walls breathe, algae doesn't stick." },
    { icon: ThermometerSnowflake, title: "External Wall Insulation", desc: "Wrap the house in insulation board, then render over the top. Cuts heat loss, eliminates cold spots, and transforms the look in one job." },
    { icon: PenTool, title: "Thin Coat Systems", desc: "Flexible and crack-resistant. The right choice for timber frames and modern builds where movement is a factor." },
    { icon: Brush, title: "Heritage Lime Render", desc: "Breathable lime for older Cornish stone properties. Lets walls dry out naturally — the right material for the job, not just the cheapest." },
    { icon: Wrench, title: "Machine Application", desc: "Spray-applied render for consistent coverage on bigger jobs. Same quality as hand-finished, just faster on larger areas." },
    { icon: Shield, title: "Rendering Repair", desc: "Fixing cracked, blown, or failed render. I find out why it failed before I fix it — otherwise you're just patching the same problem twice." },
    { icon: Droplets, title: "Soft-Wash Aftercare", desc: "Chemical cleaning for algae and moss. No pressure washing — that strips the render. Low-pressure biocide that kills it at the root." },
    { icon: ChevronsUpDown, title: "Internal Plastering", desc: "Skimming, boarding, ceilings. Smooth, flat, paint-ready. Same care inside as out." }
  ];

  const testimonials = [
    { author: "Steve Allonby", source: "Google", text: "Excellent, wouldn't hesitate to recommend to anyone, great quality, value and very responsive, many thanks." },
    { author: "Darren Horstmann", source: "Google", text: "Ben and the team provided an outstanding rendering service. The attention to detail and quality of the finish completely transformed our property. Highly absolute class professionalism." },
    { author: "Verified Customer", source: "MyBuilder", text: "Ben is an outstanding tradesman! He responded promptly, gave me a competitive quote and worked really hard to the timetable agreed. Did an absolutely brilliant job and left everything neat and tidy. Would happily recommend to anyone." },
    { author: "Verified Customer", source: "Rated People", text: "Ben is hard working, punctual, reliable and the quality of his work is very good. Turned up on time, did the job in the timescale and price he said he would, and tidied away at the end of every day. A trustworthy chap, we would use again." },
  ];

  const locations = [
    { name: "Bude", tag: "Main Hub", href: "/locations/bude" },
    { name: "Stratton", tag: "Local", href: "/locations/stratton" },
    { name: "Kilkhampton", tag: "North Coast", href: "/locations/kilkhampton" },
    { name: "Widemouth Bay", tag: "Coastal", href: "/locations/widemouth-bay" },
    { name: "Marhamchurch", tag: "Valley", href: "/locations/marhamchurch" },
    { name: "Holsworthy", tag: "Devon", href: "/locations/holsworthy" },
    { name: "Bideford", tag: "North Devon", href: "/locations/bideford" },
    { name: "Launceston", tag: "East Cornwall", href: "/locations/launceston" },
    { name: "Camelford", tag: "Bodmin Moor", href: "/locations/camelford" },
    { name: "Barnstaple", tag: "North Devon", href: "/locations/barnstaple" },
  ];

  const faqs = [
    {
      question: "Do I need to arrange scaffolding?",
      answer: "No — I sort all of that out. Scaffolding gets erected before I start and taken down when I'm done. It's included in the quote so there are no surprises."
    },
    {
      question: "How much mess will there be?",
      answer: "Very little. I sheet up everything properly before starting and clean up at the end of every day. When the job's finished, you wouldn't know I'd been there — apart from the new render."
    },
    {
      question: "Will the render need repainting?",
      answer: "Not with silicone or monocouche renders — the colour goes all the way through. Traditional sand/cement renders can be painted, but the modern systems I use are designed to stay colour-fast for decades."
    },
    {
      question: "How long does a typical job take?",
      answer: "It depends on the size of the property and what's involved. A standard 3-bed semi might take 5–7 working days for a full render. I'll give you a realistic timescale upfront — I don't overpromise."
    },
    {
      question: "What's your guarantee?",
      answer: "All my work comes with a 10-year workmanship guarantee. The render products themselves (EcoRend, Weber, K-Rend) carry their own manufacturer warranties on top of that."
    },
    {
      question: "Do you do small repair jobs?",
      answer: "Absolutely. Whether it's a patch of blown render or a crack that needs sorting, I'm happy to take a look. I'll always tell you honestly whether it's a repair job or if it needs more work."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-[112px] md:pt-[130px]">
      
      {/* ─── 1. HERO SECTION ─── */}
      <header className="relative min-h-[70svh] md:min-h-[calc(100svh-80px)] py-10 md:py-12 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <Image 
            src="/images/cornish_hero_background.webp"
            alt="PureRend rendering specialist covering Bude and North Cornwall"
            fill
            className="object-cover opacity-50 sm:opacity-70"
            priority
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyNzI3MmEiLz48L3N2Zz4="
          />
          <ClientContentPlaceholder className="!top-28 !right-4 lg:!top-8 lg:!right-8" />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-zinc-900/40 lg:to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black font-headline text-white leading-[1.1] tracking-normal mb-2 drop-shadow-lg">
              Plastering and rendering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">done properly.</span>
            </h1>
            <p className="text-base md:text-2xl text-zinc-300 max-w-2xl leading-relaxed drop-shadow-md">
              Based in Bude, covering North Cornwall and Devon. All work done by Ben — no subcontractors, no shortcuts. Backed by a 10-year workmanship guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex-1 sm:flex-none hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-transform">
                <Button asChild className="w-full sm:w-auto rounded-full h-full min-h-[52px] md:min-h-[56px] py-3.5 md:py-4 px-6 md:px-8 text-base md:text-lg font-bold font-headline shadow-[0_0_20px_rgba(37,99,235,0.4)] bg-blue-600 hover:bg-white text-white hover:text-blue-900 border-none transition-colors">
                  <Link href="/contact" className="gap-2 flex items-center justify-center h-full">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1 sm:flex-none hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] transition-transform">
                <Link
                  href="https://wa.me/447761735022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-full flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-8 py-3.5 md:py-4 min-h-[52px] md:min-h-[56px] font-medium transition-colors hover:bg-white/20 h-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  Instant WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── 2. CRAFTSMANSHIP / ABOUT BEN ─── */}
      <section className="py-12 md:py-24 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image Col — smaller on mobile */}
            <div className="relative max-w-[280px] sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 w-full">
              <div className="aspect-[3/4] md:aspect-[4/5] bg-white rounded-2xl md:rounded-3xl overflow-hidden relative shadow-xl md:shadow-2xl ring-1 ring-black/5">
                <Image 
                  src="/images/craftsmanship_internal.webp"
                  alt="PureRend precision craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 384px, 50vw"
                />
                <ClientContentPlaceholder />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-blue-600 text-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl hidden sm:block shadow-blue-500/20 hover:scale-105 hover:rotate-2 transition-transform cursor-default">
                <div className="text-3xl md:text-5xl font-black font-headline text-center">10yr</div>
                <div className="uppercase tracking-widest text-[10px] md:text-xs font-bold font-headline mt-1 md:mt-2 text-center whitespace-nowrap">
                  Workmanship Guarantee
                </div>
              </div>
            </div>

            {/* Text Col */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-headline text-zinc-900 tracking-tight mb-4 md:mb-6 leading-tight">
                Work that speaks for itself — and customers who do the same.
              </h2>
              <div className="bg-teal-50/50 border-l-4 border-blue-600 p-4 md:p-6 mb-6 md:mb-8 rounded-r-lg">
                <p className="text-base md:text-xl text-zinc-800 font-medium leading-relaxed italic">
                  &quot;I don&apos;t subcontract. I don&apos;t cut corners. And I don&apos;t leave a job until it&apos;s right. Every bit of work I&apos;ve ever had has come through recommendation.&quot;
                </p>
                <p className="text-sm text-zinc-500 mt-2 not-italic font-semibold">— Ben Rod, PureRend</p>
              </div>
              <p className="text-base md:text-lg text-zinc-600 mb-6 leading-relaxed">
                I&apos;m Ben, and I do all the work myself. Living on the North Cornwall coast, I know exactly what render has to put up with — Atlantic weather, salt spray, driving rain. I use EcoRend&apos;s Generation 3 low-carbon systems and the right product for every job, whether that&apos;s silicone render for a coastal property or heritage lime for an old Cornish stone cottage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  "All work done by Ben",
                  "NVQ Level 2 qualified",
                  "Site left clean and tidy",
                  "Day rate — no hidden costs"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
                    <span className="font-semibold text-zinc-800 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SERVICES ─── (Mobile: Horizontal Snap Carousel / Desktop: Grid) */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-zinc-900 mb-3 md:mb-4">Rendering &amp; Plastering Services</h2>
            <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto"></div>
          </div>

          {/* Mobile: Snap-scroll carousel */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-4 px-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="snap-start flex-shrink-0 w-[280px] bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-zinc-100 flex flex-col active:scale-[0.98] transition-transform"
                >
                  <service.icon className="w-8 h-8 text-blue-600 mb-4 drop-shadow-md" />
                  <h3 className="text-lg font-bold mb-3 font-headline text-zinc-900 border-l-4 border-blue-600 pl-3">{service.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-zinc-500 mt-3 uppercase tracking-widest font-semibold">Swipe to see all services →</p>
          </div>

          {/* Desktop: Grid */}
          <StaggerContainer className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title} className="h-full">
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl group transition-all duration-300 shadow-lg border border-white/50 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col hover:-translate-y-1 hover:scale-[1.02]">
                  <service.icon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform mb-6 drop-shadow-md" />
                  <h3 className="text-xl font-bold mb-4 font-headline text-zinc-900 border-l-4 border-blue-600 pl-3">{service.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 4. PROJECT TRANSFORMATIONS — Before & After ─── */}
      <section className="py-12 md:py-24 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-zinc-900 mb-3 md:mb-4">Recent Work</h2>
            <p className="text-base md:text-lg text-zinc-500">
              Drag the slider to see the difference. Real rendering and plastering projects across Bude and North Cornwall.
            </p>
          </div>

          {/* Mobile: Snap-scroll carousel for before/after */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-4 px-4">
              {transformations.map((project) => (
                <div key={project.title} className="snap-start flex-shrink-0 w-[85vw] max-w-[340px]">
                  <BeforeAfterSlider
                    beforeImage={project.before}
                    afterImage={project.after}
                    beforeAlt={`Property before ${project.title.toLowerCase()}`}
                    afterAlt={`Property after ${project.title.toLowerCase()} by PureRend`}
                    beforeLabel="Before"
                    afterLabel="After"
                    caption={`${project.title} — ${project.description}`}
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-zinc-500 mt-2 uppercase tracking-widest font-semibold">Swipe to compare more projects →</p>
          </div>

          {/* Desktop: Stacked */}
          <StaggerContainer className="hidden md:block max-w-4xl mx-auto space-y-12">
            {transformations.map((project) => (
              <StaggerItem key={project.title}>
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeAlt={`Property before ${project.title.toLowerCase()}`}
                  afterAlt={`Property after ${project.title.toLowerCase()} by PureRend`}
                  beforeLabel="Before"
                  afterLabel="After"
                  caption={`${project.title} — ${project.description}`}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── 5. TESTIMONIALS ─── (Mobile: Horizontal Snap Carousel / Desktop: Grid) */}
      <section className="py-12 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-white mb-3">What customers say</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-zinc-400 text-sm">Google · MyBuilder · Rated People</p>
          </div>

          {/* Mobile: Snap-scroll carousel */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-4 px-4">
              {testimonials.map((r) => (
                <div key={r.author} className="snap-start flex-shrink-0 w-[300px] bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 leading-relaxed mb-4 text-sm flex-grow">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-white text-sm">{r.author}</span>
                    <span className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{r.source}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-zinc-500 mt-3 uppercase tracking-widest font-semibold">Swipe to see more reviews →</p>
          </div>

          {/* Desktop: Grid */}
          <StaggerContainer className="hidden md:grid grid-cols-2 gap-6">
            {testimonials.map((r) => (
              <StaggerItem key={r.author}>
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
        </div>
      </section>

      {/* ─── 6. AREAS COVERED ─── (Mobile: Horizontal Snap Carousel / Desktop: Grid) */}
      <section className="py-12 md:py-24 glass-surface my-6 md:my-12 mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-8">
            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600 mb-2 md:mb-3 block font-headline">North Cornwall &amp; Devon</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-zinc-900">Areas I Cover</h2>
            </div>
            <p className="max-w-md text-zinc-600 text-sm md:text-lg">
              Based in Bude. I cover a 25-mile radius into North Cornwall and North Devon — most jobs are within 30 minutes of home.
            </p>
          </div>
          
          {/* Mobile: Snap-scroll carousel */}
          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-4 px-4">
              {locations.map((loc) => (
                <div key={loc.name} className="snap-start flex-shrink-0 w-[160px] active:scale-[0.97] transition-transform">
                  <Link href={loc.href} className="bg-white/90 backdrop-blur-xl min-h-[10rem] flex flex-col items-center justify-center rounded-2xl shadow-lg border border-white/60 transition-all group p-4 text-center h-full">
                    <span className="font-bold font-headline text-lg mb-1 text-zinc-800">{loc.name}</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">{loc.tag}</span>
                    <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-zinc-500 mt-2 uppercase tracking-widest font-semibold">Swipe to see all areas →</p>
          </div>

          {/* Desktop: Grid */}
          <StaggerContainer className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-5">
            {locations.map((loc) => (
              <StaggerItem key={loc.name} className="h-full">
                <div className="h-full hover:-translate-y-1 hover:scale-[1.03] transition-transform">
                  <Link href={loc.href} className="bg-white/90 backdrop-blur-xl min-h-[14rem] flex flex-col items-center justify-center rounded-3xl shadow-lg border border-white/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group p-6 text-center h-full">
                    <span className="font-bold font-headline text-2xl mb-2 text-zinc-800 group-hover:text-blue-600 transition-colors">{loc.name}</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest mb-4">{loc.tag}</span>
                    <span className="text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      View Area Guide <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Compact coverage map */}
          <div className="mt-8 md:mt-12 bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-white/60">
            <div className="h-[200px] md:h-[280px]">
              <CoverageAreaMap center={[50.8290, -4.5447]} radiusMiles={25} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. FAQ ACCORDION ─── */}
      <section className="py-12 md:py-24 mesh-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600 mb-2 md:mb-3 block font-headline">Common Questions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-zinc-900 mb-3 md:mb-4">Before You Book</h2>
            <p className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto">
              Honest answers to the things people always want to know before getting render work done.
            </p>
          </div>

          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} title={faq.question} defaultOpen={i === 0}>
                <p className="text-sm md:text-base">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── 8. FINAL CTA & QUOTE CALCULATOR ─── */}
      <section className="mesh-bg py-12 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-zinc-900/0 to-zinc-900/0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-headline text-zinc-900 tracking-tight leading-[1.1] mb-4 md:mb-6">
              Get a free quote from Ben
            </h2>
            <p className="text-base md:text-xl text-zinc-500 max-w-2xl mx-auto">
              Fill in a few details and Ben will get back to you — usually same day.
            </p>
          </div>
          
          <QuoteCalculator />
          
          <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12 text-zinc-500 font-bold uppercase tracking-widest text-xs md:text-sm font-headline">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" /> 
              <span>07761 735022</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" /> 
              <span>b.rplasteringsw@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
          }),
        }}
      />
    </div>
  );
}
