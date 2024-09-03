import { getAllProjectsSlugs } from "@/sanity/lib/queries/projectQueries";
import { SiteMapItemType } from "@/types/sitemap";
import React from "react";

export async function generateStaticParams() {
  const items: SiteMapItemType[] = await getAllProjectsSlugs();
  const slugs = items.map((item) => item.slug);
  return slugs.map(slug => ({ params: { slug } }));
}

export default function Layout({ children }: { children: React.ReactNode; }) {
  return children
}
