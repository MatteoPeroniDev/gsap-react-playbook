import { groq } from "next-sanity";
import { client } from "../client";

export async function getAllProjects() {
  const query = groq`*[_type == "project" && wasDeleted != true && isDraft != true] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
  }`;
  const data = await client.fetch(query);
  return data;
}

export async function getAllProjectsSlugs() {
  const query = groq`*[_type == "project" && wasDeleted != true && isDraft != true] {
    "slug": slug.current,
  }`;
  const data = await client.fetch(query);
  return data;
}

export async function getSingleProject(slug: string) {
  const query = groq`*[_type == "project" && slug.current == $slug && wasDeleted != true && isDraft != true][0] {
    _id,
    title,
    "slug": slug.current,
    githubLink,
    mainImage,
    seo,
  }`;
  const data = await client.fetch(query, { slug });
  return data;
}