import type { Office } from "./site";

/**
 * Scene photography for heroes and cards. Every file here was AI-generated
 * as a stand-in until the firm supplies its own photos: scenery only, no
 * people, and the city views are illustrative rather than exact. To swap
 * one, replace the file in /public/images and update its alt text below.
 */
export type SiteImage = { src: string; alt: string };

export const heroImage: SiteImage = {
  src: "/images/hero.jpg",
  alt: "Downtown Los Angeles skyline at dusk",
};

/** Default background for inner-page heroes that have no image of their own. */
export const courthouseImage: SiteImage = {
  src: "/images/courthouse.jpg",
  alt: "Stone courthouse columns lit at night",
};

export const practiceImages: Record<string, SiteImage> = {
  "car-accidents": {
    src: "/images/practice/car-accidents.jpg",
    alt: "A car stopped at a red light on a wet city street at night",
  },
  "truck-accidents": {
    src: "/images/practice/truck-accidents.jpg",
    alt: "A semi-truck on a highway at sunset",
  },
  "rideshare-accidents": {
    src: "/images/practice/rideshare-accidents.jpg",
    alt: "A car pulled over at a downtown curb at night with its hazard lights on",
  },
  "bus-accidents": {
    src: "/images/practice/bus-accidents.jpg",
    alt: "A city bus leaving a bus stop on a rainy night",
  },
  "bicycle-accidents": {
    src: "/images/practice/bicycle-accidents.jpg",
    alt: "A bicycle beside a bike lane with traffic approaching at dusk",
  },
  "motorcycle-accidents": {
    src: "/images/practice/motorcycle-accidents.jpg",
    alt: "A motorcycle parked beside a canyon road above city lights at dusk",
  },
  "wrongful-death": {
    src: "/images/practice/wrongful-death.jpg",
    alt: "An empty bench overlooking the ocean at twilight",
  },
};

export const cityImages: Record<Office["slug"], SiteImage> = {
  "los-angeles": {
    src: "/images/city/los-angeles.jpg",
    alt: "A palm-lined Los Angeles boulevard at dusk",
  },
  "san-francisco": {
    src: "/images/city/san-francisco.jpg",
    alt: "A steep San Francisco street with fog over the bay at dusk",
  },
  oakland: {
    src: "/images/city/oakland.jpg",
    alt: "A downtown skyline reflected in a lake at dusk",
  },
};

/** Keyed by post slug. */
export const postImages: Record<string, SiteImage> = {
  "what-to-do-after-a-car-accident-in-california": {
    src: "/images/blog/what-to-do-after-a-car-accident-in-california.jpg",
    alt: "A warning triangle on the roadside behind a stopped car",
  },
  "how-long-do-i-have-to-file-a-personal-injury-claim-in-california": {
    src: "/images/blog/how-long-do-i-have-to-file-a-personal-injury-claim-in-california.jpg",
    alt: "An hourglass on a desk beside a folder and pen",
  },
  "who-is-liable-in-a-truck-accident": {
    src: "/images/blog/who-is-liable-in-a-truck-accident.jpg",
    alt: "A row of parked semi-trucks at a freight yard at night",
  },
  "uber-lyft-accidents-who-pays": {
    src: "/images/blog/uber-lyft-accidents-who-pays.jpg",
    alt: "A phone showing a route map on a car dashboard on a rainy night",
  },
  "california-wrongful-death-claims-explained": {
    src: "/images/blog/california-wrongful-death-claims-explained.jpg",
    alt: "White lilies on a table beside a window at dusk",
  },
  "how-much-is-my-personal-injury-case-worth": {
    src: "/images/blog/how-much-is-my-personal-injury-case-worth.jpg",
    alt: "Brass scales of justice on a desk beside a book and papers",
  },
};
