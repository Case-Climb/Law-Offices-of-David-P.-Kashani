import Link from "next/link";
import { defaultSteps } from "@/components/blocks";
import { injuryCompensation, type PracticeArea } from "./types";

export const bicycleAccidents: PracticeArea = {
  slug: "bicycle-accidents",
  navLabel: "Bicycle Accidents",
  h1: "California Bicycle Accident Lawyer",
  metaTitle: "California Bicycle Accident Lawyer",
  metaDescription:
    "Doored, right-hooked or hit by a driver who fled? Kashani Law represents injured California cyclists. Free consultation and no fees unless we win your case.",
  heroSub:
    "Dooring, right-hook turns, hit-and-run drivers and dangerous roads. We represent injured cyclists across California and answer the blame-shifting with evidence.",
  formType: "Bicycle accident",

  intro: (
    <>
      <p>
        On a bicycle, there is nothing between you and a two-ton vehicle except a helmet. Drivers who would
        never hit another car pass cyclists too closely, turn across their path or open a door without
        looking, and the rider pays for the mistake with broken bones or worse.
      </p>
      <p>
        California law is clear that cyclists belong on the road. A person riding a bicycle generally has the
        same rights, and the same responsibilities, as a driver. Motorists must leave at least three feet
        when passing and must move into another lane to pass when one is available. Opening a car door into
        traffic is illegal unless it is reasonably safe. Even so, insurers often start from the assumption
        that the cyclist did something wrong.
      </p>
      <p>
        The Law Offices of David P. Kashani represents injured cyclists and their families across California.
        We gather the evidence that shows what the driver did, answer the blame-shifting, and document
        injuries that are frequently more serious than they first appear. If an{" "}
        <Link href="/rideshare-accidents">Uber or Lyft driver</Link> or a{" "}
        <Link href="/bus-accidents">bus</Link> was involved, different insurance and deadlines may apply. The
        consultation is free, and you pay no attorney’s fees unless we recover compensation for you.
      </p>
    </>
  ),

  topics: {
    title: "Bicycle accident cases we handle",
    items: [
      {
        title: "Dooring",
        body: "A driver or passenger opens a door into a cyclist’s path. California law puts the duty on the person opening the door to check that it is safe, which makes fault in many dooring cases straightforward to establish.",
      },
      {
        title: "Right-hook and left-cross turns",
        body: "A right-hook is a driver passing a cyclist and then turning right across the bike’s path. A left-cross is an oncoming driver turning left into a rider. Both usually come down to a driver who did not look or misjudged the cyclist’s speed.",
      },
      {
        title: "Hit-and-run",
        body: "If the driver is never found, the uninsured motorist coverage on your own auto policy may cover you even though you were on a bike. Report the crash to police immediately and keep anything that could identify the car.",
      },
      {
        title: "Dangerous road conditions",
        body: "Potholes, broken pavement, sunken grates, debris and badly marked construction zones can throw a rider. When a public agency is responsible for the road, a written government claim is generally due within six months.",
      },
      {
        title: "Unsafe passing and sideswipes",
        body: "Drivers who squeeze past in the same lane clip handlebars or force riders into parked cars and curbs. Vehicle damage, paint transfer and ride data can show how close the pass was.",
      },
    ],
  },

  causes: {
    title: "Common causes of bicycle accidents",
    items: [
      "Drivers distracted by phones or screens",
      "Failing to yield at intersections and driveways",
      "Passing with less than three feet of clearance",
      "Opening doors without checking for cyclists",
      "Turning across a bike lane without looking",
      "Speeding and impaired driving",
      "Potholes, cracks, debris and unsafe grates",
      "Poorly designed or blocked bike lanes",
    ],
  },
  injuries: {
    title: "Types of injuries",
    items: [
      "Concussions and traumatic brain injuries, even with a helmet",
      "Broken collarbones, wrists and arms",
      "Facial and dental injuries",
      "Road rash and permanent scarring",
      "Hip, knee and leg fractures",
      "Spinal injuries",
      "Internal injuries",
    ],
  },

  compensation: {
    title: "Compensation you may be entitled to",
    intro:
      "An injured cyclist can seek payment for the harm a driver or a dangerous road caused, including the cost of a damaged bike and gear. Depending on the facts, a claim may include:",
    items: injuryCompensation,
    note: "Every case is different, and no outcome can be guaranteed. The value of a claim depends on how the crash happened, the injuries, any shared fault and the insurance available. We will give you a candid view after we review the facts.",
  },

  stepsTitle: "How a bicycle accident claim works",
  steps: defaultSteps,

  checklist: {
    title: "What to do after a bicycle accident",
    intro: "Adrenaline hides injuries. Even if you think you can ride away, take these steps.",
    items: [
      "Get out of the roadway and call 911. Ask the officer to include your account in the report.",
      "Get the driver’s name, license, plate number and insurance details.",
      "Photograph the scene, the vehicle, your bike and any road defect, with something for scale.",
      "Collect names and numbers from witnesses.",
      "See a doctor right away, especially if you hit your head.",
      "Keep your bike, helmet, clothing and gear exactly as they are. Do not repair or throw anything away.",
      "Save ride data from your bike computer, phone or camera.",
      "Do not negotiate with the driver’s insurer on your own.",
    ],
  },

  legalNotes: [
    {
      title: "Filing deadlines",
      body: "Most California personal injury lawsuits must be filed within two years. If a road defect or a government vehicle was involved, a written claim to the public entity is generally due within six months. Consult an attorney promptly about which deadline applies.",
    },
    {
      title: "Comparative fault and helmets",
      body: "California requires helmets only for riders under 18. An adult who was not wearing one can still bring a claim, though an insurer may argue it contributed to a head injury. Under comparative fault, any share of blame reduces compensation and does not bar it.",
    },
    {
      title: "Passing and dooring laws",
      body: "The Three Feet for Safety Act requires drivers to give cyclists at least three feet when passing and to change lanes to pass when possible. A separate Vehicle Code section makes it unlawful to open a door into moving traffic unless it is reasonably safe. A violation can be strong evidence of fault.",
    },
  ],

  faqs: [
    {
      q: "Can I still bring a claim if I was not wearing a helmet?",
      a: "Yes. California requires helmets only for riders under 18, and not wearing one does not prevent an adult from bringing a claim. The insurer may argue that a helmet would have reduced a head injury, which could affect the amount. It has no bearing on injuries to other parts of the body.",
    },
    {
      q: "The driver’s insurer says the crash was my fault. What now?",
      a: "Insurers often blame cyclists for riding in the lane, riding too fast or being hard to see. Cyclists generally have the same right to the road as drivers. Photos, witness statements, ride data and the vehicle damage pattern can show what actually happened. Even if you share some fault, California law reduces compensation and does not bar it.",
    },
    {
      q: "What if the driver left the scene or has no insurance?",
      a: "If you or a household member has auto insurance with uninsured motorist coverage, it may cover you as a cyclist. Report the crash to police right away, note anything you remember about the vehicle and look for nearby cameras. These claims have reporting requirements, so get legal advice early.",
    },
    {
      q: "Can I bring a claim if a pothole or road defect caused my crash?",
      a: "Possibly. A public entity can be responsible for a dangerous condition of its property if it knew or should have known about the hazard and did not fix it or warn of it. A written claim is generally due within six months, and photographs of the defect taken soon after the crash are important.",
    },
    {
      q: "What compensation can an injured cyclist seek?",
      a: "Depending on the facts: medical bills, future treatment, lost income, pain and suffering, and the cost to repair or replace your bicycle and gear. The amount depends on the injuries, fault and available insurance. No particular result can be promised.",
    },
    {
      q: "How long do I have to file a bicycle accident lawsuit in California?",
      a: "Generally two years from the date of the crash. If a public agency is involved, because of a road defect or a government vehicle, a written claim is usually due within six months. Consult an attorney promptly, since the deadline depends on the facts.",
    },
  ],

  related: [
    { href: "/car-accidents", label: "Car accidents", desc: "Hit-and-run and uninsured driver claims." },
    { href: "/motorcycle-accidents", label: "Motorcycle accidents", desc: "Claims for injured riders." },
    { href: "/rideshare-accidents", label: "Uber and Lyft accidents", desc: "Dooring and bike-lane stops." },
    { href: "/bus-accidents", label: "Bus accidents", desc: "Cyclists struck by transit buses." },
    { href: "/san-francisco", label: "San Francisco office", desc: "A city with heavy bicycle traffic." },
    { href: "/areas-we-serve", label: "Areas we serve", desc: "We represent cyclists statewide." },
  ],
};
