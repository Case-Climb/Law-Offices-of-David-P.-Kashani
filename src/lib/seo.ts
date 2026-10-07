import type { Metadata } from "next";
import { hours, offices, officeAddress, site, type Office } from "./site";

export type Crumb = { name: string; href: string };
export type Faq = { q: string; a: string };

export const abs = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

/**
 * Builds per-page metadata: unique title and description, canonical URL,
 * Open Graph and Twitter card tags.
 * `title` is the keyword part only; the firm suffix is added here.
 */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  noSuffix = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noSuffix?: boolean;
}): Metadata {
  const fullTitle = noSuffix ? title : `${title} | ${site.titleSuffix}`;
  const url = abs(path);
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: site.name };
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

/* ---------- JSON-LD builders ---------- */

const postal = (o: Office) => ({
  "@type": "PostalAddress",
  streetAddress: o.street,
  addressLocality: o.locality,
  addressRegion: o.region,
  postalCode: o.postalCode,
  addressCountry: "US",
});

const openingHours = () =>
  hours.confirmed && hours.spec.length
    ? {
        openingHoursSpecification: hours.spec.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
      }
    : {};

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Homepage: the firm as a LegalService. No ratings or reviews until real data is connected. */
export function legalServiceSchema() {
  const main = offices[0];
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${site.url}/#firm`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    image: abs("/opengraph-image"),
    priceRange: "Free consultation",
    address: postal(main),
    geo: { "@type": "GeoCoordinates", latitude: main.geo.lat, longitude: main.geo.lng },
    areaServed: { "@type": "State", name: "California" },
    knowsLanguage: ["en", "es", "fa"],
    founder: { "@id": `${site.url}/attorney#david-kashani` },
    location: offices.map((o) => ({
      "@type": "Place",
      name: `${site.shortName}, ${o.city}`,
      address: postal(o),
      telephone: o.phone.e164,
    })),
    ...openingHours(),
  };
}

/** Office pages: LocalBusiness + LegalService with geo, telephone and address. */
export function officeSchema(o: Office) {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "@id": `${site.url}/${o.slug}#office`,
    name: `${site.name}, ${o.city}`,
    url: abs(`/${o.slug}`),
    telephone: o.phone.e164,
    email: site.email,
    image: abs("/opengraph-image"),
    priceRange: "Free consultation",
    address: postal(o),
    geo: { "@type": "GeoCoordinates", latitude: o.geo.lat, longitude: o.geo.lng },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress(o))}`,
    areaServed: [
      { "@type": "City", name: o.city },
      { "@type": "State", name: "California" },
    ],
    knowsLanguage: ["en", "es", "fa"],
    parentOrganization: { "@id": `${site.url}/#firm` },
    ...openingHours(),
  };
}

/** /attorney: Person for David P. Kashani and Attorney for his practice. */
export function attorneySchema() {
  const main = offices[0];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/attorney#david-kashani`,
        name: "David P. Kashani",
        honorificSuffix: "Esq.",
        jobTitle: "Personal Injury Attorney",
        url: abs("/attorney"),
        worksFor: { "@id": `${site.url}/#firm` },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "University of California, Los Angeles" },
          { "@type": "CollegeOrUniversity", name: "Whittier Law School" },
        ],
        knowsAbout: [
          "Personal injury law",
          "Motor vehicle accident claims",
          "Trucking accident claims",
          "Wrongful death claims",
        ],
      },
      {
        "@type": "Attorney",
        "@id": `${site.url}/attorney#practice`,
        name: site.name,
        url: abs("/attorney"),
        telephone: site.phone.e164,
        address: postal(main),
        areaServed: { "@type": "State", name: "California" },
        employee: { "@id": `${site.url}/attorney#david-kashani` },
      },
    ],
  };
}

export function articleSchema(p: { title: string; description: string; slug: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: abs(`/blog/${p.slug}`),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}
