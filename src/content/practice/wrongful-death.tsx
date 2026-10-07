import Link from "next/link";
import type { PracticeArea } from "./types";

export const wrongfulDeath: PracticeArea = {
  slug: "wrongful-death",
  navLabel: "Wrongful Death",
  h1: "California Wrongful Death Lawyer",
  metaTitle: "California Wrongful Death Lawyer",
  metaDescription:
    "Lost a loved one because of someone else’s negligence? Kashani Law guides California families through wrongful death claims with care. Free consultation.",
  heroSub:
    "When negligence takes someone you love, we handle the legal work with care and patience so your family can grieve. There is no cost to talk with us.",
  formType: "Wrongful death",

  intro: (
    <>
      <p>
        Nothing in the legal system can make up for the loss of someone you love. We know that, and we will
        not pretend otherwise. What a wrongful death claim can do is hold the responsible person or company
        to account and relieve some of the financial pressure that so often follows a sudden death: funeral
        costs, bills from a final hospital stay, and the loss of an income or of the care a parent or spouse
        gave every day.
      </p>
      <p>
        This work is personal for our firm. <Link href="/attorney">David Kashani</Link> moved his practice
        to personal injury law after losing someone close to him in a tragic accident. He understands that
        families in this position need straight answers, patience, and someone to deal with the insurance
        companies and the paperwork for them.
      </p>
      <p>
        California law allows certain family members to bring a claim when a death is caused by another
        party’s negligence or wrongful act, whether in a <Link href="/car-accidents">car</Link>,{" "}
        <Link href="/truck-accidents">truck</Link>, <Link href="/motorcycle-accidents">motorcycle</Link>,
        bicycle or bus crash or in other circumstances. There is no cost to speak with us, no pressure to
        decide anything, and no attorney’s fees unless we recover compensation for your family.
      </p>
    </>
  ),

  topics: {
    title: "Who may file a wrongful death claim",
    intro:
      "California law sets out who has the right to bring a wrongful death claim. In general terms, that includes:",
    items: [
      {
        title: "Spouse or domestic partner",
        body: "The surviving spouse or registered domestic partner of the person who died.",
      },
      {
        title: "Children",
        body: "The person’s children, and the children of any child who died before them.",
      },
      {
        title: "Other heirs",
        body: "If there is no surviving spouse, partner or descendant, the people who would inherit under California’s intestate succession rules, such as parents or siblings.",
      },
      {
        title: "Financial dependents",
        body: "Certain people who depended on the person financially, which can include a putative spouse, stepchildren, parents, and a minor who lived in the household and relied on the person for support.",
      },
    ],
    note: "Family situations vary, and the statute has detailed conditions. An attorney can tell you who qualifies in your family and how a claim is shared among those who do.",
  },

  causes: {
    title: "Common causes of wrongful death",
    items: [
      "Car crashes caused by speeding, distraction or impairment",
      "Collisions with commercial trucks",
      "Motorcycle crashes caused by drivers who failed to yield",
      "Pedestrians and cyclists struck by vehicles",
      "Bus and rideshare crashes",
      "Dangerous roads and unsafe property conditions",
      "Defective vehicles and products",
    ],
  },
  extra: {
    title: "Survival actions, explained simply",
    body: (
      <>
        <p>
          A wrongful death claim belongs to the family. It compensates surviving relatives for what they
          have lost.
        </p>
        <p>
          A survival action is different. It is the claim the person who died could have brought if they
          had lived, and it is pursued on behalf of their estate. It can cover losses the person suffered
          between the injury and death, such as medical bills and lost income, and in some cases punitive
          damages against a defendant whose conduct was especially wrongful.
        </p>
        <p>
          The two claims are often filed together. The rules on what a survival action can recover have
          changed in recent years, so ask an attorney what applies to your case.
        </p>
      </>
    ),
  },

  compensation: {
    title: "Damages a family may be entitled to",
    intro:
      "No amount of money measures a life. The law recognizes certain losses a family may seek to recover. Depending on the facts, they may include:",
    items: [
      {
        title: "Lost financial support",
        body: "The income and benefits the person would have contributed to the family over the years.",
      },
      {
        title: "Funeral and burial costs",
        body: "Reasonable expenses for the funeral, burial or cremation.",
      },
      {
        title: "Household services",
        body: "The value of the care and work the person provided at home, such as childcare and upkeep.",
      },
      {
        title: "Loss of companionship",
        body: "The loss of the person’s love, comfort, care, guidance and moral support.",
      },
    ],
    note: "We cannot promise any outcome, and every family’s claim is different. What may be recovered depends on the circumstances of the death, the relationships involved, fault and the insurance or assets available.",
  },

  stepsTitle: "How we help families through a claim",
  steps: [
    {
      title: "A conversation, at your pace",
      body: "We meet by phone, video or in person. You ask what you need to ask. There is no charge and no obligation.",
    },
    {
      title: "Investigation",
      body: "We obtain the reports and records, secure evidence, and identify everyone who may be responsible and everyone entitled to bring the claim.",
    },
    {
      title: "Negotiation",
      body: "We deal with the insurers and present the full extent of your family’s loss, keeping you informed without burdening you.",
    },
    {
      title: "Trial if needed",
      body: "Most claims resolve without a trial. If a fair resolution is not offered, we are prepared to take the case to court.",
    },
  ],

  checklist: {
    title: "Steps to take after losing a loved one",
    intro:
      "There is no need to do all of this at once. These steps protect your family’s rights when you are ready.",
    items: [
      "Take care of yourself and your family first. You do not have to speak with any insurance company right away.",
      "Request several certified copies of the death certificate.",
      "Find out which agency investigated and ask for the report number.",
      "Keep bills and receipts for medical care, the funeral and related expenses.",
      "Preserve what you can: photos, messages, the vehicle, and the names of anyone who saw what happened.",
      "Do not sign a release or accept an insurance offer before getting legal advice.",
      "Speak with a lawyer early about deadlines, especially if a government agency may be involved.",
    ],
  },

  legalNotes: [
    {
      title: "Timelines",
      body: "A wrongful death lawsuit in California generally must be filed within two years of the date of death. If a public entity may be responsible, a written claim is usually due within six months. Different and often shorter deadlines apply to deaths from medical negligence. Consult an attorney promptly.",
    },
    {
      title: "One action for all family members",
      body: "California generally expects everyone entitled to recover to bring their claims together in a single lawsuit. Identifying all eligible family members early helps avoid problems later.",
    },
    {
      title: "Shared fault and criminal cases",
      body: "If the person who died was partly at fault, the family’s recovery is reduced by that percentage, not eliminated. A wrongful death claim is a civil case with a lower burden of proof, and it can go forward whether or not anyone is charged with a crime.",
    },
  ],

  faqs: [
    {
      q: "Who can file a wrongful death lawsuit in California?",
      a: "Generally the surviving spouse or domestic partner, children, and grandchildren whose parent has died. If none of those survive, the people who would inherit under intestate succession may file. Certain financial dependents, such as a putative spouse, stepchildren or parents, may also qualify. An attorney can tell you who is eligible in your family.",
    },
    {
      q: "What is the difference between a wrongful death claim and a survival action?",
      a: "A wrongful death claim compensates family members for their own losses, such as lost financial support and companionship. A survival action is brought on behalf of the estate for losses the person suffered before death, such as medical bills and lost income. The two are often filed together.",
    },
    {
      q: "How long do we have to file a wrongful death claim?",
      a: "Generally two years from the date of death. If a public entity is involved, a written government claim is usually due within six months. Other deadlines apply when the death resulted from medical negligence. Because timing depends on the facts, consult an attorney as soon as you feel able to.",
    },
    {
      q: "What compensation can a family seek?",
      a: "Depending on the facts: the financial support the person would have provided, funeral and burial expenses, the value of household services, and the loss of love, companionship, care and guidance. A related survival action may cover the person’s medical bills and lost income before death. No outcome can be guaranteed.",
    },
    {
      q: "Will we have to go to court?",
      a: "Many wrongful death claims are resolved through negotiation without a trial, although a lawsuit sometimes has to be filed to protect the deadline or to reach a fair result. We prepare each case as if it may be tried, and we will explain every step before it happens.",
    },
    {
      q: "How much does it cost to hire a wrongful death lawyer?",
      a: "The consultation is free, and we handle wrongful death claims on a contingency fee. Your family pays no attorney’s fees unless we recover compensation. The fee and the handling of case costs are explained in a written agreement before we begin.",
    },
  ],

  related: [
    {
      href: "/blog/california-wrongful-death-claims-explained",
      label: "California wrongful death claims explained",
      desc: "A longer guide for families on our blog.",
    },
    { href: "/attorney", label: "Attorney David P. Kashani", desc: "Why this work is personal." },
    { href: "/truck-accidents", label: "Truck accidents", desc: "Fatal crashes with commercial trucks." },
    { href: "/car-accidents", label: "Car accidents", desc: "Claims involving passenger vehicles." },
    { href: "/motorcycle-accidents", label: "Motorcycle accidents", desc: "Claims for riders and families." },
    { href: "/contact", label: "Free case review", desc: "Talk with us when you are ready." },
  ],
};
