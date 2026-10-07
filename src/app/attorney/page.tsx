import type { Metadata } from "next";
import Link from "next/link";
import { AttorneyPortrait, CtaBand, RecognitionStrip, RelatedLinks } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { CheckList, JsonLd, Section, SectionHeading } from "@/components/ui";
import { courthouseImage } from "@/lib/images";
import { attorneySchema, pageMeta } from "@/lib/seo";
import { memberships, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Attorney David P. Kashani",
  description:
    "Meet David P. Kashani, a Los Angeles personal injury lawyer licensed in five states. UCLA and Whittier Law graduate who represents injured people and families.",
  path: "/attorney",
});

const expectations = [
  {
    title: "A straight assessment",
    body: "We tell you what we think of your claim, including the parts that may be difficult. You should make decisions with accurate information.",
  },
  {
    title: "Regular updates",
    body: "You will know where your case stands and what happens next. When something changes, you hear it from us.",
  },
  {
    title: "Your decision, always",
    body: "Whether to accept a settlement is your choice. We give you our advice and the reasons for it, and we follow your decision.",
  },
  {
    title: "No fees unless we win",
    body: "The consultation is free, and you pay no attorney’s fees unless we recover compensation for you. The terms are in writing from the start.",
  },
];

export default function AttorneyPage() {
  return (
    <>
      <JsonLd data={attorneySchema()} />
      <Hero
        title="Attorney David P. Kashani"
        subtitle="Personal injury lawyer, founder of the Law Offices of David P. Kashani, and licensed in California, New York, Massachusetts, Washington and Arizona."
        crumbs={[{ name: "Attorney David P. Kashani", href: "/attorney" }]}
        image={courthouseImage}
        aside={
          <AttorneyPortrait
            className="mx-auto w-full max-w-sm border border-white/15"
            sizes="(min-width: 1024px) 32vw, 384px"
            preload
          />
        }
      />

      {/* Personal story */}
      <Section tone="white" labelledBy="story-title">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h2 id="story-title" className="h2 max-w-[20ch]">
              A practice built on experience, and on loss
            </h2>
            <span className="rule-red mt-5" aria-hidden="true" />
            <div className="prose-site mt-7">
              <p>
                David Kashani did not come to personal injury law by chance. Before he ever went to law
                school, he spent several years working in personal injury firms. He saw up close what a
                serious injury does to a family: the bills, the missed paychecks, the uncertainty, and the
                long wait for an insurance company to do the right thing.
              </p>
              <p>
                After earning his law degree, David started his legal career in a different field, as a
                securities and compliance lawyer. That background in a heavily regulated industry still
                shapes how he approaches insurers: carefully, and with attention to detail.
              </p>
              <p>
                It was not the work he felt called to do. Then David lost someone close to him in a tragic
                accident, and the experience settled the question. He returned to the area of law where he
                had started, this time as an attorney, and opened his own practice with one purpose: to
                protect injured people and the families who depend on them.
              </p>
              <p>
                Today David leads the Law Offices of David P. Kashani, with offices in{" "}
                <Link href="/los-angeles">Los Angeles</Link>, <Link href="/san-francisco">San Francisco</Link>{" "}
                and <Link href="/oakland">Oakland</Link>. He represents clients across California in{" "}
                <Link href="/car-accidents">car</Link>, <Link href="/truck-accidents">truck</Link>, rideshare,
                bus, bicycle and motorcycle accident cases, and families bringing{" "}
                <Link href="/wrongful-death">wrongful death claims</Link>.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="rounded-[3px] border-t-4 border-red bg-stone p-7">
              <h2 className="h3">Bar admissions</h2>
              <ul className="mt-4 space-y-2">
                {site.barAdmissions.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-[2px] w-4 bg-red" />
                    {s}
                  </li>
                ))}
              </ul>

              <h2 className="h3 mt-9">Education</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <span className="font-semibold text-ink">Whittier Law School</span>
                  <br />
                  Juris Doctor (J.D.)
                </li>
                <li>
                  <span className="font-semibold text-ink">University of California, Los Angeles (UCLA)</span>
                  <br />
                  Bachelor of Arts (B.A.)
                </li>
              </ul>

              <h2 className="h3 mt-9">Languages at the firm</h2>
              <p className="mt-3">{site.languages.join(", ")}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Memberships */}
      <Section tone="stone" labelledBy="memberships-title">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 id="memberships-title" className="h2">
              Professional memberships
            </h2>
            <span className="rule-red mt-5" aria-hidden="true" />
            <p className="mt-6">
              David is a member of the state bars and the trial lawyer and bar associations listed here.
            </p>
          </div>
          <CheckList items={memberships} />
        </Reveal>
      </Section>

      {/* Recognitions */}
      <Section tone="white" labelledBy="recognition-title">
        <Reveal>
          <SectionHeading id="recognition-title" title="Recognition" />
          <RecognitionStrip />
          <p className="mt-5 max-w-3xl text-sm text-muted">
            Recognitions are awarded by private organizations using their own selection criteria. They are
            not endorsements by any court or state bar and do not predict the outcome of any case.
          </p>
        </Reveal>
      </Section>

      {/* What clients can expect */}
      <Section tone="dark" labelledBy="expect-title">
        <Reveal>
          <SectionHeading
            id="expect-title"
            tone="dark"
            title="What clients can expect"
            intro="An injury claim is stressful enough. Working with your lawyer should not add to it."
          />
        </Reveal>
        <Stagger as="ul" className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map((e) => (
            <StaggerItem as="li" key={e.title} className="border-t border-ink-line pt-5">
              <h3 className="h3 text-white">{e.title}</h3>
              <p className="mt-2.5 text-mist">{e.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <RelatedLinks
        title="Learn more about the firm"
        links={[
          { href: "/practice-areas", label: "Practice areas", desc: "The cases David and the firm handle." },
          { href: "/areas-we-serve", label: "Areas we serve", desc: "Three offices, all of California." },
          { href: "/wrongful-death", label: "Wrongful death claims", desc: "Help for families after a loss." },
          { href: "/blog", label: "Legal tips and news", desc: "Plain-English guides from the firm." },
          { href: "/contact", label: "Free case review", desc: "Tell us what happened." },
        ]}
      />

      <CtaBand title="Talk with David’s team about your case." />
    </>
  );
}
