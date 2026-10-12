import { Truck, Building2, Home, Package, Star, Warehouse } from "lucide-react";

export interface ServiceInfo {
  slug: string;
  icon: typeof Truck;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  intro: string;
  benefits: string[];
  trustSignals: string[];
  detailedContent: {
    heading: string;
    text: string;
  }[];
}

export const services: ServiceInfo[] = [
  {
    slug: "local-moving",
    icon: Truck,
    title: "Local Moving",
    shortDescription:
      "Fast, reliable local moves within Miami-Dade, Broward, and Palm Beach counties. Short-notice moves when our schedule allows.",
    metaTitle: "Local Movers in Miami | South Florida Local Moving Company",
    metaDescription:
      "Professional local movers in Miami & South Florida. Licensed & insured local moving company with transparent hourly pricing. Get a free quote today!",
    h1: "Trusted Local Movers in Miami & South Florida",
    heroText:
      "Moving across town? Our experienced local moving crews handle everything from studios to large family homes with speed, care, and transparent pricing.",
    intro:
      "When it comes to local moving in Miami-Dade, Broward, and Palm Beach counties, Miami Moving is a local moving company serving residents and businesses. Our trained local movers understand South Florida's unique challenges — from navigating high-rise elevators and HOA regulations to handling moves in the summer heat. We offer short-notice moves when our schedule allows, transparent hourly pricing, and a commitment to treating your belongings like our own.",
    benefits: [
      "Short-notice moves when our schedule allows",
      "Experienced crews familiar with every South Florida neighborhood",
      "Careful handling of furniture, electronics, and fragile items",
      "Efficient loading and unloading to save you time and money",
      "Full protection with blankets, shrink wrap, and padding",
      "No hidden fees — transparent hourly pricing from start to finish",
    ],
    trustSignals: [
      "Licensed & fully insured movers",
      "Professional moving crews",
      "Transparent hourly pricing with no surprise charges",
      "Experience with condos, apartments, homes, and high-rise buildings",
    ],
    detailedContent: [
      {
        heading: "What's Included in Our Local Moving Service?",
        text: "Every local move with Miami Moving includes a dedicated crew of professional movers, a fully equipped moving truck, furniture disassembly and reassembly, blanket wrapping for all large items, and careful loading and unloading. We handle everything so you can focus on settling into your new home.",
      },
      {
        heading: "Local Moves for Every Property Type",
        text: "Whether you're moving from a studio apartment in Brickell, a family home in Coral Gables, or a waterfront condo in Fort Lauderdale, our movers have the skills and equipment to get the job done right. We're experienced with high-rise moves, gated communities, and properties with complex access requirements.",
      },
    ],
  },
  {
    slug: "commercial-moving",
    icon: Building2,
    title: "Commercial Moving",
    shortDescription:
      "Minimize business downtime with our efficient office and commercial relocation services.",
    metaTitle: "Commercial Movers Miami | Office & Business Moving Company",
    metaDescription:
      "Professional commercial movers in Miami. Minimize downtime with our experienced office moving company. Licensed, insured & available 7 days a week.",
    h1: "Professional Commercial Movers in Miami",
    heroText:
      "Relocating your business? Our commercial moving specialists minimize downtime and handle office furniture, IT equipment, and sensitive documents with expert care.",
    intro:
      "Miami Moving provides full-service commercial moving solutions for offices, retail spaces, warehouses, and medical facilities throughout South Florida. We understand that business downtime means lost revenue, which is why our commercial movers work efficiently — including evenings and weekends — to get your team back to work as quickly as possible. From cubicle systems and conference tables to server racks and filing cabinets, we move it all with precision.",
    benefits: [
      "After-hours and weekend moves to minimize business disruption",
      "Specialized handling for IT equipment and sensitive electronics",
      "Cubicle and office furniture disassembly and reassembly",
      "Secure document and file transport",
      "Moving plans based on your business needs",
      "Scalable crew sizes for small offices to large corporate relocations",
    ],
    trustSignals: [
      "Licensed & insured with commercial liability coverage",
      "Experienced with corporate offices, medical facilities, and retail spaces",
      "Transparent pricing with detailed written estimates",
      "Trained crews for handling sensitive equipment and confidential materials",
    ],
    detailedContent: [
      {
        heading: "Tailored Commercial Moving Plans",
        text: "No two businesses are alike. Share your moving details with our team so we can discuss your timeline, budget, access requirements, and the items you need moved within South Florida.",
      },
      {
        heading: "Industries We Serve",
        text: "Our commercial movers have experience relocating law firms, medical and dental practices, tech startups, retail stores, restaurants, and warehouses. We understand the unique requirements of each industry, from organizing office files to careful electronics transport.",
      },
    ],
  },
  {
    slug: "residential-moving",
    icon: Home,
    title: "Residential Moving",
    shortDescription:
      "From studios to mansions — we treat your home and belongings with the utmost care.",
    metaTitle: "Residential Movers Miami | Home Moving Company Near Me",
    metaDescription:
      "Professional residential movers in Miami & South Florida. Professional home moving services for apartments, condos & houses. Licensed & insured. Free quotes!",
    h1: "Residential Movers You Can Trust in Miami",
    heroText:
      "Moving to a new home should be exciting, not stressful. Our residential moving crews handle every detail with care — from packing your kitchen to setting up your new living room.",
    intro:
      "Miami Moving is South Florida's go-to residential moving company for families, couples, and individuals making their next move. Whether you're upgrading to a larger home, downsizing to a cozy condo, or relocating across town for a new job, our professional residential movers treat every home and every item with the respect they deserve. Our focus is careful handling, clear communication, and transparent pricing.",
    benefits: [
      "Full-service residential moves from start to finish",
      "Careful handling of furniture, artwork, and family heirlooms",
      "Furniture disassembly, reassembly, and placement in your new home",
      "Protection for floors, walls, and doorways during the move",
      "Experienced with apartments, condos, townhomes, and single-family homes",
      "Flexible scheduling including evenings and weekends",
    ],
    trustSignals: [
      "Licensed & insured residential moving company",
      "Professional moving crews",
      "Transparent pricing — pay only for the time you use",
      "Careful handling of valuables, antiques, and fragile items",
    ],
    detailedContent: [
      {
        heading: "A Stress-Free Home Moving Experience",
        text: "Moving day doesn't have to be chaotic. Our residential movers arrive on time with all the equipment needed — dollies, blankets, shrink wrap, and a clean truck. We carefully wrap and protect every piece of furniture, load efficiently, and place everything exactly where you want it in your new home.",
      },
      {
        heading: "Every Home Size, Every Neighborhood",
        text: "From compact studios in Downtown Miami to sprawling estates in Coral Gables, we've handled residential moves of every size across South Florida. Our crews are experienced with high-rise condos, gated communities, walk-up apartments, and homes with challenging access.",
      },
    ],
  },
  {
    slug: "packing-and-unpacking",
    icon: Package,
    title: "Packing & Unpacking",
    shortDescription:
      "Professional packing with protective materials. We handle fragile items, artwork, and electronics.",
    metaTitle: "Packing & Unpacking Services Miami | Professional Packers",
    metaDescription:
      "Expert packing & unpacking services in Miami. We use protective materials to protect fragile items, artwork & electronics. Licensed movers. Get a free quote!",
    h1: "Professional Packing & Unpacking Services in Miami",
    heroText:
      "Don't want the hassle of packing? Our expert packers use protective materials and proven techniques to protect every item — from fine china to flat-screen TVs.",
    intro:
      "Packing is the most time-consuming part of any move, and doing it wrong can lead to costly damage. Miami Moving's professional packing and unpacking services take the stress off your shoulders entirely. Our trained packers use high-quality boxes, bubble wrap, packing paper, and custom crating to ensure every item — from delicate glassware to bulky electronics — arrives at your new home or office in perfect condition.",
    benefits: [
      "Full packing services — we pack your entire home or office",
      "Partial packing for just the items you need help with",
      "Protective packing materials: double-wall boxes, bubble wrap, packing paper",
      "Custom crating for artwork, mirrors, and oversized items",
      "Unpacking and debris removal at your new location",
      "Labeling and inventory system for easy organization",
    ],
    trustSignals: [
      "Licensed & insured with full coverage for packed items",
      "Trained packers experienced with fragile and high-value items",
      "Packing materials selected for your items",
      "Careful handling of electronics, artwork, antiques, and collectibles",
    ],
    detailedContent: [
      {
        heading: "Full-Service vs. Partial Packing",
        text: "Choose the level of service that fits your needs. Our full-service packing covers every room in your home, while partial packing lets you handle the easy stuff and leave the fragile, bulky, or time-consuming items to us. Either way, we bring all the materials and do the heavy lifting.",
      },
      {
        heading: "Specialty Item Packing",
        text: "Our packers are specially trained to handle items that require extra care — fine art, antique furniture, wine collections, musical instruments, and large electronics. We use custom crating, acid-free tissue, and multi-layer wrapping techniques to ensure maximum protection during transport.",
      },
    ],
  },
  {
    slug: "white-glove-moving",
    icon: Star,
    title: "White Glove Moving",
    shortDescription:
      "Full-service local moving with extra care for high-value items and homes.",
    metaTitle: "White Glove Moving Miami | Careful Local Moving Services",
    metaDescription:
      "White glove movers in Miami. Local moving services for homes, fine art, antiques & high-value items. Fully licensed & insured. Request a quote!",
    h1: "White Glove Moving Services in Miami",
    heroText:
      "Our white glove service focuses on careful packing, furniture protection, and handling high-value items during your local South Florida move.",
    intro:
      "Miami Moving's white glove moving service focuses on items that need extra care. We discuss packing requirements, furniture protection, and placement in your new space. From high-rises in Sunny Isles to waterfront homes in Miami Beach, our team handles local moves with attention to detail.",
    benefits: [
      "Clear communication about your moving details",
      "Protective packing for items requiring extra care",
      "Specialty handling for fine art, antiques, wine collections, and pianos",
      "Floor, wall, and elevator protection at both locations",
      "Furniture placement and arrangement to your exact specifications",
      "Post-move cleanup and debris removal",
    ],
    trustSignals: [
      "Licensed & fully insured movers",
      "Professional crews handling local residential moves",
      "Transparent, all-inclusive pricing — no hidden fees",
      "Experience with high-rise condos, gated estates, and waterfront properties",
    ],
    detailedContent: [
      {
        heading: "What Makes White Glove Different?",
        text: "White glove moving focuses on careful handling of items and surfaces. Share your packing needs, building requirements, and furniture details with our team so we can plan protection and placement for your local move.",
      },
      {
        heading: "Care for Homes and High-Rise Properties",
        text: "South Florida is home to some of the most exclusive residences in the country. Our white glove movers are experienced with penthouse condos, gated mansion communities, and waterfront estates that demand extra care, discretion, and attention to detail.",
      },
    ],
  },
  {
    slug: "storage-solutions",
    icon: Warehouse,
    title: "Storage Solutions",
    shortDescription:
      "Secure storage options for short-term and long-term moving needs.",
    metaTitle: "Storage Solutions Miami | Secure Moving Storage Options",
    metaDescription:
      "Secure storage options in Miami. Short-term & long-term storage solutions for local moves. Licensed moving company with transparent pricing. Free quote!",
    h1: "Secure Storage Solutions in Miami & South Florida",
    heroText:
      "Need storage between moves? Ask our team about secure storage options that fit your moving timeline.",
    intro:
      "Sometimes your new space isn't ready, or you simply need extra room. Miami Moving offers secure storage options alongside local South Florida moving services. Share what you need to store and your timeline so our team can discuss the arrangements for your move.",
    benefits: [
      "Secure storage options for your belongings",
      "Discuss access arrangements with our team",
      "Flexible short-term and long-term storage options",
      "Pick-up and delivery integrated with your move",
      "Storage arrangements based on your moving needs",
      "Transparent pricing for your storage needs",
    ],
    trustSignals: [
      "Licensed & fully insured moving company",
      "Secure storage options for South Florida moves",
      "Transparent pricing with no hidden fees or surprise charges",
      "Careful handling during pickup, storage, and delivery",
    ],
    detailedContent: [
      {
        heading: "Storage That Works With Your Move",
        text: "Our storage solutions are designed to work hand-in-hand with your moving timeline. Whether you need to store furniture for a week between closings or keep seasonal items for months, we handle the logistics. Discuss packing, storage duration, and delivery arrangements with our team before booking.",
      },
      {
        heading: "Planning Storage in South Florida",
        text: "Miami's heat and humidity are worth considering when storing furniture, electronics, artwork, and upholstery. Tell our team what you need to store so we can discuss suitable secure storage options and preparation.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceInfo | undefined =>
  services.find((s) => s.slug === slug);
