import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { createRealEstateSchemaRequest } from "../schemas/realEstates.schema";
import { createRealEstate, retrieveRealEstates } from "../controllers/realEstates.controller";
import { validateToken } from "../middlewares/validateToken.middleware";
import { verifyIsAdmin } from "../middlewares/verifyIsAdmin.middleware";
import { verifyCategoryIdExists } from "../middlewares/verifyCategoryIdExists.middleware";
import { verifyUniqueAddress } from "../middlewares/checkUniqueAddress.middleware";

export const realEstatesRouter: Router = Router()

realEstatesRouter.get('/', retrieveRealEstates)

realEstatesRouter.post('/', validateToken, verifyIsAdmin, verifyCategoryIdExists, validateBodyMiddleware(createRealEstateSchemaRequest), verifyUniqueAddress, createRealEstate)