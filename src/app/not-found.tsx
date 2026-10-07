import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui";
import { practiceNav } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Law Offices of David P. Kashani" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Hero
        title="This page could not be found"
        subtitle="The address may have changed when we rebuilt the site. The links below will get you where you were going."
        crumbs={[{ name: "Page not found", href: "/" }]}
      />
      <Section tone="white">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="h3">Practice areas</h2>
            <ul className="mt-4 space-y-2.5">
              {practiceNav.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="link">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h3">Other pages</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/attorney" className="link">
                  Attorney David P. Kashani
                </Link>
              </li>
              <li>
                <Link href="/areas-we-serve" className="link">
                  Areas we serve
                </Link>
              </li>
              <li>
                <Link href="/blog" className="link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link">
                  Free case review
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="link">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
