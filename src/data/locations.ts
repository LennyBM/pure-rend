export interface LocationData {
  slug: string;
  name: string;
  county: string;
  title: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  longDescription: string;
  landmarks?: string[];
  coordinates?: { lat: number; lng: number };
}

export const locations: LocationData[] = [
  {
    slug: "bude",
    name: "Bude",
    county: "Cornwall",
    title: "Expert Rendering in Bude | Silicone & K Rend Specialists | PureRend",
    metaDescription: "Protect your Bude property from salt spray and driving rain with our coastal-grade silicone rendering. Free quotes from your local specialists.",
    h1: "Expert Rendering Services in Bude",
    shortDescription: "Coastal-grade silicone rendering that withstands Atlantic storms, tailored for Bude properties.",
    longDescription: "Bude's beautiful coastline comes with harsh weather conditions that can quickly degrade standard sand and cement render. At PureRend, we specialise in high-performance silicone systems completely engineered to repel wind-driven rain and corrosive salt spray. Whether your property is a Victorian terrace near the town centre or a coastal cottage overlooking Summerleaze Beach, our breathable rendering solutions prevent penetrating damp while instantly modernising your exterior.",
    landmarks: ["Summerleaze Beach", "Bude Sea Pool", "The Castle Bude", "Crooklets Beach"],
    coordinates: { lat: 50.8266, lng: -4.5437 }
  },
  {
    slug: "holsworthy",
    name: "Holsworthy",
    county: "Devon",
    title: "Plastering & Rendering in Holsworthy | PureRend",
    metaDescription: "Transforming rural Devon properties in Holsworthy with premium monocouche and silicone rendering systems. Unbeatable durability and finish.",
    h1: "Rendering & Plastering Specialists in Holsworthy",
    shortDescription: "Transforming rural Devon properties, from historic farmhouses to contemporary new builds.",
    longDescription: "Serving Holsworthy and the surrounding rural communities, PureRend provides comprehensive external rendering and internal plastering services. We understand the specific needs of rural properties, from protecting solid stone walls against the elements to delivering crisp, modern finishes on new extensions and farm building conversions.",
    landmarks: ["Holsworthy Viaduct", "St Peter & St Paul Church", "Holsworthy Market"],
    coordinates: { lat: 50.8105, lng: -4.3512 }
  },
  {
    slug: "stratton",
    name: "Stratton",
    county: "Cornwall",
    title: "Heritage Rendering in Stratton | PureRend",
    metaDescription: "Sympathetic lime rendering and modern finishes for Stratton's conservation area. Protecting Cornish heritage with expert craftsmanship.",
    h1: "Specialist Rendering in Stratton",
    shortDescription: "Heritage-sensitive lime rendering and breathable systems in Stratton's conservation area.",
    longDescription: "With its narrow streets and historic core, Stratton requires a rendering company that understands heritage stonework as well as modern performance. We specialize in highly breathable systems—including traditional lime rendering and advanced silicone—ensuring that trapped moisture escapes naturally, preventing damp issues in older properties while maintaining visual sympathy with the conservation area.",
    landmarks: ["St Andrew's Church", "The Tree Inn", "Stratton Hospital"],
    coordinates: { lat: 50.8291, lng: -4.5126 }
  },
  {
    slug: "widemouth-bay",
    name: "Widemouth Bay",
    county: "Cornwall",
    title: "Coastal Rendering Widemouth Bay | Weather-Proof Extieriors",
    metaDescription: "Extreme weather-proof silicone rendering for Widemouth Bay coastal properties. Defy salt air and Atlantic storms with PureRend.",
    h1: "Coastal Rendering in Widemouth Bay",
    shortDescription: "Weather-proof rendering engineered specifically for Widemouth Bay's highly exposed coastline.",
    longDescription: "Properties in Widemouth Bay face arguably some of the most aggressive coastal weather in North Cornwall. Driving Atlantic rain and heavy salt spray demand an external finish that won't crack or fail. Our premium silicone rendering systems provide a hydrophobic, self-cleaning shield that actively repels water while remaining totally breathable—the only true solution for exposed coastal homes.",
    landmarks: ["Widemouth Sand", "Black Rock Beach"],
    coordinates: { lat: 50.7937, lng: -4.5513 }
  },
  {
    slug: "kilkhampton",
    name: "Kilkhampton",
    county: "Cornwall",
    title: "Rendering Services in Kilkhampton | PureRend",
    metaDescription: "Professional external rendering and internal plastering for village cottages and agricultural properties in Kilkhampton.",
    h1: "Plastering & Rendering in Kilkhampton",
    shortDescription: "Professional rendering finishes for Kilkhampton village properties and rural conversions.",
    longDescription: "Situated high on the A39, Kilkhampton properties are often exposed to strong winds and heavy rainfall. We offer tailored rendering solutions that protect solid masonry from penetrating damp. From applying weather-resilient K Rend monocouche to traditional internal skimming, we deliver flawless results for both agricultural renovations and village cottages passing up to the Devon border.",
    landmarks: ["St James the Great Church", "Penstowe Park"],
    coordinates: { lat: 50.8654, lng: -4.4842 }
  },
  {
    slug: "marhamchurch",
    name: "Marhamchurch",
    county: "Cornwall",
    title: "Rendering & Plastering Marhamchurch | PureRend",
    metaDescription: "Sympathetic exterior rendering for Marhamchurch's traditional cottages. Enhance kerb appeal and thermal performance.",
    h1: "Rendering Solutions in Marhamchurch",
    shortDescription: "Sympathetic and durable exterior rendering for Marhamchurch's traditional Cornish cottages.",
    longDescription: "PureRend works extensively in Marhamchurch, providing top-tier rendering upgrades to everything from modern bungalows to older cob and stone cottages. We carefully assess your substrate to recommend the optimal system—be it an insulated render to lower heating bills or a beautifully scraped finish that enhances your home's character while eliminating the need for periodic painting.",
    landmarks: ["St Marwenne's Church", "The Bullers Arms"],
    coordinates: { lat: 50.8038, lng: -4.5262 }
  },
  {
    slug: "bideford",
    name: "Bideford",
    county: "Devon",
    title: "Rendering Company Bideford | Monocouche & Silicone | PureRend",
    metaDescription: "Top-rated external rendering in Bideford. K Rend, silicone systems, and dry lining for diverse property stocks across North Devon.",
    h1: "External Rendering Specialists in Bideford",
    shortDescription: "Full rendering services catered to Bideford's diverse historic and modern property stock.",
    longDescription: "From the steep Victorian terraces rising from the River Torridge to modern extensions on the outskirts of town, Bideford presents a huge variety of substrates. PureRend brings expert knowledge of every background material. We strip failing render, repair blockwork, and install completely new, through-coloured systems that add immense kerb appeal and robust weather protection to your North Devon home.",
    landmarks: ["Bideford Long Bridge", "The Pannier Market", "Victoria Park"],
    coordinates: { lat: 51.0152, lng: -4.2081 }
  },
  {
    slug: "barnstaple",
    name: "Barnstaple",
    county: "Devon",
    title: "Plastering & Rendering Barnstaple | North Devon | PureRend",
    metaDescription: "North Devon's leading rendering specialists serving Barnstaple. Unmatched quality in insulated render, plastering, and exterior finishes.",
    h1: "Plastering & Rendering in Barnstaple",
    shortDescription: "North Devon's leading plastering and rendering specialists proudly serving Barnstaple.",
    longDescription: "As the largest town in North Devon, Barnstaple’s mix of architectural styles requires a rendering company that understands both heritage masonry and new build blockwork. At PureRend, our complete range of rendering and internal plastering services helps Barnstaple homeowners drastically improve their property's energy efficiency (through EWI systems) while delivering striking contemporary aesthetics.",
    landmarks: ["Barnstaple Pannier Market", "Butcher's Row", "Museum of Barnstaple and North Devon", "Tarka Trail"],
    coordinates: { lat: 51.0805, lng: -4.0583 }
  },
  {
    slug: "launceston",
    name: "Launceston",
    county: "Cornwall",
    title: "Silicone & K Rend Launceston | PureRend Specialists",
    metaDescription: "Protect your property in the gateway to Cornwall. Expert external house rendering and skimming services across Launceston.",
    h1: "Expert Rendering at the Gateway to Cornwall — Launceston",
    shortDescription: "Specialist rendering services protecting properties at the historic gateway to Cornwall.",
    longDescription: "Launceston’s elevated position often exposes its buildings to driving rain crossing Bodmin Moor. We provide robust exterior wall solutions, from highly flexible silicone rendering systems to completely waterproof monocouche scratch finishes. We guarantee a flawless application that significantly reduces damp intrusion and elevates the value of your Launceston property.",
    landmarks: ["Launceston Castle", "St Mary Magdalene Church", "Tamar Valley"],
    coordinates: { lat: 50.6329, lng: -4.3541 }
  },
  {
    slug: "camelford",
    name: "Camelford",
    county: "Cornwall",
    title: "Plasterers & Renderers in Camelford | PureRend",
    metaDescription: "Transform stone-built properties in Camelford with expert external rendering. Crack-resistant silicone finishes available.",
    h1: "Rendering Specialists in Camelford",
    shortDescription: "Expert rendering for Camelford's stone-built market town properties and rural housing.",
    longDescription: "On the edge of Bodmin Moor, Camelford properties demand exterior render that can withstand relentless, wet Cornish weather. PureRend is highly experienced in preparing difficult stone substrates and applying modern, polymer-modified basecoats that lock onto the building. The result is a crack-resistant, beautifully coloured exterior that breathes and performs year after year.",
    landmarks: ["Davidstow Moor", "Roughtor", "Camelford High Street"],
    coordinates: { lat: 50.6200, lng: -4.6823 }
  }
];
