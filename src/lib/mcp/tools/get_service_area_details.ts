import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { mcpCities } from "../data";

export default defineTool({
  name: "get_service_area_details",
  title: "Get service area details",
  description: "Return moving-service details for one South Florida city Miami Moving serves. Use `list_service_areas` for valid slugs.",
  inputSchema: {
    slug: z.string().describe("City slug, e.g. 'miami-movers', 'fort-lauderdale-movers', 'boca-raton-movers'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const city = mcpCities.find((c) => c.slug === slug);
    if (!city) {
      return {
        content: [{ type: "text", text: `No service area found with slug "${slug}". Call list_service_areas to see valid slugs.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(city, null, 2) }],
      structuredContent: { area: city },
    };
  },
});
