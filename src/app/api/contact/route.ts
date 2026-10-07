import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Handles the case-review form and the private feedback form.
 *
 * Delivery uses Resend (https://resend.com) over plain fetch, so there is no
 * extra dependency. Set these in Vercel > Project > Settings > Environment Variables:
 *   RESEND_API_KEY      API key from Resend
 *   CONTACT_FROM_EMAIL  a sender on a domain verified in Resend, e.g. "Website <forms@dkashlaw.com>"
 *   CONTACT_TO_EMAIL    optional, defaults to the firm email in src/lib/site.ts
 *
 * Without RESEND_API_KEY the route logs in development and returns a clear
 * "not connected" error in production, so a lead is never silently dropped.
 */

type Body = Record<string, unknown>;

const str = (v: unknown, max = 4000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, message: "The form data could not be read." }, { status: 400 });
  }

  // Honeypot: pretend success so bots do not retry.
  if (str(body.company)) return NextResponse.json({ ok: true });

  const kind = str(body.kind, 40) === "feedback" ? "feedback" : "case-review";
  const name = str(body.name, 200);
  const phone = str(body.phone, 40);
  const email = str(body.email, 200);
  const accidentType = str(body.accidentType, 80);
  const message = str(body.message);
  const rating = str(body.rating, 2);
  const smsConsent = str(body.smsConsent, 5) === "yes";

  if (kind === "case-review") {
    if (!name || phone.replace(/\D/g, "").length < 10 || !emailOk(email) || !message || str(body.consent, 5) !== "yes") {
      return NextResponse.json(
        { ok: false, message: "Some required fields are missing or invalid." },
        { status: 422 },
      );
    }
  } else if (!message) {
    return NextResponse.json({ ok: false, message: "Add a few words of feedback first." }, { status: 422 });
  }

  const rows: [string, string][] =
    kind === "case-review"
      ? [
          ["Name", name],
          ["Phone", phone],
          ["Email", email],
          ["Accident type", accidentType || "Not selected"],
          ["Consent to contact", "Yes"],
          ["SMS consent", smsConsent ? "Yes" : "No"],
          ["Message", message],
        ]
      : [
          ["Rating", rating ? `${rating} of 5` : "Not given"],
          ["Name", name || "Not given"],
          ["Contact", email || phone || "Not given"],
          ["Feedback", message],
        ];

  const subject =
    kind === "case-review"
      ? `New case review request: ${name}${accidentType ? ` (${accidentType})` : ""}`
      : `Private client feedback${rating ? ` (${rating} of 5)` : ""}`;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contact] ${subject}\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`);
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { ok: false, message: "The online form is not connected to our inbox yet." },
      { status: 503 },
    );
  }

  const html = `<h2>${escapeHtml(subject)}</h2><table cellpadding="6">${rows
    .map(
      ([k, v]) =>
        `<tr><td valign="top"><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table><p>Sent from ${site.url}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      ...(emailOk(email) ? { reply_to: email } : {}),
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json(
      { ok: false, message: "Our mail service did not accept the message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
