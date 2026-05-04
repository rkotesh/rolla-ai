import { NextResponse } from "next/server";
import { createLead } from "@/lib/db";
import nodemailer from "nodemailer";

async function sendEmailNotification(data: {
  name: string;
  email: string;
  business: string;
  message: string;
}) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const notifyEmail = process.env.NOTIFY_EMAIL || "srkotesh13@gmail.com";

  if (!gmailUser || !gmailPass || gmailPass === "your-16-char-app-password") {
    console.warn("📧 Email not sent: Gmail credentials not configured in .env");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const emailHtml = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="background:#534AB7;padding:28px 32px;">
        <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">Rolla. — New Lead 🎯</h1>
        <p style="color:#CECBF6;margin:6px 0 0;font-size:14px;">Someone just filled out your contact form</p>
      </div>
      <div style="padding:32px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;width:120px;">
              <span style="font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Name</span>
            </td>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:15px;font-weight:600;color:#111827;">${data.name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Email</span>
            </td>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;">
              <a href="mailto:${data.email}" style="font-size:15px;color:#534AB7;text-decoration:none;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;">Business</span>
            </td>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:15px;color:#374151;">${data.business || "—"}</span>
            </td>
          </tr>
        </table>
        <div style="margin-top:24px;">
          <p style="font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;margin:0 0 10px;">Their message</p>
          <div style="background:#f9fafb;border-left:3px solid #534AB7;border-radius:4px;padding:16px 20px;">
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0;">${data.message}</p>
          </div>
        </div>
        <div style="margin-top:28px;text-align:center;">
          <a href="mailto:${data.email}?subject=Re: Your automation enquiry&body=Hi ${data.name},"
             style="display:inline-block;background:#534AB7;color:#fff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 28px;border-radius:50px;">
            Reply to ${data.name} →
          </a>
        </div>
      </div>
      <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;text-align:center;">
        <p style="font-size:12px;color:#9ca3af;margin:0;">Rolla Automation Agency</p>
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

  console.log(`📧 Notification sent to ${notifyEmail}`);
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

    // 1. Save to Neon Postgres database
    const lead = await createLead({
      name,
      email,
      business: business || "",
      message,
    });

    // 2. Send email notification (non-blocking)
    sendEmailNotification({ name, email, business: business || "", message }).catch(
      (err) => console.error("Email notification failed:", err.message)
    );

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
