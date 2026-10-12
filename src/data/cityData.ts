export interface CityData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  intro: string;
  localDetails: string[];
  movingTypes: string[];
  neighborhoodNote: string;
}

export const cities: CityData[] = [
  {
    slug: "miami-movers",
    name: "Miami",
    metaTitle: "Miami Movers | Professional Moving Company in Miami, FL",
    metaDescription: "Looking for reliable movers in Miami? Miami Moving offers licensed & insured local residential and commercial moving services. Call (786) 564-0471 for a free quote.",
    h1: "Professional Movers in Miami, FL",
    heroText: "Whether you're relocating across Brickell, moving into a Wynwood loft, or leaving Coral Gables for a new chapter — our Miami moving crew handles it all with care.",
    intro: "Miami is one of the most dynamic cities in the country, and moving here comes with unique challenges — from navigating narrow condo hallways to handling elevator reservations in high-rise buildings. At Miami Moving, we specialize in making your Miami relocation seamless, whether you're moving into a Downtown penthouse, a single-family home in Coconut Grove, or an office in the financial district.",
    localDetails: [
      "High-rise and condo moves in Brickell, Downtown, and Edgewater",
      "Residential relocations in Coral Gables, Little Havana, and Coconut Grove",
      "Commercial office moves in the Miami financial district",
      "Apartment moves in Wynwood, Midtown, and Design District",
    ],
    movingTypes: ["studio apartments", "condos", "single-family homes", "corporate offices", "retail spaces"],
    neighborhoodNote: "From South Beach to Kendall, our crews know every Miami neighborhood inside and out — including building rules, parking restrictions, and the fastest routes to get your belongings safely to your new home.",
  },
  {
    slug: "miami-beach-movers",
    name: "Miami Beach",
    metaTitle: "Miami Beach Movers | Reliable Moving Services in Miami Beach, FL",
    metaDescription: "Need movers in Miami Beach? Miami Moving provides expert residential and commercial moving in Miami Beach. Licensed, insured. Free quotes — call (786) 564-0471.",
    h1: "Trusted Movers in Miami Beach, FL",
    heroText: "From oceanfront condos on Collins Avenue to cozy apartments in North Beach — we make every Miami Beach move stress-free and efficient.",
    intro: "Moving in Miami Beach requires movers who understand the island's unique logistics. Tight parking, HOA elevator schedules, narrow hallways in Art Deco buildings, and bridge traffic are just a few of the challenges our team navigates daily. Miami Moving has the experience to handle every type of Miami Beach move with professionalism and care.",
    localDetails: [
      "High-rise condo moves along Collins Avenue and Ocean Drive",
      "Art Deco building relocations in South Beach",
      "Apartment moves in Mid-Beach and North Beach",
      "Boutique and retail relocations on Lincoln Road",
    ],
    movingTypes: ["oceanfront condos", "Art Deco apartments", "townhomes", "boutique offices", "vacation rentals"],
    neighborhoodNote: "We coordinate with building management, reserve service elevators, and plan around peak traffic hours so your Miami Beach move stays on schedule.",
  },
  {
    slug: "fort-lauderdale-movers",
    name: "Fort Lauderdale",
    metaTitle: "Fort Lauderdale Movers | Local Moving Company in Fort Lauderdale, FL",
    metaDescription: "Professional movers in Fort Lauderdale, FL. Miami Moving offers affordable local & commercial moving services. Licensed & insured. Call (786) 564-0471 today.",
    h1: "Expert Movers in Fort Lauderdale, FL",
    heroText: "Relocating to or from Fort Lauderdale? Our experienced moving crews deliver fast, careful service across Broward County — from Las Olas to Wilton Manors.",
    intro: "Fort Lauderdale is one of South Florida's most sought-after cities, known for its waterfront living, thriving business scene, and beautiful neighborhoods. Whether you're moving into a waterfront estate on the Intracoastal, downsizing to a condo in downtown Fort Lauderdale, or relocating your business, Miami Moving provides dependable, full-service moving solutions.",
    localDetails: [
      "Waterfront and Intracoastal property relocations",
      "Downtown Fort Lauderdale condo and apartment moves",
      "Office relocations in the Cypress Creek business corridor",
      "Residential moves in Victoria Park, Wilton Manors, and Rio Vista",
    ],
    movingTypes: ["waterfront homes", "high-rise condos", "suburban houses", "corporate offices", "medical practices"],
    neighborhoodNote: "Our Fort Lauderdale crews are familiar with local HOA requirements, bridge schedules, and efficient routes across Broward County to keep your move efficient.",
  },
  {
    slug: "boca-raton-movers",
    name: "Boca Raton",
    metaTitle: "Boca Raton Movers | Local Moving Services in Boca Raton, FL",
    metaDescription: "Searching for movers in Boca Raton? Miami Moving offers local residential & commercial moving. Licensed, insured, transparent pricing. Call (786) 564-0471.",
    h1: "Professional Movers in Boca Raton, FL",
    heroText: "Moving to or from Boca Raton? Trust our professional team to handle your valuables with the care and attention that Boca residents expect.",
    intro: "Boca Raton is synonymous with upscale living, and your move should reflect that standard. From gated communities and estates to corporate campuses and medical offices, Miami Moving provides white-glove moving services tailored to Boca Raton's discerning residents and businesses.",
    localDetails: [
      "Estate moves in Royal Palm Yacht & Country Club",
      "Gated community relocations in Woodfield, Boca West, and Broken Sound",
      "Office and commercial moves along Federal Highway and Glades Road",
      "Condo moves in downtown Boca and Mizner Park area",
    ],
    movingTypes: ["estates", "gated community homes", "waterfront properties", "executive offices", "medical facilities"],
    neighborhoodNote: "We understand the elevated expectations of Boca Raton residents. Our crews use protective packing materials, furniture pads, and careful handling techniques to protect every item.",
  },
  {
    slug: "hollywood-fl-movers",
    name: "Hollywood",
    metaTitle: "Hollywood FL Movers | Affordable Moving Company in Hollywood, Florida",
    metaDescription: "Affordable, professional movers in Hollywood, FL. Local moving, packing, and secure storage options. Licensed & insured. Call Miami Moving at (786) 564-0471.",
    h1: "Affordable Movers in Hollywood, FL",
    heroText: "From Hollywood Beach condos to family homes near the Broadwalk — we provide fast, affordable moving services throughout Hollywood, Florida.",
    intro: "Hollywood, Florida offers a perfect blend of beach living and suburban comfort. Whether you're moving into a beachfront condo, a family home in Emerald Hills, or relocating your business on Hollywood Boulevard, Miami Moving delivers reliable, cost-effective moving services with no hidden fees.",
    localDetails: [
      "Beachfront condo moves along Hollywood Beach and the Broadwalk",
      "Residential relocations in Emerald Hills and Oakridge",
      "Commercial moves in downtown Hollywood and Young Circle",
      "Apartment and townhome moves in eastern Hollywood neighborhoods",
    ],
    movingTypes: ["beach condos", "family homes", "townhouses", "small businesses", "retail stores"],
    neighborhoodNote: "Our Hollywood crews know the area's mix of residential and commercial zones, parking regulations, and the most efficient routes to complete your move on time and on budget.",
  },
  {
    slug: "hallandale-beach-movers",
    name: "Hallandale Beach",
    metaTitle: "Hallandale Beach Movers | Professional Moving Services in Hallandale Beach, FL",
    metaDescription: "Professional movers in Hallandale Beach, FL. Residential & commercial moving with transparent pricing. Licensed & insured. Call (786) 564-0471 for a free quote.",
    h1: "Reliable Movers in Hallandale Beach, FL",
    heroText: "Moving in Hallandale Beach? From high-rises on the oceanfront to cozy neighborhoods inland — our team delivers every time.",
    intro: "Hallandale Beach sits at the border of Miami-Dade and Broward counties, offering oceanfront high-rises, growing residential communities, and a vibrant commercial scene. Miami Moving provides full-service moving solutions for Hallandale Beach residents and businesses, handling everything from packing to furniture assembly.",
    localDetails: [
      "High-rise moves at Beach Club, Malaga Towers, and The Village at Gulfstream Park",
      "Residential relocations in Golden Isles and surrounding neighborhoods",
      "Commercial and retail moves along Hallandale Beach Boulevard",
      "Condo moves with elevator coordination and HOA compliance",
    ],
    movingTypes: ["high-rises", "condominiums", "townhomes", "retail locations", "office suites"],
    neighborhoodNote: "Our team handles the building requirements and logistics of Hallandale Beach's many high-rise communities, coordinating elevator access and loading dock schedules.",
  },
  {
    slug: "aventura-movers",
    name: "Aventura",
    metaTitle: "Aventura Movers | Trusted Moving Company in Aventura, FL",
    metaDescription: "Trusted movers in Aventura, FL. Miami Moving specializes in high-rise condo and residential moves. Licensed & insured. Call (786) 564-0471 for your free quote.",
    h1: "Trusted Movers in Aventura, FL",
    heroText: "Whether you're moving into Aventura's iconic towers or relocating near the mall — our expert movers make it effortless.",
    intro: "Aventura is one of South Florida's most prestigious communities, known for its high-rise living, world-class shopping, and excellent schools. Moving in Aventura requires movers who understand the complexities of high-rise relocations, strict building rules, and the logistics of working in one of South Florida's most active neighborhoods.",
    localDetails: [
      "High-rise moves at Williams Island, Turnberry, and Porto Vita",
      "Condo relocations near Aventura Mall and Country Club Drive",
      "Residential moves in gated townhome communities",
      "Office relocations in the Aventura business district",
    ],
    movingTypes: ["condo towers", "penthouse suites", "gated townhomes", "professional offices", "medical practices"],
    neighborhoodNote: "We coordinate with Aventura's strict building management teams to ensure smooth elevator reservations, loading dock access, and compliance with all community guidelines.",
  },
  {
    slug: "north-miami-movers",
    name: "North Miami",
    metaTitle: "North Miami Movers | Local Moving Company in North Miami, FL",
    metaDescription: "Local movers in North Miami, FL. Residential and commercial moving with experienced crews. Licensed & insured. Call Miami Moving at (786) 564-0471.",
    h1: "Local Movers in North Miami, FL",
    heroText: "From family homes to apartments and businesses across North Miami — we offer dependable, hassle-free moving services.",
    intro: "North Miami is a diverse, growing community with a mix of single-family homes, apartment complexes, and commercial properties. Whether you're moving into a home near Oleta River State Park, an apartment along Biscayne Boulevard, or relocating a business, Miami Moving offers efficient and affordable service.",
    localDetails: [
      "Single-family home relocations in established North Miami neighborhoods",
      "Apartment moves along Biscayne Boulevard and NE 125th Street",
      "Commercial and office relocations in North Miami's business areas",
      "Moves near Florida International University (FIU Biscayne Bay Campus)",
    ],
    movingTypes: ["single-family homes", "apartments", "duplexes", "offices", "educational facilities"],
    neighborhoodNote: "Our North Miami crews navigate local streets, school zones, and neighborhood regulations with ease, ensuring a smooth move every time.",
  },
  {
    slug: "north-miami-beach-movers",
    name: "North Miami Beach",
    metaTitle: "North Miami Beach Movers | Moving Services in North Miami Beach, FL",
    metaDescription: "Looking for movers in North Miami Beach? Miami Moving offers full-service residential & commercial moving. Licensed & insured. Call (786) 564-0471 today.",
    h1: "Professional Movers in North Miami Beach, FL",
    heroText: "North Miami Beach moves made simple — from condos near Oleta Park to homes throughout the city, we've got you covered.",
    intro: "North Miami Beach is a thriving community nestled between Aventura and North Miami, offering a variety of residential options from apartments and condos to single-family homes. Miami Moving provides comprehensive moving services tailored to the needs of North Miami Beach residents and businesses.",
    localDetails: [
      "Condo and apartment moves near Oleta River State Park",
      "Residential relocations throughout North Miami Beach neighborhoods",
      "Commercial moves along West Dixie Highway and NE 163rd Street",
      "Townhome and duplex relocations",
    ],
    movingTypes: ["condos", "apartments", "townhomes", "small businesses", "healthcare offices"],
    neighborhoodNote: "We know North Miami Beach's residential layout and traffic patterns, planning routes and timing to minimize disruption and complete your move efficiently.",
  },
  {
    slug: "sunny-isles-beach-movers",
    name: "Sunny Isles Beach",
    metaTitle: "Sunny Isles Beach Movers | High-Rise Moving Experts in Sunny Isles Beach, FL",
    metaDescription: "Expert movers for Sunny Isles Beach high-rises and condos. Miami Moving is licensed & insured with transparent pricing. Call (786) 564-0471 for a free quote.",
    h1: "High-Rise Moving Experts in Sunny Isles Beach, FL",
    heroText: "Moving into one of Sunny Isles Beach's stunning oceanfront towers? Our specialized high-rise movers handle it with precision.",
    intro: "Sunny Isles Beach is defined by its iconic oceanfront high-rises and oceanfront living. Moving in this community demands movers who specialize in high-rise logistics — from navigating strict building policies to protecting premium finishes in condos. Miami Moving is the trusted choice for Sunny Isles Beach relocations.",
    localDetails: [
      "High-rise moves at Porsche Design Tower, Turnberry Ocean Club, and Regalia",
      "Oceanfront condo relocations along Collins Avenue",
      "Penthouse and condo unit moves with white-glove handling",
      "Coordinated moves with building management and COI requirements",
    ],
    movingTypes: ["high-rise condos", "oceanfront penthouses", "high-rise apartments", "vacation properties", "corporate suites"],
    neighborhoodNote: "Our Sunny Isles Beach specialists manage COI submissions, freight elevator bookings, and loading dock schedules so you can focus on settling into your new home.",
  },
  {
    slug: "ojus-movers",
    name: "Ojus",
    metaTitle: "Ojus Movers | Reliable Moving Services in Ojus, FL",
    metaDescription: "Reliable movers serving Ojus, FL. Miami Moving provides affordable residential and commercial moving. Licensed & insured. Call (786) 564-0471.",
    h1: "Reliable Movers Serving Ojus, FL",
    heroText: "Moving in or around Ojus? Our affordable, experienced moving crews handle residential and commercial moves with care.",
    intro: "Ojus is a close-knit community in northeastern Miami-Dade County, conveniently located near Aventura and North Miami Beach. Whether you're moving within Ojus or relocating to or from the area, Miami Moving provides dependable, affordable moving services for homes and businesses alike.",
    localDetails: [
      "Residential moves throughout the Ojus community",
      "Apartment relocations near major transit corridors",
      "Small business and retail moves along US-1 and surrounding areas",
      "Moves to and from neighboring Aventura and North Miami Beach",
    ],
    movingTypes: ["single-family homes", "apartments", "duplexes", "small businesses", "storage units"],
    neighborhoodNote: "Our Ojus movers know the local streets and can plan efficient routes to keep your move fast and affordable.",
  },
  {
    slug: "west-palm-beach-movers",
    name: "West Palm Beach",
    metaTitle: "West Palm Beach Movers | Professional Moving Company in West Palm Beach, FL",
    metaDescription: "Professional movers in West Palm Beach, FL. Miami Moving offers full-service local residential & commercial moving. Licensed & insured. Call (786) 564-0471.",
    h1: "Professional Movers in West Palm Beach, FL",
    heroText: "Relocating in West Palm Beach? From waterfront estates to downtown condos, our experienced team delivers exceptional moving service.",
    intro: "West Palm Beach is the cultural and economic heart of Palm Beach County, with a diverse mix of waterfront homes, downtown condos, suburban neighborhoods, and thriving businesses. Miami Moving serves the entire West Palm Beach area with reliable, full-service moving solutions for both residential and commercial clients.",
    localDetails: [
      "Waterfront home moves along the Intracoastal and Flagler Drive",
      "Downtown condo and apartment relocations near Clematis Street",
      "Corporate and office moves in the West Palm Beach business district",
      "Suburban residential moves in Westgate, Palm Beach Lakes, and Northwood",
    ],
    movingTypes: ["waterfront estates", "downtown condos", "suburban homes", "corporate offices", "retail businesses"],
    neighborhoodNote: "Our West Palm Beach teams navigate the city's bridges, downtown parking, and residential neighborhood rules to deliver a smooth, on-time move every time.",
  },
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return cities.find((city) => city.slug === slug);
};

export const getCityFaqs = (city: CityData): { question: string; answer: string }[] => [
  {
    question: `How much does it cost to move in ${city.name}?`,
    answer: `Local moves in ${city.name} are typically priced by crew size and hours on site rather than a flat rate. Your total depends on your home size, the type of property, and how much packing help you need. Call (786) 564-0471 or request a free quote for pricing based on your specific move.`,
  },
  {
    question: `Do you move ${city.movingTypes[0]} and ${city.movingTypes[1]} in ${city.name}?`,
    answer: `Yes — we regularly handle ${city.movingTypes.join(", ")} throughout ${city.name}. ${city.neighborhoodNote}`,
  },
  {
    question: `What parts of ${city.name} do you serve?`,
    answer: `We serve all of ${city.name}, including ${city.localDetails[0].charAt(0).toLowerCase() + city.localDetails[0].slice(1)}${city.localDetails[1] ? " and " + city.localDetails[1].charAt(0).toLowerCase() + city.localDetails[1].slice(1) : ""}.`,
  },
];
