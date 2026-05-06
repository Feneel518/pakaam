import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.domain}/`,
      lastModified: new Date("2026-05-07T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteConfig.domain}/images/mangoHero.jpg`,
        `${siteConfig.domain}/images/10.jpg`,
        `${siteConfig.domain}/images/5.jpg`,
        `${siteConfig.domain}/images/3.jpg`,
      ],
    },
  ];
}
