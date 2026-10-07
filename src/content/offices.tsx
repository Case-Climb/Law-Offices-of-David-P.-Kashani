import Link from "next/link";
import type { ReactNode } from "react";
import type { RelatedLink } from "@/components/blocks";
import type { Faq } from "@/lib/seo";

export type OfficeContent = {
  slug: "los-angeles" | "san-francisco" | "oakland";
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSub: string;
  intro: ReactNode;
  gettingHere: string;
  practiceIntro: string;
  hazards: { title: string; intro: string; items: { title: string; body: string }[] };
  courts: { title: string; intro: string; items: { name: string; detail: string }[]; note: string };
  faqs: Faq[];
  related: RelatedLink[];
};

export const officeContent: OfficeContent[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "los-angeles",
    h1: "Los Angeles Personal Injury Lawyer",
    // The homepage owns "Los Angeles Personal Injury Lawyer" as its title; this one must differ.
    metaTitle: "Los Angeles Personal Injury Law Office",
    metaDescription:
      "Injured in Los Angeles? Visit Kashani Law at 3780 Selby Ave or call (323) 782-9605. Car, truck and rideshare claims. Free consultation, no fees unless we win.",
    heroSub:
      "Our main office is on the Westside, minutes from the I-10 and I-405. We represent injured people across Los Angeles County in English, Spanish and Farsi.",
    intro: (
      <>
        <p>
          Los Angeles asks a lot of the people who drive, ride and walk in it. Commutes are long, freeways
          are packed at almost any hour, and surface streets carry freeway volumes of traffic through
          residential neighborhoods. When someone is careless here, the consequences land on whoever happens
          to be nearby.
        </p>
        <p>
          The Law Offices of David P. Kashani has its main office at 3780 Selby Avenue on the Westside, near
          Palms and Culver City. <Link href="/attorney">David Kashani</Link> earned his undergraduate degree
          at UCLA, a few miles up the road. From here the firm
          represents injured people across Los Angeles County, from the Valley to the South Bay and from
          Santa Monica to the Eastside.
        </p>
        <p>
          We handle a claim from the first call to the last signature: investigating the crash, dealing with
          adjusters, organizing records and bills and, when an insurer will not pay what a claim is worth,
          filing suit in Los Angeles Superior Court. The consultation is free, and you pay no attorney’s fees
          unless we recover compensation for you.
        </p>
      </>
    ),
    gettingHere:
      "The office is a short drive from the I-10 and I-405 interchange. If travel is difficult after an injury, we can hold your consultation by phone or video.",
    practiceIntro:
      "From freeway pileups to crosswalk collisions, these are the cases our Los Angeles office handles most often.",
    hazards: {
      title: "Where Los Angeles crashes happen",
      intro:
        "Local knowledge matters when you are reconstructing a collision. These are the corridors and conditions we see again and again.",
      items: [
        {
          title: "I-405, the San Diego Freeway",
          body: "Stop-and-go traffic through the Sepulveda Pass and the Westside produces rear-end and chain-reaction collisions, often caused by a driver looking at a phone.",
        },
        {
          title: "I-10, the Santa Monica Freeway",
          body: "Heavy merging at the 405 and 110 interchanges, high speeds when traffic clears, and steady truck traffic heading to and from downtown.",
        },
        {
          title: "I-110, the Harbor Freeway",
          body: "Port-bound trucks share the road with commuters south of downtown. To the north, the older parkway section has short ramps and tight curves that leave little room for error.",
        },
        {
          title: "Surface streets",
          body: "Boulevards such as Venice, Sepulveda, Wilshire and Pico see left-turn crashes at busy intersections, drivers running late yellows, and pedestrians and cyclists hit by turning vehicles.",
        },
      ],
    },
    courts: {
      title: "Los Angeles courts",
      intro:
        "Most injury claims settle without a trial, but a case that does not settle has to be filed in the right court. In Los Angeles that usually means the Superior Court of California, County of Los Angeles.",
      items: [
        {
          name: "Stanley Mosk Courthouse",
          detail: "111 North Hill Street, downtown. The central civil courthouse of the Los Angeles Superior Court.",
        },
        {
          name: "Spring Street Courthouse",
          detail: "312 North Spring Street, downtown. Home to courtrooms that have handled many of the county’s personal injury cases.",
        },
        {
          name: "District courthouses",
          detail: "Depending on where a crash happened, a case may be heard in Santa Monica, Van Nuys, Long Beach, Torrance, Pasadena or another district.",
        },
        {
          name: "U.S. District Court, Central District of California",
          detail: "Some cases, such as those against out-of-state trucking companies, may be heard in federal court downtown.",
        },
      ],
      note: "Where a case is filed and assigned depends on court rules and the facts. Court assignments change from time to time, and we handle the filing for our clients.",
    },
    faqs: [
      {
        q: "Where is your Los Angeles office, and do I have to come in?",
        a: "The office is at 3780 Selby Ave, Los Angeles, CA 90034. You are welcome to visit, but you do not have to. Many clients start with a phone or video consultation, and documents can usually be signed electronically.",
      },
      {
        q: "Which court will hear my Los Angeles injury case?",
        a: "Most cases that go to litigation are filed in the Los Angeles Superior Court, at the Stanley Mosk Courthouse, the Spring Street Courthouse or a district courthouse depending on the case. Some are heard in federal court. Many claims settle before a lawsuit is ever filed.",
      },
      {
        q: "Do you handle cases outside the city of Los Angeles?",
        a: "Yes. We represent clients throughout Los Angeles County and across California, including Long Beach, Santa Monica, Pasadena, Glendale, Torrance, Orange County and the Inland Empire.",
      },
      {
        q: "Can I speak with someone in Spanish or Farsi?",
        a: "Yes. The firm works with clients in English, Spanish and Farsi. Tell us which language you prefer when you call.",
      },
      {
        q: "How soon should I call after an accident in Los Angeles?",
        a: "As soon as you reasonably can. Video from traffic cameras, buses and nearby businesses is often recorded over within days or weeks, and witnesses become harder to find. Early advice also helps you avoid mistakes with insurance adjusters.",
      },
    ],
    related: [
      { href: "/car-accidents", label: "Car accident lawyer", desc: "Rear-end, intersection and hit-and-run crashes." },
      { href: "/truck-accidents", label: "Truck accident lawyer", desc: "Port and freeway truck collisions." },
      { href: "/rideshare-accidents", label: "Uber and Lyft accident lawyer", desc: "Passengers, drivers and bystanders." },
      { href: "/san-francisco", label: "San Francisco office", desc: "95 3rd Street, 2nd Floor." },
      { href: "/oakland", label: "Oakland office", desc: "1423 Broadway, Suite 1009." },
      { href: "/areas-we-serve", label: "All California service areas", desc: "Cities and regions we serve." },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "san-francisco",
    h1: "San Francisco Personal Injury Lawyer",
    metaTitle: "San Francisco Personal Injury Lawyer",
    metaDescription:
      "Hurt in San Francisco? Kashani Law’s office at 95 3rd Street handles Muni, pedestrian, bicycle and car accident claims. Call (415) 888-5111 for a free consult.",
    heroSub:
      "A South of Market office for people injured on San Francisco streets: Muni and cable car riders, pedestrians, cyclists and drivers.",
    intro: (
      <>
        <p>
          San Francisco packs cars, buses, streetcars, cable cars, delivery vans, bikes, scooters and people
          on foot into forty-nine square miles of hills and narrow streets. Crashes here are less often
          high-speed freeway collisions and more often a driver turning across a crosswalk, a door opening
          into a bike lane, or a rideshare car stopping where it should not.
        </p>
        <p>
          Our San Francisco office is at 95 3rd Street, 2nd Floor, in the South of Market neighborhood, one
          block from Market Street. From here we represent injured people throughout the city and the
          Peninsula, and we work closely with our <Link href="/oakland">Oakland office</Link> on cases across
          the Bay.
        </p>
        <p>
          Many San Francisco injuries involve Muni or another public agency, which means timing matters. A
          claim against a public entity generally has to be presented in writing within six months. We sort
          out who is responsible, meet the deadlines and deal with the insurers and claims offices for you.
          The consultation is free, and you pay no attorney’s fees unless we recover compensation for you.
        </p>
      </>
    ),
    gettingHere:
      "The office is a short walk from the Montgomery Street and Powell Street stations, which serve both BART and Muni Metro. Phone and video consultations are available if you cannot travel.",
    practiceIntro:
      "Dense streets mean a different mix of cases. These are the claims our San Francisco office sees most.",
    hazards: {
      title: "Where San Francisco injuries happen",
      intro:
        "The city’s mix of transit, tourism and tight streets creates risks you do not see in most of California.",
      items: [
        {
          title: "Muni buses and light rail",
          body: "Passengers are thrown by hard stops and sharp turns, and Muni vehicles collide with cars, cyclists and pedestrians. Muni is run by a city agency, so government claim rules apply.",
        },
        {
          title: "Cable cars and historic streetcars",
          body: "Open sides, standing riders and sudden braking make boarding and riding riskier than they look. These lines are publicly operated too.",
        },
        {
          title: "Pedestrians",
          body: "Wide one-way streets in SoMa and the Tenderloin, busy crossings downtown and drivers turning on green all put people in crosswalks at risk.",
        },
        {
          title: "Bicycles and scooters",
          body: "Dooring, right-hook turns and delivery vehicles blocking bike lanes are common, and streetcar tracks can catch a wheel. Market Street and the routes feeding it see heavy bike traffic.",
        },
        {
          title: "Bay Area freeway traffic",
          body: "US-101, I-80 at the Bay Bridge approach and I-280 funnel regional traffic into a few on-ramps and off-ramps, where merging and sudden slowdowns cause crashes.",
        },
      ],
    },
    courts: {
      title: "San Francisco courts",
      intro:
        "If a claim cannot be resolved with the insurer or agency, it is generally filed with the Superior Court of California, County of San Francisco.",
      items: [
        {
          name: "Civic Center Courthouse",
          detail: "400 McAllister Street, across from City Hall. The San Francisco Superior Court hears civil cases here.",
        },
        {
          name: "U.S. District Court, Northern District of California",
          detail: "450 Golden Gate Avenue. Some cases involving out-of-state defendants are heard in federal court.",
        },
        {
          name: "Neighboring county courts",
          detail: "Crashes on the Peninsula or in Marin are usually filed in the superior court of the county where they happened.",
        },
      ],
      note: "Claims against the City and County of San Francisco, including Muni, usually begin with a written government claim before any lawsuit. Consult an attorney promptly about the deadline.",
    },
    faqs: [
      {
        q: "Where is your San Francisco office, and do I need to visit?",
        a: "The office is at 95 3rd Street, 2nd Floor, San Francisco, CA 94103, a block from Market Street. Visits are welcome but not required. We regularly hold consultations by phone or video.",
      },
      {
        q: "I was hurt on a Muni bus or a cable car. How long do I have to act?",
        a: "Muni is operated by a city agency. A written claim against a public entity generally must be presented within six months of the incident, which is much shorter than the two-year deadline for most injury lawsuits. Consult an attorney as soon as possible so the claim is filed on time.",
      },
      {
        q: "Which court handles San Francisco personal injury cases?",
        a: "Lawsuits arising in the city are generally filed in the San Francisco Superior Court, which hears civil cases at the Civic Center Courthouse on McAllister Street. Some cases go to federal court. Many claims resolve before a lawsuit is filed.",
      },
      {
        q: "Do you represent pedestrians and cyclists?",
        a: "Yes. Pedestrian and bicycle injuries make up a large share of serious crashes in San Francisco, and we represent people hit by cars, rideshare vehicles, delivery trucks and buses.",
      },
      {
        q: "Do you take cases elsewhere in the Bay Area?",
        a: "Yes. From our San Francisco and Oakland offices we represent clients across the Bay Area, including the Peninsula, the South Bay, Marin and the East Bay, and throughout California.",
      },
    ],
    related: [
      { href: "/bus-accidents", label: "Bus accident lawyer", desc: "Muni and other transit injuries." },
      { href: "/bicycle-accidents", label: "Bicycle accident lawyer", desc: "Dooring and bike-lane collisions." },
      { href: "/rideshare-accidents", label: "Uber and Lyft accident lawyer", desc: "Passengers, drivers and bystanders." },
      { href: "/oakland", label: "Oakland office", desc: "1423 Broadway, Suite 1009." },
      { href: "/los-angeles", label: "Los Angeles office", desc: "Our main office at 3780 Selby Ave." },
      { href: "/areas-we-serve", label: "All California service areas", desc: "Cities and regions we serve." },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "oakland",
    h1: "Oakland Personal Injury Lawyer",
    metaTitle: "Oakland Personal Injury Lawyer",
    metaDescription:
      "Injured in Oakland or the East Bay? Kashani Law at 1423 Broadway handles I-880 truck crashes, car and transit claims. Call (510) 955-1555. Free consultation.",
    heroSub:
      "A downtown Oakland office serving Alameda and Contra Costa counties, from I-880 truck crashes to collisions on East Bay streets.",
    intro: (
      <>
        <p>
          Oakland sits at the crossroads of the East Bay. Interstates 880, 580 and 980 and Highway 24 all
          converge here, the Port of Oakland sends container trucks onto the freeway around the clock, and
          BART and AC Transit carry commuters through downtown. That mix produces serious crashes: big rigs
          on the Nimitz, high-speed collisions on the MacArthur, and pedestrians and cyclists hit on wide
          arterial streets.
        </p>
        <p>
          Our Oakland office is at 1423 Broadway, Suite 1009, in the middle of downtown. From here we
          represent injured people across Alameda and Contra Costa counties, including Berkeley, San Leandro,
          Hayward, Fremont, Richmond and Walnut Creek, and we work alongside our{" "}
          <Link href="/san-francisco">San Francisco office</Link> on cases around the Bay.
        </p>
        <p>
          East Bay cases often involve commercial trucks or public agencies, and both call for quick action.
          Trucking records need to be preserved, and claims against a transit district or a city have short
          deadlines. We take care of that work and deal with the insurers so you can focus on recovering.
          The consultation is free, and you pay no attorney’s fees unless we recover compensation for you.
        </p>
      </>
    ),
    gettingHere:
      "The office is steps from the 12th Street Oakland City Center BART station and several AC Transit lines on Broadway. Phone and video consultations are available if you cannot travel.",
    practiceIntro:
      "Freight traffic and busy arterials shape the cases we see in the East Bay. Our Oakland office handles all of the following.",
    hazards: {
      title: "Where East Bay crashes happen",
      intro:
        "Each corridor has its own pattern. Knowing them helps us find the cameras, records and witnesses that prove what happened.",
      items: [
        {
          title: "I-880, the Nimitz Freeway",
          body: "The main freight route between the port, the airport and the South Bay. Because heavy trucks are restricted on part of I-580, they concentrate here alongside commuter traffic.",
        },
        {
          title: "I-580, the MacArthur Freeway",
          body: "Fast-moving traffic, curves through the Oakland hills and the interchange with I-80 and I-880 near the Bay Bridge approach all contribute to collisions.",
        },
        {
          title: "The Port of Oakland and industrial streets",
          body: "Container trucks, rail crossings and delivery traffic share streets in West Oakland and along the waterfront with residents, cyclists and commuters.",
        },
        {
          title: "East Bay surface streets",
          body: "Long arterials such as International Boulevard, Broadway, Telegraph Avenue and MacArthur Boulevard see speeding, bus traffic and pedestrians crossing many lanes.",
        },
      ],
    },
    courts: {
      title: "Alameda County courts",
      intro:
        "When an Oakland claim has to be litigated, it is generally filed with the Superior Court of California, County of Alameda.",
      items: [
        {
          name: "René C. Davidson Courthouse",
          detail: "1225 Fallon Street, near Lake Merritt. The main Oakland courthouse of the Alameda County Superior Court.",
        },
        {
          name: "Hayward Hall of Justice",
          detail: "24405 Amador Street, Hayward. Hears cases from the southern part of the county.",
        },
        {
          name: "U.S. District Court, Northern District of California",
          detail: "1301 Clay Street, Oakland. Some truck cases against out-of-state carriers are heard in federal court.",
        },
        {
          name: "Contra Costa County Superior Court",
          detail: "Crashes in Richmond, Concord, Walnut Creek and nearby cities are usually filed in Contra Costa County.",
        },
      ],
      note: "Where a case is filed depends on court rules and the facts of the crash. We handle the filing and tell you what to expect at each step.",
    },
    faqs: [
      {
        q: "Where is your Oakland office, and do I need to come in?",
        a: "The office is at 1423 Broadway, Suite 1009, Oakland, CA 94612, in downtown Oakland. You can meet us there, or we can hold the consultation by phone or video.",
      },
      {
        q: "I was hit by a truck on I-880. What should I do first?",
        a: "Get medical care, then speak with a lawyer quickly. Trucking companies control important evidence, including electronic logs and onboard data, and are only required to keep some of it for a limited time. A preservation demand sent early helps protect it. Avoid giving a statement to the trucking company’s insurer.",
      },
      {
        q: "Which court handles Oakland personal injury cases?",
        a: "Lawsuits arising in Oakland are generally filed in the Alameda County Superior Court, which has courthouses in Oakland and Hayward. Some cases are heard in federal court in Oakland. Many claims settle before a lawsuit is filed.",
      },
      {
        q: "I was injured on AC Transit or BART. Is there a special deadline?",
        a: "Yes. AC Transit and BART are public entities. A written claim generally must be presented within six months of the incident, far sooner than the two-year deadline for most injury lawsuits. Consult an attorney promptly.",
      },
      {
        q: "Do you serve other East Bay cities?",
        a: "Yes. Our Oakland office serves clients throughout Alameda and Contra Costa counties, including Berkeley, San Leandro, Hayward, Fremont, Richmond, Concord and Walnut Creek, and the firm takes cases across California.",
      },
    ],
    related: [
      { href: "/truck-accidents", label: "Truck accident lawyer", desc: "I-880 and port-related truck crashes." },
      { href: "/car-accidents", label: "Car accident lawyer", desc: "Freeway and surface-street collisions." },
      { href: "/bus-accidents", label: "Bus accident lawyer", desc: "AC Transit and other bus injuries." },
      { href: "/san-francisco", label: "San Francisco office", desc: "95 3rd Street, 2nd Floor." },
      { href: "/los-angeles", label: "Los Angeles office", desc: "Our main office at 3780 Selby Ave." },
      { href: "/areas-we-serve", label: "All California service areas", desc: "Cities and regions we serve." },
    ],
  },
];

export const getOfficeContent = (slug: string) => officeContent.find((o) => o.slug === slug);
