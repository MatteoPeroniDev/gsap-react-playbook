import { MetadataRoute } from "next";

export function staticPages(): MetadataRoute.Sitemap[] {
  return [
    [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ],
  ];
}
