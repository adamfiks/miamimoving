import { describe, expect, it } from "vitest";
import { cities, getCityFaqs } from "@/data/cityData";
import { getRouteSeo } from "./seo";

describe("city-owned FAQ data", () => {
  it("returns each city's own four or five stored FAQs without templating", () => {
    for (const city of cities) {
      expect(getCityFaqs(city)).toBe(city.faqs);
      expect(city.faqs.length).toBeGreaterThanOrEqual(4);
      expect(city.faqs.length).toBeLessThanOrEqual(5);
    }
  });

  it("uses exactly those questions and answers in the single city FAQ schema", () => {
    for (const city of cities) {
      const blocks = getRouteSeo(`/${city.slug}`).jsonLd.filter((block) => block["@type"] === "FAQPage");
      expect(blocks).toHaveLength(1);
      expect(blocks[0].mainEntity).toEqual(city.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })));
    }
  });
});