import Link from "next/link";
import { injuryCompensation, type PracticeArea } from "./types";

export const motorcycleAccidents: PracticeArea = {
  slug: "motorcycle-accidents",
  navLabel: "Motorcycle Accidents",
  h1: "California Motorcycle Accident Lawyer",
  metaTitle: "California Motorcycle Accident Lawyer",
  metaDescription:
    "Injured on a motorcycle in California? We counter rider bias and lane-splitting blame with evidence. Free consultation. No fees unless we win your case.",
  heroSub:
    "Lane splitting is legal in California, and riding is not evidence of fault. We answer bias against riders with evidence and document serious injuries in full.",
  formType: "Motorcycle accident",

  intro: (
    <>
      <p>
        Riders know the feeling: a driver looks straight at you and pulls out anyway. Many motorcycle crashes
        involving another vehicle happen because the driver did not see the bike or misjudged its speed. With
        no frame, airbags or seat belt, the rider takes the full impact, and a collision that would dent a car
        can change a rider’s life.
      </p>
      <p>
        Then comes the second problem. Insurance adjusters, and sometimes jurors, assume riders are reckless.
        A claim that would be routine for a car driver gets picked apart: how fast were you going, were you
        splitting lanes, what were you wearing. Answering that bias takes evidence, not argument.
      </p>
      <p>
        The Law Offices of David P. Kashani represents injured riders and passengers throughout California.
        We reconstruct how the crash happened from physical evidence, witness accounts and video where it
        exists, and we present your injuries and your future needs in detail. Lane splitting is legal in
        California, and riding a motorcycle is not evidence of fault. If you lost a family member in a
        motorcycle crash, see our page on <Link href="/wrongful-death">wrongful death claims</Link>. The
        consultation is free, and you pay no attorney’s fees unless we recover compensation for you.
      </p>
    </>
  ),

  topics: {
    title: "Issues that decide motorcycle cases",
    items: [
      {
        title: "Lane splitting",
        body: "California law expressly recognizes lane splitting, and the CHP publishes safety guidelines for it. Insurers still try to treat it as automatic fault. The real questions are the rider’s speed, the traffic conditions and what the driver did, such as changing lanes without signaling or checking mirrors.",
      },
      {
        title: "Bias against riders",
        body: "Assumptions about motorcyclists show up in police reports, adjuster notes and jury rooms. We counter them with specifics: your riding history and training, the condition of your bike, where the damage is and what witnesses actually saw.",
      },
      {
        title: "Helmet issues",
        body: "California requires every rider and passenger to wear a compliant helmet. If you were not wearing one you can still bring a claim, but the insurer may argue that part of a head or neck injury is your responsibility.",
      },
      {
        title: "Catastrophic injuries",
        body: "Brain injuries, spinal cord damage and amputations change what a person can do for the rest of their life. These claims have to account for future surgery, rehabilitation, equipment, home modifications and lost earning capacity, not just the bills so far.",
      },
      {
        title: "Left-turn collisions",
        body: "One of the most common serious crashes is a driver turning left across an oncoming motorcycle. The turning driver generally must yield, but will often claim the rider was speeding. Skid marks, impact points and video can test that claim.",
      },
    ],
  },

  causes: {
    title: "Common causes of motorcycle accidents",
    items: [
      "Drivers turning left in front of an oncoming rider",
      "Lane changes without checking blind spots",
      "Following too closely and rear-ending a stopped motorcycle",
      "Opening car doors into a rider’s path",
      "Distracted or impaired drivers",
      "Gravel, potholes, uneven pavement and other road hazards",
      "Defective tires, brakes or other parts",
    ],
  },
  injuries: {
    title: "Types of injuries",
    items: [
      "Traumatic brain injuries",
      "Spinal cord injuries and paralysis",
      "Leg, pelvis and arm fractures",
      "Road rash requiring skin grafts",
      "Nerve damage to the arms and shoulders",
      "Amputations",
      "Internal injuries",
    ],
  },

  compensation: {
    title: "Compensation you may be entitled to",
    intro:
      "Motorcycle injuries are often severe and long-lasting. Depending on the facts, a claim may include:",
    items: injuryCompensation,
    note: "No result can be guaranteed, and serious injuries do not automatically mean a large recovery. What a claim is worth depends on fault, the medical evidence, your future needs and the insurance available. Damage to your motorcycle and gear can be claimed as well.",
  },

  stepsTitle: "How a motorcycle accident claim works",
  steps: [
    {
      title: "Free consultation",
      body: "We listen to your account of the crash and explain how we would approach the claim.",
    },
    {
      title: "Reconstruction",
      body: "We collect photos, video, witness statements and the physical evidence on the bike and the car to show how the collision happened.",
    },
    {
      title: "Negotiation",
      body: "We present your injuries and future needs in detail and push back when the insurer leans on rider stereotypes.",
    },
    {
      title: "Trial if needed",
      body: "If the insurer will not make a fair offer, we are prepared to put the evidence in front of a jury.",
    },
  ],

  checklist: {
    title: "What to do after a motorcycle accident",
    items: [
      "Get out of traffic if you can and call 911.",
      "If you have neck or back pain, stay still and leave your helmet on until paramedics arrive.",
      "Get the driver’s name, license, plate and insurance details, and contact details for witnesses.",
      "Photograph both vehicles, the road surface and where everything came to rest.",
      "Save helmet camera or dash camera footage, and look for nearby security cameras.",
      "Keep your motorcycle, helmet and gear as they are. Do not repair or discard them.",
      "See a doctor right away and follow up, even if your injuries seem manageable.",
      "Do not discuss your speed or lane position with the other driver’s insurer before you get legal advice.",
    ],
  },

  legalNotes: [
    {
      title: "Filing deadlines",
      body: "Most California personal injury lawsuits must be filed within two years of the crash. If a road defect or a government vehicle played a part, a written claim is generally due within six months. Consult an attorney promptly about your dates.",
    },
    {
      title: "Comparative fault",
      body: "California uses pure comparative negligence. If a rider is found partly at fault, for example for speed while lane splitting, compensation is reduced by that percentage and is not barred. How fault is divided is often the central fight in a motorcycle case.",
    },
    {
      title: "Insurance requirements",
      body: "Motorcyclists must carry liability insurance like other motorists. If you were riding uninsured, California law may limit your claim to economic losses such as medical bills and lost income. Ask an attorney how this applies to you.",
    },
  ],

  faqs: [
    {
      q: "Is lane splitting legal in California, and does it hurt my claim?",
      a: "Lane splitting is legal in California. It does not make a rider automatically at fault. An insurer may argue that the rider was going too fast for conditions, and fault can be shared under comparative negligence. The driver’s conduct, such as an unsignaled lane change, is often the main cause.",
    },
    {
      q: "What if I was not wearing a helmet?",
      a: "California law requires helmets for all riders and passengers. Not wearing one does not bar your claim, but the insurer may argue that it made a head or neck injury worse, which could reduce compensation for those injuries. It does not affect who caused the crash.",
    },
    {
      q: "The insurance company says I was speeding. What now?",
      a: "That is a common response to motorcycle claims, and it is often based on assumption. Physical evidence such as skid marks, impact damage, where the vehicles came to rest and any available video can be used to estimate speed. Even if speed played a part, California law reduces compensation by your share of fault and does not eliminate the claim.",
    },
    {
      q: "Can a motorcycle passenger bring a claim?",
      a: "Yes. An injured passenger can bring a claim against whoever caused the crash, which may be another driver, the operator of the motorcycle or both. Passengers are rarely at fault themselves.",
    },
    {
      q: "What if the driver who hit me fled or has no insurance?",
      a: "Uninsured motorist coverage on your motorcycle policy, if you bought it, can cover your injuries when the driver cannot be identified or is uninsured. Report the crash to police immediately and preserve any video. These claims have notice requirements, so speak with an attorney early.",
    },
    {
      q: "How long do I have to file a motorcycle accident lawsuit in California?",
      a: "Generally two years from the date of the crash for a personal injury claim. A six-month government claim deadline usually applies if a public agency is involved. Consult an attorney promptly, because the deadline depends on the facts.",
    },
  ],

  related: [
    { href: "/car-accidents", label: "Car accidents", desc: "Claims involving passenger vehicles." },
    { href: "/bicycle-accidents", label: "Bicycle accidents", desc: "Dooring and unsafe passing." },
    { href: "/truck-accidents", label: "Truck accidents", desc: "Crashes with commercial trucks." },
    { href: "/wrongful-death", label: "Wrongful death", desc: "Help for families after a fatal crash." },
    {
      href: "/blog/how-much-is-my-personal-injury-case-worth",
      label: "How much is my personal injury case worth?",
      desc: "The factors that drive claim value.",
    },
    { href: "/los-angeles", label: "Los Angeles office", desc: "Our main office on the Westside." },
  ],
};
