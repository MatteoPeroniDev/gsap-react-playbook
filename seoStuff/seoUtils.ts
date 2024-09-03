import { urlForImage } from "@/sanity/lib/image";
import { Metadata } from "next";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

export function generatePageMetadataFromSeoObj(seo: any, locale: string = "en", ogType: "website" | "article" = "website"): Metadata {
  return {
    title: seo?.metaTitle,
    description: seo?.metaDesc,
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDesc,
      type: ogType,
      locale: locale,
      images: seo?.shareGraphic
        ? {
            url: urlForImage(seo?.shareGraphic),
            width: 1200,
            height: 630,
            alt: seo?.metaTitle,
          }
        : undefined,
    },
    twitter: {
      cardType: "summary",
      title: seo?.metaTitle,
      description: seo?.metaDesc,
      images: seo?.shareGraphic
        ? {
            url: urlForImage(seo?.shareGraphic),
            width: 1200,
            height: 630,
            alt: seo?.metaTitle,
          }
        : undefined,
    } as Twitter,
  };
}
