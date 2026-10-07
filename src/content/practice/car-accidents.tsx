import Link from "next/link";
import { defaultSteps } from "@/components/blocks";
import { injuryCompensation, type PracticeArea } from "./types";

export const carAccidents: PracticeArea = {
  slug: "car-accidents",
  navLabel: "Car Accidents",
  h1: "California Car Accident Lawyer",
  metaTitle: "California Car Accident Lawyer",
  metaDescription:
    "Hurt in a California car accident? Kashani Law handles rear-end, T-bone, hit-and-run and uninsured driver claims. Free consultation. No fees unless we win.",
  heroSub:
    "Rear-end, intersection, hit-and-run and uninsured driver crashes anywhere in California. We deal with the insurance company so you can deal with getting better.",
  formType: "Car accident",

  intro: (
    <>
      <p>
        A crash takes a few seconds. Dealing with it can take months: a car you cannot drive, appointments you
        did not plan for, time away from work, and an insurance adjuster who calls before you have even seen
        a doctor. That adjuster works for the insurance company. The job is to close your claim for as little
        as the company can pay, and an early recorded statement or a quick check is often how that happens.
      </p>
      <p>
        The Law Offices of David P. Kashani represents people hurt in car accidents throughout California,
        from our offices in <Link href="/los-angeles">Los Angeles</Link>,{" "}
        <Link href="/san-francisco">San Francisco</Link> and <Link href="/oakland">Oakland</Link>. We find out
        how the collision happened, identify every insurance policy that may apply, and document what the
        injury has cost you and what it is likely to cost you later. Then we demand payment that reflects it.
      </p>
      <p>
        California is a fault state. The driver who caused the crash, and that driver’s insurer, is
        responsible for the harm. Proving fault and proving the full extent of your losses is where most
        claims are won or lost. The consultation is free, and you pay no attorney’s fees unless we recover
        compensation for you.
      </p>
    </>
  ),

  topics: {
    title: "Car accident cases we handle",
    items: [
      {
        title: "Rear-end collisions",
        body: "The rear driver is usually at fault, but insurers still argue that you stopped short or that a low-speed impact could not have hurt you. Damage photos, repair records and prompt medical care answer both arguments.",
      },
      {
        title: "T-bone and intersection crashes",
        body: "Side impacts often come down to who had the light or the right of way. We look for signal timing records, nearby cameras and independent witnesses before memories fade.",
      },
      {
        title: "Hit-and-run",
        body: "When the driver flees, your own uninsured motorist coverage may pay for your injuries. These claims carry reporting requirements, so call the police right away and speak with a lawyer early.",
      },
      {
        title: "Uninsured and underinsured drivers",
        body: "Many California drivers carry no insurance or only the legal minimum. If you bought UM/UIM coverage, your own policy can make up the difference. On that part of the claim, your insurer is the one you are negotiating against.",
      },
      {
        title: "Distracted and impaired driving",
        body: "Phone records, app data and police findings can show that a driver was texting or under the influence. In some drunk-driving cases California law also allows a claim for punitive damages.",
      },
    ],
  },

  causes: {
    title: "Common causes of car accidents",
    items: [
      "Texting, scrolling or using a phone behind the wheel",
      "Speeding and unsafe lane changes",
      "Driving under the influence of alcohol, cannabis or other drugs",
      "Running red lights and stop signs",
      "Following too closely in stop-and-go traffic",
      "Failing to yield on left turns and at crosswalks",
      "Drowsy driving",
      "Vehicle defects, such as brake or tire failure",
    ],
  },
  injuries: {
    title: "Types of injuries",
    items: [
      "Whiplash and other neck and back soft-tissue injuries",
      "Herniated and bulging discs",
      "Concussions and traumatic brain injuries",
      "Broken bones",
      "Knee, shoulder and wrist injuries",
      "Spinal cord injuries",
      "Internal injuries and bleeding",
      "Anxiety, sleep problems and post-traumatic stress",
    ],
  },

  compensation: {
    title: "Compensation you may be entitled to",
    intro:
      "California law allows an injured person to seek payment for the losses a crash caused. Depending on the facts, a claim may include:",
    items: injuryCompensation,
    note: "No lawyer can promise a result. What a claim is worth depends on who was at fault, how badly you were hurt, how the injury affects your work and daily life, and how much insurance is available. We will give you an honest assessment once we know the facts.",
  },

  stepsTitle: "How a car accident claim works",
  steps: defaultSteps,

  checklist: {
    title: "What to do after a car accident",
    intro: "If you are able to, these steps protect both your health and your claim.",
    items: [
      "Check for injuries and call 911. Ask for an officer to respond and write down the report number.",
      "Move out of traffic if it is safe, and stay at the scene.",
      "Exchange names, license numbers, plates and insurance details with every driver involved.",
      "Photograph the vehicles, the road, traffic signals, skid marks and your visible injuries.",
      "Get names and phone numbers from witnesses.",
      "See a doctor the same day or as soon as you can, even if you feel fine. Some injuries take days to show.",
      "Report the crash to your own insurer, and check whether you must file a DMV report (form SR-1) within 10 days.",
      "Do not give the other driver’s insurer a recorded statement before you get legal advice.",
    ],
  },

  legalNotes: [
    {
      title: "Filing deadlines",
      body: "Most California personal injury lawsuits must be filed within two years of the injury. Claims against a city, county, state agency or public transit operator usually require a written claim within six months. Missing a deadline can end a claim, so consult an attorney promptly.",
    },
    {
      title: "Comparative fault",
      body: "California follows pure comparative negligence. If you were partly at fault, your compensation is reduced by your share of the blame, not barred. Insurers know this and often try to shift blame onto the injured person.",
    },
    {
      title: "Insurance limits",
      body: "California’s minimum liability limits rose in 2025 to $30,000 per person and $60,000 per accident for injuries. Serious injuries can exceed those limits quickly, which is why finding every available policy matters. Drivers who were uninsured themselves may face limits on pain-and-suffering damages.",
    },
  ],

  faqs: [
    {
      q: "How much does it cost to hire your firm for a car accident case?",
      a: "The consultation is free. We work on a contingency fee, which means you pay no attorney’s fees unless we recover compensation for you. The fee is a percentage of the recovery and is set out in a written agreement before we start, along with how case costs are handled.",
    },
    {
      q: "How long do I have to file a car accident claim in California?",
      a: "In most cases you have two years from the date of the crash to file a personal injury lawsuit, and three years for a claim limited to vehicle or other property damage. If a government vehicle or a public road condition was involved, a written claim is usually due within six months. Deadlines depend on the facts, so ask an attorney which ones apply to you.",
    },
    {
      q: "What if I was partly at fault for the crash?",
      a: "You can still bring a claim. Under California’s pure comparative negligence rule, your compensation is reduced by your percentage of fault. If you were 20 percent responsible, for example, you could recover 80 percent of your damages. Fault percentages are often disputed, and evidence gathered early makes a difference.",
    },
    {
      q: "Should I talk to the other driver’s insurance company?",
      a: "You should report the crash to your own insurer. You are generally not required to give the other driver’s insurer a recorded statement, and what you say can be used to reduce or deny your claim. It is reasonable to tell that adjuster you will respond after you have spoken with a lawyer.",
    },
    {
      q: "What if the driver who hit me has no insurance or left the scene?",
      a: "Check your own policy for uninsured and underinsured motorist coverage. It can pay for your injuries when the at-fault driver cannot be found or does not have enough insurance. Hit-and-run claims have notice and reporting requirements, so report the crash to police immediately and get legal advice early.",
    },
    {
      q: "Do I need a lawyer for a minor accident?",
      a: "Not always. If no one was hurt and the only issue is the repair bill, you may be able to handle it yourself. Talk to a lawyer if you were injured, missed work, fault is disputed, or the insurer is delaying or offering less than your bills. A consultation with us costs nothing.",
    },
  ],

  related: [
    { href: "/truck-accidents", label: "Truck accidents", desc: "Crashes with 18-wheelers and delivery trucks." },
    { href: "/rideshare-accidents", label: "Uber and Lyft accidents", desc: "How rideshare insurance works." },
    { href: "/motorcycle-accidents", label: "Motorcycle accidents", desc: "Claims for injured riders." },
    {
      href: "/blog/what-to-do-after-a-car-accident-in-california",
      label: "What to do after a car accident in California",
      desc: "A step-by-step guide from our blog.",
    },
    {
      href: "/blog/how-much-is-my-personal-injury-case-worth",
      label: "How much is my personal injury case worth?",
      desc: "The factors that drive claim value.",
    },
    { href: "/los-angeles", label: "Los Angeles office", desc: "Our main office on the Westside." },
  ],
};
