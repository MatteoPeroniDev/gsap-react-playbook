import { dynamicProjects } from "@/seoStuff/dynamicPages";
import { staticPages } from "@/seoStuff/staticPages";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let staticPagesRes = staticPages();
  let dynamicProjectsRes = await dynamicProjects();
  let staticPagesSitemap = staticPagesRes.map((page) => page[0]);
  let dynamicProjectsSitemap = dynamicProjectsRes.map((page) => page[0]);

  return [...staticPagesSitemap, ...dynamicProjectsSitemap];
}
