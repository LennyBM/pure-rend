import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Can You Render Over Pebbledash? (And Should You?) | PureRend",
  description: "Honest answer: it depends on the condition of the existing pebbledash. Learn when you can render over it, when it needs to come off, and what the process involves.",
  alternates: { canonical: "https://purerend.co.uk/blog/render-over-pebbledash" },
  openGraph: {
    title: "Can You Render Over Pebbledash? (And Should You?)",
    description: "The honest answer from Ben Rod at PureRend — when you can render over pebbledash and when it needs to come off first.",
    url: "https://purerend.co.uk/blog/render-over-pebbledash",
    type: "article",
  },
};

export default function PebbledashArticle() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 md:px-12">
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-zinc-600">Rendering Over Pebbledash</span>
        </nav>

        <div className="mb-8">
          <span className="inline-block bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Repairs &amp; Renovation
          </span>
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-zinc-900 leading-tight mb-6">
            Can You Render Over Pebbledash? (And Should You?)
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            I get asked this a lot, particularly on 1960s and 1970s properties across Cornwall and Devon. The short answer is: yes, in most cases — but only if the pebbledash is actually sound. Here&apos;s how to tell.
          </p>
        </div>

        <div className="prose prose-zinc max-w-none">

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">The Short Answer</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            If the pebbledash is solid, well-bonded, and not showing signs of failure, you can apply a <Link href="/services/thin-coat-systems" className="text-blue-600 hover:underline font-medium">thin coat render system</Link> over the top with mesh reinforcement. This is often the most cost-effective approach — it avoids the labour of hacking off the old material and gives a clean, modern finish.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            If the pebbledash is blown (hollow or loose when you tap it), cracked, or failing in patches, it needs to come off first. Rendering over a failing substrate is a waste of money — the new render will fail too, usually within a couple of years.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">How to Tell If Your Pebbledash Is Sound</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            The simplest test: tap it gently with your knuckles or the handle of a screwdriver. Solid pebbledash sounds dead and dense. Blown or failing pebbledash has a hollow, drum-like sound — that tells you it&apos;s delaminated from the wall behind it.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Also look for:
          </p>
          <ul className="space-y-2 text-zinc-600 mb-6 list-none">
            {[
              "Sections that are visibly cracked or separated at the edges",
              "Areas where the stones have fallen away, leaving bare render",
              "Long diagonal cracks running across the facade (often structural movement)",
              "Damp patches inside the house that align with the external wall",
              "Any previous patch repairs — these are a sign the render has had problems",
            ].map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-zinc-400 font-bold mt-0.5 flex-shrink-0">–</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-zinc-600 leading-relaxed mb-4">
            If you have any doubts, I can come and take a look. A quick tap test takes ten minutes and I&apos;ll tell you honestly what I find.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">When You Can Render Over It</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            When the pebbledash is genuinely sound, the process is:
          </p>

          <ol className="space-y-4 text-zinc-600 mb-6 list-none counter-reset-item">
            {[
              { n: "01", title: "Preparation", body: "Clean the surface, treat any biological growth (algae, moss), and address any isolated failed spots. Small blown areas can be cut out, repaired, and keyed back in." },
              { n: "02", title: "Prime", body: "Apply a stabilising primer or bonding agent suitable for over-cladding. This gives the new render something to grip onto and bridges the textured surface." },
              { n: "03", title: "Mesh reinforcement", body: "Apply a base coat render and embed alkali-resistant fibreglass mesh throughout. This is the critical step — it holds the system together and prevents cracking, especially around windows, doors, and corners." },
              { n: "04", title: "Topcoat", body: "Apply the finished render — silicone, monocouche, or thin coat depending on the property and client preference. Coloured through, so no repainting needed." },
            ].map((step) => (
              <li key={step.n} className="flex gap-5 bg-zinc-50 border border-zinc-200 rounded-xl p-5">
                <span className="text-3xl font-black text-blue-600/20 font-headline leading-none flex-shrink-0">{step.n}</span>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">{step.title}</h4>
                  <p className="text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">When It Needs to Come Off</h2>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-6 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm leading-relaxed">
              <strong>Watch out for cowboys who skip this step.</strong> I&apos;ve seen render jobs that were done over completely failed pebbledash — looked fine for 18 months, then started bulging and falling off. Stripping the wall properly before rendering is not optional when the substrate is bad.
            </p>
          </div>

          <p className="text-zinc-600 leading-relaxed mb-4">
            If a significant portion of the pebbledash is blown — say more than 20–30% — it&apos;s usually better to strip the whole lot. Trying to patch and render over a patchwork of good and failed material creates inconsistencies in the final finish and weak points where the new render can delaminate.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Stripping adds labour cost and some disposal cost, but it means you&apos;re starting with a clean, honest substrate and the new render has the best possible base to bond to.
          </p>

          <h2 className="text-2xl font-headline font-bold text-zinc-900 mt-10 mb-5">Why This Comes Up So Much in Cornwall</h2>

          <p className="text-zinc-600 leading-relaxed mb-4">
            Cornwall has a huge stock of 1960s and 1970s housing — estates and individual properties — that were built with pebbledash as standard. After 50-60 years, a lot of that render is reaching the end of its life. The coastal climate doesn&apos;t help: freeze-thaw cycles, salt spray, and persistent damp accelerate the delamination process.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-4">
            The good news is that stripping the old pebbledash and applying a modern render system completely transforms these properties. A fresh <Link href="/services/silicone-rendering" className="text-blue-600 hover:underline font-medium">silicone render</Link> on a well-prepared wall will last decades and look far better than any repainted pebbledash.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mt-10">
            <h3 className="text-xl font-headline font-bold text-zinc-900 mb-3">Not sure about your pebbledash?</h3>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              I can come and have a look — no charge, no obligation. Ten minutes on site and I&apos;ll tell you whether it can be rendered over or needs to come off. I cover Bude, North Cornwall, and North Devon.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors">
                Book a Free Site Visit <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:07469931758" className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 px-6 py-3 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" /> 07469 931 758
              </a>
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can you render over pebbledash?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in most cases — but only if the existing pebbledash is solid and well-bonded. If it's blown or failing, it needs to be stripped first. A thin coat render system with mesh reinforcement can be applied over sound pebbledash."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if my pebbledash needs to come off?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tap it with your knuckles or a screwdriver handle. Solid pebbledash sounds dense. Blown pebbledash has a hollow, drum-like sound, which means it has delaminated from the wall. Also check for visible cracks, fallen stones, and areas where previous repairs have been done."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to render over pebbledash?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rendering over sound pebbledash using a thin coat system typically costs £45–£65/m² for the system itself, plus scaffolding. Stripping old pebbledash first adds labour cost but ensures the best result. Get a quote after a site visit for accurate pricing."
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
              { "@type": "ListItem", "position": 3, "name": "Can You Render Over Pebbledash?", "item": "https://purerend.co.uk/blog/render-over-pebbledash" }
            ]
          })
        }}
      />
    </div>
  );
}
