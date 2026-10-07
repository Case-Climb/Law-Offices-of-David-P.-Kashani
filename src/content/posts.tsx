import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export type Post = {
  slug: string;
  title: string;
  /** 150-160 characters. */
  description: string;
  excerpt: string;
  category: string;
  /** ISO date. */
  date: string;
  minutes: number;
  body: ReactNode;
  cta: { title: string; body: string };
};

export type PostMeta = Omit<Post, "body" | "cta">;

/**
 * Starter posts. They are general information, not legal advice, and should
 * be reviewed by the firm before launch. Newest first.
 */
export const posts: Post[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "what-to-do-after-a-car-accident-in-california",
    title: "What to Do After a Car Accident in California",
    description:
      "A step-by-step guide to the minutes and days after a California car accident: what to do at the scene, what to report, and how to protect your injury claim.",
    excerpt:
      "What you do in the first hour and the first week after a crash affects both your recovery and your claim. Here is the order to do it in.",
    category: "Car Accidents",
    date: "2026-09-28",
    minutes: 4,
    body: (
      <>
        <p>
          Nobody plans for a crash, and most people have no idea what they are supposed to do after one. The
          steps below apply to almost any collision in California. If you are badly hurt, the only step that
          matters is the first one.
        </p>

        <h2>At the scene</h2>
        <h3>Stop and call 911</h3>
        <p>
          California law requires every driver involved in a collision to stop. Check yourself and your
          passengers for injuries and call 911. Ask for police to respond, and write down the officer’s name
          and the report number before you leave.
        </p>
        <h3>Get to safety and exchange information</h3>
        <p>
          If the cars can be moved and it is safe, get out of traffic. Exchange names, addresses, driver’s
          license numbers, plate numbers and insurance details with every driver involved.
        </p>
        <h3>Document everything</h3>
        <ul>
          <li>Photograph all vehicles, the road, traffic signals, skid marks and debris.</li>
          <li>Photograph your visible injuries.</li>
          <li>Get names and phone numbers from witnesses. They are hard to find later.</li>
          <li>Note nearby businesses or homes that may have security cameras.</li>
        </ul>
        <p>
          Be careful what you say. Give the officer the facts, but do not apologize or guess about who was at
          fault. You may not know everything that happened yet.
        </p>

        <h2>In the first few days</h2>
        <h3>See a doctor</h3>
        <p>
          Get examined the same day if you can, even if you feel fine. Concussions, soft-tissue injuries and
          internal injuries often take hours or days to show. A prompt medical record also connects your
          injuries to the crash, which insurers look for.
        </p>
        <h3>Notify your insurer and the DMV</h3>
        <p>
          Report the crash to your own insurance company. You must also report it to the DMV on form SR-1
          within 10 days if anyone was injured or killed, or if property damage exceeded $1,000.
        </p>
        <h3>Keep a file</h3>
        <p>
          Save medical bills, repair estimates, pay stubs showing missed work, and a short daily note about
          your pain and what you could not do. These records are the foundation of a claim.
        </p>

        <h2>Dealing with the other driver’s insurer</h2>
        <p>
          An adjuster may call quickly and ask for a recorded statement or offer a fast settlement. You are
          generally not required to give that insurer a statement, and an early offer is usually made before
          the full cost of your injuries is known. Once you sign a release, the claim is over. It is
          reasonable to say you will respond after getting legal advice.
        </p>

        <h2>When to call a lawyer</h2>
        <p>
          If you were injured, if fault is disputed, or if the other driver was uninsured or left the scene,
          talk to a lawyer early. Most injury lawsuits in California must be filed within two years, and
          some claims have{" "}
          <Link href="/blog/how-long-do-i-have-to-file-a-personal-injury-claim-in-california">
            much shorter deadlines
          </Link>
          . Our <Link href="/car-accidents">California car accident lawyer</Link> page explains how these
          claims work and what compensation may be available.
        </p>
      </>
    ),
    cta: {
      title: "Hurt in a car accident? Get a free case review.",
      body: "Tell us what happened and we will explain your options. You pay no attorney’s fees unless we recover compensation for you.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-long-do-i-have-to-file-a-personal-injury-claim-in-california",
    title: "How Long Do I Have to File a Personal Injury Claim in California?",
    description:
      "California’s personal injury deadline is usually two years, but government claims can be due in six months. Learn which statute of limitations applies to you.",
    excerpt:
      "The usual deadline is two years. Some claims are due in six months, and waiting causes problems long before any deadline arrives.",
    category: "Legal Basics",
    date: "2026-09-21",
    minutes: 4,
    body: (
      <>
        <p>
          Every injury claim has a deadline, called the statute of limitations. If you miss it, a court will
          almost always dismiss your case no matter how strong it is. The deadline depends on who you are
          claiming against and what kind of harm you suffered.
        </p>

        <h2>The general rule: two years</h2>
        <p>
          For most personal injury claims in California, including car, truck, motorcycle and bicycle
          crashes, you have two years from the date of the injury to file a lawsuit. A{" "}
          <Link href="/wrongful-death">wrongful death claim</Link> generally must be filed within two years
          of the date of death.
        </p>

        <h2>Shorter deadlines</h2>
        <h3>Claims against government entities</h3>
        <p>
          If a city, county, state agency, school district or public transit operator may be responsible,
          the rules change. You generally must present a written claim to the agency within six months of
          the incident. If the agency rejects the claim, you may have only six months from the rejection
          notice to file suit. This applies to many{" "}
          <Link href="/bus-accidents">bus accident cases</Link> and to crashes caused by dangerous road
          conditions.
        </p>
        <h3>Medical negligence</h3>
        <p>
          Claims against health care providers follow a separate rule: generally one year from when you
          discovered the injury, or three years from the injury itself, whichever comes first.
        </p>

        <h2>Longer deadlines and exceptions</h2>
        <ul>
          <li>
            <strong>Property damage only.</strong> A claim limited to damage to your vehicle or other
            property generally has a three-year deadline.
          </li>
          <li>
            <strong>Minors.</strong> The clock for a child’s injury claim is often paused until the child
            turns 18, but this does not apply in the same way to government claims or medical negligence.
          </li>
          <li>
            <strong>Delayed discovery.</strong> In limited situations the clock starts when you discovered,
            or reasonably should have discovered, the injury and its cause.
          </li>
        </ul>
        <p>
          These exceptions are narrow and fact-specific. Do not assume one applies to you without asking an
          attorney.
        </p>

        <h2>An insurance claim does not stop the clock</h2>
        <p>
          Negotiating with an insurance company is not the same as filing a lawsuit. An adjuster can keep
          talking with you right up to the deadline, and if it passes without a lawsuit on file, the insurer
          no longer has a reason to pay.
        </p>

        <h2>Why you should not wait</h2>
        <p>
          Even with two years on the calendar, delay hurts a claim. Video is recorded over, vehicles are
          repaired or scrapped, and witnesses forget. Gaps between the crash and medical treatment give
          insurers an argument that you were not really hurt. The earlier a claim is investigated, the
          stronger it tends to be.
        </p>
        <p>
          If you are unsure which deadline applies, <Link href="/contact">ask us</Link>. The consultation is
          free.
        </p>
      </>
    ),
    cta: {
      title: "Not sure how much time you have? Ask us.",
      body: "Deadlines depend on the facts. Call for a free consultation and we will tell you which ones we think apply.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "who-is-liable-in-a-truck-accident",
    title: "Who Is Liable in a Truck Accident?",
    description:
      "Liability for a California truck accident can reach beyond the driver to the carrier, cargo loaders, maintenance shops and manufacturers. Here is how it works.",
    excerpt:
      "A truck crash rarely has one responsible party. The driver, the carrier and several other companies may each share liability.",
    category: "Truck Accidents",
    date: "2026-09-14",
    minutes: 4,
    body: (
      <>
        <p>
          When a car hits a car, there is usually one driver and one insurance company on the other side.
          Commercial trucking is different. A single load can involve a driver, a motor carrier, a company
          that owns the trailer, a shipper and a broker. Any of them may share responsibility for a crash.
        </p>

        <h2>The driver</h2>
        <p>
          A truck driver who speeds, drives distracted, follows too closely or stays on the road past
          federal hours-of-service limits can be personally liable. In practice, the driver’s employer and
          its insurer usually stand behind that liability.
        </p>

        <h2>The trucking company</h2>
        <p>
          A motor carrier is generally responsible for crashes its drivers cause while working. The company
          can also be liable for its own conduct, including:
        </p>
        <ul>
          <li>hiring drivers with poor safety records or without proper qualifications</li>
          <li>inadequate training and supervision</li>
          <li>schedules that cannot be met without breaking hours-of-service rules</li>
          <li>skipping inspections and maintenance</li>
        </ul>
        <p>
          Some carriers label drivers as independent contractors to distance themselves from liability.
          Federal regulations and California law often look past that label.
        </p>

        <h2>Other companies in the chain</h2>
        <h3>Truck and trailer owners</h3>
        <p>
          The tractor and the trailer may be owned by different companies, each responsible for keeping its
          equipment safe.
        </p>
        <h3>Shippers and loaders</h3>
        <p>
          Cargo that is overloaded, unbalanced or poorly secured can cause a rollover or a spill. The company
          that loaded it may be liable.
        </p>
        <h3>Maintenance contractors and manufacturers</h3>
        <p>
          A shop that performed faulty brake work, or a manufacturer that supplied a defective tire or part,
          can be responsible when that failure causes a crash.
        </p>

        <h2>Public agencies</h2>
        <p>
          Occasionally a dangerous road design or a missing warning contributes to a truck crash. Claims
          against government entities generally require a written claim within six months.
        </p>

        <h2>How liability is proven</h2>
        <p>
          The evidence that sorts this out is mostly in the trucking company’s hands: electronic logging
          device records, engine control module data, dash camera video, the driver’s qualification file,
          and inspection and maintenance records. Carriers are required to keep some of it for only a
          limited time. A preservation letter sent soon after the crash puts the company on notice not to
          destroy it.
        </p>

        <h2>What if you were partly at fault?</h2>
        <p>
          California uses comparative fault. Your compensation is reduced by your percentage of
          responsibility and is not barred. Fault is also divided among the defendants.
        </p>
        <p>
          Our <Link href="/truck-accidents">California truck accident lawyer</Link> page covers what to do
          after a crash and how these claims proceed. If a truck crash took a family member’s life, see{" "}
          <Link href="/wrongful-death">wrongful death claims</Link>. Our{" "}
          <Link href="/oakland">Oakland office</Link> sits minutes from the I-880 freight corridor.
        </p>
      </>
    ),
    cta: {
      title: "Hit by a commercial truck? Time matters.",
      body: "Call us so evidence preservation demands can go out quickly. The consultation is free.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "uber-lyft-accidents-who-pays",
    title: "Uber & Lyft Accidents: Who Pays?",
    description:
      "After an Uber or Lyft accident in California, which insurance pays depends on the driver’s app status. A plain-English guide for passengers and drivers.",
    excerpt:
      "Which insurance applies after a rideshare crash depends on one thing most people never think about: what the driver’s app was doing.",
    category: "Rideshare",
    date: "2026-09-08",
    minutes: 4,
    body: (
      <>
        <p>
          After a crash involving an Uber or Lyft vehicle, the first question is not only who was at fault.
          It is also which insurance policy was active. The answer depends on what the driver was doing in
          the app at the time.
        </p>

        <h2>It starts with the app</h2>
        <h3>App off</h3>
        <p>
          A rideshare driver who is logged out is just another motorist. The driver’s personal auto insurance
          applies, and the rideshare company’s coverage does not.
        </p>
        <h3>App on, waiting for a ride request</h3>
        <p>
          Once the driver logs in and is available, California requires a tier of liability coverage for
          injuries the driver causes. The limits in this period are lower than when a ride is under way.
        </p>
        <h3>Ride accepted, through drop-off</h3>
        <p>
          From the moment the driver accepts a request until the passenger gets out, the highest tier
          applies. California has required $1 million in liability coverage during this period.
        </p>
        <p>
          This is a general summary. Coverage requirements, including uninsured motorist coverage, have been
          changed by recent legislation, so ask an attorney what applied on your crash date.
        </p>

        <h2>If you were a passenger</h2>
        <p>
          Passengers are almost never at fault, and a trip in progress means the highest tier of coverage
          was active. If another motorist caused the crash, that driver’s insurer is primarily responsible.
          If your rideshare driver caused it, the company’s commercial policy generally applies.
        </p>

        <h2>If a rideshare driver hit you</h2>
        <p>
          For other drivers, pedestrians and cyclists, everything turns on the app status described above.
          That is why securing the trip data early matters. If the driver was logged out or coverage is too
          low for your injuries, your own uninsured or underinsured motorist coverage may help.
        </p>

        <h2>If you drive for Uber or Lyft</h2>
        <p>
          When another driver hits you, you can claim against that driver. Coverage provided through the
          rideshare company may also apply, depending on the period you were in. Check your personal policy:
          many exclude rideshare driving unless you added an endorsement.
        </p>

        <h2>What to do after a rideshare crash</h2>
        <ul>
          <li>Call 911 and get medical care.</li>
          <li>Screenshot the trip details, driver name and receipt.</li>
          <li>Get insurance information from every driver involved.</li>
          <li>Report the crash in the app, briefly and factually.</li>
          <li>Do not accept a quick settlement before you know the extent of your injuries.</li>
        </ul>
        <p>
          Our <Link href="/rideshare-accidents">Uber and Lyft accident lawyer</Link> page goes deeper into
          how these claims work. If the crash did not involve a rideshare vehicle after all, see{" "}
          <Link href="/car-accidents">car accidents</Link>.
        </p>
      </>
    ),
    cta: {
      title: "Injured in an Uber or Lyft crash?",
      body: "We will find out which insurance applies and deal with the companies for you. Free consultation.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "california-wrongful-death-claims-explained",
    title: "California Wrongful Death Claims Explained",
    description:
      "Who can file a wrongful death claim in California, what damages families may seek, how survival actions differ, and the deadlines that apply. A plain guide.",
    excerpt:
      "A guide for families: who may bring a claim, what it can cover, how a survival action differs, and how much time you have.",
    category: "Wrongful Death",
    date: "2026-08-31",
    minutes: 4,
    body: (
      <>
        <p>
          When someone dies because of another person’s or company’s carelessness, California law gives the
          family a civil claim. It cannot undo the loss. It can provide financial stability and a measure of
          accountability. This guide explains the basics in plain terms.
        </p>

        <h2>What counts as wrongful death</h2>
        <p>
          A wrongful death is one caused by a wrongful act or negligence: a driver who ran a red light, a
          trucking company that ignored safety rules, a property owner who left a known hazard in place.
          The claim is civil. It is separate from any criminal case and does not depend on charges being
          filed.
        </p>

        <h2>Who can file</h2>
        <p>California law gives the right to file to:</p>
        <ul>
          <li>the surviving spouse or registered domestic partner</li>
          <li>the person’s children, and the children of a child who has died</li>
          <li>
            if none of those survive, the people who would inherit under intestate succession, such as
            parents or siblings
          </li>
          <li>
            certain financial dependents, which can include a putative spouse, stepchildren and parents
          </li>
        </ul>
        <p>
          Everyone entitled to recover is generally expected to join in a single lawsuit, so it helps to
          identify all eligible family members early.
        </p>

        <h2>What damages a family may seek</h2>
        <h3>Economic losses</h3>
        <p>
          The financial support the person would have provided, the value of household services such as
          childcare, and funeral and burial expenses.
        </p>
        <h3>Non-economic losses</h3>
        <p>
          The loss of the person’s love, companionship, comfort, care, guidance and moral support. These are
          harder to put a number on, and they are often the heart of the claim.
        </p>

        <h2>How a survival action is different</h2>
        <p>
          A wrongful death claim compensates the family. A survival action is the claim the person could
          have brought if they had lived, pursued on behalf of their estate. It can cover medical bills and
          lost income between the injury and death, and sometimes punitive damages. The two are often filed
          together. The rules for survival actions have changed in recent years, so ask an attorney what
          applies.
        </p>

        <h2>Deadlines</h2>
        <p>
          A wrongful death lawsuit generally must be filed within two years of the date of death. If a
          public entity may be responsible, a written claim is usually due within six months. Deaths
          involving medical negligence have their own, often shorter, deadlines.
        </p>

        <h2>How a claim proceeds</h2>
        <p>
          Most claims begin with an investigation and a demand to the responsible party’s insurer. Many
          resolve through negotiation. If a fair resolution is not offered, a lawsuit is filed and the case
          moves toward trial. A family does not pay attorney’s fees up front in a contingency arrangement.
        </p>
        <p>
          Our <Link href="/wrongful-death">California wrongful death lawyer</Link> page has more detail.{" "}
          <Link href="/attorney">David Kashani</Link> came to this work after losing someone close to him,
          and he handles these cases with that in mind. When you are ready,{" "}
          <Link href="/contact">reach out</Link>.
        </p>
      </>
    ),
    cta: {
      title: "We are here when you are ready to talk.",
      body: "There is no cost and no pressure. Call us or send a message and we will answer your questions.",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-much-is-my-personal-injury-case-worth",
    title: "How Much Is My Personal Injury Case Worth?",
    description:
      "No formula gives the value of a California injury claim. Learn the factors that matter: medical costs, lost income, pain, shared fault and insurance limits.",
    excerpt:
      "There is no formula. There are, however, a handful of factors that decide what an injury claim is worth, and some of them are in your control.",
    category: "Legal Basics",
    date: "2026-08-24",
    minutes: 4,
    body: (
      <>
        <p>
          It is the first question most people ask, and the honest answer is that nobody can tell you on day
          one. Any lawyer who quotes a number before seeing your medical records is guessing. What we can do
          is explain what goes into the value of a claim.
        </p>

        <h2>Economic damages</h2>
        <p>These are the losses with a paper trail:</p>
        <ul>
          <li>medical bills, past and future</li>
          <li>lost wages and reduced earning capacity</li>
          <li>property damage, such as your vehicle</li>
          <li>out-of-pocket costs like medication, equipment and travel to appointments</li>
        </ul>

        <h2>Non-economic damages</h2>
        <p>
          California law also allows compensation for physical pain, emotional distress, loss of enjoyment
          of life, and disfigurement. There is no chart for these. They depend on how serious the injury is,
          how long it lasts and how convincingly its effect on your life is shown.
        </p>

        <h2>What raises or lowers the value</h2>
        <h3>How clear fault is</h3>
        <p>
          Strong evidence that the other party caused the crash increases what an insurer will pay. Under
          California’s comparative fault rule, your compensation is reduced by any share of fault assigned
          to you.
        </p>
        <h3>The severity and permanence of the injury</h3>
        <p>
          A broken bone that heals is valued differently from an injury that needs surgery or leaves lasting
          limits. Future medical needs can be the largest part of a serious claim.
        </p>
        <h3>Your medical record</h3>
        <p>
          Insurers look for gaps. Prompt treatment and consistent follow-up show that the injury is real and
          related to the accident.
        </p>
        <h3>Available insurance</h3>
        <p>
          A claim can only be collected from the insurance and assets that exist. California’s minimum
          liability limits are modest, which is why identifying every applicable policy, including your own
          uninsured and underinsured motorist coverage, matters.
        </p>

        <h2>Why first offers are usually low</h2>
        <p>
          An early offer is made before your treatment is finished and before the full cost is known. It
          reflects what the insurer hopes you will accept. Once you sign a release, you cannot go back for
          more if your condition worsens.
        </p>

        <h2>What you can do to protect your claim</h2>
        <ul>
          <li>Get medical care promptly and follow your treatment plan.</li>
          <li>Keep every bill, receipt and record of missed work.</li>
          <li>Stay off social media when it comes to the accident and your injuries.</li>
          <li>Talk to a lawyer before giving a recorded statement or signing anything.</li>
        </ul>
        <p>
          For a rough starting point, you can try the firm’s{" "}
          <a href={site.estimateUrl} target="_blank" rel="noopener noreferrer">
            Instant Estimate tool
          </a>
          . An estimate is not a prediction or a promise, and a real assessment requires your records. To
          see how specific claims work, visit our <Link href="/practice-areas">practice areas</Link> or
          start with <Link href="/car-accidents">car accidents</Link>.
        </p>
      </>
    ),
    cta: {
      title: "Want a real assessment of your case?",
      body: "Send us the details or call. We will review the facts and tell you honestly how we see your claim.",
    },
  },
];

export const postMetas: PostMeta[] = posts.map(({ slug, title, description, excerpt, category, date, minutes }) => ({
  slug,
  title,
  description,
  excerpt,
  category,
  date,
  minutes,
}));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
