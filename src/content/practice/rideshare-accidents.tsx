import Link from "next/link";
import { injuryCompensation, type PracticeArea } from "./types";

export const rideshareAccidents: PracticeArea = {
  slug: "rideshare-accidents",
  navLabel: "Rideshare Accidents",
  h1: "Uber & Lyft Accident Lawyer in California",
  metaTitle: "Uber & Lyft Accident Lawyer in California",
  metaDescription:
    "Injured in an Uber or Lyft crash in California as a passenger, driver or bystander? We sort out which insurance applies. Free consult, no fees unless we win.",
  heroSub:
    "Passenger, driver or someone a rideshare car hit: which insurance pays depends on what the app was doing at the moment of the crash. We find out and pursue it.",
  formType: "Uber or Lyft accident",

  intro: (
    <>
      <p>
        Uber and Lyft changed how California gets around, and they changed what happens after a crash. A
        rideshare collision can involve the driver’s personal auto policy, the company’s commercial policy,
        another motorist’s insurer and your own coverage, all at once. Which one pays depends on something you
        may not know: what the driver’s app was doing at the moment of impact.
      </p>
      <p>
        Uber and Lyft treat their drivers as independent contractors and usually argue that they are not
        directly responsible for a driver’s mistakes. California law, however, requires rideshare companies to
        maintain insurance that covers their drivers while the app is on, with higher limits once a ride has
        been accepted. Getting that coverage to pay fairly takes proof of the driver’s status, proof of fault
        and a clear record of your injuries.
      </p>
      <p>
        The Law Offices of David P. Kashani represents rideshare passengers, rideshare drivers, and the
        motorists, pedestrians and <Link href="/bicycle-accidents">cyclists</Link> they collide with. We
        request the trip data, identify each policy in play and handle the insurers so you can focus on
        treatment. For a plain-English overview, read{" "}
        <Link href="/blog/uber-lyft-accidents-who-pays">Uber and Lyft accidents: who pays?</Link> The
        consultation is free, and you pay no attorney’s fees unless we recover compensation for you.
      </p>
    </>
  ),

  topics: {
    title: "Your role and the driver’s app status shape the claim",
    intro:
      "Two questions come first in every rideshare case: who were you in the crash, and which insurance tier was active?",
    items: [
      {
        title: "If you were a passenger",
        body: "Passengers are almost never at fault. If your trip was under way, the rideshare company’s commercial coverage generally applies whether your driver or another motorist caused the crash.",
      },
      {
        title: "If you drive for Uber or Lyft",
        body: "When another driver hits you while you are working, you can bring a claim against that driver and may have access to coverage provided through the rideshare company. Your personal policy may exclude rideshare driving unless you added an endorsement.",
      },
      {
        title: "If a rideshare driver hit you",
        body: "Other motorists, pedestrians and cyclists can claim against the rideshare driver. How much coverage stands behind that driver depends on whether the app was on and whether a ride had been accepted.",
      },
      {
        title: "Tier 1: app off",
        body: "The driver is treated like any other motorist. Only the driver’s personal auto insurance applies, and the rideshare company’s coverage does not.",
      },
      {
        title: "Tier 2: app on, waiting for a request",
        body: "California requires a lower tier of liability coverage while a driver is logged in and available for requests. It can be maintained by the driver, the rideshare company or both.",
      },
      {
        title: "Tier 3: ride accepted through drop-off",
        body: "The highest tier applies from the moment a driver accepts a ride until the passenger gets out. California has required $1 million in liability coverage during this period.",
      },
    ],
    note: "This is a general summary. Coverage amounts, including uninsured motorist coverage, have been changed by recent legislation, so ask an attorney what applied on the date of your crash.",
  },

  causes: {
    title: "Common causes of rideshare accidents",
    items: [
      "Drivers looking at the app to accept rides or follow navigation",
      "Fatigue from long shifts or driving after another job",
      "Sudden stops and U-turns to reach a pickup",
      "Double parking and stopping in bike lanes or crosswalks",
      "Speeding to fit in more trips",
      "Passengers opening doors into traffic",
      "Unfamiliar streets and late-night driving",
      "Negligence by other drivers on the road",
    ],
  },
  injuries: {
    title: "Types of injuries",
    items: [
      "Whiplash and other neck and back injuries, common for rear-seat passengers",
      "Concussions and other head injuries",
      "Broken bones",
      "Seat belt and airbag injuries",
      "Knee and shoulder injuries from striking the seat or door",
      "Serious trauma to pedestrians and cyclists",
      "Anxiety about riding or driving afterward",
    ],
  },

  compensation: {
    title: "Compensation you may be entitled to",
    intro:
      "The same categories of loss apply in rideshare cases as in other vehicle claims. Depending on the facts, a claim may include:",
    items: injuryCompensation,
    note: "The amount of insurance available in a rideshare case depends on the driver’s app status, and available coverage is not a promise of payment. Each claim still has to be proven, and results vary with the facts.",
  },

  stepsTitle: "How a rideshare accident claim works",
  steps: [
    {
      title: "Free consultation",
      body: "Tell us what happened and what role you had in the crash. We explain your options at no cost.",
    },
    {
      title: "Confirm app status and coverage",
      body: "We request trip records and establish which insurance period applied, then put every insurer on notice.",
    },
    {
      title: "Negotiation",
      body: "We document your injuries and losses and demand fair payment from the insurers responsible.",
    },
    {
      title: "Trial or arbitration if needed",
      body: "If an insurer will not be reasonable, we are prepared to take the case forward in the forum that applies.",
    },
  ],

  checklist: {
    title: "What to do after an Uber or Lyft accident",
    items: [
      "Call 911, get medical help and ask for a police report.",
      "Take screenshots of the trip: driver name, vehicle, route, pickup and drop-off times, and your receipt.",
      "Get insurance and contact details for every driver involved, not just the rideshare driver.",
      "Photograph the vehicles, the scene and your injuries, and collect witness contact details.",
      "Report the crash through the app, but keep the description short and factual.",
      "See a doctor promptly and follow the treatment plan.",
      "Do not accept a quick settlement or sign a release before you get legal advice.",
    ],
  },

  legalNotes: [
    {
      title: "Filing deadlines",
      body: "Most California personal injury lawsuits must be filed within two years of the crash. Different, shorter deadlines can apply in some situations, so consult an attorney soon after the accident.",
    },
    {
      title: "Driver classification",
      body: "Under Proposition 22, app-based drivers are treated as independent contractors. That affects how a claim against the company is framed, but it does not remove the insurance California requires rideshare companies to carry.",
    },
    {
      title: "Arbitration clauses",
      body: "Uber’s and Lyft’s terms of service contain arbitration agreements that can affect where a claim against the company itself is heard. Whether a clause applies to you is a question to raise with an attorney.",
    },
  ],

  faqs: [
    {
      q: "Who pays if I am hurt as an Uber or Lyft passenger?",
      a: "If another driver caused the crash, that driver’s insurer is primarily responsible. If your rideshare driver was at fault, the rideshare company’s commercial liability coverage generally applies because a trip was in progress. When the at-fault driver has too little insurance, other coverage may also come into play. An attorney can identify which policies apply.",
    },
    {
      q: "Can I sue Uber or Lyft directly?",
      a: "Sometimes, but most claims are paid through the insurance the companies are required to carry for their drivers. The companies classify drivers as independent contractors and their terms of service include arbitration clauses, both of which affect direct claims. Whether a direct claim makes sense depends on the facts.",
    },
    {
      q: "What if the rideshare driver did not have the app on?",
      a: "Then the driver is treated like any other motorist, and the claim goes through the driver’s personal auto insurance. The rideshare company’s coverage does not apply when the driver is logged out. Establishing app status with trip records is one of the first things we do.",
    },
    {
      q: "I drive for Uber or Lyft and another driver hit me. What coverage do I have?",
      a: "You can bring a claim against the at-fault driver. Depending on whether you were waiting for a request or on a trip, coverage provided through the rideshare company may also apply. Your personal policy may not cover rideshare driving unless you added an endorsement, so review it with an attorney.",
    },
    {
      q: "Should I report the accident through the app?",
      a: "Yes. Reporting creates a record and starts the company’s claims process. Keep your description brief and factual, and avoid guessing about fault or the extent of your injuries. You do not need to give a detailed recorded statement before speaking with a lawyer.",
    },
    {
      q: "How long do I have to file a rideshare accident claim in California?",
      a: "Generally two years from the date of the crash for a personal injury lawsuit. Trip data and other evidence should be requested much sooner than that. Deadlines vary with the facts, so consult an attorney as early as you can.",
    },
  ],

  related: [
    {
      href: "/blog/uber-lyft-accidents-who-pays",
      label: "Uber and Lyft accidents: who pays?",
      desc: "Rideshare insurance explained on our blog.",
    },
    { href: "/car-accidents", label: "Car accidents", desc: "Claims involving passenger vehicles." },
    { href: "/bicycle-accidents", label: "Bicycle accidents", desc: "Dooring and bike-lane collisions." },
    { href: "/san-francisco", label: "San Francisco office", desc: "South of Market, near Market Street." },
    { href: "/los-angeles", label: "Los Angeles office", desc: "Our main office on the Westside." },
    { href: "/contact", label: "Free case review", desc: "Tell us what happened." },
  ],
};
