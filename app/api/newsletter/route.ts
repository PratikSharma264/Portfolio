import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // TODO: connect to a real email service before deploying, e.g. Mailchimp,
  // ConvertKit, or Buttondown. This stub just logs the signup so the form
  // works out of the box without extra setup.
  console.log("[newsletter] New subscriber:", parsed.data.email);

  return NextResponse.json({ ok: true });
}
