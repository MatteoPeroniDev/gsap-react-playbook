import { type SchemaTypeDefinition } from "sanity";
import { project } from "./schemas/documents/project";
import { author } from "./schemas/documents/author";
import { customImage } from "./schemas/objects/customImage";
import { seo } from "./schemas/objects/seo";

const documentsSchema: SchemaTypeDefinition[] = [project, author];
const modulesSchema: SchemaTypeDefinition[] = [];
const objectsSchema: SchemaTypeDefinition[] = [seo, customImage];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documentsSchema, ...modulesSchema, ...objectsSchema],
};
