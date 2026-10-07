import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbSchema, type Crumb } from "@/lib/seo";
import { site } from "@/lib/site";
import { CallButton, CaseReviewButton, JsonLd, cx } from "./ui";

/**
 * Dark hero used on every page: H1, red rule, subhead, two CTAs.
 * Pass `image` (see src/lib/images.ts) for a photo background; without one the gradient stands alone.
 * Inner pages pass `crumbs` (Home is added automatically).
 */
export function Hero({
  title,
  secondLine,
  subtitle,
  crumbs,
  image,
  aside,
  note,
}: {
  title: string;
  secondLine?: string;
  subtitle: ReactNode;
  crumbs?: Crumb[];
  image?: { src: string; alt: string };
  aside?: ReactNode;
  note?: ReactNode;
}) {
  const trail: Crumb[] | null = crumbs ? [{ name: "Home", href: "/" }, ...crumbs] : null;
  const home = !crumbs;

  return (
    <div className="hero on-dark">
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            sizes="100vw"
            className="-z-20 object-cover object-[75%_center]"
          />
          <div className="hero-photo-overlay absolute inset-0 -z-10" aria-hidden="true" />
        </>
      ) : null}

      <div
        className={cx(
          "container-site relative",
          home ? "pt-36 pb-20 sm:pt-44 sm:pb-24 lg:pt-52 lg:pb-32" : "pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20",
        )}
      >
        <div className={cx(!!aside && "grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14")}>
          <div>
            {trail ? <Breadcrumbs trail={trail} /> : null}

            <h1 className="h1 max-w-[20ch] text-white sm:max-w-[24ch]">
              {title}
              {secondLine ? (
                <span className="mt-3 block text-[0.56em] leading-tight font-medium tracking-normal text-mist">
                  {secondLine}
                </span>
              ) : null}
            </h1>
            <span className="rule-red mt-6 sm:mt-7" aria-hidden="true" />
            <div className="lead mt-6 max-w-[38rem] text-[#d9d9de] sm:mt-7">{subtitle}</div>

            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-9">
              <CallButton />
              <CaseReviewButton />
            </div>

            <p className="mt-6 text-[0.9375rem] text-mist">{note ?? site.feeLine}</p>
          </div>

          {aside ? <div>{aside}</div> : null}
        </div>
      </div>
    </div>
  );
}

function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-mist">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-white">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="underline-offset-4 hover:text-white hover:underline">
                    {c.name}
                  </Link>
                )}
                {!last ? (
                  <span aria-hidden="true" className="text-white/35">
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
