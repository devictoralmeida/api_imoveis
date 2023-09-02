import { Request, Response } from "express";
import { TRealEstateCreateRequest } from "../interfaces/realEstates.interface";
import { createRealEstateService, retrieveRealEstatesService } from "../services/realEstates.service";
import { Category, RealEstate } from "../entities";

export const createRealEstate = async (request: Request, response: Response): Promise<Response> => {
    const realEstateData: TRealEstateCreateRequest = request.body
    const category: Category = response.locals.category;
    const realEstate: RealEstate = await createRealEstateService(realEstateData, category)
    return response.status(201).json(realEstate);
}

export const retrieveRealEstates = async (request: Request, response: Response): Promise<Response> => {
    const realEstates: RealEstate[] = await retrieveRealEstatesService()
    return response.status(200).json(realEstates);
}