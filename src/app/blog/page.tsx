import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rendering & Plastering Advice | PureRend Blog — Bude, Cornwall",
  description: "Practical advice on rendering and plastering from Ben Rod, based in Bude. Costs, materials, planning permission, aftercare and more.",
  alternates: { canonical: "https://purerend.co.uk/blog" },
};

const articles = [
  {
    slug: "rendering-cost-cornwall",
    title: "How Much Does Rendering Cost in Cornwall? (2026 Prices)",
    description: "Ballpark prices for silicone render, monocouche, EWI and internal plastering — plus the factors that push costs up or down.",
    date: "2026",
    readTime: "5 min read",
  },
  {
    slug: "silicone-render-vs-monocouche",
    title: "Silicone Render vs Monocouche: Which Is Right for Your House?",
    description: "Plain English breakdown of the two most common render systems — when to use each, and what products Ben uses.",
    date: "2026",
    readTime: "4 min read",
  },
  {
    slug: "render-over-pebbledash",
    title: "Can You Render Over Pebbledash? (And Should You?)",
    description: "The honest answer: it depends on the condition. Here's how to tell, and what the process involves.",
    date: "2026",
    readTime: "4 min read",
  },
  {
    slug: "how-to-clean-render",
    title: "How to Clean Render Without Damaging It",
    description: "The most important thing homeowners need to know: never pressure wash modern render. Here's what actually works.",
    date: "2026",
    readTime: "4 min read",
  },
  {
    slug: "planning-permission-rendering",
    title: "Do I Need Planning Permission to Render My House?",
    description: "Usually no — but there are important exceptions for listed buildings, conservation areas, and EWI.",
    date: "2026",
    readTime: "5 min read",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6 md:px-12 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide mb-6">
          Advice & Guides
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-zinc-900 mb-6">
          Rendering &amp; Plastering Guides
        </h1>
        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
          Practical answers to the questions homeowners ask before hiring a plasterer. Written by Ben Rod, based in Bude.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white border border-zinc-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-headline font-bold text-zinc-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
                {article.title}
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-4">{article.description}</p>
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 mt-16 bg-zinc-900 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-headline font-bold text-white mb-3">Got a question not covered here?</h2>
        <p className="text-zinc-400 mb-6">Call Ben or drop him a message — he&apos;s happy to give straight answers.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-colors"
        >
          Get in touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
