import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { offices, practiceNav, site } from "@/lib/site";
import { Logo } from "./Logo";

const quickLinks = [
  { href: "/attorney", label: "Attorney David P. Kashani" },
  { href: "/practice-areas", label: "Practice areas" },
  { href: "/areas-we-serve", label: "Areas we serve" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Free case review" },
];

const linkClass = "text-mist underline-offset-4 hover:text-white hover:underline";

export function Footer() {
  return (
    <footer className="on-dark bg-ink pb-24 text-[0.9375rem] text-mist md:pb-0">
      <div className="container-site border-t border-ink-line py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm leading-relaxed">
              Personal injury representation for people hurt anywhere in California. {site.feeLine}
            </p>
            <ul className="mt-6 space-y-2.5">
              <li>
                <a href={site.phone.href} className="inline-flex items-center gap-2.5 font-semibold text-white hover:underline">
                  <Phone aria-hidden="true" className="size-4 text-red-soft" />
                  Toll-free {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={`inline-flex items-center gap-2.5 ${linkClass}`}>
                  <Mail aria-hidden="true" className="size-4 text-red-soft" />
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-6">
              <span className="font-semibold text-white">Languages spoken:</span> {site.languages.join(", ")}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <nav aria-labelledby="footer-practice">
              <h2 id="footer-practice" className="font-sans text-base font-semibold text-white">
                Practice areas
              </h2>
              <ul className="mt-4 space-y-2.5">
                {practiceNav.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`} className={linkClass}>
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-quick">
              <h2 id="footer-quick" className="font-sans text-base font-semibold text-white">
                Quick links
              </h2>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={site.estimateUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Instant Estimate<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="font-sans text-base font-semibold text-white">Offices</h2>
              <ul className="mt-4 space-y-5">
                {offices.map((o) => (
                  <li key={o.slug}>
                    <address className="not-italic leading-relaxed">
                      <Link href={`/${o.slug}`} className="font-semibold text-white underline-offset-4 hover:underline">
                        {o.city}
                        {o.isMain ? " (main)" : ""}
                      </Link>
                      <br />
                      {o.street}
                      <br />
                      {o.locality}, {o.region} {o.postalCode}
                      <br />
                      <a href={o.phone.href} className={linkClass}>
                        {o.phone.display}
                      </a>
                    </address>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-site py-8 text-sm leading-relaxed">
          <p>
            <strong className="font-semibold text-white">Attorney Advertising.</strong> This website is for
            general information only and is not legal advice. Contacting the firm does not create an
            attorney-client relationship. Past results do not guarantee or predict a similar outcome in any
            future case. David P. Kashani is the attorney responsible for this website.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {site.copyrightYear} {site.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href="/disclaimer" className={linkClass}>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className={linkClass}>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Fixed bottom call button, phones and small tablets only.
 * The chat launcher (58px, pinned 20px from the bottom-right by the vendor)
 * lands on this bar, so once <chat-widget> exists the bar keeps its right end clear.
 */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden [body:has(chat-widget)_&]:pr-[5.5rem]">
      <a
        href={site.phone.href}
        className="btn btn-red w-full px-3 whitespace-nowrap"
        aria-label={`Call now, ${site.phone.display}`}
      >
        <Phone aria-hidden="true" className="size-[1.05em]" strokeWidth={2.25} />
        <span>
          Call <span className="max-[22.5rem]:hidden">Now </span>
          {site.phone.display}
        </span>
      </a>
    </div>
  );
}
