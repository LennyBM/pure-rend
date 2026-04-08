import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure process.env.RESEND_API_KEY is available in the environment
const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key_for_build");

// Simple in-memory rate limiter: max 15 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 15;
const WINDOW_MS = 10 * 60 * 1000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }
  try {
    const data = await req.json();
    
    const { serviceType, propertyType, walls, name, phone, gdprConsent } = data;

    if (!name || !phone || !gdprConsent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Attempt to send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "PureRend Quotes <quotes@purerend.co.uk>",
      to: ["b.rplasteringsw@gmail.com"], // Your target destination email
      subject: `New Lead: Quote Request from ${escapeHtml(name)}`,
      html: `
        <h2>New Quote Request Received</h2>
        <p>A new lead has submitted a request from the website:</p>
        <hr />
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(name)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
          <li><strong>Service Needed:</strong> ${escapeHtml(serviceType || "Not specified")}</li>
          <li><strong>Property Type:</strong> ${escapeHtml(propertyType || "Not specified")}</li>
          <li><strong>Scope:</strong> ${escapeHtml(walls || "Not specified")}</li>
          <li><strong>GDPR Consent:</strong> ${gdprConsent ? "Yes" : "No"}</li>
        </ul>
        <hr />
        <p><small>This lead was captured via pure-rend.co.uk</small></p>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send quote request email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Quote request received successfully", data: emailData });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to process quote request" },
      { status: 500 }
    );
  }
}
