import { Clock, Languages, MapPin, Phone, TrainFront } from "lucide-react";
import type { OfficeContent } from "@/content/offices";
import { cityImages } from "@/lib/images";
import { officeSchema } from "@/lib/seo";
import { site, type Office } from "@/lib/site";
import {
  CtaBand,
  FaqSection,
  HoursLine,
  MapEmbed,
  PracticeCardGrid,
  RelatedLinks,
  directionsUrl,
} from "./blocks";
import { Hero } from "./Hero";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import { JsonLd, Section, SectionHeading } from "./ui";

/** Shared layout for the three office pages. */
export function OfficeTemplate({ office, content }: { office: Office; content: OfficeContent }) {
  return (
    <>
      <JsonLd data={officeSchema(office)} />
      <Hero
        title={content.h1}
        subtitle={content.heroSub}
        crumbs={[
          { name: "Areas We Serve", href: "/areas-we-serve" },
          { name: office.city, href: `/${office.slug}` },
        ]}
        image={cityImages[office.slug]}
      />

      {/* Local intro */}
      <Section tone="white">
        <div className="prose-site">{content.intro}</div>
      </Section>

      {/* Map + address, phone, hours */}
      <Section tone="stone" labelledBy="visit-title">
        <Reveal className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <MapEmbed office={office} />
          <div>
            <h2 id="visit-title" className="h2">
              Visit the {office.city} office
            </h2>
            <span className="rule-red mt-5" aria-hidden="true" />
            <dl className="mt-7 space-y-5">
              <div className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 size-5 flex-none text-red" />
                <div>
                  <dt className="font-semibold text-ink">Address</dt>
                  <dd>
                    <address className="not-italic">
                      {office.street}
                      <br />
                      {office.locality}, {office.region} {office.postalCode}
                    </address>
                    <a href={directionsUrl(office)} target="_blank" rel="noopener noreferrer" className="link text-[0.9375rem]">
                      Get directions<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone aria-hidden="true" className="mt-1 size-5 flex-none text-red" />
                <div>
                  <dt className="font-semibold text-ink">Phone</dt>
                  <dd>
                    <a href={office.phone.href} className="link">
                      {office.phone.display}
                    </a>{" "}
                    <span className="text-muted">({office.city} office)</span>
                    <br />
                    <a href={site.phone.href} className="link">
                      {site.phone.display}
                    </a>{" "}
                    <span className="text-muted">(toll-free)</span>
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
              <div className="flex gap-4">
                <TrainFront aria-hidden="true" className="mt-1 size-5 flex-none text-red" />
                <div>
                  <dt className="font-semibold text-ink">Getting here</dt>
                  <dd>{content.gettingHere}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Languages aria-hidden="true" className="mt-1 size-5 flex-none text-red" />
                <div>
                  <dt className="font-semibold text-ink">Languages</dt>
                  <dd>{site.languages.join(", ")}</dd>
                </div>
              </div>
            </dl>
          </div>
        </Reveal>
      </Section>

      {/* Practice areas served */}
      <Section tone="white" labelledBy="office-practice-title">
        <Reveal>
          <SectionHeading
            id="office-practice-title"
            title={`Practice areas served in ${office.city}`}
            intro={content.practiceIntro}
          />
        </Reveal>
        <PracticeCardGrid />
      </Section>

      {/* Local hazards */}
      <Section tone="dark" labelledBy="hazards-title">
        <Reveal>
          <SectionHeading id="hazards-title" tone="dark" title={content.hazards.title} intro={content.hazards.intro} />
        </Reveal>
        <Stagger as="ul" className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {content.hazards.items.map((h) => (
            <StaggerItem as="li" key={h.title} className="border-t border-ink-line pt-5">
              <h3 className="h3 text-white">{h.title}</h3>
              <p className="mt-2.5 text-mist">{h.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Local courts */}
      <Section tone="stone" labelledBy="courts-title">
        <Reveal>
          <SectionHeading id="courts-title" title={content.courts.title} intro={content.courts.intro} />
          <ul className="grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-2">
            {content.courts.items.map((c, i) => (
              <li
                key={c.name}
                className={
                  "bg-paper p-6 sm:p-7" +
                  (content.courts.items.length % 2 === 1 && i === content.courts.items.length - 1 ? " md:col-span-2" : "")
                }
              >
                <h3 className="h3">{c.name}</h3>
                <p className="mt-2">{c.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-[0.9375rem] text-muted">{content.courts.note}</p>
        </Reveal>
      </Section>

      <FaqSection faqs={content.faqs} title={`${office.city} office FAQs`} />

      <RelatedLinks links={content.related} />

      <CtaBand
        title={`Injured in ${office.city}? Talk to us today.`}
        body={`Call the ${office.city} office at ${office.phone.display} or toll-free at ${site.phone.display}. The consultation is free, and you owe us nothing unless we win your case.`}
      />
    </>
  );
}
