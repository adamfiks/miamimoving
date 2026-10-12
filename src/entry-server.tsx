import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { getRouteSeo, getIndexableRoutes, NOT_FOUND_SEO, SITE_URL } from "./lib/seo";

/** Build-time only: renders a route to static HTML for scripts/prerender.ts. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
