import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, FaqSection, PracticeCardGrid, ProcessTimeline, RelatedLinks } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Motion";
import { CheckList, Section, SectionHeading } from "@/components/ui";
import { courthouseImage } from "@/lib/images";
import { pageMeta, type Faq } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "California Personal Injury Practice Areas",
  description:
    "Car, truck, rideshare, bus, bicycle and motorcycle accidents and wrongful death. See the California injury cases Kashani Law handles. No fees unless we win.",
  path: "/practice-areas",
});

const handled = [
  "Collisions involving cars, SUVs and pickup trucks, including hit-and-run and uninsured driver claims",
  "Crashes with 18-wheelers, delivery trucks and other commercial vehicles",
  "Uber and Lyft accidents involving passengers, drivers and bystanders",
  "Injuries on public transit, school, charter and tour buses",
  "Cyclists hit by vehicles or thrown by dangerous road conditions",
  "Motorcycle crashes, including lane-splitting disputes",
  "Wrongful death and survival claims brought by families",
];

const faqs: Faq[] = [
  {
    q: "What types of cases does the firm handle?",
    a: "We focus on injuries from motor vehicle crashes: car, truck, rideshare, bus, bicycle and motorcycle accidents, and wrongful death claims arising from them. If your situation is not listed, call us. We will tell you whether we can help or suggest where to turn.",
  },
  {
    q: "How do I know if I have a case?",
    a: "In general, you may have a claim if someone else’s carelessness caused your injury and you suffered losses as a result, such as medical bills, lost income or pain. The quickest way to find out is a free consultation, where we review the facts and give you our view.",
  },
  {
    q: "What does it cost to hire the firm?",
    a: "The consultation is free. We work on a contingency fee, so you pay no attorney’s fees unless we recover compensation for you. The fee percentage and how case costs are handled are set out in a written agreement before we begin.",
  },
  {
    q: "How long does a personal injury case take?",
    a: "It varies. Straightforward claims can resolve within months of finishing medical treatment. Cases with serious injuries, disputed fault or several defendants can take longer, especially if a lawsuit is filed. We will give you a realistic estimate once we understand your case.",
  },
  {
    q: "Do you take cases outside Los Angeles?",
    a: "Yes. We have offices in Los Angeles, San Francisco and Oakland and represent clients throughout California. Consultations can be held by phone or video wherever you are in the state.",
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <Hero
        title="California Personal Injury Practice Areas"
        subtitle="We represent people hurt in crashes on California roads, and families who have lost someone in one. Choose the type of case to see how the claim works."
        crumbs={[{ name: "Practice Areas", href: "/practice-areas" }]}
        image={courthouseImage}
      />

      <Section tone="white" labelledBy="pa-intro-title">
        <div className="mb-12 max-w-3xl">
          <h2 id="pa-intro-title" className="h2">
            Focused on the cases we know
          </h2>
          <span className="rule-red mt-5" aria-hidden="true" />
          <div className="prose-site mt-7">
            <p>
              The Law Offices of David P. Kashani represents injured people against the drivers, companies
              and insurers responsible. The cases below are the core of the practice.
            </p>
            <p>
              Each kind of crash has its own rules, its own insurance questions and its own evidence. A
              rideshare claim turns on app data. A truck claim turns on federal records. A bus claim may
              have a six-month deadline. The pages below explain what matters in each, in plain English.
            </p>
          </div>
        </div>
        <PracticeCardGrid />
      </Section>

      <Section tone="stone" labelledBy="handle-title">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 id="handle-title" className="h2">
              What we handle
            </h2>
            <span className="rule-red mt-5" aria-hidden="true" />
            <p className="mt-6">
              From our offices in <Link href="/los-angeles" className="link">Los Angeles</Link>,{" "}
              <Link href="/san-francisco" className="link">San Francisco</Link> and{" "}
              <Link href="/oakland" className="link">Oakland</Link>, we take cases anywhere in California.
            </p>
          </div>
          <CheckList items={handled} />
        </Reveal>
      </Section>

      <Section tone="dark" labelledBy="pa-process-title">
        <Reveal>
          <SectionHeading
            id="pa-process-title"
            tone="dark"
            title="Our four-step process"
            intro="Every case is different, but the path is the same."
          />
        </Reveal>
        <ProcessTimeline dark />
      </Section>

      <Section tone="white" labelledBy="why-hire-title">
        <Reveal className="max-w-3xl">
          <h2 id="why-hire-title" className="h2">
            Why hire an injury attorney
          </h2>
          <span className="rule-red mt-5" aria-hidden="true" />
          <div className="prose-site mt-7">
            <p>
              You are allowed to handle an injury claim yourself, and for a minor fender-bender that can make
              sense. For anything involving real injuries, the insurance company has adjusters, lawyers and
              software working to limit what it pays. You have a stack of bills and a phone number.
            </p>
            <p>An attorney changes that balance by:</p>
            <ul>
              <li>identifying every party and every insurance policy that may be responsible</li>
              <li>collecting evidence before it is lost and meeting every deadline</li>
              <li>documenting the full cost of the injury, including future care and lost earning capacity</li>
              <li>negotiating from a position the insurer has to take seriously, and filing suit if it will not</li>
            </ul>
            <p>
              Hiring us costs nothing up front. Read more about{" "}
              <Link href="/attorney">attorney David P. Kashani</Link> or{" "}
              <Link href="/blog/how-much-is-my-personal-injury-case-worth">what goes into the value of a claim</Link>.
            </p>
          </div>
        </Reveal>
      </Section>

      <FaqSection faqs={faqs} tone="stone" title="Practice area FAQs" />

      <RelatedLinks
        tone="white"
        links={[
          { href: "/attorney", label: "Attorney David P. Kashani", desc: "Background, admissions and education." },
          { href: "/areas-we-serve", label: "Areas we serve", desc: "Three offices, all of California." },
          { href: "/blog", label: "Legal tips and news", desc: "Guides to California injury law." },
          { href: "/contact", label: "Free case review", desc: "Tell us what happened." },
        ]}
      />

      <CtaBand />
    </>
  );
}
