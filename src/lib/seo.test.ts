import { describe, it, expect } from "vitest";
import { getRouteSeo, getIndexableRoutes, BUSINESS_ID } from "./seo";
import { homeFaqs } from "@/data/homeFaqs";

const types = (p: string) => getRouteSeo(p).jsonLd.map((b) => b["@type"]);

describe("route SEO schema", () => {
  it("every indexable page has exactly one MovingCompany with the shared @id", () => {
    for (const r of getIndexableRoutes()) {
      const biz = getRouteSeo(r.path).jsonLd.filter((b) => b["@type"] === "MovingCompany");
      expect(biz).toHaveLength(1);
      expect(biz[0]["@id"]).toBe(BUSINESS_ID);
    }
  });

  it("never includes aggregateRating or an empty sameAs", () => {
    for (const r of getIndexableRoutes()) {
      const json = JSON.stringify(getRouteSeo(r.path).jsonLd);
      expect(json).not.toContain("aggregateRating");
      expect(json).not.toContain('"sameAs":[]');
    }
  });

  it("homepage FAQPage matches the visible homepage FAQs", () => {
    const faq = getRouteSeo("/").jsonLd.find((b) => b["@type"] === "FAQPage") as { mainEntity: { name: string }[] };
    expect(faq.mainEntity.map((q) => q.name)).toEqual(homeFaqs.map((f) => f.question));
  });

  it("city pages carry only their own FAQPage plus a breadcrumb", () => {
    expect(types("/miami-movers")).toEqual(["MovingCompany", "FAQPage", "BreadcrumbList"]);
  });

  it("service pages include FAQs while blog posts retain BlogPosting", () => {
    expect(types("/local-moving")).toEqual(["MovingCompany", "Service", "BreadcrumbList", "FAQPage"]);
    expect(types("/blog/how-much-does-it-cost-to-move-in-miami")).toEqual(["MovingCompany", "BlogPosting", "BreadcrumbList"]);
  });

  it("canonicals are https://miami-moving.com with no www or trailing slash", () => {
    for (const r of getIndexableRoutes()) {
      const c = getRouteSeo(r.path).canonical;
      expect(c).toBe(`https://miami-moving.com${r.path}`);
    }
  });
});
