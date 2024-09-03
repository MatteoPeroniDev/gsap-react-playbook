import { ImageIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const customImage = defineType({
  title: "Custom Image",
  name: "customImage",
  type: "image",
  icon: ImageIcon,
  options: {
    hotspot: true,
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: "Alternative text",
      name: "alt",
      type: "string",
      description: "Important for SEO and accessiblity.",
    },
  ],
  preview: {
    select: {
      asset: "asset",
      alt: "asset.alt",
      customAlt: "alt",
    },
    prepare({ alt, customAlt, asset }: any) {
      return {
        title: customAlt ?? alt ?? "(alt text missing)",
        media: asset,
      };
    },
  },
});
