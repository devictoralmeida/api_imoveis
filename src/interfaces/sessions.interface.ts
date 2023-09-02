import { z } from "zod";
import { sessionSchema } from "../schemas/sessions.schema";

export type TSessionRequest = z.infer<typeof sessionSchema>