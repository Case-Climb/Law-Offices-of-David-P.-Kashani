import Link from "next/link";
import type { PracticeArea } from "@/content/practice/types";
import { practiceImages } from "@/lib/images";
import { site } from "@/lib/site";
import { CtaBand, FaqSection, ProcessTimeline, RelatedLinks } from "./blocks";
import { Hero } from "./Hero";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import { CallButton, CheckList, EstimateButton, Section, SectionHeading } from "./ui";

/** One consistent layout for all seven practice-area pages. */
export function PracticeTemplate({ area }: { area: PracticeArea }) {
  return (
    <>
      <Hero
        title={area.h1}
        subtitle={area.heroSub}
        crumbs={[
          { name: "Practice Areas", href: "/practice-areas" },
          { name: area.navLabel, href: `/${area.slug}` },
        ]}
        image={practiceImages[area.slug]}
      />

      {/* Intro + contact aside */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="prose-site">{area.intro}</div>
          <aside aria-label="Contact the firm" className="lg:pt-1">
            <div className="rounded-[3px] border-t-4 border-red bg-stone p-7 lg:sticky lg:top-28">
              <h2 className="h3">Talk to a lawyer about your case</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed">{site.feeLong}</p>
              <div className="mt-5 grid gap-3">
                <CallButton />
                <Link href="/contact" className="btn btn-outline-dark">
                  Free Case Review
                </Link>
                <EstimateButton />
              </div>
              <p className="mt-5 text-sm text-muted">We speak {site.languages.join(", ").replace(/, ([^,]*)$/, " and $1")}.</p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Topics specific to this practice area */}
      <Section tone="stone" labelledBy="topics-title">
        <Reveal>
          <SectionHeading id="topics-title" title={area.topics.title} intro={area.topics.intro} />
        </Reveal>
        <Stagger as="ul" className="grid gap-4 md:grid-cols-2">
          {area.topics.items.map((t, i) => (
            <StaggerItem
              as="li"
              key={t.title}
              className={
                "rounded-[3px] border border-line bg-paper p-6 sm:p-8" +
                (area.topics.items.length % 2 === 1 && i === area.topics.items.length - 1 ? " md:col-span-2" : "")
              }
            >
              <h3 className="h3">{t.title}</h3>
              <p className="mt-2.5 max-w-prose">{t.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
        {area.topics.note ? <p className="mt-6 max-w-3xl text-[0.9375rem] text-muted">{area.topics.note}</p> : null}
      </Section>

      {/* Causes + injuries (or an extra explainer) */}
      <Section tone="white">
        <Reveal className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="h2">{area.causes.title}</h2>
            <span className="rule-red mt-5 mb-7" aria-hidden="true" />
            <CheckList items={area.causes.items} />
          </div>
          {area.injuries ? (
            <div>
              <h2 className="h2">{area.injuries.title}</h2>
              <span className="rule-red mt-5 mb-7" aria-hidden="true" />
              <CheckList items={area.injuries.items} />
            </div>
          ) : null}
          {area.extra ? (
            <div>
              <h2 className="h2">{area.extra.title}</h2>
              <span className="rule-red mt-5 mb-7" aria-hidden="true" />
              <div className="space-y-4">{area.extra.body}</div>
            </div>
          ) : null}
        </Reveal>
      </Section>

      {/* Compensation */}
      <Section tone="dark" labelledBy="comp-title">
        <Reveal>
          <SectionHeading id="comp-title" tone="dark" title={area.compensation.title} intro={area.compensation.intro} />
        </Reveal>
        <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {area.compensation.items.map((c) => (
            <StaggerItem as="li" key={c.title} className="rounded-[3px] border border-ink-line bg-ink-raised p-6 sm:p-7">
              <h3 className="h3 text-white">{c.title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-mist">{c.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-7 max-w-3xl text-[0.9375rem] leading-relaxed text-mist">{area.compensation.note}</p>
      </Section>

      {/* Process */}
      <Section tone="stone" labelledBy="steps-title">
        <Reveal>
          <SectionHeading id="steps-title" title={area.stepsTitle} />
        </Reveal>
        <ProcessTimeline steps={area.steps} />
      </Section>

      {/* Checklist */}
      <Section tone="white" labelledBy="checklist-title">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 id="checklist-title" className="h2">
              {area.checklist.title}
            </h2>
            <span className="rule-red mt-5" aria-hidden="true" />
            {area.checklist.intro ? <p className="mt-6">{area.checklist.intro}</p> : null}
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {area.checklist.items.map((item, i) => (
              <li key={i} className="flex gap-5 py-4">
                <span aria-hidden="true" className="w-6 flex-none text-xl font-semibold text-red">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* California legal notes */}
      <Section tone="stone" labelledBy="law-title">
        <Reveal>
          <SectionHeading
            id="law-title"
            title="California law to know"
            intro="A short overview, not legal advice. Deadlines and rules turn on the facts, so consult an attorney about your own situation."
          />
          <div className={"grid gap-8 md:grid-cols-2 " + (area.legalNotes.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2")}>
            {area.legalNotes.map((n) => (
              <div key={n.title} className="border-t-2 border-ink pt-5">
                <h3 className="h3">{n.title}</h3>
                <p className="mt-2.5">{n.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <FaqSection faqs={area.faqs} title={`${area.navLabel === "Wrongful Death" ? "Wrongful death" : area.navLabel.replace(" Accidents", " accident")} FAQs`} />

      <RelatedLinks links={area.related} title="Related pages" />

      <CtaBand />
    </>
  );
}
