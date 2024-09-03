import { defineField, defineType } from "sanity";
import { CaseIcon, DocumentTextIcon, SearchIcon } from "@sanity/icons";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: CaseIcon,
  groups: [
    { title: "Content", name: "content", default: true, icon: DocumentTextIcon },
    { title: "SEO", name: "seo", icon: SearchIcon },
  ],
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      group: "content",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "content",
    }),
    defineField({
      title: "Github Link",
      name: "githubLink",
      type: "url",
      group: "content",
    }),
    defineField({
      title: "Author",
      name: "author",
      type: "reference",
      to: { type: "author" },
      group: "content",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "customImage",
      group: "content",
    }),
    defineField({
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
