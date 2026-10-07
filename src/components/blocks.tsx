import Image from "next/image";
import Link from "next/link";
import {
  Bike,
  Bus,
  Car,
  CarTaxiFront,
  HeartHandshake,
  Languages,
  MapPin,
  Motorbike,
  Phone,
  Plus,
  Scale,
  ShieldCheck,
  Truck,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { faqSchema, type Faq } from "@/lib/seo";
import { cityImages, courthouseImage, practiceImages } from "@/lib/images";
import { hours, officeAddress, offices, practiceNav, recognitions, site, type Office } from "@/lib/site";
import { CountUp, Reveal, Stagger, StaggerItem } from "./Motion";
import {
  CallButton,
  CardBadge,
  CardImage,
  CaseReviewButton,
  JsonLd,
  Section,
  SectionHeading,
  cx,
} from "./ui";

/* ---------- Attorney portrait ---------- */

/** David's cut-out portrait on a dark panel. The file has a transparent background. */
export function AttorneyPortrait({
  className,
  sizes,
  preload = false,
}: {
  className?: string;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <div className={cx("relative aspect-[4/5] overflow-hidden rounded-[3px] bg-ink", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(34rem_22rem_at_85%_0%,rgb(200_32_47/0.38),transparent_65%)]"
      />
      <div className="absolute inset-x-0 top-[7%] bottom-0">
        <Image
          src="/images/david-kashani.webp"
          alt="Attorney David P. Kashani"
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover object-top"
        />
      </div>
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-red" />
    </div>
  );
}

/* ---------- CTA band ---------- */

export function CtaBand({
  title = "Find out where you stand. The call is free.",
  body = "Tell us what happened. We will explain your options in plain English, and you owe us nothing unless we win your case.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-band-title" className="on-dark relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60rem_26rem_at_100%_0%,rgb(200_32_47/0.28),transparent_62%)]"
      />
      <div className="container-site relative py-16 sm:py-20">
        <Reveal className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <h2 id="cta-band-title" className="h2 max-w-[22ch] text-white">
              {title}
            </h2>
            <span className="rule-red mt-5" aria-hidden="true" />
            <p className="lead mt-6 max-w-xl text-mist">{body}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-stretch">
            <CallButton />
            <CaseReviewButton />
            <p className="mt-1 text-sm text-mist">
              Prefer a quick number first?{" "}
              <a href={site.estimateUrl} target="_blank" rel="noopener noreferrer" className="link">
                Try the Instant Estimate tool
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ accordion with FAQPage schema ---------- */

export function FaqList({ faqs, schema = true }: { faqs: Faq[]; schema?: boolean }) {
  return (
    <div className="faq max-w-3xl">
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>
            <span>{f.q}</span>
            <Plus aria-hidden="true" className="faq-icon" />
          </summary>
          <div className="faq-answer">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
      {schema ? <JsonLd data={faqSchema(faqs)} /> : null}
    </div>
  );
}

export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  tone = "white",
  intro,
}: {
  faqs: Faq[];
  title?: string;
  tone?: "white" | "stone";
  intro?: ReactNode;
}) {
  return (
    <Section tone={tone} labelledBy="faq-title">
      <Reveal>
        <SectionHeading id="faq-title" title={title} intro={intro} />
        <FaqList faqs={faqs} />
      </Reveal>
    </Section>
  );
}

/* ---------- Process timeline ---------- */

export type Step = { title: string; body: string };

export const defaultSteps: Step[] = [
  {
    title: "Free consultation",
    body: "You tell us what happened. We tell you whether we think you have a claim and what the next few weeks look like.",
  },
  {
    title: "Investigation",
    body: "We collect the police report, photos, video, witness statements and medical records before they go missing.",
  },
  {
    title: "Negotiation",
    body: "We put a documented demand in front of the insurance company and push back on low offers.",
  },
  {
    title: "Trial if needed",
    body: "If the insurer will not be reasonable, we are prepared to file suit and present your case to a jury.",
  },
];

export function ProcessTimeline({ steps = defaultSteps, dark = false }: { steps?: Step[]; dark?: boolean }) {
  return (
    <Stagger
      as="ol"
      className={cx(
        "grid gap-x-8 gap-y-10 sm:grid-cols-2",
        steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
      )}
    >
      {steps.map((s, i) => (
        <StaggerItem as="li" key={s.title} className="relative">
          <div className="flex items-center gap-4">
            <span
              className={cx(
                "grid size-12 flex-none place-items-center rounded-full border-2 border-red text-xl font-semibold",
                dark ? "text-white" : "text-ink",
              )}
            >
              {i + 1}
            </span>
            <span
              aria-hidden="true"
              className={cx("hidden h-px flex-1 lg:block", dark ? "bg-ink-line" : "bg-line", i === steps.length - 1 && "lg:hidden")}
            />
          </div>
          <h3 className={cx("h3 mt-5", dark && "text-white")}>{s.title}</h3>
          <p className={cx("mt-2.5", dark && "text-mist")}>{s.body}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/* ---------- Practice area cards ---------- */

export const practiceIcons: Record<string, LucideIcon> = {
  "car-accidents": Car,
  "truck-accidents": Truck,
  "rideshare-accidents": CarTaxiFront,
  "bus-accidents": Bus,
  "bicycle-accidents": Bike,
  "motorcycle-accidents": Motorbike,
  "wrongful-death": HeartHandshake,
};

const practiceCardSizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw";

export function PracticeCardGrid({ exclude }: { exclude?: string }) {
  const items = practiceNav.filter((p) => p.slug !== exclude);
  return (
    <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p) => {
        const Icon = practiceIcons[p.slug];
        return (
          <StaggerItem as="li" key={p.slug} className="overflow-hidden rounded-[3px] border border-line bg-paper">
            <Link href={`/${p.slug}`} className="group relative flex h-full flex-col transition-colors hover:bg-stone">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-red transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
              <CardImage image={practiceImages[p.slug]} sizes={practiceCardSizes} />
              <div className="relative flex flex-1 flex-col p-6 pt-11 sm:p-7 sm:pt-11">
                <CardBadge icon={Icon} />
                <h3 className="h3">{p.label}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.short}</p>
                <span className="mt-auto pt-5 text-[0.9375rem] font-semibold text-red group-hover:text-red-deep">
                  {p.slug === "wrongful-death" ? "About wrongful death claims" : `About ${p.label.toLowerCase().replace(" accidents", " accident")} claims`}
                </span>
              </div>
            </Link>
          </StaggerItem>
        );
      })}
      <StaggerItem as="li" className="on-dark overflow-hidden rounded-[3px] bg-ink">
        <Link href="/contact" className="group flex h-full flex-col">
          <CardImage image={courthouseImage} sizes={practiceCardSizes} />
          <div className="relative flex flex-1 flex-col p-6 pt-11 sm:p-7 sm:pt-11">
            <CardBadge icon={Scale} />
            <h3 className="h3 text-white">Not sure where your case fits?</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-mist">
              Tell us what happened and we will tell you whether we can help.
            </p>
            <span className="mt-auto pt-5 text-[0.9375rem] font-semibold text-white underline decoration-red decoration-2 underline-offset-4">
              Request a free case review
            </span>
          </div>
        </Link>
      </StaggerItem>
    </Stagger>
  );
}

/* ---------- Trust strip ---------- */

const trustItems: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Languages, title: "English, Spanish, Farsi", body: "Talk to us in the language you are most comfortable in." },
  { icon: MessagesSquare, title: "Free consultation", body: "No cost and no obligation to find out your options." },
  { icon: ShieldCheck, title: "No fees unless we win", body: "We work on a contingency fee." },
  { icon: Scale, title: "Licensed in 5 states", body: "California, New York, Massachusetts, Washington and Arizona." },
];

export function TrustStrip() {
  return (
    <section aria-label="Why clients call us" className="on-dark border-t border-white/10 bg-ink-raised">
      <div className="container-site">
        <ul className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {trustItems.map((t, i) => (
            <li
              key={t.title}
              className={cx(
                "flex gap-4 py-6 lg:py-7",
                i % 2 === 1 && "sm:border-l sm:border-white/10 sm:pl-8",
                i >= 2 && "sm:border-t sm:border-white/10 lg:border-t-0",
                i === 2 && "lg:border-l lg:border-white/10 lg:pl-8",
                i < 3 && "lg:pr-6",
              )}
            >
              <t.icon aria-hidden="true" className="mt-1 size-6 flex-none text-red-soft" strokeWidth={1.7} />
              <div>
                <p className="font-semibold text-white">{t.title}</p>
                <p className="mt-0.5 text-[0.9375rem] leading-snug text-mist">{t.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Verified firm numbers (count-up) ---------- */

export function FirmNumbers({ dark = false }: { dark?: boolean }) {
  const items = [
    { n: 5, label: "state bar admissions" },
    { n: 3, label: "California offices" },
    { n: 3, label: "languages spoken" },
  ];
  return (
    <dl className={cx("grid grid-cols-3 gap-6 border-y py-7", dark ? "border-ink-line" : "border-line")}>
      {items.map((it) => (
        <div key={it.label} className="flex flex-col-reverse">
          <dt className={cx("mt-1 text-[0.9375rem] leading-snug", dark ? "text-mist" : "text-muted")}>{it.label}</dt>
          <dd className={cx("text-4xl font-semibold sm:text-5xl", dark ? "text-white" : "text-ink")}>
            <CountUp to={it.n} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Related links ---------- */

export type RelatedLink = { href: string; label: string; desc?: string };

export function RelatedLinks({
  title = "Related pages",
  links,
  tone = "stone",
}: {
  title?: string;
  links: RelatedLink[];
  tone?: "white" | "stone";
}) {
  return (
    <Section tone={tone} labelledBy="related-title">
      <Reveal>
        <SectionHeading id="related-title" title={title} />
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href} className="border-t border-line">
              <Link href={l.href} className="group block py-5">
                <span className="text-lg font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-red">
                  {l.label}
                </span>
                {l.desc ? <span className="mt-1 block text-[0.9375rem] leading-snug text-muted">{l.desc}</span> : null}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* ---------- Offices ---------- */

export const directionsUrl = (o: Office) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeAddress(o))}`;

export function OfficeCards({ dark = false, linkToPages = true }: { dark?: boolean; linkToPages?: boolean }) {
  return (
    <Stagger as="ul" className="grid gap-6 md:grid-cols-3">
      {offices.map((o) => (
        <StaggerItem
          as="li"
          key={o.slug}
          className={cx(
            "group flex flex-col overflow-hidden rounded-[3px] border",
            dark ? "border-ink-line bg-ink-raised" : "border-line bg-paper",
          )}
        >
          <CardImage image={cityImages[o.slug]} sizes="(min-width: 768px) 33vw, 100vw" />
          <div className="relative flex flex-1 flex-col p-6 pt-11 sm:p-7 sm:pt-11">
            <CardBadge icon={MapPin} />
            <h3 className={cx("h3", dark && "text-white")}>
              {o.city}
              {o.isMain ? <span className={cx("ml-2 font-sans text-sm font-medium", dark ? "text-mist" : "text-muted")}>Main office</span> : null}
            </h3>
            <address className={cx("mt-3 not-italic leading-relaxed", dark && "text-mist")}>
              {o.street}
              <br />
              {o.locality}, {o.region} {o.postalCode}
            </address>
            <a
              href={o.phone.href}
              className={cx("mt-4 inline-flex items-center gap-2 font-semibold", dark ? "text-white hover:underline" : "text-ink hover:text-red")}
            >
              <Phone aria-hidden="true" className={cx("size-4", dark ? "text-red-soft" : "text-red")} />
              {o.phone.display}
            </a>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6 text-[0.9375rem]">
              {linkToPages ? (
                <Link href={`/${o.slug}`} className="link">
                  {o.city} office details
                </Link>
              ) : null}
              <a href={directionsUrl(o)} target="_blank" rel="noopener noreferrer" className="link">
                Get directions<span className="sr-only"> to the {o.city} office (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/** Lazy-loaded Google Map. Fixed aspect ratio so it never shifts layout. */
export function MapEmbed({ office, className }: { office: Office; className?: string }) {
  return (
    <div className={cx("aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-line bg-stone sm:aspect-[16/10]", className)}>
      <iframe
        title={`Map of the ${office.city} office at ${officeAddress(office)}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(officeAddress(office))}&z=15&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="size-full border-0"
        allowFullScreen
      />
    </div>
  );
}


export function HoursLine() {
  return <span>{hours.display}</span>;
}

/* ---------- Recognition strip ---------- */

export function RecognitionStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div>
      <ul className={cx("grid gap-px overflow-hidden rounded-[3px] border sm:grid-cols-2 lg:grid-cols-4", dark ? "border-ink-line bg-ink-line" : "border-line bg-line")}>
        {recognitions.map((r) => (
          <li key={r.name} className={cx("p-6", dark ? "bg-ink" : "bg-paper")}>
            <p className={cx("text-lg leading-snug font-semibold", dark ? "text-white" : "text-ink")}>{r.name}</p>
            <p className={cx("mt-2 text-[0.9375rem]", dark ? "text-mist" : "text-muted")}>{r.years}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
