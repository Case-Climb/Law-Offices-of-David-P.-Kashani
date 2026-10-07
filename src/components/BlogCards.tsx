"use client";

import Link from "next/link";
import { useState } from "react";
import type { PostMeta } from "@/content/posts";
import { postImages } from "@/lib/images";
import { CardImage, cx } from "./ui";

const fmt = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export function PostCard({ post, headingLevel = "h3" }: { post: PostMeta; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative flex h-full flex-col border-t-2 border-ink bg-paper transition-colors hover:border-red">
      <CardImage image={postImages[post.slug]} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm text-muted">
          <span className="font-semibold text-red">{post.category}</span>
          <span className="mx-2 text-line" aria-hidden="true">
            |
          </span>
          <time dateTime={post.date}>{fmt(post.date)}</time>
        </p>
        <H className="h3 mt-3">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 group-hover:text-red">
            {post.title}
          </Link>
        </H>
        <p className="mt-3 text-[0.9375rem] leading-relaxed">{post.excerpt}</p>
        <p className="mt-auto pt-5 text-sm text-muted">{post.minutes} minute read</p>
      </div>
    </article>
  );
}

/** Blog index with category filter tags. */
export function BlogIndex({ posts }: { posts: PostMeta[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter posts by topic" className="flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cx(
              "min-h-11 rounded-full border px-4 py-2 text-[0.9375rem] font-medium transition-colors",
              active === c
                ? "border-ink bg-ink text-white"
                : "border-[#8b8b93] bg-paper text-ink hover:border-ink",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-muted">
        Showing {shown.length} {shown.length === 1 ? "post" : "posts"}
        {active === "All" ? "" : ` in ${active}`}
      </p>

      <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <li key={p.slug}>
            <PostCard post={p} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
