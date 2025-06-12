import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Soho Agency" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Lead from ${body.name}`,
    text: `
You've received a new lead:

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Business Name: ${body.business}
Website: ${body.website}
Country: ${body.country}
Challenges: ${body.challenges}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
