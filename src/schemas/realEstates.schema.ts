import { z } from "zod";
import { addressSchemaRequest, addressSchema } from "./addresses.schema";
import { categorySchema } from "./categories.schema";
import { readUserSchemaResponse } from "./users.schema";
import { scheduleSchema } from "./schedules.schema";

export const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchema,
  category: categorySchema,
});

export const createRealEstateSchemaRequest = z.object({
  categoryId: z.number().positive(),
  size: z.number().int().positive(),
  value: z.string().or(z.number()).default(0),
  address: addressSchemaRequest,
});

export const retrieveRealEstateSchedulesSchemaResponse =
  realEstateSchema.extend({ schedules: scheduleSchema.omit({realEstate: true}).array() });

export const retrieveRealEstatesSchemaResponse = z.array(realEstateSchema);

export const retrieveRealEstatesScheduleSchemaResponse =
  realEstateSchema.extend({ retrieveRealEstatesSchemaResponse });
