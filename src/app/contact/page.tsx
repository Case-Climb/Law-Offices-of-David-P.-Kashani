import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";
import { CaseReviewForm } from "@/components/CaseReviewForm";
import { CtaBand, HoursLine, MapEmbed, OfficeCards, RelatedLinks } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Motion";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";
import { courthouseImage } from "@/lib/images";
import { pageMeta } from "@/lib/seo";
import { offices, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Free Case Review",
  description:
    "Request a free case review from the Law Offices of David P. Kashani. Call (888) 932-2626 or send a message. Offices in Los Angeles, San Francisco and Oakland.",
  path: "/contact",
});

export default function ContactPage() {
  const main = offices[0];
  return (
    <>
      <Hero
        title="Free Case Review"
        subtitle="Tell us what happened. We will review it and contact you to talk through your options. There is no cost and no obligation."
        crumbs={[{ name: "Contact", href: "/contact" }]}
        image={courthouseImage}
      />

      <Section tone="white" labelledBy="form-title">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2 id="form-title" className="h2">
              Send us the details
            </h2>
            <span className="rule-red mt-5 mb-8" aria-hidden="true" />
            <CaseReviewForm />
          </div>

          <aside aria-label="Other ways to reach us">
            <div className="rounded-[3px] border-t-4 border-red bg-stone p-7">
              <h2 className="h3">Prefer to talk?</h2>
              <dl className="mt-5 space-y-5">
                <div className="flex gap-4">
                  <Phone aria-hidden="true" className="mt-1 size-5 flex-none text-red" />
                  <div>
                    <dt className="font-semibold text-ink">Toll-free</dt>
                    <dd>
                      <a href={site.phone.href} className="link text-lg">
                        {site.phone.display}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail aria-hidden="true" className="mt-1 size-5 flex-none text-red" />
                  <div className="min-w-0">
                    <dt className="font-semibold text-ink">Email</dt>
                    <dd>
                      <a href={`mailto:${site.email}`} className="link break-words">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock aria-hidden="true" className="mt-1 size-5 flex-none text-red" />
                  <div className="min-w-0 flex-1">
                    <dt className="font-semibold text-ink">Hours</dt>
                    <dd>
                      <HoursLine />
                    </dd>
                  </div>
                </div>
              </dl>
              <p className="mt-6 text-[0.9375rem]">
                <span className="font-semibold text-ink">Languages:</span> {site.languages.join(", ")}
              </p>
            </div>

            <div className="mt-6 rounded-[3px] border border-line p-7">
              <h2 className="h3">Want a quick number first?</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed">
                The Instant Estimate tool gives a rough starting range in a couple of minutes. It is an
                estimate, not a prediction or a promise of any result.
              </p>
              <EstimateButton className="mt-5" />
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="stone" labelledBy="offices-title">
        <Reveal>
          <SectionHeading
            id="offices-title"
            title="Our offices"
            intro="Tap a phone number to call that office directly."
          />
        </Reveal>
        <OfficeCards />
        <Reveal className="mt-10">
          <h3 className="h3 mb-4">Main office: {main.street}, {main.locality}</h3>
          <MapEmbed office={main} className="sm:aspect-[21/9]" />
        </Reveal>
      </Section>

      <RelatedLinks
        tone="white"
        title="Before you call"
        links={[
          { href: "/practice-areas", label: "Practice areas", desc: "See the cases we handle." },
          { href: "/attorney", label: "Attorney David P. Kashani", desc: "Who you will be working with." },
          {
            href: "/blog/what-to-do-after-a-car-accident-in-california",
            label: "What to do after a car accident",
            desc: "Steps to protect your health and claim.",
          },
          {
            href: "/blog/how-long-do-i-have-to-file-a-personal-injury-claim-in-california",
            label: "How long do I have to file?",
            desc: "California deadlines explained.",
          },
          { href: "/areas-we-serve", label: "Areas we serve", desc: "Three offices, all of California." },
          { href: "/privacy-policy", label: "Privacy policy", desc: "How we handle what you send us." },
        ]}
      />

      <Section tone="stone" className="!py-10">
        <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-muted">
          Contacting the firm by form, phone, email or chat does not create an attorney-client relationship.
          Please do not send confidential information until an attorney-client relationship has been
          established in writing. See our{" "}
          <Link href="/disclaimer" className="link">
            disclaimer
          </Link>
          .
        </p>
      </Section>

      <CtaBand
        title="Would you rather talk it through? Call us."
        body="A short phone call is often the fastest way to find out whether you have a claim. The consultation is free, and you owe us nothing unless we win your case."
      />
    </>
  );
}
