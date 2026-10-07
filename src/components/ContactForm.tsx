"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { accidentTypes, site } from "@/lib/site";
import { cx } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "phone" | "email" | "message" | "consent", string>>;

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const phoneOk = (v: string) => v.replace(/\D/g, "").length >= 10;

export function ContactForm({ defaultType = "", compact = false }: { defaultType?: string; compact?: boolean }) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Enter your name.";
    if (!phoneOk(data.phone ?? "")) next.phone = "Enter a phone number with area code.";
    if (!emailOk(data.email ?? "")) next.email = "Enter an email address, like name@example.com.";
    if (!data.message?.trim()) next.message = "Tell us briefly what happened.";
    if (!data.consent) next.consent = "Check the box to confirm you have read the notice.";
    setErrors(next);

    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "case-review", ...data }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        setServerMessage(json.message ?? "");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[3px] border-l-4 border-red bg-stone p-6 sm:p-8">
        <h3 className="h3">Your case review request was sent</h3>
        <p className="mt-3">
          Someone from our office will contact you using the phone number or email you gave us. If you need
          to speak with us sooner, call{" "}
          <a href={site.phone.href} className="link">
            {site.phone.display}
          </a>
          .
        </p>
        <p className="mt-3 text-[0.9375rem] text-muted">
          Sending this form did not create an attorney-client relationship.
        </p>
      </div>
    );
  }

  const id = (name: string) => `${uid}-${name}`;
  const err = (name: keyof Errors) =>
    errors[name] ? (
      <p id={`${id(name)}-error`} className="mt-1.5 text-sm font-medium text-red-deep">
        {errors[name]}
      </p>
    ) : null;
  const aria = (name: keyof Errors) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className={cx("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor={id("name")} className="label">
            Full name
          </label>
          <input id={id("name")} name="name" type="text" autoComplete="name" required className="field" {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={id("phone")} className="label">
            Phone
          </label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" required className="field" {...aria("phone")} />
          {err("phone")}
        </div>
      </div>

      <div className={cx("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor={id("email")} className="label">
            Email
          </label>
          <input id={id("email")} name="email" type="email" autoComplete="email" required className="field" {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor={id("accidentType")} className="label">
            Type of accident
          </label>
          <select id={id("accidentType")} name="accidentType" defaultValue={defaultType} className="field">
            <option value="">Choose one</option>
            {accidentTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={id("message")} className="label">
          What happened?
        </label>
        <textarea id={id("message")} name="message" rows={5} required className="field" {...aria("message")} />
        <p className="mt-1.5 text-sm text-muted">
          A few sentences is enough. Please leave out anything confidential until we have spoken.
        </p>
        {err("message")}
      </div>

      {/* Honeypot: real people never see or fill this. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={id("consent")}
            name="consent"
            type="checkbox"
            value="yes"
            required
            className="mt-1 size-5 flex-none accent-red"
            {...aria("consent")}
          />
          <label htmlFor={id("consent")} className="text-[0.9375rem] leading-relaxed">
            I understand that submitting this form does not create an attorney-client relationship, and that I
            should not send confidential or time-sensitive information through it. I agree to be contacted
            about my inquiry and have read the{" "}
            <Link href="/privacy-policy" className="link">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        {err("consent")}
      </div>

      <div className="flex items-start gap-3">
        <input id={id("sms")} name="smsConsent" type="checkbox" value="yes" className="mt-1 size-5 flex-none accent-red" />
        <label htmlFor={id("sms")} className="text-[0.9375rem] leading-relaxed text-muted">
          Optional: I agree to receive text messages from {site.name} about my inquiry at the number above.
          Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.
        </label>
      </div>

      {status === "error" ? (
        <div role="alert" className="rounded-[3px] border-l-4 border-red bg-stone p-4 text-[0.9375rem]">
          <p className="font-semibold text-ink">Your message was not sent.</p>
          <p className="mt-1">
            {serverMessage || "The form could not reach our office."} Try again, or call{" "}
            <a href={site.phone.href} className="link">
              {site.phone.display}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div>
        <button type="submit" disabled={status === "sending"} className="btn btn-red w-full disabled:opacity-70 sm:w-auto">
          {status === "sending" ? "Sending your request" : "Request my free case review"}
        </button>
      </div>
    </form>
  );
}
