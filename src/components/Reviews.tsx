"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import type { Testimonial } from "@/content/testimonials";
import { site } from "@/lib/site";
import { cx } from "./ui";

/* ---------- Testimonial slider ---------- */

/**
 * Shows real client quotes one at a time. With no quotes it renders nothing.
 */
export function TestimonialSlider({ items, dark = false }: { items: Testimonial[]; dark?: boolean }) {
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const t = items[index];
  const go = (d: number) => setIndex((i) => (i + d + items.length) % items.length);

  return (
    <div role="group" aria-roledescription="carousel" aria-label="Client testimonials">
      <figure
        aria-live="polite"
        className={cx("rounded-[3px] border-l-4 border-red p-7 sm:p-10", dark ? "bg-ink-raised" : "bg-paper")}
      >
        <blockquote className={cx("text-xl leading-relaxed sm:text-2xl", dark ? "text-white" : "text-ink")}>
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className={cx("mt-6 text-[0.9375rem]", dark ? "text-mist" : "text-muted")}>
          <span className={cx("font-semibold", dark ? "text-white" : "text-ink")}>{t.name}</span>
          {t.context ? `, ${t.context}` : ""}
          {t.source ? ` (via ${t.source})` : ""}
        </figcaption>
      </figure>
      {items.length > 1 ? (
        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className={cx(
              "grid size-11 place-items-center rounded-full border",
              dark ? "border-white/40 text-white hover:border-white" : "border-ink text-ink hover:bg-ink hover:text-white",
            )}
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className={cx(
              "grid size-11 place-items-center rounded-full border",
              dark ? "border-white/40 text-white hover:border-white" : "border-ink text-ink hover:bg-ink hover:text-white",
            )}
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
          <p className={cx("text-sm", dark ? "text-mist" : "text-muted")}>
            {index + 1} of {items.length}
          </p>
        </div>
      ) : null}
      <p className={cx("mt-5 text-sm", dark ? "text-mist" : "text-muted")}>
        Testimonials reflect individual experiences. They are not a guarantee, warranty or prediction of the
        outcome of your legal matter.
      </p>
    </div>
  );
}

/* ---------- Review funnel ---------- */

type FeedbackStatus = "idle" | "sending" | "sent" | "error";

/**
 * "How was your experience?" module.
 * 4-5 stars: sends the visitor to the firm's Google review link.
 * 1-3 stars: opens a private feedback form that emails the firm.
 * The Google link stays available on the low-rating path so nobody is blocked
 * from posting a public review (see launch notes on review gating).
 */
export function ReviewFunnel() {
  const uid = useId();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<FeedbackStatus>("idle");
  const [missing, setMissing] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (!data.message?.trim()) {
      setMissing(true);
      form.querySelector<HTMLElement>('[name="message"]')?.focus();
      return;
    }
    setMissing(false);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "feedback", rating: String(rating), ...data }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean };
      setStatus(res.ok && json.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const shown = hover || rating;
  const labels = ["", "Poor", "Fair", "Okay", "Good", "Excellent"];

  return (
    <div className="rounded-[3px] border border-line bg-paper p-6 sm:p-9">
      <fieldset>
        <legend className="h3">How was your experience with our firm?</legend>
        <p className="mt-2 text-muted">Choose a rating from 1 to 5 stars.</p>
        <div className="mt-5 flex items-center gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="cursor-pointer rounded-[3px] p-1 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-red" onMouseEnter={() => setHover(n)}>
              <input
                type="radio"
                name={`${uid}-rating`}
                value={n}
                checked={rating === n}
                onChange={() => {
                  setRating(n);
                  setStatus("idle");
                }}
                className="sr-only"
              />
              <Star
                aria-hidden="true"
                className={cx("size-10 transition-colors sm:size-11", n <= shown ? "fill-red text-red" : "fill-transparent text-[#8b8b93]")}
                strokeWidth={1.5}
              />
              <span className="sr-only">
                {n} {n === 1 ? "star" : "stars"}, {labels[n]}
              </span>
            </label>
          ))}
          <span aria-hidden="true" className="ml-3 text-[0.9375rem] font-medium text-ink">
            {labels[shown]}
          </span>
        </div>
      </fieldset>

      <div aria-live="polite" className="mt-6">
        {rating >= 4 ? (
          <div className="border-t border-line pt-6">
            <p className="text-xl font-semibold text-ink">Thank you. We are glad we could help.</p>
            <p className="mt-2">
              Would you share that on Google? It takes about a minute and helps other injured people find us.
            </p>
            <a href={site.reviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-red mt-5">
              Leave a Google review
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        ) : null}

        {rating >= 1 && rating <= 3 ? (
          <div className="border-t border-line pt-6">
            {status === "sent" ? (
              <div role="status">
                <p className="text-xl font-semibold text-ink">Your feedback was sent to the firm</p>
                <p className="mt-2">Thank you for telling us. If you left contact details, we will follow up.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-4">
                <p className="text-xl font-semibold text-ink">We are sorry we fell short.</p>
                <p>
                  Tell us what went wrong. This message goes privately to the firm at {site.email} and is not
                  published.
                </p>
                <div>
                  <label htmlFor={`${uid}-message`} className="label">
                    What could we have done better?
                  </label>
                  <textarea
                    id={`${uid}-message`}
                    name="message"
                    rows={4}
                    className="field"
                    aria-invalid={missing || undefined}
                    aria-describedby={missing ? `${uid}-message-error` : undefined}
                  />
                  {missing ? (
                    <p id={`${uid}-message-error`} className="mt-1.5 text-sm font-medium text-red-deep">
                      Add a few words of feedback before sending.
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${uid}-name`} className="label">
                      Name <span className="font-normal text-muted">(optional)</span>
                    </label>
                    <input id={`${uid}-name`} name="name" type="text" autoComplete="name" className="field" />
                  </div>
                  <div>
                    <label htmlFor={`${uid}-email`} className="label">
                      Email or phone <span className="font-normal text-muted">(optional)</span>
                    </label>
                    <input id={`${uid}-email`} name="email" type="text" className="field" />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Company
                    <input name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                {status === "error" ? (
                  <p role="alert" className="rounded-[3px] border-l-4 border-red bg-stone p-4 text-[0.9375rem]">
                    Your feedback was not sent. Try again, or email{" "}
                    <a href={`mailto:${site.email}`} className="link">
                      {site.email}
                    </a>
                    .
                  </p>
                ) : null}
                <div>
                  <button type="submit" disabled={status === "sending"} className="btn btn-outline-dark disabled:opacity-70">
                    {status === "sending" ? "Sending feedback" : "Send private feedback"}
                  </button>
                </div>
              </form>
            )}
            <p className="mt-5 text-sm text-muted">
              You are also free to{" "}
              <a href={site.reviewUrl} target="_blank" rel="noopener noreferrer" className="link">
                post a public review on Google
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
