import type { MetadataRoute } from "next";
import { officeContent } from "@/content/offices";
import { posts } from "@/content/posts";
import { practiceAreas } from "@/content/practice";
import { abs } from "@/lib/seo";

/** Generates /sitemap.xml. New practice areas, offices and posts are picked up automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    lastModified: Date = now,
  ) => ({ url: abs(path), lastModified, changeFrequency, priority });

  return [
    entry("/", 1, "weekly"),
    entry("/practice-areas", 0.9, "monthly"),
    ...practiceAreas.map((p) => entry(`/${p.slug}`, 0.9, "monthly")),
    entry("/areas-we-serve", 0.8, "monthly"),
    ...officeContent.map((o) => entry(`/${o.slug}`, 0.9, "monthly")),
    entry("/attorney", 0.8, "monthly"),
    entry("/contact", 0.8, "yearly"),
    entry("/blog", 0.7, "weekly"),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.6, "yearly", new Date(`${p.date}T12:00:00Z`))),
    entry("/disclaimer", 0.2, "yearly"),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/sitemap", 0.2, "monthly"),
  ];
}
