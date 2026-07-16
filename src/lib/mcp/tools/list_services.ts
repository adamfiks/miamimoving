import { defineTool } from "@lovable.dev/mcp-js";
import { mcpServices } from "../data";

export default defineTool({
  name: "list_services",
  title: "List moving services",
  description: "List all moving services offered by Miami Moving (local, commercial, residential, packing, white glove, storage) with slug, title, short description, and page URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(mcpServices, null, 2) }],
    structuredContent: { services: mcpServices },
  }),
});
