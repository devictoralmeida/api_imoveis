import { z } from "zod";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import {
  createScheduleSchemaRequest,
  retrieveSchedulesSchemaResponse,
} from "../schemas/schedules.schema";

export type TScheduleRequest = z.infer<typeof createScheduleSchemaRequest>;
export type TRetrieveScheduleResponse = z.infer<
  typeof retrieveSchedulesSchemaResponse
>;
export type TScheduleRepo = Repository<Schedule>;
