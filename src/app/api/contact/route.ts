import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const ContactFormSchema = z
  .object({
    form_type: z.string().min(1),
    name: z.string().min(2),
    email: z.string().optional(),
    company: z.string().optional(),
    project_type: z.string().optional(),
    location: z.string().optional(),
    scope_size: z.string().optional(),
    organisation_type: z.string().optional(),
    documents_required: z.string().optional(),
    message: z.string().optional(),
  })
  .passthrough();

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatOptional(label: string, value?: string) {
  return value?.trim() ? `${label}: ${value}` : null;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const parsedData = ContactFormSchema.safeParse(formData);

    if (!parsedData.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: parsedData.error.format() },
        { status: 400 },
      );
    }

    const {
      CONTACT_EMAIL_TO,
      EMAIL_TO,
      EMAIL_SERVER_HOST,
      EMAIL_SERVER_PORT,
      EMAIL_SERVER_SECURE,
      EMAIL_SERVER_USER,
      EMAIL_SERVER_PASSWORD,
      EMAIL_FROM,
      GMAIL_APP_PASSWORD,
      GMAIL_USER,
    } = process.env;

    const recipient = CONTACT_EMAIL_TO || EMAIL_TO || "enesmece1@gmail.com";
    const mailUser =
      EMAIL_SERVER_USER || GMAIL_USER || "aakash2330@gmail.com";
    const mailPassword = (EMAIL_SERVER_PASSWORD || GMAIL_APP_PASSWORD)?.replace(
      /\s/g,
      "",
    );
    const mailHost = EMAIL_SERVER_HOST || "smtp.gmail.com";
    const mailPort = Number(EMAIL_SERVER_PORT || 465);
    const mailSecure =
      EMAIL_SERVER_SECURE === undefined
        ? mailPort === 465
        : EMAIL_SERVER_SECURE === "true";

    if (!mailUser || !mailPassword) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const data = parsedData.data;
    const textLines = [
      `Form Type: ${data.form_type}`,
      `Name: ${data.name}`,
      formatOptional("Email", data.email),
      formatOptional("Company", data.company),
      formatOptional("Project Type", data.project_type),
      formatOptional("Location", data.location),
      formatOptional("Approximate Scope Size", data.scope_size),
      formatOptional("Organisation Type", data.organisation_type),
      formatOptional("Documents Required", data.documents_required),
      "",
      "Message:",
      data.message || "N/A",
    ].filter(Boolean);

    const htmlRows = textLines
      .filter((line) => line !== "")
      .map((line) => `<p>${escapeHtml(String(line))}</p>`)
      .join("");

    const transporter = nodemailer.createTransport({
      host: mailHost,
      port: mailPort,
      secure: mailSecure,
      auth: {
        user: mailUser,
        pass: mailPassword,
      },
    });

    await transporter.sendMail({
      from: EMAIL_FROM || mailUser,
      to: recipient,
      subject: `CPT Website Inquiry: ${data.form_type}`,
      text: textLines.join("\n"),
      html: `
        <h1>CPT Website Inquiry</h1>
        ${htmlRows}
      `,
    });

    return NextResponse.json(
      { message: "Form submitted successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending contact email:", error);

    return NextResponse.json(
      { message: "Error submitting form." },
      { status: 500 },
    );
  }
}
