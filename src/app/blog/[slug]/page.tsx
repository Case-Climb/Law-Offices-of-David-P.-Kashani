import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/BlogCards";
import { CtaBand } from "@/components/blocks";
import { Hero } from "@/components/Hero";
import { CallButton, JsonLd, Section } from "@/components/ui";
import { formatDate, getPost, postMetas, posts } from "@/content/posts";
import { postImages } from "@/lib/images";
import { articleSchema, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = postMetas.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <Hero
        title={post.title}
        subtitle={post.excerpt}
        crumbs={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
        image={postImages[post.slug]}
        note={
          <>
            {post.category}, published <time dateTime={post.date}>{formatDate(post.date)}</time>,{" "}
            {post.minutes} minute read
          </>
        }
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
          <article>
            <div className="prose-site">{post.body}</div>

            {/* End-of-post CTA */}
            <div className="mt-12 max-w-[44rem] rounded-[3px] border-l-4 border-red bg-stone p-7 sm:p-9">
              <h2 className="h3">{post.cta.title}</h2>
              <p className="mt-3">{post.cta.body}</p>
              <div className="mt-6 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <CallButton />
                <Link href="/contact" className="btn btn-outline-dark">
                  Free Case Review
                </Link>
              </div>
            </div>

            <p className="mt-8 max-w-[44rem] text-sm leading-relaxed text-muted">
              This article is general information about California law as of its publication date. It is not
              legal advice and does not create an attorney-client relationship. Laws change, and how they
              apply depends on your facts. Consult an attorney about your situation.
            </p>
          </article>

          <aside aria-label="About the firm">
            <div className="rounded-[3px] border-t-4 border-red bg-stone p-7 lg:sticky lg:top-28">
              <h2 className="h3">Questions about your own case?</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed">{site.feeLong}</p>
              <div className="mt-5 grid gap-3">
                <CallButton />
                <Link href="/contact" className="btn btn-outline-dark">
                  Free Case Review
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted">
                Written by the {site.name}.{" "}
                <Link href="/attorney" className="link">
                  About attorney David P. Kashani
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="stone" labelledBy="more-posts-title">
        <h2 id="more-posts-title" className="h2">
          More from the blog
        </h2>
        <span className="rule-red mt-5 mb-10" aria-hidden="true" />
        <ul className="grid gap-6 md:grid-cols-3">
          {more.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
        <Link href="/blog" className="btn btn-outline-dark mt-9">
          All legal tips and news
        </Link>
      </Section>

      <CtaBand />
    </>
  );
}
