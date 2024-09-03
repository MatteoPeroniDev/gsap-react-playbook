import { defineType } from "sanity";

export const seo = defineType({
  title: "SEO / Share Settings",
  name: "seo",
  description: "The SEO settings for the page.",
  type: "object",
  fields: [
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      description: "Title used for search engines and browsers",
      validation: (Rule: any) => Rule.max(60).warning("Longer titles may be truncated by search engines"),
    },
    {
      title: "Meta Description",
      name: "metaDesc",
      type: "text",
      description: "Description for search engines",
      validation: (Rule: any) => Rule.max(160).warning("Longer descriptions may be truncated by search engines"),
    },
    {
      title: "Share Graphic",
      name: "shareGraphic",
      type: "image",
      description: "Recommended size: 1200x630 (PNG or JPG)",
    },
  ],
});
