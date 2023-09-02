import { Request, Response } from "express";
import { TCategoryCreateRequest } from "../interfaces/categories.interface";
import { createCategoryService, retrieveCategoriesService, retrieveRealEstatesByCategoryService } from "../services/categories.service";
import { Category } from "../entities";

export const createCategory = async (request: Request, response: Response): Promise<Response> => {
    const categoryData: TCategoryCreateRequest = request.body
    const category: Category = await createCategoryService(categoryData)
    return response.status(201).json(category);
}

export const retrieveCategories = async (request: Request, response: Response): Promise<Response> => {
    const categories: Category[] = await retrieveCategoriesService()
    return response.status(200).json(categories);
}

export const retrieveRealEstatesByCategory = async (request: Request, response: Response): Promise<Response> => {
    const category: Category = response.locals.category
    const realEstates: Category = await retrieveRealEstatesByCategoryService(category)
    return response.status(200).json(realEstates);
}