# Site images

Image paths and alt text are registered in `src/lib/images.ts`. To swap an image, replace the file
here (same name) and update its alt text there.

## Scene photography (AI-generated stand-ins)

Everything below was generated with Higgsfield as placeholder scenery: no people, no text, dark with
red and amber accents, subject on the right so hero copy stays readable on the left. The city views
are illustrative, not accurate photographs of those places. Replace with the firm's own photos when
they are available.

- `hero.jpg`: homepage hero background.
- `courthouse.jpg`: hero background for index pages (practice areas, areas we serve, blog, contact,
  testimonials) and the "Not sure where your case fits?" card.
- `practice/<slug>.jpg`: practice-area cards and each practice page's hero.
- `city/<slug>.jpg`: office cards and each office page's hero.
- `blog/<post-slug>.jpg`: blog cards and each post's hero. A new post needs an entry in `postImages`.

Source files are 1920px wide JPEGs (the hero is 2688px); next/image resizes them per screen.

## From the client

- `david-kashani.webp`: attorney portrait (transparent background), shown on `/` and `/attorney`.

## Still needed from the client

- `office-los-angeles.jpg`, `office-san-francisco.jpg`, `office-oakland.jpg`: optional real office photos.

Do not use stock or AI-generated images of people presented as the attorney, staff or clients.
