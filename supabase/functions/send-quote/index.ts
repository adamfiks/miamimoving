import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  moveDate?: string;
  fromLocation?: string;
  toLocation?: string;
  website?: string; // honeypot field
}

// Simple in-memory rate limiter (resets on cold start, good enough for edge functions)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
};

const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)\.]+$/;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, phone, email, moveDate, fromLocation, toLocation, website }: QuoteRequest = await req.json();

    // Honeypot check — bots will fill this hidden field
    if (website) {
      // Silently accept to not tip off bots, but don't send email
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Required field validation
    if (!name?.trim() || !phone?.trim() || !email?.trim()) {
      return new Response(
        JSON.stringify({ error: "Name, phone, and email are required." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Phone format validation
    if (!PHONE_REGEX.test(phone.trim())) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid phone number." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize and enforce length limits
    const safeName = escapeHtml(name.trim().slice(0, 100));
    const safePhone = escapeHtml(phone.replace(/[^\d\s\-\+\(\)\.]/g, "").slice(0, 20));
    const safeEmail = escapeHtml(email.trim().slice(0, 255));
    const safeMoveDate = moveDate ? escapeHtml(moveDate.trim().slice(0, 20)) : "";
    const safeFrom = fromLocation ? escapeHtml(fromLocation.trim().slice(0, 200)) : "";
    const safeTo = toLocation ? escapeHtml(toLocation.trim().slice(0, 200)) : "";

    const emailResponse = await resend.emails.send({
      from: "Miami Moving Quote <info@miami-moving.com>",
      to: ["info@miami-moving.com"],
      subject: `New Quote Request from ${safeName}`,
      html: `
        <h2>New Moving Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${safePhone}">${safePhone}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          ${safeMoveDate ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Move Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeMoveDate}</td></tr>` : ""}
          ${safeFrom ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Moving From</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeFrom}</td></tr>` : ""}
          ${safeTo ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Moving To</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeTo}</td></tr>` : ""}
        </table>
        <p style="color:#888;font-size:12px;margin-top:20px;">Sent from the Miami Moving website quote form.</p>
      `,
    });

    console.log("Quote email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending quote email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
