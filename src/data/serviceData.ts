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
      "Fast, reliable local moves within Miami-Dade, Broward, and Palm Beach counties. Same-day availability.",
    metaTitle: "Local Movers in Miami | Same-Day Local Moving Company",
    metaDescription:
      "Professional local movers in Miami & South Florida. Licensed & insured local moving company with transparent hourly pricing. Get a free quote today!",
    h1: "Trusted Local Movers in Miami & South Florida",
    heroText:
      "Moving across town? Our experienced local moving crews handle everything from studios to large family homes with speed, care, and transparent pricing.",
    intro:
      "When it comes to local moving in Miami-Dade, Broward, and Palm Beach counties, Miami Moving is the professional moving company residents and businesses trust most. Our trained local movers understand South Florida's unique challenges — from navigating high-rise elevators and HOA regulations to handling moves in the summer heat. We offer same-day availability, competitive hourly rates, and a commitment to treating your belongings like our own.",
    benefits: [
      "Same-day and next-day local moving availability",
      "Experienced crews familiar with every South Florida neighborhood",
      "Careful handling of furniture, electronics, and fragile items",
      "Efficient loading and unloading to save you time and money",
      "Full protection with blankets, shrink wrap, and padding",
      "No hidden fees — transparent hourly pricing from start to finish",
    ],
    trustSignals: [
      "Licensed & insured movers with full liability coverage",
      "Professional, background-checked moving crews",
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
      "Dedicated project manager for every commercial move",
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
        text: "No two businesses are alike, so every commercial move starts with a free on-site assessment. Our project manager creates a customized moving plan that accounts for your timeline, budget, and specific requirements — whether you're moving a 10-person startup or a 200-employee corporate office.",
      },
      {
        heading: "Industries We Serve",
        text: "Our commercial movers have experience relocating law firms, medical and dental practices, tech startups, retail stores, restaurants, and warehouses. We understand the unique requirements of each industry, from HIPAA-compliant document handling to delicate electronics transport.",
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
      "Top-rated residential movers in Miami & South Florida. Professional home moving services for apartments, condos & houses. Licensed & insured. Free quotes!",
    h1: "Residential Movers You Can Trust in Miami",
    heroText:
      "Moving to a new home should be exciting, not stressful. Our residential moving crews handle every detail with care — from packing your kitchen to setting up your new living room.",
    intro:
      "Miami Moving is South Florida's go-to residential moving company for families, couples, and individuals making their next move. Whether you're upgrading to a larger home, downsizing to a cozy condo, or relocating across town for a new job, our professional residential movers treat every home and every item with the respect they deserve. We've moved thousands of South Florida families and earned their trust through careful handling, on-time arrivals, and honest pricing.",
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
      "Professional, uniformed, and background-checked crews",
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
      "Professional packing with premium materials. We handle fragile items, artwork, and electronics.",
    metaTitle: "Packing & Unpacking Services Miami | Professional Packers",
    metaDescription:
      "Expert packing & unpacking services in Miami. We use premium materials to protect fragile items, artwork & electronics. Licensed movers. Get a free quote!",
    h1: "Professional Packing & Unpacking Services in Miami",
    heroText:
      "Don't want the hassle of packing? Our expert packers use premium materials and proven techniques to protect every item — from fine china to flat-screen TVs.",
    intro:
      "Packing is the most time-consuming part of any move, and doing it wrong can lead to costly damage. Miami Moving's professional packing and unpacking services take the stress off your shoulders entirely. Our trained packers use high-quality boxes, bubble wrap, packing paper, and custom crating to ensure every item — from delicate glassware to bulky electronics — arrives at your new home or office in perfect condition.",
    benefits: [
      "Full packing services — we pack your entire home or office",
      "Partial packing for just the items you need help with",
      "Premium packing materials: double-wall boxes, bubble wrap, packing paper",
      "Custom crating for artwork, mirrors, and oversized items",
      "Unpacking and debris removal at your new location",
      "Labeling and inventory system for easy organization",
    ],
    trustSignals: [
      "Licensed & insured with full coverage for packed items",
      "Trained packers experienced with fragile and high-value items",
      "Premium materials included — no cutting corners",
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
      "Premium, full-service moving with extra care for high-value items and luxury homes.",
    metaTitle: "White Glove Moving Miami | Premium Luxury Moving Services",
    metaDescription:
      "White glove movers in Miami. Premium moving services for luxury homes, fine art, antiques & high-value items. Fully licensed & insured. Request a quote!",
    h1: "White Glove Moving Services in Miami",
    heroText:
      "Experience the highest standard of moving. Our white glove service provides dedicated crews, premium packing, and meticulous care for luxury homes and high-value items.",
    intro:
      "Miami Moving's white glove moving service is designed for clients who expect the very best. This premium, concierge-level moving experience includes dedicated project coordination, expert packing with the finest materials, custom crating for artwork and antiques, and meticulous placement of every item in your new space. From luxury high-rises in Sunny Isles to waterfront estates in Miami Beach, our white glove movers deliver an unmatched level of care and professionalism.",
    benefits: [
      "Dedicated move coordinator from quote to completion",
      "Premium packing with top-tier materials and custom crating",
      "Specialty handling for fine art, antiques, wine collections, and pianos",
      "Floor, wall, and elevator protection at both locations",
      "Furniture placement and arrangement to your exact specifications",
      "Post-move cleanup and debris removal",
    ],
    trustSignals: [
      "Licensed & insured with enhanced valuation coverage",
      "Trained, uniformed crews specializing in luxury relocations",
      "Transparent, all-inclusive pricing — no hidden fees",
      "Experience with high-rise condos, gated estates, and waterfront properties",
    ],
    detailedContent: [
      {
        heading: "What Makes White Glove Different?",
        text: "White glove moving goes beyond standard service. Every detail is managed — from pre-move walkthroughs and custom packing plans to climate-controlled transport for sensitive items. Your dedicated coordinator ensures the move runs flawlessly, and our crews wear shoe covers and use padded equipment to protect premium finishes and surfaces.",
      },
      {
        heading: "Ideal for Luxury Properties",
        text: "South Florida is home to some of the most exclusive residences in the country. Our white glove movers are experienced with penthouse condos, gated mansion communities, and waterfront estates that demand extra care, discretion, and attention to detail.",
      },
    ],
  },
  {
    slug: "storage-solutions",
    icon: Warehouse,
    title: "Storage Solutions",
    shortDescription:
      "Secure, climate-controlled short-term and long-term storage at competitive rates.",
    metaTitle: "Storage Solutions Miami | Climate-Controlled Moving Storage",
    metaDescription:
      "Secure, climate-controlled storage in Miami. Short-term & long-term storage solutions for moves. Licensed moving company with competitive rates. Free quote!",
    h1: "Secure Storage Solutions in Miami & South Florida",
    heroText:
      "Need storage between moves? Our secure, climate-controlled facilities keep your belongings safe and accessible — whether for a few days or several months.",
    intro:
      "Sometimes your new space isn't ready, or you simply need extra room. Miami Moving offers secure, climate-controlled storage solutions that integrate seamlessly with your move. We pick up your belongings, transport them safely to our facility, store them in clean, monitored units, and deliver them to your new location when you're ready. It's storage made simple — by the same movers you already trust.",
    benefits: [
      "Climate-controlled units to protect against heat and humidity",
      "24/7 security monitoring and restricted access",
      "Flexible short-term and long-term storage options",
      "Pick-up and delivery integrated with your move",
      "Clean, pest-free facilities maintained to high standards",
      "Competitive monthly rates with no long-term contracts",
    ],
    trustSignals: [
      "Licensed & insured storage with full inventory tracking",
      "Climate-controlled facilities protecting against Florida's heat and humidity",
      "Transparent pricing with no hidden fees or surprise charges",
      "Careful handling during pickup, storage, and delivery",
    ],
    detailedContent: [
      {
        heading: "Storage That Works With Your Move",
        text: "Our storage solutions are designed to work hand-in-hand with your moving timeline. Whether you need to store furniture for a week between closings or keep seasonal items for months, we handle the logistics. Your items are inventoried, wrapped, and placed in secure units — ready for delivery whenever you need them.",
      },
      {
        heading: "Climate-Controlled for South Florida",
        text: "Miami's heat and humidity can damage wood furniture, electronics, artwork, and upholstery. Our climate-controlled storage units maintain consistent temperature and humidity levels year-round, ensuring your belongings stay in the same condition as the day they were stored.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceInfo | undefined =>
  services.find((s) => s.slug === slug);
