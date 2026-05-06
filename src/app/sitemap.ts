import type { MetadataRoute } from "next";

import { blogPosts, coreRoutes, products, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-07T00:00:00.000Z");

  const baseRoutes = coreRoutes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const productRoutes = products.map((product) => ({
    url: new URL(`/mango-boxes/${product.slug}/`, siteConfig.url).toString(),
    lastModified,
    changeFrequency: "daily" as const,
    priority: 0.9,
    images: [new URL(product.image, siteConfig.url).toString()],
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}/`, siteConfig.url).toString(),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [new URL(post.image, siteConfig.url).toString()],
  }));

  return [...baseRoutes, ...productRoutes, ...blogRoutes];
}
