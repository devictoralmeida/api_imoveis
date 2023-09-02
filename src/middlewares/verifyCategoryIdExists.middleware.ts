import { NextFunction, Request, Response } from "express";
import AppError from "../errors/error";
import { Category } from "../entities";
import { categoriesRepo } from "../repositories";

export const verifyCategoryIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { categoryId } = request.params;

  if (categoryId) {
    const formatedId = Number(categoryId);

    const foundedCategory: Category | null = await categoriesRepo.findOneBy({
      id: formatedId,
    });

    if (!foundedCategory) {
      throw new AppError("Category not found", 404);
    }

    response.locals.category = foundedCategory;

    return next();
  } else {
    const categoryIdBody: number = Number(request.body.categoryId);

    const foundedCategory: Category | null = await categoriesRepo.findOneBy({
      id: categoryIdBody,
    });

    if (!foundedCategory) {
      throw new AppError("Category not found", 404);
    }

    response.locals.category = foundedCategory;

    return next();
  }
};
