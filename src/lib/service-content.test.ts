import { describe, expect, it } from "vitest";
import { services } from "@/data/serviceData";
import { cities } from "@/data/cityData";
import { homeFaqs } from "@/data/homeFaqs";
import { getIndexableRoutes, getRouteSeo, businessSchema, SITE_URL } from "./seo";

describe("Phase 4 service coverage", () => {
  it("includes condo moving in the indexable routes", () => {
    expect(getIndexableRoutes().map((route) => route.path)).toContain("/condo-high-rise-moving");
  });

  it("lists exactly seven current services in the business catalog", () => {
    const catalog = businessSchema().hasOfferCatalog as { itemListElement: { itemOffered: { url: string } }[] };
    expect(catalog.itemListElement).toHaveLength(7);
    expect(catalog.itemListElement.map((offer) => offer.itemOffered.url)).toEqual(services.map((service) => `${SITE_URL}/${service.slug}`));
  });

  it("lists all served cities in the main business entity", () => {
    expect(businessSchema().areaServed).toEqual(cities.map((city) => ({ "@type": "City", name: city.name })));
  });

  it("uses the same service questions and answers for schema and rendering", () => {
    for (const service of services) {
      expect(service.faqs.length).toBe(service.slug === "condo-high-rise-moving" ? 6 : 5);
      const faq = getRouteSeo(`/${service.slug}`).jsonLd.find((block) => block["@type"] === "FAQPage") as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] };
      expect(faq.mainEntity.map((question) => ({ question: question.name, answer: question.acceptedAnswer.text }))).toEqual(service.faqs);
    }
  });

  it("has nine homepage FAQs with matching answers in schema", () => {
    expect(homeFaqs).toHaveLength(9);
    const faq = getRouteSeo("/").jsonLd.find((block) => block["@type"] === "FAQPage") as { mainEntity: { acceptedAnswer: { text: string } }[] };
    expect(faq.mainEntity.map((question) => question.acceptedAnswer.text)).toEqual(homeFaqs.map((question) => question.answer));
  });
});