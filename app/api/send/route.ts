import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  
  try {
    const data = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>',
      to: ['njerijoan24@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
