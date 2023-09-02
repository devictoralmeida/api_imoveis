import { NextFunction, Request, Response } from "express";
import AppError from "../errors/error";
import { Category } from "../entities";
import { categoriesRepo } from "../repositories";

export const verifyUniqueName = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = request.body;

  const foundedCategory: Category | null = await categoriesRepo.findOneBy({
    name,
  });

  if (foundedCategory) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};
