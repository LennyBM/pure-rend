import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Does Rendering Cost in Cornwall? (2026 Prices) | PureRend",
  description: "Guide prices for silicone render, monocouche, EWI and internal plastering in Cornwall. Typical costs per m², what affects price, and why the cheapest quote isn't always best.",
  alternates: { canonical: "https://purerend.co.uk/blog/rendering-cost-cornwall" },
  openGraph: {
    title: "How Much Does Rendering Cost in Cornwall? (2026 Prices)",
    description: "Guide prices for rendering and plastering in Cornwall, from Ben Rod at PureRend in Bude.",
    url: "https://purerend.co.uk/blog/rendering-cost-cornwall",
    type: "article",
  },
};

export default function RenderingCostArticle() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-zinc-600">Rendering Cost Cornwall</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Costs &amp; Pricing
          </span>
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-zinc-900 leading-tight mb-6">
            How Much Does Rendering Cost in Cornwall? (2026 Prices)
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            One of the most common questions I get asked. I&apos;ll give you honest guide prices and explain what pushes costs up or down — but I&apos;ll also be straight with you: every job is different, and there&apos;s no substitute for a proper site visit.
          </p>
        </div>

        <div className="prose prose-zinc max-w-none">

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">Quick Price Guide (per m²)</h2>

          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-100 border-b border-zinc-200">
                  <th className="text-left p-4 font-headline font-bold text-zinc-900">System</th>
                  <th className="text-left p-4 font-headline font-bold text-zinc-900">Typical Range (per m²)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Sand & cement render (base coat)", "£30 – £50"],
                  ["Monocouche (through-coloured, one-coat)", "£45 – £65"],
                  ["Silicone render (e.g. EcoRend, K-Rend)", "£55 – £80"],
                  ["External Wall Insulation + render", "£80 – £120"],
                  ["Internal plastering/skimming (per m²)", "£15 – £25"],
                  ["Internal plastering (per room, guide)", "£300 – £500"],
                ].map(([system, price], i) => (
                  <tr key={i} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                    <td className="p-4 text-zinc-700">{system}</td>
                    <td className="p-4 font-bold text-zinc-900">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl mb-8">
            <p className="text-amber-900 text-sm font-semibold">
              These are guide prices only. Your actual cost will depend on the factors below. Always get a proper quote after a site visit — anyone quoting without seeing the job is guessing.
            </p>
          </div>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">What Affects the Cost?</h2>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">Scaffolding and access</h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            This is the one that catches people out. Scaffolding is a significant cost that&apos;s separate from the render itself — on a typical semi-detached or detached house, scaffolding alone can be £800–£2,000 depending on height and access. I always quote scaffolding upfront so there are no surprises.
          </p>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">Condition of the existing substrate</h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            If the existing render is sound, I can work on or around it. If it&apos;s blown, cracked, or has failed in sections, it needs to come off first — and hacking off old render adds labour time. I always check this during the site visit and price it in.
          </p>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">Coastal location</h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Properties close to the coast — Bude seafront, Widemouth Bay, clifftop locations — often need a more robust system. Silicone render handles salt-laden air and driving rain far better than standard cement. It costs a bit more upfront but lasts significantly longer in coastal conditions. It&apos;s usually the right call.
          </p>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">Property size and complexity</h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            A simple box-shaped bungalow is straightforward. A Victorian terrace with bay windows, decorative cornices, and complex reveals takes considerably longer. Intricate detailing costs more because it takes more time to get right.
          </p>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">The render system you choose</h3>
          <p className="text-zinc-600 leading-relaxed mb-4">
            <Link href="/services/silicone-rendering" className="text-blue-600 hover:underline font-medium">Silicone render</Link> costs more than <Link href="/services/monocouche" className="text-blue-600 hover:underline font-medium">monocouche</Link>, which costs more than plain sand and cement. For exposed coastal properties in Cornwall, I usually recommend silicone — it pays for itself over time in reduced maintenance.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">Why the Cheapest Quote Isn&apos;t Always Best Value</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            I see the results of cheap render jobs regularly. The tell-tale signs: patches failing within 2–3 years, algae returning quickly, cracks appearing where movement hasn&apos;t been allowed for, corners and reveals that aren&apos;t properly finished. These jobs always looked cheap on paper. They weren&apos;t.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            A proper render job — good product, proper substrate prep, reinforcement mesh around openings, clean site protection — should last 20+ years with minimal maintenance. A poor one might need attention within 5. The maths aren&apos;t complicated.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            This doesn&apos;t mean you should pay over the odds either. But three quotes that vary wildly should prompt a question: what&apos;s the cheapest one cutting out?
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">How I Price Jobs</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            I work on a day rate plus materials. No markup mystery, no hidden fees. When I quote a job, I tell you what it will cost for labour and I give you the cost of materials separately — including which products I&apos;ll be using and why. You know exactly what you&apos;re paying for.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            I also give a 10-year workmanship guarantee on all my work. If something fails because of how I applied it, I&apos;ll fix it.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 md:p-8 mt-10">
            <h3 className="text-xl font-headline font-bold text-zinc-900 mb-3">Want an actual price for your job?</h3>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              I cover Bude, North Cornwall, and North Devon. Come and take a look at the job — no charge, no obligation. I&apos;ll give you a straight quote within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+447761735022" className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 px-6 py-3 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" /> 07761 735022
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-100">
            <h3 className="text-base font-headline font-bold text-zinc-900 mb-4">You might also find useful</h3>
            <div className="space-y-3">
              {[
                { slug: "silicone-render-vs-monocouche", title: "Silicone render vs monocouche — which is right for your house?" },
                { slug: "planning-permission-rendering", title: "Do I need planning permission to render my house?" },
                { slug: "render-over-pebbledash", title: "Can you render over pebbledash? (And should you?)" },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="flex items-center gap-3 group bg-zinc-50 border border-zinc-200 rounded-xl px-5 py-3.5 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <span className="text-sm text-zinc-700 group-hover:text-blue-600 transition-colors flex-1 leading-snug">{article.title}</span>
                  <span className="text-zinc-400 group-hover:text-blue-600 transition-colors shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>

          <p className="text-xs text-zinc-400 mt-8 italic">
            Written by Ben Rod, PureRend — plastering and rendering specialist in Bude, Cornwall.
          </p>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Much Does Rendering Cost in Cornwall? (2026 Prices)",
            "author": { "@type": "Person", "name": "Ben Rod" },
            "datePublished": "2026-01-01",
            "description": "Guide prices for silicone render, monocouche, EWI and internal plastering in Cornwall. Typical costs per m², what affects price, and why the cheapest quote isn't always best.",
            "publisher": { "@type": "Organization", "name": "PureRend", "url": "https://purerend.co.uk" },
            "url": "https://purerend.co.uk/blog/rendering-cost-cornwall"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does rendering cost in Cornwall?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Guide prices for external rendering in Cornwall: sand and cement base coat £30–£50/m², monocouche one-coat system £45–£65/m², silicone render £55–£80/m², external wall insulation with render £80–£120/m². Internal plastering typically £15–£25/m² or £300–£500 per room. Actual costs depend on scaffolding requirements, substrate condition, property size, and access."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cheapest type of render?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sand and cement render has the lowest upfront cost at around £30–£50/m². However, it requires painting and is less flexible than modern polymer-based systems. For coastal properties in Cornwall, silicone render (£55–£80/m²) is usually better value over the long term as it lasts significantly longer without maintenance."
                }
              },
              {
                "@type": "Question",
                "name": "Does scaffolding cost extra for rendering?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, scaffolding is a separate cost from the rendering work itself. On a typical house in Cornwall, scaffolding typically costs £800–£2,000 depending on the height and complexity of access required. Always get this quoted upfront."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://purerend.co.uk" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://purerend.co.uk/blog" },
              { "@type": "ListItem", "position": 3, "name": "How Much Does Rendering Cost in Cornwall?", "item": "https://purerend.co.uk/blog/rendering-cost-cornwall" }
            ]
          })
        }}
      />
    </div>
  );
}
