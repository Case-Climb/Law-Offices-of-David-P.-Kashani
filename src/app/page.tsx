import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Gavel, Languages, UserRound } from "lucide-react";
import { PostCard } from "@/components/BlogCards";
import {
  AttorneyPortrait,
  CtaBand,
  FirmNumbers,
  OfficeCards,
  PracticeCardGrid,
  ProcessTimeline,
  RecognitionStrip,
  TrustStrip,
} from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { TestimonialSlider } from "@/components/Reviews";
import { JsonLd, Section, SectionHeading } from "@/components/ui";
import { postMetas } from "@/content/posts";
import { testimonials } from "@/content/testimonials";
import { heroImage } from "@/lib/images";
import { legalServiceSchema, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Los Angeles Personal Injury Lawyer",
  description:
    "Los Angeles personal injury lawyer David P. Kashani fights for injured Californians. Offices in Los Angeles, San Francisco and Oakland. No fees unless we win.",
  path: "/",
});

const differentiators = [
  {
    icon: Building2,
    title: "Staffed local offices",
    body: "Los Angeles, San Francisco and Oakland. Real offices with people in them, close to the courts where your case would be heard.",
  },
  {
    icon: Gavel,
    title: "Trial-ready",
    body: "We prepare every case as if it will be tried. Insurers pay closer attention when the other side is ready for court.",
  },
  {
    icon: UserRound,
    title: "Personal attention",
    body: "You will know who is handling your case and how to reach them. We explain each step in plain English.",
  },
  {
    icon: Languages,
    title: "Multilingual",
    body: "We work with clients in English, Spanish and Farsi, so nothing is lost when you tell us what happened.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={legalServiceSchema()} />

      <Hero
        title="Los Angeles Personal Injury Lawyer"
        secondLine="Fighting for Injured Californians"
        subtitle="Insurance companies are built to pay as little as they can. We make them answer for what happened to you, from offices in Los Angeles, San Francisco and Oakland."
        image={heroImage}
      />
      <TrustStrip />

      {/* Intro */}
      <Section tone="white" labelledBy="intro-title">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <h2 id="intro-title" className="h2 max-w-[18ch]">
              You deserve better. We demand accountability.
            </h2>
            <span className="rule-red mt-5" aria-hidden="true" />
            <div className="prose-site mt-7">
              <p>
                After an accident, the insurance company moves fast. An adjuster calls within days, sounds
                sympathetic and asks for a recorded statement. Then comes an offer, often before you know how
                badly you are hurt or how long you will be out of work. The offer is built on the insurer’s
                numbers, not yours. Once you sign, the claim is closed for good.
              </p>
              <p>
                Insurers underpay because it works. Most people do not know what their claim includes, do not
                have the records to prove it and cannot afford to wait.
              </p>
              <p>
                That is where we come in. The Law Offices of David P. Kashani investigates what happened,
                gathers the medical and financial proof and puts a documented demand in front of the insurer.
                If the company still will not pay what the evidence supports, we are prepared to take the
                case to court. You can talk to us in English, Spanish or Farsi, and you pay no fees unless we
                win. See the <Link href="/practice-areas">cases we handle</Link> or{" "}
                <Link href="/contact">request a free case review</Link>.
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-3">
            <FirmNumbers />
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted">
              David P. Kashani is admitted to practice in California, New York, Massachusetts, Washington and
              Arizona. The firm serves clients across California.
            </p>
            <a
              href={site.estimateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark mt-6"
            >
              Instant Estimate<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Reveal>
        </div>
      </Section>

      {/* Practice areas */}
      <Section tone="stone" labelledBy="practice-title">
        <Reveal>
          <SectionHeading
            id="practice-title"
            title="Cases we handle"
            intro="If you were hurt on a California road, or lost someone who was, one of these pages explains how your claim works."
          />
        </Reveal>
        <PracticeCardGrid />
      </Section>

      {/* Why Kashani Law */}
      <Section tone="white" labelledBy="why-title">
        <Reveal>
          <SectionHeading id="why-title" title="Why Kashani Law" />
        </Reveal>
        <Stagger as="ul" className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d) => (
            <StaggerItem as="li" key={d.title}>
              <d.icon aria-hidden="true" className="size-8 text-red" strokeWidth={1.6} />
              <h3 className="h3 mt-4">{d.title}</h3>
              <p className="mt-2.5">{d.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* How it works */}
      <Section tone="dark" labelledBy="how-title">
        <Reveal>
          <SectionHeading
            id="how-title"
            tone="dark"
            title="How it works"
            intro="Four steps, and you only take the first one. We handle the rest and keep you informed."
          />
        </Reveal>
        <ProcessTimeline dark />
      </Section>

      {/* Attorney spotlight */}
      <Section tone="stone" labelledBy="attorney-title">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <AttorneyPortrait className="mx-auto w-full max-w-md" sizes="(min-width: 1024px) 34vw, 448px" />
          <div>
            <h2 id="attorney-title" className="h2">
              Meet David P. Kashani
            </h2>
            <span className="rule-red mt-5" aria-hidden="true" />
            <div className="mt-7 space-y-4">
              <p>
                David worked in personal injury firms for years before law school, then began his legal career
                as a securities and compliance lawyer. He came back to injury law after losing someone close
                to him in a tragic accident, and opened his own practice to protect injured people and their
                families.
              </p>
              <p>
                He holds a B.A. from UCLA and a J.D. from Whittier Law School, and is licensed in California,
                New York, Massachusetts, Washington and Arizona.
              </p>
            </div>
            <Link href="/attorney" className="btn btn-outline-dark mt-8">
              Read David’s story
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Recognitions */}
      <Section tone="white" labelledBy="recognition-title">
        <Reveal>
          <SectionHeading id="recognition-title" title="Recognition" />
          <RecognitionStrip />
        </Reveal>
      </Section>

      {/* Offices */}
      <Section tone="stone" labelledBy="offices-title">
        <Reveal>
          <SectionHeading
            id="offices-title"
            title="Three California offices"
            intro={
              <>
                Meet us in person or by phone or video. We take cases{" "}
                <Link href="/areas-we-serve" className="link">
                  anywhere in California
                </Link>
                .
              </>
            }
          />
        </Reveal>
        <OfficeCards />
      </Section>

      {/* Reviews: shown once src/content/testimonials.ts has real, client-approved quotes. */}
      {testimonials.length ? (
        <Section tone="white" labelledBy="reviews-title">
          <Reveal>
            <SectionHeading id="reviews-title" title="What clients say" />
            <div className="max-w-3xl">
              <TestimonialSlider items={testimonials} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.reviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-red">
                Leave us a review<span className="sr-only"> on Google (opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        </Section>
      ) : null}

      {/* Blog preview */}
      <Section tone="stone" labelledBy="blog-title">
        <Reveal>
          <SectionHeading
            id="blog-title"
            title="From the blog"
            intro="Plain-English answers to the questions injured people ask us most."
          />
        </Reveal>
        <Stagger as="ul" className="grid gap-6 md:grid-cols-3">
          {postMetas.slice(0, 3).map((p) => (
            <StaggerItem as="li" key={p.slug}>
              <PostCard post={p} />
            </StaggerItem>
          ))}
        </Stagger>
        <Link href="/blog" className="btn btn-outline-dark mt-9">
          All legal tips and news
        </Link>
      </Section>

      <CtaBand />
    </>
  );
}
