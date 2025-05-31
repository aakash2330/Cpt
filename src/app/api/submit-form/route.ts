import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const SubcontractorFormSchema = z.object({
  company_name: z.string().min(2),
  contact: z.string().min(2),
  phone_number: z.string().min(7),
  fax: z.string().optional(),
  email: z.string().email(),
  union_status: z.string().min(2),
  bidding_area: z.string().min(2),
  bondable: z.string().min(2),
  expertise: z.string().min(2),
  street_address: z.string().min(2),
  address_line_2: z.string().optional(),
  city: z.string().min(2),
  state_province_region: z.string().min(2),
  country: z.string().min(2),
  postal_zip_code: z.string().min(2),
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const parsedData = SubcontractorFormSchema.safeParse(formData);

    if (!parsedData.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: parsedData.error.format() },
        { status: 400 },
      );
    }

    const data = parsedData.data;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST, // e.g., 'smtp.gmail.com'
      port: Number(process.env.EMAIL_SERVER_PORT), // e.g., 465 or 587
      secure: process.env.EMAIL_SERVER_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER, // Your email address
        pass: process.env.EMAIL_SERVER_PASSWORD, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || data.email, // Sender address (can be your email or the form submitter's)
      to: "aakash2330@gmail.com", // Your email address
      subject: `New Subcontractor Form Submission: ${data.company_name}`,
      html: `
        <h1>New Subcontractor Pre-Qualification Form Submission</h1>
        <p><strong>Company Name:</strong> ${data.company_name}</p>
        <p><strong>Contact:</strong> ${data.contact}</p>
        <p><strong>Phone Number:</strong> ${data.phone_number}</p>
        <p><strong>Fax:</strong> ${data.fax || "N/A"}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Union Status:</strong> ${data.union_status}</p>
        <p><strong>Bidding Area:</strong> ${data.bidding_area}</p>
        <p><strong>Bondable:</strong> ${data.bondable}</p>
        <p><strong>Expertise:</strong> ${data.expertise}</p>
        <h2>Mailing Address:</h2>
        <p><strong>Street Address:</strong> ${data.street_address}</p>
        <p><strong>Address Line 2:</strong> ${data.address_line_2 || "N/A"}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>State/Province/Region:</strong> ${data.state_province_region}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Postal/Zip Code:</strong> ${data.postal_zip_code}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully and email sent!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    // It's good practice to not expose detailed error messages to the client
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { message: "Error submitting form", error: errorMessage },
      { status: 500 },
    );
  }
}

