import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "./data/blog";
import { getAllSlugs } from "./data/portfolio";
import { SITE_URL } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = getAllBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogRoutes,
    ...portfolioRoutes,
  ];
}
