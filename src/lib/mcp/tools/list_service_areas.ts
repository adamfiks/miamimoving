import { defineTool } from "@lovable.dev/mcp-js";
import { mcpCities } from "../data";

export default defineTool({
  name: "list_service_areas",
  title: "List service areas",
  description: "List every South Florida city Miami Moving serves, with its slug, display name, and dedicated page URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const areas = mcpCities.map(({ slug, name, url }) => ({ slug, name, url }));
    return {
      content: [{ type: "text", text: JSON.stringify(areas, null, 2) }],
      structuredContent: { areas },
    };
  },
});
