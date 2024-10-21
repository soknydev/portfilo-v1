import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, subject, message } = body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'soknyhacker@gmail.com',
    subject: subject,
    text: `Name: ${name}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully', info });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
