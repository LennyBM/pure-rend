import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure process.env.RESEND_API_KEY is available in the environment
const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key_for_build");

export async function POST(req: Request) {
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
      subject: `New Lead: Quote Request from ${name}`,
      html: `
        <h2>New Quote Request Received</h2>
        <p>A new lead has submitted a request from the website:</p>
        <hr />
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Service Needed:</strong> ${serviceType || "Not specified"}</li>
          <li><strong>Property Type:</strong> ${propertyType || "Not specified"}</li>
          <li><strong>Scope:</strong> ${walls || "Not specified"}</li>
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
