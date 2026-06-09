import type { MetadataRoute } from "next";

const SITE_URL = "https://www.valenciahq.com";
const locales = ["en", "es"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
  }));
}
