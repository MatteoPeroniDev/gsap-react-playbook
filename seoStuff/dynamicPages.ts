import { getAllProjectsSlugs } from "@/sanity/lib/queries/projectQueries";
import { SiteMapItemType } from "@/types/sitemap";
import { MetadataRoute } from "next";

export async function dynamicProjects(): Promise<MetadataRoute.Sitemap[]> {
  const items: SiteMapItemType[] = await getAllProjectsSlugs();
  return items.map((item) => {
    const slugPart = item.slug ? `${item.slug}` : "";

    return [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slugPart}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];
  });
}
