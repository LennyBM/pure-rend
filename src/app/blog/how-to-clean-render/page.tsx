import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, AlertTriangle, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Clean Render Without Damaging It | PureRend",
  description: "The most important thing homeowners need to know: never pressure wash modern render. Learn why, and what actually works to clean algae and moss off rendered walls.",
  alternates: { canonical: "https://purerend.co.uk/blog/how-to-clean-render" },
  openGraph: {
    title: "How to Clean Render Without Damaging It",
    description: "Why you must never pressure wash render — and what soft-washing actually does. Advice from Ben Rod at PureRend in Bude.",
    url: "https://purerend.co.uk/blog/how-to-clean-render",
    type: "article",
  },
};

export default function CleanRenderArticle() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 md:px-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-zinc-600">How to Clean Render</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Aftercare
          </span>
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-zinc-900 leading-tight mb-6">
            How to Clean Render Without Damaging It
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Living on the North Cornwall coast, I see algae-covered render regularly. The temptation is to hit it with a pressure washer. Don&apos;t. It&apos;s the single most damaging thing you can do to modern rendered walls. Here&apos;s what works instead.
          </p>
        </div>

        <div className="prose prose-zinc max-w-none">

          {/* Big warning */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
            <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-xs mb-3">
              <AlertTriangle className="w-4 h-4" /> Critical Warning
            </div>
            <h2 className="text-xl font-headline font-bold text-red-900 mb-3">Never Pressure Wash Your Render</h2>
            <p className="text-red-800 leading-relaxed">
              High-pressure water strips the microscopic hydrophobic layer off the surface of silicone and monocouche renders. This destroys the self-cleaning properties, voids most manufacturer warranties, and leaves the surface porous — meaning algae and moss come back significantly faster the following year.
            </p>
          </div>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">Why Algae Appears (and Why It&apos;s Normal)</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            In Cornwall&apos;s climate — damp, mild, relatively little direct sun on north-facing walls — algae, moss, and lichen will eventually settle on almost any rendered surface. This doesn&apos;t mean something has gone wrong with the render.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Modern silicone renders have self-cleaning properties that slow this process down considerably compared to older cement renders — the hydrophobic surface makes it harder for biological growth to get a foothold. But on the wrong aspect (north-facing, in shade, near trees), even the best render will need cleaning eventually.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            The question isn&apos;t whether algae will appear. It&apos;s how you deal with it when it does.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">What Actually Works: Soft-Washing</h2>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 mb-8">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs mb-3">
              <Droplets className="w-4 h-4" /> The Right Approach
            </div>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Soft-washing</strong> means applying a diluted biocide or fungicide solution at very low pressure — roughly the same pressure as a garden hose. The chemicals do the work, not the water pressure. They kill the algae, moss, and lichen at the root level.
            </p>
          </div>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Here&apos;s what happens: the biocide is applied to the whole surface. The biological growth dies over the following few days. Rain then naturally washes the dead material off, leaving the render surface completely clean and — crucially — undamaged. The hydrophobic properties of the render remain intact.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            This is the <em>only</em> correct way to clean modern render. Anything involving high pressure — whether a pressure washer or a power washer &ldquo;on a low setting&rdquo; — risks damaging the surface.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">How Often Does Render Need Cleaning?</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            In Cornwall, I&apos;d typically say every <strong>3 to 5 years</strong> is a sensible interval for a soft-wash, depending on:
          </p>

          <ul className="space-y-2 text-zinc-600 mb-6 list-none">
            {[
              "Aspect — north-facing walls in shade are worst affected",
              "Proximity to trees — organic debris and shade accelerate growth",
              "Coastal proximity — salt-laden air can encourage certain types of biological growth",
              "The render system — higher-quality silicone renders slow growth more than basic systems",
            ].map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">Can I Do It Myself?</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            For single-storey walls with light algae growth: yes. You can buy biocide solutions at most builders&apos; merchants or online. Dilute according to the instructions, apply with a garden pressure sprayer at low pressure, and leave it to do its work. Don&apos;t rinse it off — let rain do that naturally over the next few weeks.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            For heavy infestations, multi-storey properties, or anywhere that requires working at height: get it done professionally. The risk of damage from an incorrect application — or an accidental high-pressure blast — isn&apos;t worth the saving.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            I offer <Link href="/services/soft-wash-aftercare" className="text-blue-600 hover:underline font-medium">soft-wash aftercare as a service</Link> — it&apos;s something I can combine with a maintenance visit if you want someone to check the condition of the render at the same time.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">What About the Render Manufacturer&apos;s Warranty?</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Most render manufacturer warranties — including EcoRend, K-Rend, and Weber — explicitly exclude damage caused by pressure washing. If you pressure wash a rendered surface and something fails as a result, the manufacturer warranty is gone. My workmanship guarantee has the same caveat.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            This isn&apos;t small print buried in a document — it&apos;s standard across the industry. Pressure washing and modern render systems do not mix.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 md:p-8 mt-10">
            <h3 className="text-xl font-headline font-bold text-zinc-900 mb-3">Need your render cleaned properly?</h3>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              I offer soft-wash aftercare across Bude and North Cornwall. Get in touch and I&apos;ll let you know if it&apos;s something I can help with.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
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
                { slug: "render-over-pebbledash", title: "Can you render over pebbledash? (And should you?)" },
                { slug: "planning-permission-rendering", title: "Do I need planning permission to render my house?" },
                { slug: "rendering-cost-cornwall", title: "How much does rendering cost in Cornwall? (2026 prices)" },
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
            "headline": "How to Clean Render Without Damaging It",
            "author": { "@type": "Person", "name": "Ben Rod" },
            "datePublished": "2026-01-01",
            "description": "The most important thing homeowners need to know: never pressure wash modern render. Learn why, and what actually works to clean algae and moss off rendered walls.",
            "publisher": { "@type": "Organization", "name": "PureRend", "url": "https://purerend.co.uk" },
            "url": "https://purerend.co.uk/blog/how-to-clean-render"
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
                "name": "Can you pressure wash render?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Pressure washing modern silicone or monocouche render destroys the hydrophobic surface layer, voids manufacturer warranties, and leaves the surface porous — meaning algae returns faster. Always use soft-washing (low-pressure biocide application) instead."
                }
              },
              {
                "@type": "Question",
                "name": "How do you remove algae from render?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use soft-washing: apply a diluted biocide solution at very low pressure. The chemical kills the algae at the root. Rain then naturally washes the dead material away over the following days. Never use a pressure washer on rendered surfaces."
                }
              },
              {
                "@type": "Question",
                "name": "How often should render be cleaned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Cornwall's climate, typically every 3 to 5 years depending on aspect, proximity to trees, and the render system used. North-facing walls in shade will need cleaning more frequently than south-facing walls in direct sun."
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
              { "@type": "ListItem", "position": 3, "name": "How to Clean Render Without Damaging It", "item": "https://purerend.co.uk/blog/how-to-clean-render" }
            ]
          })
        }}
      />
    </div>
  );
}
