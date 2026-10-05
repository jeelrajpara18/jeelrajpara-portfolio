import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'jeelrajpara18@gmail.com',
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject || 'New Message from ' + name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 16px; background-color: #ffffff;">
          
          <div style="margin-top: 20px; font-size: 14px; color: #3f3f46; line-height: 1.6;">
            <p style="margin: 6px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
            <p style="margin: 6px 0;"><strong>Service:</strong> ${service || 'General Inquiry'}</p>
            <p style="margin: 6px 0;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
          </div>

          <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Message Content:</p>
            <p style="margin: 0; font-size: 14px; color: #1e293b; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #a1a1aa; text-align: center;">
            Sent from your portfolio contact form • ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to deliver message via Resend.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! Thank you for reaching out.',
        data,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
