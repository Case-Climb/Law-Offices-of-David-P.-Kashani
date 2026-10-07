import Link from "next/link";
import { injuryCompensation, type PracticeArea } from "./types";

export const busAccidents: PracticeArea = {
  slug: "bus-accidents",
  navLabel: "Bus Accidents",
  h1: "California Bus Accident Lawyer",
  metaTitle: "California Bus Accident Lawyer",
  metaDescription:
    "Hurt on or by a public transit, school, charter or tour bus in California? Government claim deadlines can be short. Free consultation, no fees unless we win.",
  heroSub:
    "Transit, school, charter and tour bus injuries. When a public agency runs the bus, the deadline to act can be as short as six months, so call early.",
  formType: "Bus accident",

  intro: (
    <>
      <p>
        Passengers on a bus have very little protection. Most buses have no seat belts, many riders stand,
        and a hard stop or a sideswipe can throw people into poles, seats and each other. When a bus hits a
        car, a cyclist or someone in a crosswalk, its size does the rest.
      </p>
      <p>
        California treats bus operators as common carriers. A company or agency that carries passengers for
        a fare must use the utmost care for their safety, a higher standard than the ordinary care other
        drivers owe. That standard helps injured passengers. But bus cases come with a serious complication:
        many buses are run by public agencies, and claims against a government entity follow shorter
        deadlines and stricter procedures than other injury claims.
      </p>
      <p>
        The Law Offices of David P. Kashani represents passengers, motorists, pedestrians and cyclists hurt
        in bus crashes anywhere in California, with offices in{" "}
        <Link href="/los-angeles">Los Angeles</Link>, <Link href="/san-francisco">San Francisco</Link> and{" "}
        <Link href="/oakland">Oakland</Link>. We work out who operates the bus, who maintains it and which
        rules apply, and we get the required notices filed on time. The consultation is free, and you pay no
        attorney’s fees unless we recover compensation for you.
      </p>
    </>
  ),

  topics: {
    title: "Bus accident cases we handle",
    items: [
      {
        title: "Public transit buses",
        body: "City and regional systems are public entities. A claim against one usually begins with a written government claim, not a lawsuit, and the time to present it is short.",
      },
      {
        title: "School buses",
        body: "School districts are public entities too, and some contract with private bus companies. The law gives injured children certain protections, but government claim deadlines can still apply. Get advice promptly.",
      },
      {
        title: "Charter and tour buses",
        body: "Private motor coaches are subject to federal and state rules on driver hours, inspections and insurance. Out-of-state operators and tour companies can add parties and insurers to the case.",
      },
      {
        title: "Injuries on board without a collision",
        body: "Riders are hurt when a bus brakes hard, pulls away before they are seated, or closes its doors on them. A passenger can have a claim even if the bus never hit anything.",
      },
      {
        title: "People outside the bus",
        body: "Drivers, pedestrians and cyclists struck by a bus have claims against the operator. Buses have large blind spots and make wide turns, and many carry cameras that record what happened.",
      },
    ],
  },

  causes: {
    title: "Common causes of bus accidents",
    items: [
      "Driver fatigue, distraction or inexperience",
      "Wide turns and blind-spot collisions with cars, bikes and pedestrians",
      "Hard braking or acceleration with standing passengers",
      "Running behind schedule and speeding to catch up",
      "Poorly maintained brakes, tires, doors or steps",
      "Inadequate driver screening and training",
      "Unsafe stop locations and boarding areas",
      "Other motorists cutting off or colliding with the bus",
    ],
  },
  injuries: {
    title: "Types of injuries",
    items: [
      "Head injuries from striking poles, seats or windows",
      "Neck and back injuries",
      "Broken wrists, arms and hips, especially among older riders",
      "Shoulder and knee injuries from falls inside the bus",
      "Cuts and facial injuries from broken glass",
      "Spinal cord injuries",
      "Crush injuries to pedestrians and cyclists",
    ],
  },

  compensation: {
    title: "Compensation you may be entitled to",
    intro:
      "Whether the bus was public or private, an injured person can seek payment for the losses the crash caused. Depending on the facts, a claim may include:",
    items: injuryCompensation,
    note: "Claims against public agencies are subject to special rules and procedures, and no outcome is guaranteed in any case. The value of a claim depends on fault, the injuries and the evidence. We will tell you plainly how we see yours.",
  },

  stepsTitle: "How a bus accident claim works",
  steps: [
    {
      title: "Free consultation",
      body: "We go over what happened and tell you which deadlines we think apply.",
    },
    {
      title: "Identify the operator",
      body: "We confirm who owns, operates and maintains the bus and, when a public agency is involved, present the government claim on time.",
    },
    {
      title: "Investigate and negotiate",
      body: "We request onboard video, driver records and maintenance files, document your injuries and demand fair payment.",
    },
    {
      title: "Trial if needed",
      body: "If the agency or insurer rejects a fair resolution, we are prepared to file suit and take the case to court.",
    },
  ],

  checklist: {
    title: "What to do after a bus accident",
    items: [
      "Tell the driver you are hurt and ask that the incident be reported. Call 911 if anyone needs urgent care.",
      "Write down the bus number, route, operator, time and location.",
      "Get names and contact details for the driver, other passengers and witnesses.",
      "Photograph the bus, the scene and your injuries.",
      "Keep your ticket, transit card record or booking confirmation.",
      "See a doctor promptly, even for what seems like a minor injury.",
      "Do not sign forms or give a recorded statement to the agency’s claims administrator before getting advice.",
      "Contact a lawyer quickly. Government deadlines start running on the day of the incident.",
    ],
  },

  legalNotes: [
    {
      title: "Government claim deadlines",
      body: "A claim for injury against a California public entity generally must be presented in writing within six months of the incident. If the agency rejects it, the time to file a lawsuit can be as short as six months from the rejection notice. These rules are strict, so consult an attorney as soon as you can.",
    },
    {
      title: "Private operators",
      body: "Claims against private charter and tour companies generally follow the two-year deadline for personal injury lawsuits. It is not always obvious whether an operator is public or private, which is one more reason to get advice early.",
    },
    {
      title: "Common carrier duty and shared fault",
      body: "Bus operators owe passengers the utmost care. California’s comparative fault rule still applies, so an operator may argue a passenger was not holding on or a pedestrian crossed against the light. Fault is then divided by percentage.",
    },
  ],

  faqs: [
    {
      q: "How long do I have to bring a claim after a bus accident in California?",
      a: "It depends on who operates the bus. If it is a public agency, such as a city transit system or a school district, a written government claim generally must be presented within six months. Claims against private bus companies generally have a two-year lawsuit deadline. Because the operator is not always obvious, consult an attorney promptly.",
    },
    {
      q: "Who is responsible for a bus accident?",
      a: "Depending on the facts, responsibility may fall on the bus driver, the transit agency or bus company, a school district, a maintenance contractor, the manufacturer of a defective part, or another motorist who caused the crash. More than one party is often involved.",
    },
    {
      q: "I was a passenger and got hurt when the bus braked suddenly. Do I have a case?",
      a: "Possibly. Bus operators are common carriers and must use the utmost care for passengers. If the driver braked hard because of inattention, speeding or following too closely, the operator may be liable. If another motorist forced the sudden stop, the claim may be against that driver. Onboard video often answers the question.",
    },
    {
      q: "My child was injured on a school bus. What should I do?",
      a: "Get medical care first, then report the incident to the school and ask for a copy of any report. Because school districts are public entities, short government claim deadlines can apply even when the injured person is a child. Speak with an attorney as soon as possible about the timing.",
    },
    {
      q: "Can I bring a claim if a bus hit me while I was walking, cycling or driving?",
      a: "Yes. People outside the bus can bring claims against the driver and the operator. The same government claim rules apply if the bus belongs to a public agency. Many buses carry cameras, and that video should be requested before it is recorded over.",
    },
    {
      q: "What does it cost to hire a bus accident lawyer?",
      a: "The consultation is free. We handle bus accident cases on a contingency fee, so you pay no attorney’s fees unless we recover compensation for you. The fee and the handling of case costs are set out in a written agreement at the start.",
    },
  ],

  related: [
    { href: "/truck-accidents", label: "Truck accidents", desc: "Other commercial vehicle claims." },
    { href: "/car-accidents", label: "Car accidents", desc: "Claims involving passenger vehicles." },
    { href: "/bicycle-accidents", label: "Bicycle accidents", desc: "Cyclists hit by buses and cars." },
    {
      href: "/blog/how-long-do-i-have-to-file-a-personal-injury-claim-in-california",
      label: "How long do I have to file a claim?",
      desc: "California deadlines, including government claims.",
    },
    { href: "/san-francisco", label: "San Francisco office", desc: "Near Muni and BART lines." },
    { href: "/oakland", label: "Oakland office", desc: "Downtown, on Broadway." },
  ],
};
