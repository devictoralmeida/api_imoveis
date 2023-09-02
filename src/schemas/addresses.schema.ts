import { z } from "zod";

export const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45).nonempty(),
  zipCode: z.string().max(8).nonempty(),
  number: z.number().int().positive(),
  city: z.string().max(20).nonempty(),
  state: z.string().max(2).nonempty(),
});

export const addressSchemaRequest = addressSchema.omit({
  id: true,
});
