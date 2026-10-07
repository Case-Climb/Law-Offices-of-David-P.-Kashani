import type { NextConfig } from "next";

/**
 * 301 redirect map from the old dkashlaw.com URLs to the new site.
 * `statusCode: 301` is used instead of `permanent: true`, which would send a 308.
 * Old blog posts lived at /?post=slug; those are handled in src/proxy.ts.
 * Old paths that keep the same URL (/car-accidents, /truck-accidents,
 * /wrongful-death, /bicycle-accidents, /motorcycle-accidents,
 * /blog, /contact) need no redirect.
 */
const map: Record<string, string> = {
  // Pages the brief listed
  "/personal-injury": "/practice-areas",
  "/uber-lyft-accidents": "/rideshare-accidents",
  "/pedestrian-accident": "/practice-areas",
  "/slip-and-fall": "/practice-areas",
  "/nursing-home-abuse-negligence": "/practice-areas",
  "/construction-accident": "/practice-areas",
  "/product-liability": "/practice-areas",
  "/birth-injury-lawyer": "/practice-areas",
  "/catastrophic-injury": "/practice-areas",
  "/los-angeles-personal-injury-lawyer-": "/los-angeles",
  "/los-angeles-personal-injury-lawyer": "/los-angeles",
  "/san-francisco-personal-injury-lawyer": "/san-francisco",
  "/oakland-personal-injury-lawyer": "/oakland",
  "/seattle-personal-injury-lawyer": "/areas-we-serve",
  "/results": "/",
  "/testimonials": "/",
  "/about": "/attorney",

  // Additional live URLs found on the old site
  "/dog-bite": "/practice-areas",
  "/elevator---escalator-accident": "/practice-areas",
  "/traumatic-brain-injury": "/practice-areas",
  "/uninsured-motorist-accidents": "/car-accidents",
  "/los-angeles-car-accident-lawyer": "/car-accidents",
  "/los-angeles-truck-accident-lawyer": "/truck-accidents",
  "/los-angeles-catastrophic-injury-lawyer": "/los-angeles",
  "/oakland-car-accident-lawyer": "/oakland",
  "/seattle-truck-accident-lawyer": "/areas-we-serve",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return Object.entries(map).map(([source, destination]) => ({
      source,
      destination,
      statusCode: 301 as const,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
