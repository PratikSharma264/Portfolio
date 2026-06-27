import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  // TODO: wire this up to a real email provider before deploying.
  // The shape below works with Resend (https://resend.com) — install the
  // `resend` package, set RESEND_API_KEY in your environment, and uncomment:
  //
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Portfolio <noreply@yourdomain.com>",
  //   to: "sharmapratikabcd@gmail.com",
  //   subject: `[Portfolio] ${subject}`,
  //   replyTo: email,
  //   text: `From: ${name} <${email}>\n\n${message}`,
  // });

  if (!process.env.RESEND_API_KEY) {
    console.log("[contact] No email provider configured. Message received:", {
      name,
      email,
      subject,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
