import { z } from "zod";
import { realEstateSchema } from "./realEstates.schema";
import { readUserSchemaResponse } from "./users.schema";

export const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string().nonempty(),
  hour: z.string().nonempty(),
  realEstate: realEstateSchema,
  user: readUserSchemaResponse,
});

export const createScheduleSchemaRequest = scheduleSchema
  .omit({ id: true, user: true, realEstate: true })
  .extend({ realEstateId: z.number().positive() });

export const retrieveSchedulesSchemaResponse = z.array(scheduleSchema);
