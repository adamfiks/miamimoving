import { describe, expect, it } from "vitest";
import { cities } from "@/data/cityData";
import { serviceAreasContent } from "@/data/serviceAreas";
import { businessSchema, getIndexableRoutes, getRouteSeo } from "./seo";

describe("South Florida service-area coverage", () => {
  it("covers exactly 20 areas including the eight new local destinations", () => {
    expect(cities).toHaveLength(20);
    for (const slug of ["brickell-movers", "coral-gables-movers", "doral-movers", "kendall-movers", "hialeah-movers", "coconut-grove-movers", "dania-beach-movers", "pembroke-pines-movers"]) {
      expect(cities.some((city) => city.slug === slug)).toBe(true);
    }
    expect(businessSchema().areaServed).toEqual(cities.map((city) => ({ "@type": "City", name: city.name })));
  });

  it("groups each area exactly once in the correct three local counties", () => {
    expect(serviceAreasContent.groups.map((group) => group.name)).toEqual(["Miami-Dade County", "Broward County", "Palm Beach County"]);
    const areas = serviceAreasContent.groups.flatMap((group) => group.areas.map((area) => area.slug));
    expect(areas.sort()).toEqual(cities.map((city) => city.slug).sort());
    expect(serviceAreasContent.groups[1].areas.map((area) => area.slug)).toContain("dania-beach-movers");
    expect(serviceAreasContent.groups[1].areas.map((area) => area.slug)).toContain("pembroke-pines-movers");
  });

  it("includes the hub and two new articles in exactly 43 indexable routes", () => {
    const routes = getIndexableRoutes().map((route) => route.path);
    expect(routes).toHaveLength(43);
    expect(new Set(routes).size).toBe(43);
    expect(routes).toContain("/service-areas");
    expect(routes).toContain("/blog/miami-condo-moving-rules-coi-elevator-reservations");
    expect(routes).toContain("/blog/moving-during-hurricane-season-south-florida");
  });

  it("shares the hub's four FAQ answers with its schema", () => {
    expect(serviceAreasContent.faqs).toHaveLength(4);
    const faq = getRouteSeo("/service-areas").jsonLd.find((block) => block["@type"] === "FAQPage");
    expect(faq?.mainEntity).toEqual(serviceAreasContent.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })));
  });
});