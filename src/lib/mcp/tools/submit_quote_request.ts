import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

// The send-quote function is public (verify_jwt = false) and forwards the
// submission to info@miami-moving.com via Resend. Env vars are read inside the
// handler to keep this file import-safe.

export default defineTool({
  name: "submit_quote_request",
  title: "Submit a moving quote request",
  description: "Submit a moving quote request on behalf of the caller. The Miami Moving team will follow up by phone and email. Provide the customer's name, phone, and email at minimum.",
  inputSchema: {
    name: z.string().describe("Customer's full name."),
    phone: z.string().describe("Customer's phone number, including area code."),
    email: z.string().describe("Customer's email address."),
    moveDate: z.string().optional().describe("Preferred move date in YYYY-MM-DD, if known."),
    fromLocation: z.string().optional().describe("Origin address or city."),
    toLocation: z.string().optional().describe("Destination address or city."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async ({ name, phone, email, moveDate, fromLocation, toLocation }) => {
    // Deno.env at runtime inside the generated Supabase Edge Function.
    const denoEnv = (globalThis as { Deno?: { env: { get: (k: string) => string | undefined } } }).Deno?.env;
    const supabaseUrl = denoEnv?.get("SUPABASE_URL");
    const anonKey = denoEnv?.get("SUPABASE_PUBLISHABLE_KEY") ?? denoEnv?.get("SUPABASE_ANON_KEY");

    if (!supabaseUrl || !anonKey) {
      return {
        content: [{ type: "text", text: "Server misconfiguration: quote endpoint is unavailable." }],
        isError: true,
      };
    }

    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/send-quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${anonKey}`,
          "apikey": anonKey,
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          moveDate: moveDate ?? "",
          fromLocation: fromLocation ?? "",
          toLocation: toLocation ?? "",
        }),
      });

      const bodyText = await response.text();

      if (!response.ok) {
        return {
          content: [{
            type: "text",
            text: `Quote submission failed (${response.status}): ${bodyText || response.statusText}`,
          }],
          isError: true,
        };
      }

      return {
        content: [{
          type: "text",
          text: `Quote request submitted for ${name}. Miami Moving will follow up shortly at ${phone} and ${email}.`,
        }],
        structuredContent: { ok: true },
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Quote submission error: ${message}` }],
        isError: true,
      };
    }
  },
});
