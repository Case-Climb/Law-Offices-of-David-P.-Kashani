import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, OfficeCards, RelatedLinks } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { Section, SectionHeading } from "@/components/ui";
import { courthouseImage } from "@/lib/images";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Areas We Serve in California",
  description:
    "Kashani Law serves injured clients across California from offices in Los Angeles, San Francisco and Oakland. See the cities and regions we cover statewide.",
  path: "/areas-we-serve",
});

const regions: { name: string; href?: string; body: string }[] = [
  {
    name: "Los Angeles",
    href: "/los-angeles",
    body: "Home to our main office and to some of the busiest freeways in the country, including the 405, the 10 and the 110. We represent clients from the Valley to the harbor.",
  },
  {
    name: "Long Beach",
    body: "Port traffic on the I-710 puts heavy trucks next to commuters every day. We handle truck, car and bicycle claims for people who live and work in Long Beach.",
  },
  {
    name: "Santa Monica",
    body: "Visitors, cyclists, scooters and Pacific Coast Highway traffic share a few square miles of coastline. Pedestrian and bicycle injuries are common here, and our main office is a short drive away.",
  },
  {
    name: "Pasadena",
    body: "The Arroyo Seco Parkway is one of the oldest freeways in the West, with short ramps that leave little margin for error. We serve clients in Pasadena and across the San Gabriel Valley.",
  },
  {
    name: "Glendale",
    body: "The 134, the 5 and the 2 meet around Glendale, and its downtown streets are busy with people on foot. We work with Glendale clients in English, Spanish and Farsi.",
  },
  {
    name: "Torrance",
    body: "Hawthorne, Sepulveda and Crenshaw boulevards carry heavy South Bay traffic past shopping centers and industrial sites. We represent people hurt in intersection and commercial vehicle crashes in Torrance and nearby cities.",
  },
  {
    name: "Orange County",
    body: "From the El Toro Y to the 55 and the 405, Orange County commutes are long and fast. We take cases in Anaheim, Santa Ana, Irvine, Huntington Beach and the rest of the county.",
  },
  {
    name: "San Diego",
    body: "I-5, I-8 and I-15 carry commuters, military traffic and visitors heading to and from the border. Clients in San Diego County can meet with us by phone or video from day one.",
  },
  {
    name: "Riverside and San Bernardino",
    body: "The Inland Empire is Southern California’s warehouse hub, and the trucks on the 10, 60, 91 and 215 show it. Truck and multi-vehicle collisions make up much of what we see from this region.",
  },
  {
    name: "Sacramento",
    body: "State workers, freight and Tahoe-bound travelers meet where I-5, I-80, US-50 and Highway 99 cross. We represent injured people in Sacramento and the surrounding valley communities.",
  },
  {
    name: "San Jose",
    body: "Silicon Valley commutes on 101, 280, 880 and 87 mix heavy congestion with expressway speeds. Our Bay Area offices serve clients in San Jose and throughout Santa Clara County.",
  },
  {
    name: "Fresno",
    body: "Highway 99 through the Central Valley carries agricultural trucks, and winter tule fog can cut visibility to almost nothing. We help people injured in Fresno and neighboring valley towns.",
  },
  {
    name: "Bakersfield",
    body: "Oil field traffic, farm equipment and long-haul trucks on Highway 99 and Highway 58 make Kern County roads demanding. We represent drivers, riders and families from Bakersfield and the southern valley.",
  },
  {
    name: "San Francisco Bay Area",
    href: "/san-francisco",
    body: "Our San Francisco and Oakland offices cover the region, from Marin and the Peninsula to the East Bay. Transit, bicycle, pedestrian and freeway cases all come through these two offices.",
  },
];

export default function AreasPage() {
  return (
    <>
      <Hero
        title="Serving Injured Clients Across California"
        subtitle="Three offices, one firm, the whole state. Wherever in California you were hurt, we can review your case by phone, by video or in person."
        crumbs={[{ name: "Areas We Serve", href: "/areas-we-serve" }]}
        image={courthouseImage}
      />

      <Section tone="white" labelledBy="statewide-title">
        <div className="max-w-3xl">
          <h2 id="statewide-title" className="h2">
            A statewide injury practice
          </h2>
          <span className="rule-red mt-5" aria-hidden="true" />
          <div className="prose-site mt-7">
            <p>
              The Law Offices of David P. Kashani represents injured people throughout the entire state of
              California. Our main office is in <Link href="/los-angeles">Los Angeles</Link>, with additional
              offices in <Link href="/san-francisco">San Francisco</Link> and{" "}
              <Link href="/oakland">Oakland</Link>. David Kashani is licensed to practice in every California
              state court, so a crash in Fresno or San Diego is handled with the same attention as one down
              the street from our front door.
            </p>
            <p>
              You do not need to live near an office to work with us. Consultations happen by phone or
              video, documents are signed electronically, and we work in English, Spanish and Farsi. See
              the <Link href="/practice-areas">types of cases we handle</Link>, or pick the office or region
              closest to you below.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="stone" labelledBy="office-cards-title">
        <Reveal>
          <SectionHeading
            id="office-cards-title"
            title="Our offices"
            intro="Each office page has a map, directions, local courts and the road hazards we see most in that area."
          />
        </Reveal>
        <OfficeCards />
      </Section>

      <Section tone="white" labelledBy="regions-title">
        <Reveal>
          <SectionHeading
            id="regions-title"
            title="Cities and regions we serve"
            intro="A sample of where our clients come from. If your city is not listed, we still serve it."
          />
        </Reveal>
        <Stagger as="ul" className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <StaggerItem as="li" key={r.name} className="border-t-2 border-ink pt-5">
              <h3 className="h3">
                {r.href ? (
                  <Link href={r.href} className="underline decoration-red decoration-2 underline-offset-4 hover:text-red">
                    {r.name}
                  </Link>
                ) : (
                  r.name
                )}
              </h3>
              <p className="mt-2.5">{r.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <RelatedLinks
        links={[
          { href: "/los-angeles", label: "Los Angeles personal injury lawyer", desc: "Main office, 3780 Selby Ave." },
          { href: "/san-francisco", label: "San Francisco personal injury lawyer", desc: "95 3rd Street, 2nd Floor." },
          { href: "/oakland", label: "Oakland personal injury lawyer", desc: "1423 Broadway, Suite 1009." },
          { href: "/practice-areas", label: "Practice areas", desc: "The cases we handle statewide." },
          { href: "/attorney", label: "Attorney David P. Kashani", desc: "Licensed in five states." },
          { href: "/contact", label: "Free case review", desc: "Tell us what happened." },
        ]}
      />

      <CtaBand title="Hurt anywhere in California? Call us." />
    </>
  );
}
