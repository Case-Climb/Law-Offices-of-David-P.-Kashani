import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui";
import { pageMeta } from "@/lib/seo";
import { offices, officeAddress, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer & Attorney Advertising Notice",
  description:
    "Attorney advertising notice and legal disclaimer for the Law Offices of David P. Kashani, APLC: no attorney-client relationship, no guarantee of results.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  const main = offices[0];
  return (
    <>
      <Hero
        title="Disclaimer"
        subtitle="Attorney advertising notice and the terms on which the information on this website is offered."
        crumbs={[{ name: "Disclaimer", href: "/disclaimer" }]}
      />

      <Section tone="white">
        <div className="prose-site">
          <h2 className="!mt-0">Attorney advertising</h2>
          <p>
            This website is a communication about the legal services of {site.name} and may be considered
            attorney advertising under the California Rules of Professional Conduct and the rules of other
            jurisdictions.
          </p>

          <h2>Responsible attorney</h2>
          <p>
            The attorney responsible for the content of this website is David P. Kashani, {site.name},{" "}
            {officeAddress(main)}, {site.phone.display}.
          </p>

          <h2>No attorney-client relationship</h2>
          <p>
            Visiting this website, submitting a form, using the chat or the Instant Estimate tool, or
            sending us an email, text message or voicemail does not create an attorney-client relationship.
            That relationship begins only when you and the firm sign a written agreement. Until then, please
            do not send confidential or time-sensitive information, and do not assume that the firm is
            protecting your legal rights or tracking your deadlines.
          </p>

          <h2>General information, not legal advice</h2>
          <p>
            The content on this website, including the <Link href="/blog">blog</Link> and the practice area
            pages, is general information about California law. It is not legal advice and is not a
            substitute for speaking with a lawyer about your own situation. Laws and deadlines change, and
            how they apply depends on the specific facts. The firm does not promise that the information
            here is complete or current.
          </p>

          <h2>Past results and no guarantee of outcome</h2>
          <p>
            Every case is different. Any case result, testimonial, review or recognition mentioned on this
            website describes a specific matter or opinion. Past results do not guarantee, warrant or
            predict the outcome of any future case. The firm cannot and does not guarantee a result in any
            matter.
          </p>

          <h2>Testimonials and recognitions</h2>
          <p>
            Client testimonials and reviews reflect individual experiences
            and are not a prediction of the outcome of your matter. Recognitions listed on this website are
            awarded by private organizations under their own selection criteria. They are not endorsements
            by any court or state bar.
          </p>

          <h2>Fees and costs</h2>
          <p>
            Statements such as “no fees unless we win” refer to attorney’s fees under a contingency fee
            agreement. The fee, and whether and how the client is responsible for case costs and expenses,
            are governed by the written agreement between the client and the firm.
          </p>

          <h2>Instant Estimate tool</h2>
          <p>
            The Instant Estimate tool linked from this website is provided for general informational
            purposes. Any figure it produces is a rough estimate based on limited information. It is not
            legal advice, an evaluation of your claim, or a promise or prediction of any recovery.
          </p>

          <h2>Jurisdictions of practice</h2>
          <p>
            David P. Kashani is licensed to practice law in California, New York, Massachusetts, Washington
            and Arizona. The firm’s offices are in California, and this website is directed primarily to
            people with legal matters in California. It is not intended to solicit clients in any
            jurisdiction where the firm’s attorneys are not licensed or where this website would not comply
            with local rules.
          </p>

          <h2>Third-party links</h2>
          <p>
            This website links to third-party sites and services, such as Google and the Instant Estimate
            tool. The firm does not control those sites and is not responsible for their content or privacy
            practices.
          </p>

          <h2>Questions</h2>
          <p>
            If you have questions about this disclaimer, <Link href="/contact">contact the firm</Link> or
            call {site.phone.display}. See also our <Link href="/privacy-policy">Privacy Policy</Link> and
            the <Link href="/sitemap">sitemap</Link>.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
