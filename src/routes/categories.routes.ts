import { Router } from "express";
import { verifyCategoryIdExists } from "../middlewares/verifyCategoryIdExists.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { createCategorySchemaRequest } from "../schemas/categories.schema";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyIsAdmin } from "../middlewares/verifyIsAdmin.middleware";
import { createCategory, retrieveCategories, retrieveRealEstatesByCategory } from "../controllers/categories.controller";
import { verifyUniqueName } from "../middlewares/checkUniqueName.middleware";

export const categoriesRouter: Router = Router()

categoriesRouter.get('/', retrieveCategories)

categoriesRouter.get('/:categoryId/realEstate', verifyCategoryIdExists, retrieveRealEstatesByCategory)

categoriesRouter.post('/', validateBodyMiddleware(createCategorySchemaRequest), validateToken, verifyIsAdmin, verifyUniqueName, createCategory)