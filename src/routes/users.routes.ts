import { Router } from "express";
import { verifyUniqueEmail } from "../middlewares/checkUniqueEmail.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { verifyUserIdExists } from "../middlewares/verifyUserIdExists.middleware";
import { createUserSchemaRequest, updateUserSchemaRequest } from "../schemas/users.schema";
import { createUser, deleteUser, retrieveUsers, updateUser } from "../controllers/users.controller";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyIsAdmin } from "../middlewares/verifyIsAdmin.middleware";

export const usersRouter: Router = Router()

usersRouter.get('/', validateToken, verifyIsAdmin, retrieveUsers)

usersRouter.post('/', validateBodyMiddleware(createUserSchemaRequest), verifyUniqueEmail, createUser)

usersRouter.use('/:userId', verifyUserIdExists, validateToken, verifyIsAdmin)
usersRouter.patch('/:userId', validateBodyMiddleware(updateUserSchemaRequest), verifyUniqueEmail, updateUser)

usersRouter.delete('/:userId', deleteUser)