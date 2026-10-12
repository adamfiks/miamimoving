import { describe, expect, it } from "vitest";
import { services } from "@/data/serviceData";
import { cities } from "@/data/cityData";
import { blogPosts } from "@/data/blogData";
import { homeFaqs } from "@/data/homeFaqs";
import { getIndexableRoutes, getRouteSeo } from "./seo";
import { retiredRoutes, buildRedirectHtml } from "./redirects";

const forbidden = /long[- ]distance|interstate|state[- ]to[- ]state|cross[- ]country|out of state|nationwide|across the country|anywhere in the US|relocating (?:from|to) another state/i;

describe("owner-approved service scope", () => {
  it("offers six services including storage, never the retired service", () => {
    expect(services.map((s) => s.slug)).toEqual(["local-moving", "commercial-moving", "residential-moving", "packing-and-unpacking", "white-glove-moving", "storage-solutions"]);
  });

  it("limits service schema coverage to the three South Florida counties", () => {
    for (const s of services) {
      const schema = getRouteSeo(`/${s.slug}`).jsonLd.find((b) => b["@type"] === "Service");
      expect(schema?.areaServed).toEqual(["Miami-Dade", "Broward", "Palm Beach"].map((name) => ({ "@type": "AdministrativeArea", name: `${name} County, Florida` })));
    }
  });

  it("redirects the retired service to local moving and excludes it from the sitemap", () => {
    expect(retiredRoutes).toContainEqual({ from: "/long-distance-moving", to: "/local-moving" });
    expect(getIndexableRoutes().map((r) => r.path)).not.toContain("/long-distance-moving");
    const html = buildRedirectHtml("/local-moving", "https://miami-moving.com");
    expect(html).toContain('content="noindex,follow"');
    expect(html).toContain('href="https://miami-moving.com/local-moving"');
    expect(html).toContain('content="0;url=/local-moving"');
    expect(html).toContain('window.location.replace("/local-moving")');
  });

  it("contains no unsupported geographic service claims in page data", () => {
    const content = [...services, ...cities, ...blogPosts, ...homeFaqs].map((item) => {
      const { slug, relatedLinks, ...copy } = item as typeof blogPosts[number];
      return JSON.stringify(copy);
    }).join("\n");
    expect(content).not.toMatch(forbidden);
  });
});