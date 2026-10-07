import type { Metadata } from "next";
import Link from "next/link";
import { BlogIndex } from "@/components/BlogCards";
import { CtaBand } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui";
import { postMetas } from "@/content/posts";
import { courthouseImage } from "@/lib/images";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "California Personal Injury Legal Tips & News",
  description:
    "Plain-English guides to California personal injury law: what to do after a crash, filing deadlines, truck and rideshare liability, and what a claim is worth.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Hero
        title="California Personal Injury Legal Tips & News"
        subtitle="Straight answers to the questions people ask after an accident, written without the legalese."
        crumbs={[{ name: "Blog", href: "/blog" }]}
        image={courthouseImage}
      />

      <Section tone="stone">
        <BlogIndex posts={postMetas} />
        <p className="mt-12 max-w-3xl text-[0.9375rem] leading-relaxed text-muted">
          These articles are general information, not legal advice, and reading them does not create an
          attorney-client relationship. For advice about your situation,{" "}
          <Link href="/contact" className="link">
            request a free case review
          </Link>
          , browse our{" "}
          <Link href="/practice-areas" className="link">
            practice areas
          </Link>{" "}
          or learn about{" "}
          <Link href="/attorney" className="link">
            attorney David P. Kashani
          </Link>
          .
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
