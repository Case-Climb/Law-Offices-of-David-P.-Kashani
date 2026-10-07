import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui";
import { officeContent } from "@/content/offices";
import { postMetas } from "@/content/posts";
import { practiceAreas } from "@/content/practice";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Sitemap",
  description:
    "A complete list of pages on the Law Offices of David P. Kashani website: practice areas, office locations, blog articles, attorney profile and contact page.",
  path: "/sitemap",
});

type Group = { title: string; links: { href: string; label: string }[] };

const groups: Group[] = [
  {
    title: "Main pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/attorney", label: "Attorney David P. Kashani" },
      { href: "/contact", label: "Free Case Review (Contact)" },
    ],
  },
  {
    title: "Practice areas",
    links: [
      { href: "/practice-areas", label: "California Personal Injury Practice Areas" },
      ...practiceAreas.map((p) => ({ href: `/${p.slug}`, label: p.h1 })),
    ],
  },
  {
    title: "Locations",
    links: [
      { href: "/areas-we-serve", label: "Areas We Serve Across California" },
      ...officeContent.map((o) => ({ href: `/${o.slug}`, label: o.h1 })),
    ],
  },
  {
    title: "Blog",
    links: [
      { href: "/blog", label: "California Personal Injury Legal Tips & News" },
      ...postMetas.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/sitemap", label: "Sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Hero
        title="Sitemap"
        subtitle="Every page on this website, organized by category."
        crumbs={[{ name: "Sitemap", href: "/sitemap" }]}
      />

      <Section tone="white">
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <nav key={g.title} aria-labelledby={`sm-${g.title.replace(/\s+/g, "-").toLowerCase()}`}>
              <h2 id={`sm-${g.title.replace(/\s+/g, "-").toLowerCase()}`} className="h3 border-t-2 border-ink pt-5">
                {g.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
