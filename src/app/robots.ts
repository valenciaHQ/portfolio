import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/files/",
      },
    ],
    sitemap: "https://www.valenciahq.com/sitemap.xml",
  };
}
