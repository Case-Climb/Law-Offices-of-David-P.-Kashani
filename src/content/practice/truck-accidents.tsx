import Link from "next/link";
import { injuryCompensation, type PracticeArea } from "./types";

export const truckAccidents: PracticeArea = {
  slug: "truck-accidents",
  navLabel: "Truck Accidents",
  h1: "California Truck Accident Lawyer",
  metaTitle: "California Truck Accident Lawyer",
  metaDescription:
    "Hit by an 18-wheeler or delivery truck in California? We preserve the evidence and pursue every liable party. Free consultation, no fees unless we win.",
  heroSub:
    "Crashes with 18-wheelers and delivery trucks involve federal rules, several companies and evidence that can disappear fast. We move quickly to secure it.",
  formType: "Truck accident",

  intro: (
    <>
      <p>
        A loaded tractor-trailer can weigh up to 80,000 pounds, roughly twenty times a typical passenger car.
        When one hits a smaller vehicle, the people in the smaller vehicle absorb almost all of the force.
        The injuries are often permanent, and the claim that follows is very different from an ordinary{" "}
        <Link href="/car-accidents">car accident case</Link>.
      </p>
      <p>
        Trucking is a regulated industry. Federal Motor Carrier Safety Administration (FMCSA) rules limit how
        long a driver can stay behind the wheel, require inspections and maintenance, and set standards for
        hiring, training, and drug and alcohol testing. California adds its own rules for trucks that operate
        only within the state. When a company cuts corners on any of these, its records usually show it, if
        someone secures them before they are overwritten or discarded.
      </p>
      <p>
        Trucking companies and their insurers often send investigators to a serious crash within hours. The
        Law Offices of David P. Kashani works just as quickly on your side. We send evidence preservation
        demands, identify every company involved in the load, and build the case with trial in mind. When a
        truck crash takes a life, we help the family pursue a{" "}
        <Link href="/wrongful-death">wrongful death claim</Link>. You pay no attorney’s fees unless we recover
        compensation for you.
      </p>
    </>
  ),

  topics: {
    title: "What makes truck accident cases different",
    items: [
      {
        title: "18-wheelers and tractor-trailers",
        body: "Jackknifes, underride crashes, rollovers and wide-turn collisions are specific to big rigs. Each leaves physical evidence that a reconstruction expert can read, if the vehicles are inspected before they are repaired or sold.",
      },
      {
        title: "Delivery trucks and vans",
        body: "Box trucks and delivery vans work residential streets on tight schedules. Depending on how the driver was hired, the delivery brand, a contractor company or both may be responsible.",
      },
      {
        title: "FMCSA hours-of-service rules",
        body: "Federal rules generally cap a property-carrying driver at 11 hours of driving within a 14-hour workday, after 10 consecutive hours off duty, and require a 30-minute break after 8 hours of driving. Electronic logging devices record whether the driver complied.",
      },
      {
        title: "Driver fatigue",
        body: "Delivery windows and pay-by-the-mile push drivers to keep going when they should rest. Logs, dispatch messages, fuel receipts and GPS data can show that a driver was over hours or too tired to drive safely.",
      },
      {
        title: "Multiple liable parties",
        body: "Responsibility can extend beyond the driver to the motor carrier, the owner of the tractor or trailer, the company that loaded the cargo, a freight broker, a maintenance contractor or a parts manufacturer. Each may carry separate insurance.",
      },
      {
        title: "Evidence preservation",
        body: "Engine control module data, logging device records, dash camera video, driver qualification files and maintenance records are in the company’s hands, and carriers are only required to keep some of them for a limited time. A preservation letter puts the company on notice to keep everything.",
      },
    ],
  },

  causes: {
    title: "Common causes of truck accidents",
    items: [
      "Driver fatigue and hours-of-service violations",
      "Speeding or driving too fast for traffic and weather",
      "Distraction from phones and dispatch devices",
      "Overloaded or improperly secured cargo",
      "Brake failure, tire blowouts and skipped maintenance",
      "Negligent hiring and inadequate driver training",
      "Unsafe lane changes and blind-spot collisions",
      "Driving under the influence of alcohol or drugs",
    ],
  },
  injuries: {
    title: "Types of injuries",
    items: [
      "Traumatic brain injuries",
      "Spinal cord injuries and paralysis",
      "Multiple fractures and crush injuries",
      "Amputations",
      "Internal organ damage",
      "Severe burns",
      "Injuries that result in death",
    ],
  },

  compensation: {
    title: "Compensation you may be entitled to",
    intro:
      "Truck crash injuries often mean long recoveries and lasting limits. Depending on the facts, a claim may include:",
    items: injuryCompensation,
    note: "Commercial carriers are required to carry far more insurance than ordinary drivers, but higher limits do not guarantee any particular recovery. What a claim is worth depends on fault, the medical evidence and the coverage actually available.",
  },

  stepsTitle: "How we handle a truck accident case",
  steps: [
    {
      title: "Free consultation",
      body: "We listen to what happened, answer your questions and explain whether we think you have a claim.",
    },
    {
      title: "Preserve the evidence",
      body: "We send preservation demands for logs, onboard data, camera footage and maintenance files, and arrange vehicle inspections where possible.",
    },
    {
      title: "Build and negotiate",
      body: "We establish how the crash happened, who is responsible and what your injuries will cost over time, then demand payment from each insurer.",
    },
    {
      title: "Trial if needed",
      body: "Trucking insurers defend these cases hard. If they will not be reasonable, we are prepared to file suit and try the case.",
    },
  ],

  checklist: {
    title: "What to do after a truck accident",
    intro: "Your safety comes first. If you or someone with you can manage it, these steps help later.",
    items: [
      "Call 911 and accept medical care at the scene. Go to the emergency room if paramedics recommend it.",
      "Photograph the truck: the company name on the door, the USDOT number, and the plates on both the tractor and the trailer.",
      "Get the driver’s name, employer and insurance information.",
      "Collect contact details for witnesses, and photograph the road, debris and skid marks.",
      "Do not give a statement to the trucking company’s insurer or investigators.",
      "Keep your vehicle as it is until it can be inspected. Do not authorize repairs or disposal yet.",
      "Contact a lawyer quickly so preservation letters go out before records are lost.",
    ],
  },

  legalNotes: [
    {
      title: "Filing deadlines",
      body: "Most California injury lawsuits must be filed within two years, and claims involving a government vehicle usually require a written claim within six months. In truck cases, evidence can be lost long before any deadline, so consult an attorney right away.",
    },
    {
      title: "Fault shared among companies",
      body: "California’s comparative fault rules apply to every party, including you. Each defendant can be held responsible for all of your economic losses, but only for its own share of non-economic damages such as pain and suffering. An attorney can explain how that affects your claim.",
    },
    {
      title: "Employer responsibility",
      body: "A trucking company is generally responsible for crashes its drivers cause on the job. Calling a driver an independent contractor does not always end the company’s responsibility under federal regulations and California law. Ask an attorney to assess the relationship.",
    },
  ],

  faqs: [
    {
      q: "Who can be held liable for a truck accident?",
      a: "Potentially several parties: the truck driver, the motor carrier that employs or contracts with the driver, the owner of the tractor or trailer, the company that loaded the cargo, a freight broker, a maintenance provider, or the manufacturer of a defective part. Identifying all of them matters because each may have separate insurance coverage.",
    },
    {
      q: "How is a truck accident case different from a car accident case?",
      a: "The injuries tend to be more severe, more companies are involved, and federal safety regulations apply. Key evidence, such as electronic logs and onboard data, is controlled by the trucking company. These cases usually need faster action, more investigation and often expert analysis.",
    },
    {
      q: "What evidence matters most, and how quickly can it disappear?",
      a: "Electronic logging device records, engine control module data, dash camera video, inspection and maintenance records, and the driver’s qualification file are often central. Carriers are required to keep some of these records for only a limited period, and onboard data can be overwritten. A preservation demand sent early helps protect it.",
    },
    {
      q: "The trucking company’s insurer called me. Should I talk to them?",
      a: "You are generally not obligated to give a statement to the trucking company or its insurer, and it is usually wise not to until you have legal advice. Their investigators are gathering information to limit the company’s exposure. You can refer them to your lawyer.",
    },
    {
      q: "How long do I have to file a truck accident lawsuit in California?",
      a: "Generally two years from the date of the crash for a personal injury claim, and two years from the date of death for a wrongful death claim. A much shorter six-month claim deadline usually applies if a government vehicle was involved. Consult an attorney promptly, because the facts of your case determine the deadline.",
    },
    {
      q: "What does it cost to hire a truck accident lawyer?",
      a: "Our consultation is free, and we take truck accident cases on a contingency fee. You pay no attorney’s fees unless we recover compensation for you. The fee percentage and the handling of case costs are explained in a written agreement before any work begins.",
    },
  ],

  related: [
    {
      href: "/blog/who-is-liable-in-a-truck-accident",
      label: "Who is liable in a truck accident?",
      desc: "A closer look at the companies behind a truck.",
    },
    { href: "/car-accidents", label: "Car accidents", desc: "Claims involving passenger vehicles." },
    { href: "/bus-accidents", label: "Bus accidents", desc: "Transit, school and charter bus injuries." },
    { href: "/wrongful-death", label: "Wrongful death", desc: "Help for families after a fatal crash." },
    { href: "/oakland", label: "Oakland office", desc: "Near the I-880 freight corridor and the port." },
    { href: "/los-angeles", label: "Los Angeles office", desc: "Our main office on the Westside." },
  ],
};
