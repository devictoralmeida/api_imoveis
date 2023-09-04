import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().int().positive(),
  name: z
    .string()
    .max(45)
    .nonempty(),
});

export const createCategorySchemaRequest = categorySchema.omit({id: true})