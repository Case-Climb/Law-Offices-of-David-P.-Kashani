import Image from "next/image";
import Link from "next/link";
import { Phone, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { SiteImage } from "@/lib/images";
import { site } from "@/lib/site";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ---------- Card media ---------- */

/**
 * Photo header for a card. Decorative (empty alt): the card's heading and
 * link text already say where it goes. Put `group` on the card for the hover zoom.
 */
export function CardImage({ image, sizes }: { image: SiteImage; sizes: string }) {
  return (
    <div className="relative aspect-[16/10] flex-none overflow-hidden bg-ink">
      <Image
        src={image.src}
        alt=""
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );
}

/** Red icon tile that straddles the bottom edge of a CardImage. The parent must be `relative`. */
export function CardBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="absolute -top-6 left-6 grid size-12 place-items-center rounded-[3px] bg-red text-white shadow-[0_6px_16px_rgb(0_0_0/0.25)] sm:left-7">
      <Icon aria-hidden="true" className="size-6" strokeWidth={1.7} />
    </span>
  );
}

/* ---------- Layout ---------- */

type Tone = "white" | "stone" | "dark";

const toneClass: Record<Tone, string> = {
  white: "bg-paper",
  stone: "bg-stone",
  dark: "bg-ink text-mist on-dark",
};

export function Section({
  tone = "white",
  id,
  className,
  children,
  labelledBy,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(toneClass[tone], "py-16 sm:py-20 lg:py-24", className)}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  title,
  intro,
  tone = "white",
  align = "left",
  as: Tag = "h2",
}: {
  id?: string;
  title: string;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  const dark = tone === "dark";
  return (
    <div className={cx("mb-10 max-w-3xl lg:mb-12", align === "center" && "mx-auto text-center")}>
      <Tag id={id} className={cx("h2", dark && "text-white")}>
        {title}
      </Tag>
      <span className={cx("rule-red mt-5", align === "center" && "mx-auto")} aria-hidden="true" />
      {intro ? <div className={cx("lead mt-6", dark ? "text-mist" : "text-body")}>{intro}</div> : null}
    </div>
  );
}

/* ---------- Buttons ---------- */

export function CallButton({ className, size }: { className?: string; size?: "sm" }) {
  return (
    <a href={site.phone.href} className={cx("btn btn-red", size === "sm" && "btn-sm", className)}>
      <Phone aria-hidden="true" className="size-[1.05em]" strokeWidth={2.25} />
      <span>Call {site.phone.display}</span>
    </a>
  );
}

export function CaseReviewButton({
  onDark = true,
  className,
  label = "Free Case Review",
}: {
  onDark?: boolean;
  className?: string;
  label?: string;
}) {
  return (
    <Link href="/contact" className={cx("btn", onDark ? "btn-outline-light" : "btn-outline-dark", className)}>
      {label}
    </Link>
  );
}

export function EstimateButton({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <a
      href={site.estimateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cx("btn", onDark ? "btn-outline-light" : "btn-outline-dark", className)}
    >
      Instant Estimate
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/* ---------- Structured data ---------- */

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/* ---------- Small pieces ---------- */

export function CheckList({ items, dark = false }: { items: ReactNode[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.7em] h-[2px] w-4 flex-none bg-red"
          />
          <span className={dark ? "text-mist" : undefined}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
