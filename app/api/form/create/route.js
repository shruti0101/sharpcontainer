import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      organizationName,
      productName,
      quantity,
      message,
    } = body;

    // ✅ Validation
    if (
      !name ||
      !email ||
      !phone ||
      !organizationName ||
      !productName ||
      !quantity
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required details",
        },
        { status: 400 },
      );
    }

    // ✅ Mail transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_ADDRESS_PASSWORD,
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"shape container enquiry" <${process.env.EMAIL_ADDRESS}>`,
      to: process.env.EMAIL_ADDRESS,
      cc: "sales@sangamplastic.com",
      subject: `New Product Enquiry from ${name}`,

      text: `
New Enquiry Received

Name: ${name}
Email: ${email}
Phone: ${phone}
Organization: ${organizationName}
Product: ${productName}
Quantity: ${quantity}

Message:
${message}
      `,

      // ⭐ Professional HTML email
      html: `
        <h2>New Product Enquiry</h2>
        <table style="border-collapse:collapse">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Organization:</strong></td><td>${organizationName}</td></tr>
          <tr><td><strong>Product:</strong></td><td>${productName}</td></tr>
          <tr><td><strong>Quantity:</strong></td><td>${quantity}</td></tr>
        </table>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("MAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    );
  }
}
