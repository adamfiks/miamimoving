// Plain data (no icon imports) for the MCP server bundle.
// Kept in sync with src/data/serviceData.ts and src/data/cityData.ts.

export interface McpService {
  slug: string;
  title: string;
  shortDescription: string;
  url: string;
}

export const mcpServices: McpService[] = [
  { slug: "local-moving", title: "Local Moving", shortDescription: "Local moves within Miami-Dade, Broward, and Palm Beach counties. Short-notice moves when our schedule allows.", url: "https://miami-moving.com/local-moving" },
  { slug: "commercial-moving", title: "Commercial Moving", shortDescription: "Minimize business downtime with our efficient office and commercial relocation services.", url: "https://miami-moving.com/commercial-moving" },
  { slug: "residential-moving", title: "Residential Moving", shortDescription: "From studios to mansions — we treat your home and belongings with the utmost care.", url: "https://miami-moving.com/residential-moving" },
  { slug: "packing-and-unpacking", title: "Packing & Unpacking", shortDescription: "Professional packing with protective materials for fragile items, artwork, and electronics.", url: "https://miami-moving.com/packing-and-unpacking" },
  { slug: "white-glove-moving", title: "White Glove Moving", shortDescription: "Full-service local moving with extra care for high-value items and homes.", url: "https://miami-moving.com/white-glove-moving" },
  { slug: "storage-solutions", title: "Storage Solutions", shortDescription: "Secure storage options for short-term and long-term moving needs.", url: "https://miami-moving.com/storage-solutions" },
];

export interface McpCity {
  slug: string;
  name: string;
  heroText: string;
  intro: string;
  url: string;
}

export const mcpCities: McpCity[] = [
  { slug: "miami-movers", name: "Miami", url: "https://miami-moving.com/miami-movers", heroText: "Whether you're relocating across Brickell, moving into a Wynwood loft, or leaving Coral Gables for a new chapter — our Miami moving crew handles it all with care.", intro: "Professional movers serving Miami — high-rise condos, single-family homes, offices, and everything in between." },
  { slug: "miami-beach-movers", name: "Miami Beach", url: "https://miami-moving.com/miami-beach-movers", heroText: "From oceanfront condos on Collins Avenue to cozy apartments in North Beach — we make every Miami Beach move stress-free and efficient.", intro: "Expert Miami Beach movers experienced with Art Deco buildings, oceanfront high-rises, and boutique offices." },
  { slug: "fort-lauderdale-movers", name: "Fort Lauderdale", url: "https://miami-moving.com/fort-lauderdale-movers", heroText: "Relocating to or from Fort Lauderdale? Our experienced moving crews deliver fast, careful service across Broward County.", intro: "Full-service Fort Lauderdale movers for waterfront homes, downtown condos, and corporate offices." },
  { slug: "boca-raton-movers", name: "Boca Raton", url: "https://miami-moving.com/boca-raton-movers", heroText: "Moving to or from Boca Raton? Trust our professional team to handle your valuables with the care and attention that Boca residents expect.", intro: "Premium white-glove moving services for Boca Raton luxury estates and gated communities." },
  { slug: "hollywood-fl-movers", name: "Hollywood", url: "https://miami-moving.com/hollywood-fl-movers", heroText: "From Hollywood Beach condos to family homes near the Broadwalk — we provide fast, affordable moving services throughout Hollywood, Florida.", intro: "Affordable movers in Hollywood, FL for beach condos, family homes, and small businesses." },
  { slug: "hallandale-beach-movers", name: "Hallandale Beach", url: "https://miami-moving.com/hallandale-beach-movers", heroText: "Moving in Hallandale Beach? From luxury high-rises on the oceanfront to cozy neighborhoods inland — our team delivers every time.", intro: "Reliable Hallandale Beach movers experienced with oceanfront high-rises and residential communities." },
  { slug: "aventura-movers", name: "Aventura", url: "https://miami-moving.com/aventura-movers", heroText: "Whether you're moving into Aventura's iconic towers or relocating near the mall — our expert movers make it effortless.", intro: "Trusted Aventura movers for Williams Island, Turnberry, Porto Vita, and other luxury high-rises." },
  { slug: "north-miami-movers", name: "North Miami", url: "https://miami-moving.com/north-miami-movers", heroText: "From family homes to apartments and businesses across North Miami — we offer dependable, hassle-free moving services.", intro: "Local North Miami movers for homes, apartments, and small business relocations." },
  { slug: "north-miami-beach-movers", name: "North Miami Beach", url: "https://miami-moving.com/north-miami-beach-movers", heroText: "North Miami Beach moves made simple — from condos near Oleta Park to homes throughout the city, we've got you covered.", intro: "Full-service North Miami Beach movers for condos, apartments, and townhomes." },
  { slug: "sunny-isles-beach-movers", name: "Sunny Isles Beach", url: "https://miami-moving.com/sunny-isles-beach-movers", heroText: "Moving into one of Sunny Isles Beach's stunning oceanfront towers? Our specialized high-rise movers handle it with precision.", intro: "High-rise moving specialists for Sunny Isles Beach — Porsche Design Tower, Turnberry Ocean Club, Regalia and more." },
  { slug: "ojus-movers", name: "Ojus", url: "https://miami-moving.com/ojus-movers", heroText: "Moving in or around Ojus? Our affordable, experienced moving crews handle residential and commercial moves with care.", intro: "Affordable Ojus movers serving the northeastern Miami-Dade community." },
  { slug: "west-palm-beach-movers", name: "West Palm Beach", url: "https://miami-moving.com/west-palm-beach-movers", heroText: "Relocating in West Palm Beach? From waterfront estates to downtown condos, our experienced team delivers exceptional moving service.", intro: "Professional West Palm Beach movers for waterfront homes, downtown condos, and corporate offices." },
];

export const businessInfo = {
  name: "Miami Moving",
  phone: "(786) 564-0471",
  phoneE164: "+17865640471",
  email: "info@miami-moving.com",
  address: "1221 Brickell Ave, Suite 900, Miami, FL 33131",
  hours: "8 AM – 10 PM, 7 days a week",
  website: "https://miami-moving.com",
  serviceAreaSummary: "Local moves within Miami-Dade, Broward, and Palm Beach counties in South Florida.",
};
