import { Router } from "express";
import { verifyRealEstateIdExists } from "../middlewares/verifyRealEstateIdExists.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { createScheduleSchemaRequest } from "../schemas/schedules.schema";
import { createSchedule, retrieveRealEstateSchedules } from "../controllers/schedules.controller";
import { validateScheduleTime } from "../middlewares/validateScheduleTime.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyIsAdmin } from "../middlewares/verifyIsAdmin.middleware";

export const schedulesRouter: Router = Router()

schedulesRouter.get('/realEstate/:realEstateId', validateToken, verifyIsAdmin, verifyRealEstateIdExists, retrieveRealEstateSchedules)

schedulesRouter.post('/', validateToken, validateBodyMiddleware(createScheduleSchemaRequest), verifyRealEstateIdExists, validateScheduleTime, createSchedule)