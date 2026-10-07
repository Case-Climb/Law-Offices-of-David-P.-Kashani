# Law Offices of David P. Kashani, APLC: website

Next.js (App Router) + React + Tailwind CSS v4 + Framer Motion. 20 pages plus six blog posts, statically
prerendered and ready for Vercel. Replaces the current site at https://www.dkashlaw.com.

> The project folder is named "Patterson Injury Lawyer", but the site is for Kashani Law. The Patterson
> logo files that came with the brief were sent by mistake and are not used anywhere.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where things live

| What | Where |
| --- | --- |
| Firm facts (name, phones, offices, hours, languages, recognitions) | `src/lib/site.ts` |
| Metadata helper and all JSON-LD builders | `src/lib/seo.ts` |
| Colors, type scale, buttons, hero, FAQ styles | `src/app/globals.css` |
| Practice-area copy (one file per page) | `src/content/practice/` |
| Office page copy (LA, SF, Oakland) | `src/content/offices.tsx` |
| Blog posts | `src/content/posts.tsx` |
| Client testimonials (empty on purpose) | `src/content/testimonials.ts` |
| Shared components | `src/components/` |
| 301 redirects from old URLs | `next.config.ts` and `src/proxy.ts` (old `/?post=` blog URLs) |
| Case review form (CaseClimb iframe embed) | `src/components/CaseReviewForm.tsx` |
| Email form handler (currently unused; its feedback form went with the testimonials page) | `src/app/api/contact/route.ts` |

The seven practice pages and three office pages are rendered by `src/app/[slug]/page.tsx` from the content
files, so each uses one consistent template.

## Environment variables

Copy `.env.example` to `.env.local` for local work and set the same keys in Vercel.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID. Defaults to the placeholder `G-XXXXXXXXXX`. |
| `RESEND_API_KEY` | Only needed if a form is pointed at `/api/contact` again. |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `Website <forms@dkashlaw.com>`. |
| `CONTACT_TO_EMAIL` | Optional. Defaults to `dkashani@dkashlaw.com`. |

No page currently posts to `/api/contact`, so the Resend keys are not needed to launch.

The case review form on `/contact` is hosted by CaseClimb: its fields, consent wording and delivery are
managed in the CaseClimb form builder and need no environment variables here.

## Before launch

Nothing below is invented. Each item is waiting on the firm.

**Content the firm must supply**

- [x] Logo: `public/brand/` (supplied PNG plus a white-wordmark copy for dark backgrounds). Vector files
      would be sharper. The logo red is `#F80307`; the site still uses the brief's `#C8202F` for `--color-red`.
- [x] Attorney portrait: `public/images/david-kashani.webp`, shown on `/` and `/attorney`.
- [ ] Real hero and office photos or video, to replace the AI stand-ins in `public/images/` (see the note there).
- [x] Office hours: open 24 hours, 7 days a week (`hours` in `src/lib/site.ts`).
- [ ] Client testimonials, with permission. Add to `src/content/testimonials.ts` (homepage slider).
- [ ] Google reviews widget embed, if wanted. Its slot was removed from the homepage along with the other
      on-page review notes; the items in this checklist are no longer flagged on the site itself.
- [x] Chat widget: LeadConnector, loaded site-wide from `src/components/ChatWidget.tsx`. Its colours,
      greeting and behaviour are set in the LeadConnector dashboard.
- [ ] GA4 measurement ID.
- [ ] Badge images for the Recognition strip, if wanted.

**Things to verify**

- [ ] Recognitions and years (shown with the note "Per firm; verify before publishing").
- [ ] Office geo coordinates in `src/lib/site.ts`. They are approximate; match them to Google Business Profile.
- [ ] Attorney bio wording on `/attorney`.
- [ ] Spanish and Farsi phrases in the mobile menu.

**Compliance review (California Rules of Professional Conduct 7.1 to 7.5)**

- [ ] The responsible attorney should read every page before publishing. The copy avoids "best", "#1",
      "guaranteed", "expert" and "specialist" claims, shows no settlement figures, ratings or case
      results, and carries "Attorney Advertising" in the footer.
- [ ] The practice pages and blog posts summarize California law in general terms (two-year filing
      deadline, six-month government claims, comparative fault, rideshare insurance tiers, FMCSA hours
      rules, survival actions). Confirm each statement is current.
- [ ] `/disclaimer` and `/privacy-policy` are drafts. Confirm the privacy policy matches the firm's real
      vendors and data practices, including SMS consent wording.

**SEO notes**

- The old site has about 65 blog posts at `/?post=slug`. Nineteen map to the closest new post; the rest
  301 to `/blog`. Migrating the stronger old posts would preserve more of their search traffic.
- The homepage and `/los-angeles` both target "Los Angeles personal injury lawyer", as briefed. Their
  titles differ so they are unique, but they compete for the same query.
- Service pages run about 1,350 to 1,420 words of page-specific copy, above the 600 to 1,000 target,
  because the required template sections (intro, topics, causes, injuries, compensation, timeline,
  checklist, legal notes, six FAQs) add up. Trim the topic cards or FAQ answers if a tighter page is wanted.
- No Review or AggregateRating schema is output until real review data is connected.

## Deploy

Import the repo in Vercel (framework preset: Next.js), add the environment variables, and point
`www.dkashlaw.com` at the project. `robots.txt` and `sitemap.xml` are generated at build time.
