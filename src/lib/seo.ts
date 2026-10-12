// Single source of truth for per-route head data (title, description, canonical, JSON-LD).
// Used both by the build-time prerender (scripts/prerender.ts) and the client <RouteSEO />.
import { cities, getCityBySlug, getCityFaqs } from "@/data/cityData";
import { services, getServiceBySlug } from "@/data/serviceData";
import { blogPosts, getBlogPostBySlug } from "@/data/blogData";
import { homeFaqs } from "@/data/homeFaqs";

export const SITE_URL = "https://miami-moving.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const HOME_TITLE = "Miami Moving | Professional Movers in Miami & South Florida";
export const HOME_DESCRIPTION =
  "Miami Moving offers reliable local residential and commercial moving services across Miami & South Florida. Licensed, insured movers. Call (786) 564-0471 for a free quote.";
export const BLOG_TITLE = "South Florida Moving Tips & Resources | Miami Moving Blog";
export const BLOG_DESCRIPTION =
  "Moving tips, cost guides, and neighborhood insights for anyone moving within South Florida — from the team at Miami Moving.";

type JsonLd = Record<string, unknown>;

export interface RouteSeo {
  title: string;
  description: string;
  /** Absolute canonical URL; omitted for noindex pages. */
  canonical?: string;
  noindex?: boolean;
  ogImage: string;
  jsonLd: JsonLd[];
}

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "1221 Brickell Ave, Suite 900",
  addressLocality: "Miami",
  addressRegion: "FL",
  postalCode: "33131",
  addressCountry: "US",
};

/** The one business entity. Every page references the same @id. */
export const businessSchema = (overrides: JsonLd = {}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": BUSINESS_ID,
  name: "Miami Moving",
  url: `${SITE_URL}/`,
  telephone: "+1-786-564-0471",
  email: "info@miami-moving.com",
  address: ADDRESS,
  geo: { "@type": "GeoCoordinates", latitude: 25.7617, longitude: -80.1918 },
  openingHours: "Mo-Su 08:00-22:00",
  priceRange: "$$",
  image: DEFAULT_OG_IMAGE,
  description:
    "Professional residential & commercial moving services across South Florida. Licensed, insured, and dedicated to making your move stress-free.",
  areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
  ...overrides,
});

const faqSchema = (faqs: { question: string; answer: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

const breadcrumbSchema = (items: { name: string; url: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

const HOME_CRUMB = { name: "Home", url: `${SITE_URL}/` };

export const NOT_FOUND_SEO: RouteSeo = {
  title: "Page Not Found | Miami Moving",
  description: HOME_DESCRIPTION,
  noindex: true,
  ogImage: DEFAULT_OG_IMAGE,
  jsonLd: [],
};

const normalize = (pathname: string) => pathname.replace(/\/+$/, "") || "/";

export function getRouteSeo(pathname: string): RouteSeo {
  const path = normalize(pathname);

  if (path === "/") {
    return {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      canonical: `${SITE_URL}/`,
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: [businessSchema(), faqSchema(homeFaqs)],
    };
  }

  if (path === "/blog") {
    const url = `${SITE_URL}/blog`;
    return {
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      canonical: url,
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: [
        businessSchema(),
        { "@context": "https://schema.org", "@type": "Blog", name: "Miami Moving Blog", url, publisher: { "@id": BUSINESS_ID } },
        breadcrumbSchema([HOME_CRUMB, { name: "Blog", url }]),
      ],
    };
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = getBlogPostBySlug(blogMatch[1]);
    if (!post) return NOT_FOUND_SEO;
    const url = `${SITE_URL}/blog/${post.slug}`;
    return {
      title: post.metaTitle,
      description: post.metaDescription,
      canonical: url,
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: [
        businessSchema(),
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishDate,
          author: { "@id": BUSINESS_ID },
          publisher: { "@id": BUSINESS_ID },
          mainEntityOfPage: url,
          url,
        },
        breadcrumbSchema([HOME_CRUMB, { name: "Blog", url: `${SITE_URL}/blog` }, { name: post.title, url }]),
      ],
    };
  }

  const slug = path.slice(1);
  if (slug.includes("/")) return NOT_FOUND_SEO;

  const service = getServiceBySlug(slug);
  if (service) {
    const url = `${SITE_URL}/${service.slug}`;
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      canonical: url,
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: [
        businessSchema(),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.metaDescription,
          url,
          provider: { "@id": BUSINESS_ID },
          areaServed: ["Miami-Dade", "Broward", "Palm Beach"].map((name) => ({ "@type": "AdministrativeArea", name: `${name} County, Florida` })),
        },
        breadcrumbSchema([HOME_CRUMB, { name: service.title, url }]),
      ],
    };
  }

  const city = getCityBySlug(slug);
  if (city) {
    const url = `${SITE_URL}/${city.slug}`;
    return {
      title: city.metaTitle,
      description: city.metaDescription,
      canonical: url,
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: [
        businessSchema({ areaServed: { "@type": "City", name: city.name } }),
        faqSchema(getCityFaqs(city)),
        breadcrumbSchema([HOME_CRUMB, { name: `${city.name} Movers`, url }]),
      ],
    };
  }

  return NOT_FOUND_SEO;
}

/** Every public, indexable route (used for prerendering and sitemap.xml). */
export function getIndexableRoutes(): { path: string; changefreq: string; priority: string }[] {
  return [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    ...services.map((s) => ({ path: `/${s.slug}`, changefreq: "monthly", priority: "0.9" })),
    ...cities.map((c) => ({ path: `/${c.slug}`, changefreq: "monthly", priority: "0.8" })),
    { path: "/blog", changefreq: "weekly", priority: "0.7" },
    ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.6" })),
  ];
}
