import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./schemas/documents/projectType";
import { authorType } from "./schemas/documents/authorType";
import { customImage } from "./schemas/types/customImageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, authorType, customImage],
};
