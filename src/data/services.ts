import type { LucideIcon } from 'lucide-react';
import { Shield, Wind, Thermometer, Palette, Clock, Home, TrendingUp, Sparkles, Brush, Maximize, Droplets, Wrench, Settings, HeartPulse } from 'lucide-react';

export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  longDescription: React.ReactNode | string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  benefits: { title: string; description: string; icon: LucideIcon }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  pricing?: string;
  relatedBlogs?: { slug: string; title: string }[];
  serviceLocations?: { slug: string; name: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "monocouche",
    name: "Monocouche Rendering",
    title: "Monocouche Rendering Cornwall & Devon | K Rend Specialists | PureRend",
    metaDescription: "Through-coloured monocouche rendering across Cornwall. Fast application, scratch finish, low maintenance. Free quotes from Bude's leading specialists.",
    h1: "Monocouche & K Rend Systems",
    shortDescription: "Beautiful, through-coloured architectural finishes offering decades of flawless performance.",
    heroImage: "/images/monocouche_after.png",
    beforeImage: "/images/monocouche_before.png",
    afterImage: "/images/monocouche_after.png",
    longDescription: "Monocouche (literally meaning 'one coat' in French) represents a revolution in external wall coatings. Rather than applying traditional sand and cement followed by layers of masonry paint, monocouche is a through-coloured, cement-based render. Applied directly to blockwork or prepared masonry, it cures into a rock-solid, weather-resistant shield. We specialise in K Rend and Weber systems, expertly scraping the surface at the precise point of curing to expose a beautiful, uniform, pitted texture that never requires painting.",
    benefits: [
      { title: "Through-Coloured Depth", description: "Pigment is mixed throughout the render, meaning minor chips and scratches remain virtually invisible.", icon: Palette },
      { title: "Zero Painting", description: "Eradicate the costly necessity of repetitive exterior painting circuits.", icon: Brush },
      { title: "Rapid Weatherproofing", description: "Faster application times compared to multi-coat systems mean your property is sealed quicker.", icon: Clock }
    ],
    process: [
      { title: "01. Substrate Calibration", description: "Assessing wall suction and repairing structural defects." },
      { title: "02. First Pass", description: "Applying the initial thickness and embedding alkaline-resistant reinforcement mesh." },
      { title: "03. Second Pass", description: "Laying on the final depth of the through-coloured material." },
      { title: "04. Precision Scraping", description: "Using specialised nail floats to scrape the surface exactly as it cures for the final texture." }
    ],
    faqs: [
      { question: "How long does monocouche last?", answer: "When applied correctly to a stable substrate, it will easily perform for 25+ years." },
      { question: "Can it be applied over painted bricks?", answer: "No, paint must be removed or a specialised mechanical fixing mesh and basecoat system must be installed first." },
      { question: "What is the difference between this and silicone?", answer: "Monocouche is a thicker, cement-based rigid render with a scraped finish. Silicone is a thinner, flexible, highly water-repellent topcoat." }
    ],
    pricing: "Monocouche rendering usually costs £45–£65 per m² applied. It's often slightly less than silicone because it's a one-coat system. For a full house, expect somewhere in the range of £3,500–£6,000 depending on size and access.",
    relatedBlogs: [
      { slug: "silicone-render-vs-monocouche", title: "Silicone render vs monocouche — which is right for your house?" },
      { slug: "rendering-cost-cornwall", title: "How much does rendering cost in Cornwall? (2026 prices)" },
    ],
    serviceLocations: [
      { slug: "bude", name: "Bude" },
      { slug: "holsworthy", name: "Holsworthy" },
      { slug: "barnstaple", name: "Barnstaple" },
    ],
  },
  {
    slug: "silicone-rendering",
    name: "Silicone Renders",
    title: "Silicone Rendering Cornwall | Weatherproof Finishes | PureRend",
    metaDescription: "Defy Atlantic storms with advanced silicone rendering. Hydrophobic, flexible, and crack-resistant finishes for coastal properties.",
    h1: "Silicone Rendering",
    shortDescription: "Hydrophobic, highly flexible rendering engineered specifically to combat high-velocity wind-driven rain and severe coastal weathering.",
    heroImage: "/images/silicone_after.png",
    beforeImage: "/images/silicone_before.png",
    afterImage: "/images/silicone_after.png",
    longDescription: "For coastal properties across Bude and North Cornwall exposed to relentless aerosolised chloride ions and salt spray, standard cement rendering inevitably fails due to subflorescence and crystallisation pressure (salt blowouts). Our advanced silicone systems use a Polydimethylsiloxane (PDMS) backbone with strong siloxane bonds, creating an ultra-flexible, hydrophobic barrier with crack-bridging capability. Water exhibits the 'Lotus Effect' — beading up and rolling off the surface, taking dirt and biological spores with it. Crucially, the system maintains high vapour permeability (optimal Sd value) to allow trapped moisture to escape while blocking wind-driven rain.",
    benefits: [
      { title: "Self-Cleaning Technology", description: "Hydrophobic properties mean rainwater washes away surface dirt naturally.", icon: Sparkles },
      { title: "Extreme Flexibility", description: "Polymer-modified basecoats and silicone resins absorb thermal expansion to prevent cracking.", icon: Maximize },
      { title: "Ultimate Weatherproofing", description: "The definitive solution for properties exposed to aggressive coastal salt and wind.", icon: Shield }
    ],
    process: [
      { title: "01. Surface Prep", description: "Cleaning, stabilising, and applying fungicidal washes if organic growth is present." },
      { title: "02. Basecoat & Mesh", description: "Applying a flexible polymer basecoat fully enveloped in fibreglass reinforcement mesh." },
      { title: "03. Primer Application", description: "Rolling on a colour-matched silicone primer to regulate suction and ensure bonding." },
      { title: "04. Silicone Finish", description: "Troweling on the silicone topcoat and floating it to a flawless 1.5mm textured finish." }
    ],
    faqs: [
      { question: "Is silicone rendering waterproof?", answer: "It is highly water-repellent (hydrophobic) rather than totally waterproof, which is crucial because it must remain breathable." },
      { question: "Will the colour fade?", answer: "High-quality silicone renders use UV-stable pigments that resist fading significantly better than standard masonry paint." },
      { question: "Can it be applied in the rain?", answer: "No. Silicone cannot be applied in wet conditions or when temperatures approach freezing. We strictly monitor weather windows." }
    ],
    pricing: "Silicone render systems typically cost between £55–£80 per m² applied, depending on the property, access, and substrate condition. A typical 3-bed semi might be £4,000–£7,000 for a full re-render. Every job is different — get in touch for an accurate quote.",
    relatedBlogs: [
      { slug: "silicone-render-vs-monocouche", title: "Silicone render vs monocouche — which is right for your house?" },
      { slug: "how-to-clean-render", title: "How to clean render without damaging it" },
    ],
    serviceLocations: [
      { slug: "bude", name: "Bude" },
      { slug: "widemouth-bay", name: "Widemouth Bay" },
      { slug: "bideford", name: "Bideford" },
    ],
  },
  {
    slug: "external-wall-insulation",
    name: "External Wall Insulation (EWI)",
    title: "External Wall Insulation Cornwall | EWI Specialists | PureRend",
    metaDescription: "Drastically reduce heating bills with External Wall Insulation (EWI) in Cornwall. Expert installation finished with premium silicone render.",
    h1: "External Wall Insulation (EWI)",
    shortDescription: "Transform your home's thermal efficiency by wrapping it in an engineered thermal blanket.",
    heroImage: "/images/insulation_after.png",
    beforeImage: "/images/insulation_before.png",
    afterImage: "/images/insulation_after.png",
    longDescription: "Uninsulated solid walls are responsible for up to 45% of a property's heat loss. Our External Wall Insulation (EWI) systems involve mechanically and adhesively fixing high-performance expanded polystyrene (EPS) or mineral wool insulation boards directly to your exterior walls. We then encapsulate the insulation in a reinforced basecoat and finish it with a decorative silicone render. The result is a dramatically warmer home, eradicated condensation, and a completely modernised exterior.",
    benefits: [
      { title: "Slash Heating Bills", description: "Significantly reduces heat transmission, keeping energy costs down permanently.", icon: TrendingUp },
      { title: "Eradicate Condensation", description: "Shifting the dew point outside the masonry prevents internal mould and dampness.", icon: Droplets },
      { title: "Aesthetic Transformation", description: "Combines high-tech insulation with a flawless, modern architectural finish.", icon: Home }
    ],
    process: [
      { title: "01. Board Installation", description: "Adhesively and mechanically fixing insulation boards (EPS or Mineral Wool) to the masonry." },
      { title: "02. Raspage & Levelling", description: "Rasping the EPS boards to ensure an entirely flush, perfectly level surface." },
      { title: "03. Basecoat & Mesh", description: "Encapsulating the boards in a polymer basecoat and high-tensile fibreglass mesh." },
      { title: "04. Silicone Topcoat", description: "Finishing the system with a highly breathable, hydrophobic silicone render." }
    ],
    faqs: [
      { question: "Do I need planning permission for EWI?", answer: "Often it falls under permitted development, but if it significantly changes the property's appearance or extends beyond existing rooflines, you may need to check with the local authority." },
      { question: "How thick are the insulation boards?", answer: "Typically 90mm to 100mm to meet current building regulations, plus the render system thickness." },
      { question: "Will it stop internal damp?", answer: "It completely cures penetrating damp and condensation issues by bringing the thermal mass inside the insulated envelope." }
    ],
    pricing: "EWI systems are a bigger investment — typically £80–£120 per m² including insulation board and render topcoat. A full house can be £8,000–£15,000+, but the energy savings mean most homeowners see the investment pay back over 5–10 years.",
    relatedBlogs: [
      { slug: "rendering-cost-cornwall", title: "How much does rendering cost in Cornwall? (2026 prices)" },
      { slug: "planning-permission-rendering", title: "Do I need planning permission to render my house?" },
    ],
    serviceLocations: [
      { slug: "bude", name: "Bude" },
      { slug: "bideford", name: "Bideford" },
      { slug: "barnstaple", name: "Barnstaple" },
    ],
  },
  {
    slug: "thin-coat-systems",
    name: "Thin Coat Systems",
    title: "Thin Coat Rendering Systems | Cornwall & Devon | PureRend",
    metaDescription: "Flexible thin coat rendering for modern construction and timber frames. Anti-crack polymer technology applied by PureRend.",
    h1: "Flexible Thin Coat Systems",
    shortDescription: "Ultra-thin, polymer-modified rendering systems designed to flex without cracking.",
    heroImage: "/images/portfolio_hero.png",
    longDescription: "Modern construction methods — particularly timber framing, SIPs panels, and modular extensions — require rendering systems that can accommodate natural structural movement. Traditional sand and cement will instantly crack under these stresses. Our thin coat systems use high-polymer basecoats and flexible acrylic or silicone topcoats, yielding a total thickness of just 8–10mm. This results in a lightweight, incredibly resilient finish that moves seamlessly with the building.",
    benefits: [
      { title: "Anti-Crack Formulation", description: "High polymer content allows the render to stretch and flex with thermal expansion.", icon: Maximize },
      { title: "Lightweight Profile", description: "Adds minimal weight load to the structure, perfect for modern off-site construction.", icon: Wind },
      { title: "Versatile Substrate Bonding", description: "Can be applied over specialised render carrier boards on timber frames.", icon: Shield }
    ],
    process: [
      { title: "01. Joint Taping", description: "Meticulously taping and sealing the joints between render carrier boards." },
      { title: "02. Key Coat", description: "Applying an initial slurry coat to provide a mechanical key for the basecoat." },
      { title: "03. Fully Meshed Base", description: "A highly flexible basecoat completely reinforced with embedded fibreglass mesh." },
      { title: "04. Final Texture", description: "Application of a 1.5mm aggregate thin-coat finish for a seamless look." }
    ],
    faqs: [
      { question: "Can thin coat render be applied to brick?", answer: "Yes, though the brickwork must usually be completely levelled first with a backing coat to ensure the final 1.5mm topcoat looks perfectly flat." },
      { question: "Is it suitable for timber-framed houses?", answer: "It is specifically designed for them. We apply it over BBA-approved calcium silicate or cement particle carrier boards." },
      { question: "How long does it take to apply?", answer: "Due to the thin nature of the coats, drying times are faster, allowing a generally quicker turnaround than thick-coat systems." }
    ],
    pricing: "Thin coat render typically falls between £40–£60 per m². It's a popular choice for timber frame and modern builds where a lightweight, flexible finish is needed.",
    relatedBlogs: [
      { slug: "render-over-pebbledash", title: "Can you render over pebbledash? (And should you?)" },
      { slug: "rendering-cost-cornwall", title: "How much does rendering cost in Cornwall? (2026 prices)" },
    ],
    serviceLocations: [
      { slug: "bude", name: "Bude" },
      { slug: "holsworthy", name: "Holsworthy" },
      { slug: "launceston", name: "Launceston" },
    ],
  },
  {
    slug: "heritage-lime-render",
    name: "Heritage Lime Render",
    title: "Heritage Lime Rendering Cornwall | Conservation Specialists | PureRend",
    metaDescription: "Sympathetic lime rendering for stone, cob, and heritage properties in Cornwall. Highly breathable natural finishes by PureRend.",
    h1: "Heritage Lime Rendering",
    shortDescription: "Vapour-permeable, traditional natural lime rendering for historic and period properties.",
    heroImage: "/images/portfolio_hero.png",
    longDescription: "Applying modern, cement-based renders to traditional solid-walled properties (such as Cornish stone or cob cottages) is disastrous. Cement traps moisture inside the wall, destroying the stonework and causing severe internal damp. We specialise in traditional lime rendering (NHL and putty systems), which act as a 'poultice', actively drawing moisture out of the building. We respect the heritage of the county, matching historic textures and working closely with conservation officers when required.",
    benefits: [
      { title: "Total Breathability", description: "Allows historic solid walls to release trapped moisture, curing internal dampness.", icon: Wind },
      { title: "Structural Sympathy", description: "Lime is softer than stone or cob, ensuring the render sacrifices itself before the structural masonry does.", icon: HeartPulse },
      { title: "Authentic Aesthetic", description: "Maintains the undulating, organic visual character of historic cottages.", icon: Home }
    ],
    process: [
      { title: "01. Careful Removal", description: "Delicate hacking off of inappropriate cementitious renders to expose the original stone." },
      { title: "02. Deep Pointing", description: "Pinning and deeply pointing the loose stonework with a base lime mortar." },
      { title: "03. Scratch Coat", description: "Applying the first coat of lime with coarse aggregate to build a key." },
      { title: "04. Float & Sponge Finish", description: "Applying the final coat and gently sponging it to close the surface while retaining an authentic texture." }
    ],
    faqs: [
      { question: "Why is lime better than cement for old houses?", answer: "Old houses were built without damp proof courses. They rely on moisture evaporating through the walls. Cement seals the wall, trapping the water; lime lets it breathe." },
      { question: "Does lime render take longer to dry?", answer: "Yes. Lime carbonation is a slow chemical process. It must be protected from frost, rapid drying, and heavy rain for significantly longer than modern renders." },
      { question: "Do I have to paint it?", answer: "You can leave naturally coloured lime, but if painting, you MUST use a highly breathable mineral or silicate paint, never modern vinyl masonry paint." }
    ],
    pricing: "Lime rendering is a specialist skill and takes longer to apply. Expect £60–£90 per m². It's more expensive than cement-based options, but it's the right choice for older stone properties — using the wrong render causes more damage than it fixes.",
    relatedBlogs: [
      { slug: "planning-permission-rendering", title: "Do I need planning permission to render my house?" },
    ],
    serviceLocations: [
      { slug: "stratton", name: "Stratton" },
      { slug: "launceston", name: "Launceston" },
      { slug: "camelford", name: "Camelford" },
    ],
  },
  {
    slug: "machine-application",
    name: "Machine Application",
    title: "Machine Render Spraying Cornwall | Commercial & Large Scale | PureRend",
    metaDescription: "High-velocity machine render application for commercial projects and large residential builds. Rapid completion, flawless consistency.",
    h1: "Machine Render Application",
    shortDescription: "High-velocity, spray-applied rendering for rapid, perfectly consistent coverage.",
    heroImage: "/images/silicone_after.png",
    longDescription: "For large-scale residential developments and commercial projects across Devon and Cornwall, speed and consistency are paramount. We use advanced diesel and electric render spray pumps to apply monocouche and basecoats at high velocity. Machine application ensures the material hits the wall with maximum impact, eliminating air pockets and creating an incredibly strong bond. It enables us to cover vast surface areas in a fraction of the time of traditional hand application without sacrificing a millimetre of quality.",
    benefits: [
      { title: "Rapid Project Completion", description: "Dramatically reduces time on scaffolding, accelerating your build timeline.", icon: Clock },
      { title: "Superior Adhesion", description: "High-pressure spraying forces the render into every crevice of the masonry.", icon: Maximize },
      { title: "Flawless Consistency", description: "Continuous mechanical mixing guarantees identical water ratios and colour uniformity across large elevations.", icon: Settings }
    ],
    process: [
      { title: "01. Logistics & Setup", description: "Establishing spray zones, material mixing stations, and intensive masking." },
      { title: "02. Mechanical Mixing", description: "Automated continuous mixing ensures perfectly hydrated material." },
      { title: "03. Spray Application", description: "High-velocity spraying of the basecoat or monocouche directly onto the substrate." },
      { title: "04. Hand-Finished Detailing", description: "Ben follows the spray, ruling off and finishing the surface by hand to get clean, level lines." }
    ],
    faqs: [
      { question: "Is machine rendering cheaper?", answer: "On small domestic jobs, the setup time negates savings. On large projects or new builds, the massive reduction in labour time significantly lowers overall project costs." },
      { question: "Can you spray silicone render?", answer: "We spray the basecoats, but the final 1.5mm silicone topcoat is always meticulously applied and floated by hand." },
      { question: "Is it as strong as hand-applied render?", answer: "It is often stronger due to the impact velocity driving the material into the blockwork's pores." }
    ],
    pricing: "Machine application doesn't change the product cost — it's the same render system, just applied faster. It's most cost-effective on larger projects where the setup time for the machine is justified.",
    relatedBlogs: [
      { slug: "rendering-cost-cornwall", title: "How much does rendering cost in Cornwall? (2026 prices)" },
      { slug: "silicone-render-vs-monocouche", title: "Silicone render vs monocouche — which is right for your house?" },
    ],
    serviceLocations: [
      { slug: "bude", name: "Bude" },
      { slug: "bideford", name: "Bideford" },
      { slug: "barnstaple", name: "Barnstaple" },
    ],
  },
  {
    slug: "rendering-repair",
    name: "Rendering Repair",
    title: "Render Repair & Restoration Cornwall | Crack Fixing | PureRend",
    metaDescription: "Expert diagnosis and repair of cracked, blown, or failing render in Cornwall. Structural pinning, crack stitching, and seamless patching.",
    h1: "Precision Rendering Repair",
    shortDescription: "Surgical restoration of damaged, cracked, or blown renders to protect your substrate.",
    heroImage: "/images/monocouche_after.png",
    longDescription: "Ignoring cracked or hollow render on a coastal property is a severe risk; water penetrates the cracks, freezes, expands, and blows the render off entirely. PureRend doesn't just patch the surface; we surgically diagnose the root cause — whether it's thermal movement, lintel failure, or poor initial application. We use helibar crack stitching, specialised polymer repair mortars, and exact texture matching to restore the integrity and aesthetics of your façade.",
    benefits: [
      { title: "Stops Structural Decay", description: "Seals the building envelope before water ingress damages the internal blockwork.", icon: Shield },
      { title: "Cost-Effective", description: "Targeted repairs save the massive expense of entirely completely re-rendering an elevation.", icon: TrendingUp },
      { title: "Seamless Blending", description: "We meticulously match the texture and grain of your existing finish.", icon: Brush }
    ],
    process: [
      { title: "01. Diagnostics", description: "Tap-testing the elevation to map out the exact extent of 'blown' (delaminated) render." },
      { title: "02. Surgical Removal", description: "Grinding clean, neat geometric cuts around the damage to prevent jagged patch lines." },
      { title: "03. Structural Fixes", description: "Installing stainless steel helical bars across structural cracks if required." },
      { title: "04. Polymer Patching", description: "Applying localized mesh and polymer basecoats before matching the topcoat texture." }
    ],
    faqs: [
      { question: "Will I be able to see the patch?", answer: "We texture-match flawlessly, but newly applied render will always look cleaner than a 10-year-old wall. It usually requires full elevation painting for absolute perfection." },
      { question: "Why is my render cracking?", answer: "Usually due to a lack of expansion joints, no stress mesh around windows, or general movement in the building." },
      { question: "Can you fix pebble dash?", answer: "Yes, we can patch pebble dash, though texture matching exact stone sizes and colours is highly complex and heavily dependent on material availability." }
    ],
    pricing: "Repair work varies hugely depending on the extent of the damage. Small patch repairs might be a few hundred pounds. Larger areas where render needs stripping and reapplying could be £1,000–£3,000+. I always assess the cause before quoting.",
    relatedBlogs: [
      { slug: "render-over-pebbledash", title: "Can you render over pebbledash? (And should you?)" },
      { slug: "how-to-clean-render", title: "How to clean render without damaging it" },
    ],
    serviceLocations: [
      { slug: "bude", name: "Bude" },
      { slug: "holsworthy", name: "Holsworthy" },
      { slug: "widemouth-bay", name: "Widemouth Bay" },
    ],
  },
  {
    slug: "soft-wash-aftercare",
    name: "Soft-Wash Aftercare",
    title: "Render Cleaning & Soft Washing Cornwall | Remove Algae | PureRend",
    metaDescription: "Professional render soft-washing and algae removal in Cornwall. Safe, low-pressure fungicidal cleaning to restore your bright finish.",
    h1: "Specialist Soft-Wash Aftercare",
    shortDescription: "Gentle, fungicidal treatment to eradicate organic growth without destroying your render.",
    heroImage: "/images/insulation_after.png",
    longDescription: "Over time, even the highest quality renders in damp, coastal environments like Cornwall will acquire a build-up of red algae (Trentepohlia), green algae, and environmental traffic film. Never jet-wash a modern render; high pressure blasts the protective surface layer away and forces water into the pores. We provide specialised soft-washing services, applying a targeted biocide wash under low pressure that kills the spores at the root, dissolving stains and returning your render to its original brilliance.",
    benefits: [
      { title: "No Damage Guaranteed", description: "Low-pressure chemical treatment ensures your delicate thin-coat render remains completely intact.", icon: Shield },
      { title: "Kills The Root", description: "Biocides actively kill the biological spores, ensuring the algae doesn't return for years.", icon: Droplets },
      { title: "Instant Visual Restoration", description: "Restores the pristine, bright curb appeal your property had when the render was first applied.", icon: Sparkles }
    ],
    process: [
      { title: "01. Botanical Protection", description: "Thoroughly soaking and protecting all nearby plants and lawns before chemical application." },
      { title: "02. Biocide Application", description: "Wand-spraying the specialised fungicidal treatment across the entire elevation." },
      { title: "03. Dwell Time", description: "Allowing the chemical to sit and actively digest the biological growth." },
      { title: "04. Low-Pressure Rinse", description: "A gentle, fan-jet rinse down to strip away the dead biomass and dirt." }
    ],
    faqs: [
      { question: "Will pressure washing ruin my silicone render?", answer: "Yes. Using a high-pressure lance close to the wall will score the 1.5mm topcoat, leaving permanent lines and deeply embedded water." },
      { question: "How long does a soft wash last?", answer: "Typically 3 to 5 years before any noticeable biological growth returns, depending heavily on proximity to trees and prevailing winds." },
      { question: "Is the chemical dangerous to pets?", answer: "While applying, yes. Once the wall is rinsed down and dry, it is completely inert and 100% safe." }
    ],
    pricing: "A full house soft-wash typically costs £200–£500 depending on the size of the property and severity of the algae growth. Much cheaper than re-rendering after someone's taken a pressure washer to it.",
    relatedBlogs: [
      { slug: "how-to-clean-render", title: "How to clean render without damaging it" },
    ],
    serviceLocations: [
      { slug: "bude", name: "Bude" },
      { slug: "widemouth-bay", name: "Widemouth Bay" },
      { slug: "bideford", name: "Bideford" },
    ],
  },
  {
    slug: "internal-plastering",
    name: "Internal Plastering",
    title: "Internal Plastering in Bude & Cornwall | PureRend",
    metaDescription: "Internal plastering by Ben Rod — skimming, boarding, and ceilings across Bude and North Cornwall. Smooth, paint-ready finishes. Fully insured, 10-year guarantee.",
    h1: "Internal Plastering",
    shortDescription: "Skimming, boarding, ceilings — smooth and paint-ready. Done properly, left clean.",
    heroImage: "/images/craftsmanship_internal.png",
    longDescription: "Whether it's a skim over tired walls, plasterboarding a new room, or a full ceiling, I do it the same way I do everything else — properly. Your home is left clean at the end of every day and the finish is smooth enough to paint straight onto. All work is backed by my 10-year workmanship guarantee.",
    benefits: [
      { title: "Paint-Ready Perfection", description: "A glass-smooth surface that requires absolutely zero prep work before painting.", icon: Sparkles },
      { title: "100% Dust-Free Process", description: "Advanced dust-extraction sanding and meticulous masking keeps your home spotless.", icon: Wind },
      { title: "10-Year Warranty", description: "Complete peace of mind knowing our craftsmanship is guaranteed to stand the test of time.", icon: Shield }
    ],
    process: [
      { title: "01. Extreme Protection", description: "Laying down heavy-duty floor and furniture protection before any material is brought in." },
      { title: "02. Substrate Bonding", description: "Applying advanced bonding agents (e.g., Blue Grit) for ultimate adhesion over difficult surfaces." },
      { title: "03. The Skim Coat", description: "Applying two coats of premium multi-finish plaster and troweling to a glass-level polish." },
      { title: "04. Spotless Cleanup", description: "Removing all protective films and wet-wiping all edges, leaving the room cleaner than we found it." }
    ],
    faqs: [
      { question: "How long does a freshly plastered wall take to dry?", answer: "Typically 4 to 7 days, transitioning from dark to light pink. The room must be kept well-ventilated without force-drying." },
      { question: "Can you skim straight over Artex?", answer: "Yes, providing the Artex is bonded firmly to the ceiling and has been tested for asbestos if pre-2000." },
      { question: "Do I need to sand the wall before painting?", answer: "No. Our finishes are polished completely smooth. Just apply a mist coat directly once fully dry." }
    ],
    pricing: "Internal skimming runs roughly £15–£25 per m², or around £300–£500 per average room. Boarding and skimming is more — typically £400–£700 per room. Ceilings are priced separately.",
    relatedBlogs: [
      { slug: "rendering-cost-cornwall", title: "How much does rendering cost in Cornwall? (2026 prices)" },
    ],
    serviceLocations: [
      { slug: "bude", name: "Bude" },
      { slug: "holsworthy", name: "Holsworthy" },
      { slug: "launceston", name: "Launceston" },
    ],
  }
];
