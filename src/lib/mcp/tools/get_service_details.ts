import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { mcpServices } from "../data";

export default defineTool({
  name: "get_service_details",
  title: "Get moving service details",
  description: "Return full details for one Miami Moving service by slug. Use `list_services` first to see valid slugs.",
  inputSchema: {
    slug: z.string().describe("Service slug, e.g. 'local-moving', 'commercial-moving', 'white-glove-moving'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = mcpServices.find((s) => s.slug === slug);
    if (!service) {
      return {
        content: [{ type: "text", text: `No service found with slug "${slug}". Call list_services to see valid slugs.` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(service, null, 2) }],
      structuredContent: { service },
    };
  },
});
