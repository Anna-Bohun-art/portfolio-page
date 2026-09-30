import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anna-bohun.vercel.app";
  const languages = { en: siteUrl, de: `${siteUrl}/de` };
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${siteUrl}/de`, lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
  ];
}
