import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cities, getCityFaqs } from "../src/data/cityData";
import { services } from "../src/data/serviceData";
import { blogPosts } from "../src/data/blogData";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const templatePath = path.join(distDir, "index.html");
const SITE_URL = "https://miami-moving.com";
const PHONE = "+1-786-564-0471";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "1221 Brickell Ave, Suite 900",
  addressLocality: "Miami",
  addressRegion: "FL",
  postalCode: "33131",
  addressCountry: "US",
};

if (!fs.existsSync(templatePath)) {
  console.error(`[prerender] dist/index.html not found. Run "vite build" first.`);
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf-8");

type PageMeta = {
  slug: string;
  title: string;
  description: string;
  breadcrumbs: { name: string; url: string }[];
  jsonLd: Record<string, unknown> | Record<string, unknown>[];
};

function buildCityPage(city: (typeof cities)[number]): PageMeta {
  const faqs = getCityFaqs(city);
  return {
    slug: city.slug,
    title: city.metaTitle,
    description: city.metaDescription,
    breadcrumbs: [
      { name: "Home", url: `${SITE_URL}/` },
      { name: `${city.name} Movers`, url: `${SITE_URL}/${city.slug}` },
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "MovingCompany",
        name: `Miami Moving — ${city.name}`,
        description: city.metaDescription,
        url: `${SITE_URL}/${city.slug}`,
        telephone: PHONE,
        address: ADDRESS,
        areaServed: { "@type": "City", name: city.name },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

function buildServicePage(service: (typeof services)[number]): PageMeta {
  return {
    slug: service.slug,
    title: service.metaTitle,
    description: service.metaDescription,
    breadcrumbs: [
      { name: "Home", url: `${SITE_URL}/` },
      { name: service.title, url: `${SITE_URL}/${service.slug}` },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      url: `${SITE_URL}/${service.slug}`,
      provider: {
        "@type": "MovingCompany",
        name: "Miami Moving",
        telephone: PHONE,
        address: ADDRESS,
      },
    },
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderPage(page: PageMeta): string {
  let html = template;
  const canonical = `${SITE_URL}/${page.slug}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);

  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?">/s,
    `<meta name="description" content="${description}">`
  );
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/s,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/s,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?">/s,
    `<meta property="og:title" content="${title}">`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?">/s,
    `<meta property="og:description" content="${description}">`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?">/s,
    `<meta name="twitter:title" content="${title}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?">/s,
    `<meta name="twitter:description" content="${description}">`
  );

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: page.breadcrumbs.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const injected = `
    <script type="application/ld+json" id="seo-breadcrumb-jsonld">${JSON.stringify(breadcrumbLd)}</script>
    <script type="application/ld+json" id="seo-extra-jsonld">${JSON.stringify(page.jsonLd)}</script>
  </head>`;

  html = html.replace(/<\/head>/, injected);
  return html;
}

const BLOG_DESCRIPTION =
  "Moving tips, cost guides, and neighborhood insights for anyone moving in, out of, or across South Florida — from the team at Miami Moving.";

function buildBlogPostPage(post: (typeof blogPosts)[number]): PageMeta {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    slug: `blog/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription,
    breadcrumbs: [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Blog", url: `${SITE_URL}/blog` },
      { name: post.title, url },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishDate,
      author: { "@type": "Organization", name: "Miami Moving" },
      publisher: {
        "@type": "Organization",
        name: "Miami Moving",
        url: SITE_URL,
      },
      url,
    },
  };
}

const blogIndexPage: PageMeta = {
  slug: "blog",
  title: "South Florida Moving Tips & Resources | Miami Moving Blog",
  description: BLOG_DESCRIPTION,
  breadcrumbs: [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Miami Moving Blog",
    url: `${SITE_URL}/blog`,
  },
};

const pages: PageMeta[] = [
  ...cities.map(buildCityPage),
  ...services.map(buildServicePage),
  blogIndexPage,
  ...blogPosts.map(buildBlogPostPage),
];

let written = 0;
for (const page of pages) {
  const outDir = path.join(distDir, page.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), renderPage(page), "utf-8");
  written++;
}

console.log(`[prerender] Wrote ${written} static route(s).`);
