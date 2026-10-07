import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfficeTemplate } from "@/components/OfficeTemplate";
import { PracticeTemplate } from "@/components/PracticeTemplate";
import { getOfficeContent, officeContent } from "@/content/offices";
import { getPracticeArea, practiceAreas } from "@/content/practice";
import { pageMeta } from "@/lib/seo";
import { getOffice } from "@/lib/site";

/**
 * One dynamic segment renders the seven practice-area pages and the three
 * office pages. Every valid slug is prerendered; anything else is a 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...practiceAreas.map((p) => ({ slug: p.slug })), ...officeContent.map((o) => ({ slug: o.slug }))];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (area) return pageMeta({ title: area.metaTitle, description: area.metaDescription, path: `/${slug}` });
  const office = getOfficeContent(slug);
  if (office) return pageMeta({ title: office.metaTitle, description: office.metaDescription, path: `/${slug}` });
  return {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;

  const area = getPracticeArea(slug);
  if (area) return <PracticeTemplate area={area} />;

  const content = getOfficeContent(slug);
  const office = getOffice(slug);
  if (content && office) return <OfficeTemplate office={office} content={content} />;

  notFound();
}
