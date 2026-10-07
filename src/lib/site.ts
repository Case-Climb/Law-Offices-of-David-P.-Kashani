/**
 * Single source of truth for firm facts. Everything here comes from the
 * client brief. Do not add review counts, ratings, results or credentials
 * that the firm has not confirmed in writing.
 */

export const site = {
  name: "Law Offices of David P. Kashani, APLC",
  shortName: "Kashani Law",
  titleSuffix: "Law Offices of David P. Kashani",
  attorney: "David P. Kashani, Esq.",
  attorneyShort: "David P. Kashani",
  url: "https://www.dkashlaw.com",
  email: "dkashani@dkashlaw.com",
  phone: { display: "(888) 932-2626", href: "tel:+18889322626", e164: "+1-888-932-2626" },
  reviewUrl: "https://g.page/r/CXtYlegz-hEGEBM/review",
  estimateUrl: "https://dkashlaw.instantestimate.co/",
  languages: ["English", "Spanish", "Farsi"],
  barAdmissions: ["California", "New York", "Massachusetts", "Washington", "Arizona"],
  feeLine: "Free consultation. No fees unless we win.",
  feeLong:
    "We handle injury cases on a contingency fee. The consultation is free, and you pay no attorney’s fees unless we recover compensation for you.",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX",
  copyrightYear: 2026,
} as const;

/** Office hours, shown on the contact and office pages and published as openingHours in the schema. */
export const hours: {
  confirmed: boolean;
  display: string;
  spec: { days: string[]; opens: string; closes: string }[];
} = {
  confirmed: true,
  display: "Open 24 hours, 7 days a week",
  spec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export type Office = {
  slug: "los-angeles" | "san-francisco" | "oakland";
  city: string;
  label: string;
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  phone: { display: string; href: string; e164: string };
  /** Approximate coordinates. Verify against Google Business Profile before launch. */
  geo: { lat: number; lng: number };
  isMain: boolean;
  blurb: string;
};

export const offices: Office[] = [
  {
    slug: "los-angeles",
    city: "Los Angeles",
    label: "Los Angeles (main office)",
    street: "3780 Selby Ave",
    locality: "Los Angeles",
    region: "CA",
    postalCode: "90034",
    phone: { display: "(323) 782-9605", href: "tel:+13237829605", e164: "+1-323-782-9605" },
    geo: { lat: 34.0213, lng: -118.4133 },
    isMain: true,
    blurb:
      "Our main office sits on the Westside, a few minutes from the I-10 and I-405 interchange.",
  },
  {
    slug: "san-francisco",
    city: "San Francisco",
    label: "San Francisco",
    street: "95 3rd Street, 2nd Floor",
    locality: "San Francisco",
    region: "CA",
    postalCode: "94103",
    phone: { display: "(415) 888-5111", href: "tel:+14158885111", e164: "+1-415-888-5111" },
    geo: { lat: 37.7858, lng: -122.4011 },
    isMain: false,
    blurb: "A South of Market office one block from Market Street, close to BART and Muni.",
  },
  {
    slug: "oakland",
    city: "Oakland",
    label: "Oakland",
    street: "1423 Broadway, Suite 1009",
    locality: "Oakland",
    region: "CA",
    postalCode: "94612",
    phone: { display: "(510) 955-1555", href: "tel:+15109551555", e164: "+1-510-955-1555" },
    geo: { lat: 37.8046, lng: -122.2712 },
    isMain: false,
    blurb: "A downtown Oakland office on Broadway, steps from the 12th Street BART station.",
  },
];

export function officeAddress(o: Office) {
  return `${o.street}, ${o.locality}, ${o.region} ${o.postalCode}`;
}

export function getOffice(slug: string) {
  return offices.find((o) => o.slug === slug);
}

/** Practice-area navigation, in the order the firm lists them. */
export const practiceNav = [
  { slug: "car-accidents", label: "Car Accidents", short: "Rear-end, T-bone, hit-and-run and uninsured driver crashes." },
  { slug: "truck-accidents", label: "Truck Accidents", short: "18-wheelers, delivery trucks and the companies behind them." },
  { slug: "rideshare-accidents", label: "Rideshare Accidents", short: "Uber and Lyft passengers, drivers and people they hit." },
  { slug: "bus-accidents", label: "Bus Accidents", short: "Transit, school, charter and tour bus injuries." },
  { slug: "bicycle-accidents", label: "Bicycle Accidents", short: "Dooring, right-hooks and unsafe road conditions." },
  { slug: "motorcycle-accidents", label: "Motorcycle Accidents", short: "Lane-splitting disputes and serious rider injuries." },
  { slug: "wrongful-death", label: "Wrongful Death", short: "Claims for families who lost someone to negligence." },
] as const;

export const areaNav = [
  { href: "/los-angeles", label: "Los Angeles" },
  { href: "/san-francisco", label: "San Francisco" },
  { href: "/oakland", label: "Oakland" },
  { href: "/areas-we-serve", label: "All California" },
] as const;

export const mainNav = [
  { href: "/attorney", label: "About" },
  { href: "/practice-areas", label: "Practice Areas", menu: "practice" as const },
  { href: "/areas-we-serve", label: "Areas We Serve", menu: "areas" as const },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/** Recognitions as listed on the firm's current site. Unverified by the firm. */
export const recognitions = [
  { name: "National Trial Lawyers Top 40 Under 40", years: "2019, 2020" },
  { name: "National Trial Lawyers Top 100", years: "2020 to present" },
  { name: "Lawyers of Distinction", years: "2018 to present" },
  { name: "National Association of Distinguished Counsel", years: "2021 to present" },
];

export const memberships = [
  "State bars of California, New York, Massachusetts, Washington and Arizona",
  "Consumer Attorneys Association of Los Angeles",
  "American Association for Justice",
  "Los Angeles County Bar Association",
  "Washington State Association for Justice",
  "Golden Key Honor Society",
];

export const accidentTypes = [
  "Car accident",
  "Truck accident",
  "Uber or Lyft accident",
  "Bus accident",
  "Bicycle accident",
  "Motorcycle accident",
  "Wrongful death",
  "Other injury",
];
