import { describe, expect, it } from "vitest";
import { services } from "@/data/serviceData";
import { getIndexableRoutes, getRouteSeo } from "./seo";
import { retiredRoutes, buildRedirectHtml } from "./redirects";

describe("owner-approved service scope", () => {
  it("offers seven services including storage and condo moving, never the retired service", () => {
    expect(services.map((s) => s.slug)).toEqual(["local-moving", "commercial-moving", "residential-moving", "packing-and-unpacking", "white-glove-moving", "storage-solutions", "condo-high-rise-moving"]);
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

});