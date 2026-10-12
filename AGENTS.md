# Project rules

- Per-route head data (title, description, canonical, JSON-LD) lives only in `src/lib/seo.ts`; both the build prerender and the client `RouteSEO` read it, so they can't drift.
- Production build = client build + SSR bundle (`src/entry-server.tsx`) + `scripts/prerender.ts`, which writes full-body static HTML per route, `404.html` and `sitemap.xml`; crawlers need real body text in the raw HTML.
- `App` has no router; `main.tsx` adds BrowserRouter (hydrates only when `#root[data-ssr-path]` matches the URL) and `entry-server.tsx` adds StaticRouter.
- Components must render identically on server and client: no `window`/`document` during render, dates formatted with an explicit timeZone, browser-only logic in effects.
- FAQ accordions use `forceMount` so answers are in the prerendered HTML; FAQPage schema is generated from the same data the page renders.
- No `aggregateRating` in self-served schema (Google review-snippet policy).
- New routes must be added to `getIndexableRoutes()` in `src/lib/seo.ts` so they are prerendered and listed in the sitemap.
- Retired service URLs are defined in `src/lib/redirects.ts`; generate noindex static redirect documents and matching client redirects, never sitemap entries, because hosting does not process custom redirect configuration.
