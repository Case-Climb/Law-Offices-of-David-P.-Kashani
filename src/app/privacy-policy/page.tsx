import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { offices, officeAddress, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How the Law Offices of David P. Kashani collects, uses and protects personal information: form data, cookies, text messages and California privacy rights.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "October 1, 2026";

export default function PrivacyPolicyPage() {
  const main = offices[0];
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="What we collect when you use this website or contact the firm, how we use it, and the choices you have."
        crumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
        note={`Last updated ${LAST_UPDATED}`}
      />

      <Section tone="white">
        <div className="prose-site">
          <p>
            This Privacy Policy explains how {site.name} (“the firm,” “we,” “us”) handles personal
            information collected through {site.url.replace("https://", "")} and through calls, emails, text
            messages and forms connected to it. By using this website you agree to this policy.
          </p>

          <h2>Information we collect</h2>
          <h3>Information you give us</h3>
          <ul>
            <li>
              <strong>Contact and case review forms:</strong> your name, phone number, email address, the
              type of accident you select, and whatever you write in the message field.
            </li>
            <li>
              <strong>Feedback forms:</strong> your rating, your comments, and your name or contact details
              if you choose to add them.
            </li>
            <li>
              <strong>Calls, emails, text messages and chat:</strong> the content of your communication and
              the contact details needed to reply.
            </li>
          </ul>
          <h3>Information collected automatically</h3>
          <ul>
            <li>
              Device and usage data such as IP address, browser type, pages viewed, referring page, and the
              date and time of your visit.
            </li>
            <li>Information collected through cookies and similar technologies, described below.</li>
          </ul>

          <h2>How we use information</h2>
          <ul>
            <li>to respond to your inquiry and evaluate whether we can help with your legal matter</li>
            <li>to check for conflicts of interest</li>
            <li>to communicate with you by phone, email or, with your consent, text message</li>
            <li>to operate, secure and improve this website</li>
            <li>to comply with legal, ethical and professional obligations</li>
          </ul>

          <h2>Cookies and analytics</h2>
          <p>
            This website uses cookies and similar technologies to understand how visitors use it. We use
            Google Analytics 4, which collects information such as pages visited and approximate location
            derived from IP address. Embedded Google Maps and any chat or review widgets may also set
            cookies of their own.
          </p>
          <p>
            You can block or delete cookies in your browser settings, and you can opt out of Google Analytics
            with Google’s browser add-on. Blocking cookies may affect how some features work. This website
            does not currently respond to “Do Not Track” browser signals.
          </p>

          <h2>Text messages (SMS)</h2>
          <p>
            If you give us your mobile number and consent to receive texts, we may send messages about your
            inquiry or your case, such as replies to your questions and appointment reminders.
          </p>
          <ul>
            <li>Message frequency varies. Message and data rates may apply.</li>
            <li>
              Reply <strong>STOP</strong> at any time to opt out. Reply <strong>HELP</strong> for help, or
              call {site.phone.display}.
            </li>
            <li>Consent to receive text messages is not a condition of obtaining legal services.</li>
            <li>
              No mobile information will be shared with third parties or affiliates for marketing or
              promotional purposes. Text messaging opt-in data and consent will not be shared with any third
              parties, other than service providers that help us deliver the messages.
            </li>
            <li>Mobile carriers are not liable for delayed or undelivered messages.</li>
          </ul>

          <h2>How we share information</h2>
          <p>We do not sell personal information. We share it only:</p>
          <ul>
            <li>
              with service providers that host this website, deliver email and text messages, process form
              submissions or provide analytics, under obligations to protect it
            </li>
            <li>with co-counsel, experts and others involved in a matter, when you have engaged the firm</li>
            <li>when required by law, court order or professional rules</li>
            <li>to protect the rights, safety and property of the firm, our clients or others</li>
          </ul>

          <h2>Confidentiality and the attorney-client relationship</h2>
          <p>
            Sending information through this website does not create an attorney-client relationship, and
            information sent before such a relationship exists may not be privileged or confidential. Please
            do not send sensitive details until we have agreed in writing to represent you. See our{" "}
            <Link href="/disclaimer">disclaimer</Link>.
          </p>

          <h2>How long we keep information</h2>
          <p>
            We keep inquiry information for as long as needed to respond, to evaluate potential claims and
            conflicts, and to meet our legal and professional record-keeping obligations. Client file
            retention is governed by the engagement agreement and the applicable rules of professional
            conduct.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical and physical safeguards to protect personal
            information. No method of transmission or storage is completely secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>California privacy rights</h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act, as amended by the
            California Privacy Rights Act (CCPA/CPRA), may give you the following rights regarding your
            personal information, subject to exceptions:
          </p>
          <ul>
            <li>
              <strong>Right to know</strong> what personal information we have collected, the sources, the
              purposes, and the categories of third parties we disclosed it to.
            </li>
            <li>
              <strong>Right to delete</strong> personal information we collected from you.
            </li>
            <li>
              <strong>Right to correct</strong> inaccurate personal information.
            </li>
            <li>
              <strong>Right to opt out</strong> of the sale or sharing of personal information. We do not
              sell personal information or share it for cross-context behavioral advertising.
            </li>
            <li>
              <strong>Right to limit</strong> the use of sensitive personal information to what is necessary
              to provide the services you asked for.
            </li>
            <li>
              <strong>Right to non-discrimination</strong> for exercising any of these rights.
            </li>
          </ul>
          <h3>Categories of information collected</h3>
          <p>
            In the past 12 months we have collected identifiers (such as name, email address, phone number
            and IP address), internet activity (such as pages viewed), and information you chose to provide
            in messages, which may include health or injury information. We collect it from you directly
            and automatically from your device, for the purposes described above.
          </p>
          <h3>How to make a request</h3>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.phone.href}>{site.phone.display}</a>. We will verify your identity before
            responding, typically by matching information you provide with information we already hold. You
            may use an authorized agent, who must show written permission from you. We aim to respond within
            45 days.
          </p>
          <p>
            Under California’s “Shine the Light” law, California residents may also ask whether we disclosed
            personal information to third parties for their direct marketing purposes. We do not.
          </p>

          <h2>Children</h2>
          <p>
            This website is not directed to children under 13, and we do not knowingly collect personal
            information from them online. A parent or guardian should contact us about a child’s injury
            claim.
          </p>

          <h2>Third-party sites</h2>
          <p>
            This website links to services we do not control, including Google and the Instant Estimate
            tool. Their privacy practices are described in their own policies.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The “last updated” date at the top of the page
            shows when it was last changed.
          </p>

          <h2>Contact us</h2>
          <p>
            {site.name}
            <br />
            {officeAddress(main)}
            <br />
            <a href={site.phone.href}>{site.phone.display}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            You can also reach us through the <Link href="/contact">contact page</Link>. A list of every
            page on this website is on the <Link href="/sitemap">sitemap</Link>.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
