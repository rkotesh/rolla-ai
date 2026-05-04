import { NextResponse } from "next/server";
import { createLead } from "@/lib/db";
import nodemailer from "nodemailer";

// Send email notification to the agency owner
async function sendEmailNotification(data: {
  name: string;
  email: string;
  business: string;
  message: string;
}) {
  // Only attempt if credentials are configured
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const notifyEmail = process.env.NOTIFY_EMAIL || "srkotesh13@gmail.com";

  if (!gmailUser || !gmailPass || gmailPass === "your-gmail-app-password-here") {
    console.warn("📧 Email not sent: Gmail credentials not configured in .env");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const emailHtml = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
      
      <!-- Header -->
      <div style="background: #534AB7; padding: 28px 32px;">
        <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">
          Rolla<span style="opacity:0.7;">.</span> — New Lead 🎯
        </h1>
        <p style="color: #CECBF6; margin: 6px 0 0; font-size: 14px;">
          Someone just filled out your contact form
        </p>
      </div>

      <!-- Body -->
      <div style="padding: 32px;">
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; width: 120px;">
              <span style="font-size: 12px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
              <span style="font-size: 15px; font-weight: 600; color: #111827;">${data.name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
              <span style="font-size: 12px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
              <a href="mailto:${data.email}" style="font-size: 15px; color: #534AB7; text-decoration: none; font-weight: 500;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
              <span style="font-size: 12px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;">Business</span>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
              <span style="font-size: 15px; color: #374151;">${data.business || "—"}</span>
            </td>
          </tr>
        </table>

        <!-- Message -->
        <div style="margin-top: 24px;">
          <p style="font-size: 12px; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 10px;">Their message</p>
          <div style="background: #f9fafb; border-left: 3px solid #534AB7; border-radius: 4px; padding: 16px 20px;">
            <p style="font-size: 15px; color: #374151; line-height: 1.7; margin: 0;">${data.message}</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="margin-top: 28px; text-align: center;">
          <a href="mailto:${data.email}?subject=Re: Your automation enquiry&body=Hi ${data.name}," 
             style="display: inline-block; background: #534AB7; color: white; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 28px; border-radius: 50px;">
            Reply to ${data.name} →
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb; text-align: center;">
        <p style="font-size: 12px; color: #9ca3af; margin: 0;">
          Rolla Automation Agency · <a href="http://localhost:3000/admin/leads" style="color: #534AB7; text-decoration: none;">View all leads</a>
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Rolla Website" <${gmailUser}>`,
    to: notifyEmail,
    subject: `🎯 New lead from ${data.name} — Rolla`,
    html: emailHtml,
    replyTo: data.email,
  });

  console.log(`📧 Email notification sent to ${notifyEmail}`);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, business, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Save to database
    const lead = createLead({ name, email, business: business || "", message });

    // 2. Send email notification (non-blocking — don't fail the request if email fails)
    sendEmailNotification({ name, email, business: business || "", message }).catch((err) => {
      console.error("Email notification failed:", err.message);
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
