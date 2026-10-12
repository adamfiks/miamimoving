// Post-build step: renders every indexable route to static HTML (full body + per-route head),
// writes dist/404.html, and regenerates sitemap.xml from the same route list.
// Requires: `vite build` (client -> dist/) and `vite build --ssr src/entry-server.tsx --outDir dist-server`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Date of the last significant content/markup change for all pages. Update per page when content changes.
const LASTMOD = "2026-10-12";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath) || !fs.existsSync(serverEntry)) {
  console.error("[prerender] Missing dist/index.html or dist-server/entry-server.js. Run both builds first.");
  process.exit(1);
}

type Seo = {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  ogImage: string;
  jsonLd: Record<string, unknown>[];
};

const mod = (await import(pathToFileURL(serverEntry).href)) as {
  render: (url: string) => string;
  getRouteSeo: (p: string) => Seo;
  getIndexableRoutes: () => { path: string; changefreq: string; priority: string }[];
  NOT_FOUND_SEO: Seo;
  SITE_URL: string;
};

const template = fs.readFileSync(templatePath, "utf-8");

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const safeJson = (o: unknown) => JSON.stringify(o).replace(/</g, "\\u003c");

function buildHtml(routePath: string, seo: Seo, body: string): string {
  let html = template;
  const title = escapeAttr(seo.title);
  const desc = escapeAttr(seo.description);
  const set = (re: RegExp, value: string) => {
    if (!re.test(html)) throw new Error(`[prerender] head tag not found: ${re}`);
    html = html.replace(re, value);
  };

  set(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  set(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${desc}" />`);
  set(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`);
  set(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${desc}" />`);
  set(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`);
  set(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${desc}" />`);

  if (seo.canonical) {
    set(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${seo.canonical}" />`);
    set(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${seo.canonical}" />`);
  } else {
    html = html.replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/, "");
    html = html.replace(/\s*<meta property="og:url" content="[^"]*"\s*\/?>/, "");
  }

  const extra = [
    seo.noindex ? `<meta name="robots" content="noindex" />` : "",
    ...seo.jsonLd.map((b, i) => `<script type="application/ld+json" id="seo-jsonld-${i}">${safeJson(b)}</script>`),
  ]
    .filter(Boolean)
    .join("\n    ");
  html = html.replace("</head>", `    ${extra}\n  </head>`);

  set(/<div id="root"><\/div>/, `<div id="root" data-ssr-path="${escapeAttr(routePath)}">${body}</div>`);
  return html;
}

const routes = mod.getIndexableRoutes();
for (const r of routes) {
  const seo = mod.getRouteSeo(r.path);
  if (seo.noindex) throw new Error(`[prerender] Route ${r.path} resolved to a noindex page`);
  const html = buildHtml(r.path, seo, mod.render(r.path));
  const outDir = r.path === "/" ? distDir : path.join(distDir, r.path.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
}

// 404 page: rendered via a path no route claims; the client re-renders it from scratch.
fs.writeFileSync(
  path.join(distDir, "404.html"),
  buildHtml("/__not-found__", mod.NOT_FOUND_SEO, mod.render("/__not-found__/x")),
  "utf-8",
);

// sitemap.xml — same route list as the prerender.
const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...routes.map((r) =>
    [
      `  <url>`,
      `    <loc>${mod.SITE_URL}${r.path}</loc>`,
      `    <lastmod>${LASTMOD}</lastmod>`,
      `    <changefreq>${r.changefreq}</changefreq>`,
      `    <priority>${r.priority}</priority>`,
      `  </url>`,
    ].join("\n"),
  ),
  `</urlset>`,
  ``,
].join("\n");
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf-8");
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap, "utf-8");

console.log(`[prerender] Wrote ${routes.length} route(s) + 404.html + sitemap.xml (${routes.length} URLs).`);
