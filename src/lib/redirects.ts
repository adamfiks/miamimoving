/** Retired URLs stay reachable, but never appear in the indexable route list. */
export const retiredRoutes = [{ from: "/long-distance-moving", to: "/local-moving" }] as const;

export function buildRedirectHtml(destination: string, siteUrl: string): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><title>Local Moving | Miami Moving</title>
<meta name="robots" content="noindex,follow">
<link rel="canonical" href="${siteUrl}${destination}">
<meta http-equiv="refresh" content="0;url=${destination}">
<script>window.location.replace(${JSON.stringify(destination)})</script>
</head><body><a href="${destination}">Local Moving</a></body></html>`;
}