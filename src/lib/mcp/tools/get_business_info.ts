import { defineTool } from "@lovable.dev/mcp-js";
import { businessInfo } from "../data";

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description: "Return Miami Moving business info: name, phone, email, address, hours, website, and service-area summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(businessInfo, null, 2) }],
    structuredContent: { business: businessInfo },
  }),
});
