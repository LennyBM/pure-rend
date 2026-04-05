import Link from "next/link";
import { ArrowLeft, ArrowRight, Waves, Thermometer, Hammer, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Widemouth Bay Case Study | PureRend Bude",
  description: "A masterclass in coastal protection. Discover how PureRend engineered a weather-defying finish for this exposed Atlantic property.",
};

const CHALLENGES = [
  {
    title: "Extreme Salt-Air Exposure",
    description: "Positioned less than 100 meters from the Atlantic crash line, the property suffered from accelerated salt-induced degradation.",
    icon: Waves,
  },
  {
    title: "Thermal Bridging",
    description: "The legacy blockwork provided marginal insulation, leading to persistent internal condensation issues during winter squalls.",
    icon: Thermometer,
  },
  {
    title: "Failing Substrate",
    description: "The original sand-and-cement render exhibited extensive micro-cracking, allowing wind-driven rain to penetrate the structural envelope.",
    icon: Hammer,
  },
];

const IMPLEMENTATION_STEPS = [
  {
    phase: "Phase 1: Eradication & Prep",
    description: "Complete removal of the failing sand-and-cement render. The underlying blockwork was stabilised and treated with a commercial-grade fungicidal wash to eliminate deeply rooted organic growth.",
  },
  {
    phase: "Phase 2: EWI Integration",
    description: "Installation of high-density EPS insulation boards, both adhesively applied and mechanically fixed to ensure absolute structural rigidity against extreme coastal wind loads.",
  },
  {
    phase: "Phase 3: Mesh Reinforcement",
    description: "Application of a specialised high-polymer base coat incorporating an alkali-resistant fibreglass armour mesh to dissipate structural movement and prevent future cracking.",
  },
  {
    phase: "Phase 4: The Silicone Shield",
    description: "A precision application of a 1.5mm through-colour silicone topcoat, providing a heavily hydrophobic, breathable, and visually flawless architectural finish.",
  },
];

export default function WidemouthBayCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-zinc-50 pt-24 md:pt-32">
      {/* Back Button */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <Link 
          href="/#portfolio" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-500 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-800/50 text-blue-500 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            Project Archive
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-light tracking-tight text-zinc-900 leading-[1.1]">
            Widemouth Bay: <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
              A Masterclass in Coastal Protection
            </span>
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl font-light">
            Defending residential architecture against the relentless force of the Atlantic Ocean requires more than just plastering. It requires material science.
          </p>
        </div>
      </section>

      {/* The Architectural Challenge */}
      <section className="bg-blue-50 border-y border-blue-100 py-24">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-outfit font-light text-zinc-900 mb-6">
                The Context & Challenge
              </h2>
              <p className="text-zinc-500 leading-relaxed text-lg mb-8">
                The property's location directly facing Widemouth Bay meant it took the full force of Atlantic weather fronts. The brief was simple: stop the water ingress, improve the thermal efficiency, and deliver a pristine, modern aesthetic that won't degrade in the salt air.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-blue-100">
                <div className="text-sm text-zinc-500 mb-1">Location</div>
                <div className="text-zinc-900 font-medium font-outfit mb-4 text-lg">Widemouth Bay, Bude</div>
                <div className="text-sm text-zinc-500 mb-1">System Installed</div>
                <div className="text-blue-500 font-medium font-outfit mb-4 text-lg">EWI + Silicone Finish</div>
                <div className="text-sm text-zinc-500 mb-1">Duration</div>
                <div className="text-zinc-900 font-medium font-outfit text-lg">14 Days</div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-6">
                {CHALLENGES.map((challenge, idx) => {
                  const Icon = challenge.icon;
                  return (
                    <div key={idx} className="bg-white p-4 md:p-8 rounded-2xl border border-blue-100/50">
                      <div className="w-10 h-10 rounded-full bg-teal-900/20 flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-outfit font-medium text-zinc-900 mb-3">
                        {challenge.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed text-sm">
                        {challenge.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Solution */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-4xl md:text-6xl font-outfit font-light text-zinc-900 mb-6">
            The Material Science <span className="text-blue-500 font-medium">Solution</span>
          </h2>
          <p className="text-zinc-500 text-lg">
            Engineering a permanent solution through a rigorous, multi-stage application protocol using crack-bridging, vapour-permeable polymers.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {IMPLEMENTATION_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-blue-50/50 border border-blue-100/50 p-4 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:border-teal-900/50 transition-colors"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-blue-100 text-blue-500 font-outfit font-bold text-xl">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-2xl font-medium text-zinc-900 mb-3 font-outfit">
                  {step.phase}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Flawless Result */}
      <section className="py-24 bg-white border-t border-zinc-900 border-b">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="bg-teal-900/10 border border-teal-800/30 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-outfit font-light text-zinc-900 mb-6">
              The Flawless <span className="text-blue-500 font-medium">Result</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-8 uppercase tracking-widest text-xs font-bold text-blue-600 font-headline">
              <span className="bg-white px-4 py-2 rounded-full border border-teal-800/50">Delivered on Time</span>
              <span className="bg-white px-4 py-2 rounded-full border border-teal-800/50">100% Dust-Free Cleanup</span>
              <span className="bg-white px-4 py-2 rounded-full border border-teal-800/50">10-Year Warranty</span>
            </div>
            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
              Within 14 days, the property was completely transformed from a deteriorating, energy-inefficient liability into a stunning architectural focal point. The application of the hydrophobic silicone system guarantees that the façade will actively repel aerosolized chloride ions and heavy rainfall, maintaining its vibrant, crisp white finish for decades to come, while dramatically lowering winter heating bills.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 border-t border-blue-100 bg-blue-50/20">
        <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-100 rounded-3xl p-4 md:p-8 md:p-16 text-center shadow-2xl shadow-zinc-900/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-zinc-900 to-zinc-900 opacity-50" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-outfit font-light text-zinc-900">
              Start your project with Ben Rod
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              If your property is exposed to severe weather or suffering from a failing render system, you need a highly engineered solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-500 text-zinc-900 px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors duration-300"
              >
                Get a Precision Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
