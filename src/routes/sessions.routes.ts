import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { sessionSchema } from "../schemas/sessions.schema";
import { sessionsController } from "../controllers/sessions.controller";

export const sessionsRouter: Router = Router()


sessionsRouter.post('/', validateBodyMiddleware(sessionSchema), sessionsController)