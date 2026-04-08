import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Do I Need Planning Permission to Render My House? | PureRend",
  description: "Usually no — but there are important exceptions for listed buildings, conservation areas in Cornwall, and EWI systems. What you need to check before starting.",
  alternates: { canonical: "https://purerend.co.uk/blog/planning-permission-rendering" },
  openGraph: {
    title: "Do I Need Planning Permission to Render My House?",
    description: "What you need to know about planning permission for rendering in Cornwall and Devon — from Ben Rod at PureRend.",
    url: "https://purerend.co.uk/blog/planning-permission-rendering",
    type: "article",
  },
};

export default function PlanningPermissionArticle() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 md:px-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-zinc-600">Planning Permission for Rendering</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Planning &amp; Regulations
          </span>
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-zinc-900 leading-tight mb-6">
            Do I Need Planning Permission to Render My House?
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            For most houses, the answer is no — rendering usually falls under Permitted Development. But there are some important exceptions that could get you into serious trouble if you miss them. Here&apos;s what to check.
          </p>
        </div>

        <div className="prose prose-zinc max-w-none">

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 text-green-700 font-bold uppercase tracking-wider text-xs mb-3">
              <CheckCircle className="w-4 h-4" /> The General Rule
            </div>
            <p className="text-green-900 leading-relaxed font-medium">
              Rendering your house is generally considered a change to the exterior material, which typically falls under Permitted Development rights. This means most homeowners don&apos;t need planning permission to render their property.
            </p>
          </div>

          <p className="text-zinc-600 leading-relaxed mb-4">
            That said — &ldquo;generally&rdquo; is doing a lot of work in that sentence. There are several situations where permission is required, and in some of those situations the consequences of getting it wrong are serious.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">When You DO Need Permission</h2>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">Listed Buildings</h3>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-5 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm leading-relaxed">
              <strong>This is a criminal matter.</strong> Rendering a listed building without Listed Building Consent is a criminal offence under the Planning (Listed Buildings and Conservation Areas) Act 1990. It can result in prosecution, fines, and a requirement to reinstate the original appearance at your own cost.
            </p>
          </div>

          <p className="text-zinc-600 leading-relaxed mb-4">
            If your property is listed — Grade I, Grade II*, or Grade II — you need to contact your local planning authority before doing anything to the exterior. For older stone properties in Cornwall, <Link href="/services/heritage-lime-render" className="text-blue-600 hover:underline font-medium">breathable lime render</Link> is almost always the appropriate system if permission is granted, but it must go through the proper process first.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            You can check whether a property is listed on the Historic England National Heritage List for England (historic-england.org.uk).
          </p>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">Conservation Areas</h3>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Cornwall has significant conservation areas — Stratton&apos;s historic core, parts of Launceston, Camelford town centre, and many others. In these areas, changing the external appearance of a building — including adding render to an unrendered property — may require planning permission.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            The rules in conservation areas aren&apos;t just about whether you can render — they can also specify the type and colour of render permitted. Modern through-coloured silicone systems in bright white are sometimes considered out of character with a conservation area&apos;s historic appearance.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            <strong>What to do:</strong> if your property is in a conservation area, contact Cornwall Council&apos;s planning department before starting. Their Conservation Officer can tell you what&apos;s needed and what systems would be considered appropriate.
          </p>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">Article 4 Directions</h3>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Some areas have Article 4 Directions — planning designations that restrict what Permitted Development allows. These effectively require planning permission for things that would normally be exempt. They&apos;re not common on individual residential properties, but they do exist in certain villages and historic areas.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Your local planning authority can tell you whether any Article 4 Direction affects your property.
          </p>

          <h3 className="text-xl font-headline font-bold text-zinc-900 mt-7 mb-3">Flats and Shared Buildings</h3>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Rendering a flat or maisonette — particularly where it affects the external appearance of a shared building — may need planning permission. There may also be leasehold or freeholder consent requirements separate from planning. If in doubt, check with your building&apos;s management company as well as the planning authority.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">What About EWI and Building Regulations?</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            <Link href="/services/external-wall-insulation" className="text-blue-600 hover:underline font-medium">External Wall Insulation (EWI)</Link> is a bit different from standard rendering because it adds thickness to the walls and affects the thermal performance of the building. Depending on the system and the property type, EWI may require Building Regulations approval rather than (or in addition to) planning permission.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Building Regulations approval ensures the system is installed to the correct standard for fire performance and thermal performance. It&apos;s not the same as planning — it&apos;s about technical compliance, not visual impact. For most residential EWI jobs, this involves notifying Building Control and having the work signed off.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">My Practical Advice</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            For most straightforward rendering jobs on standard houses in Cornwall and Devon, no permission is needed. But if any of the following apply, make a quick call to your local planning authority <em>before</em> booking a renderer:
          </p>

          <ul className="space-y-2 text-zinc-600 mb-6 list-none">
            {[
              "Your property is listed",
              "Your property is in a conservation area (check on Cornwall Council's planning map)",
              "Your property has conditions from a previous planning permission",
              "You're rendering a block of flats or a property with shared ownership",
              "You're planning EWI and aren't sure about Building Regs",
            ].map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Cornwall Council planning can be reached on 0300 1234 151. Holsworthy and Bideford properties fall under Torridge District Council (01237 428700). A five-minute call can save a lot of headaches.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 md:p-8 mt-10">
            <h3 className="text-xl font-headline font-bold text-zinc-900 mb-3">Ready to get a quote?</h3>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              Once you&apos;ve confirmed you don&apos;t need permission (or got it), I&apos;m happy to come and take a look. I cover Bude, North Cornwall, and North Devon.
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
                { slug: "rendering-cost-cornwall", title: "How much does rendering cost in Cornwall? (2026 prices)" },
                { slug: "render-over-pebbledash", title: "Can you render over pebbledash? (And should you?)" },
                { slug: "silicone-render-vs-monocouche", title: "Silicone render vs monocouche — which is right for your house?" },
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
            Written by Ben Rod, PureRend — plastering and rendering specialist in Bude, Cornwall. This article is for general guidance only — always verify the rules with your local planning authority.
          </p>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Do I Need Planning Permission to Render My House?",
            "author": { "@type": "Person", "name": "Ben Rod" },
            "datePublished": "2026-01-01",
            "description": "Usually no — but there are important exceptions for listed buildings, conservation areas in Cornwall, and EWI systems. What you need to check before starting.",
            "publisher": { "@type": "Organization", "name": "PureRend", "url": "https://purerend.co.uk" },
            "url": "https://purerend.co.uk/blog/planning-permission-rendering"
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
                "name": "Do I need planning permission to render my house in Cornwall?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually no — rendering a standard house typically falls under Permitted Development rights and doesn't require planning permission. However, listed buildings require Listed Building Consent, and properties in conservation areas may need permission. Always check with Cornwall Council planning department if in doubt."
                }
              },
              {
                "@type": "Question",
                "name": "Can I render a listed building?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rendering a listed building without Listed Building Consent is a criminal offence. You must contact your local planning authority and obtain consent first. Breathable lime render is usually the appropriate system for listed buildings where consent is granted."
                }
              },
              {
                "@type": "Question",
                "name": "Does EWI need Building Regulations approval?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, External Wall Insulation typically requires Building Regulations approval in addition to any planning requirements. This ensures the system meets requirements for thermal performance and fire safety. Building Control should be notified before work begins."
                }
              },
              {
                "@type": "Question",
                "name": "Do conservation areas affect rendering in Cornwall?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. In conservation areas, changing the external appearance of your property — including rendering — may require planning permission. The type and colour of render may also be restricted to maintain the character of the area. Check with Cornwall Council planning before starting work."
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
              { "@type": "ListItem", "position": 3, "name": "Do I Need Planning Permission to Render My House?", "item": "https://purerend.co.uk/blog/planning-permission-rendering" }
            ]
          })
        }}
      />
    </div>
  );
}
