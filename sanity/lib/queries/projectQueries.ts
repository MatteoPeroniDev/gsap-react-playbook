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
