import { NextFunction, Request, Response } from "express";
import AppError from "../errors/error";
import { User } from "../entities";
import { usersRepo } from "../repositories";

export const verifyUserIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { userId } = request.params;
  const formatedId: number = Number(userId);

  const foundedUser: User | null = await usersRepo.findOneBy({
    id: formatedId,
  });

  if (!foundedUser) {
    throw new AppError("User not found", 404);
  }

  response.locals.user = foundedUser;

  return next();
};
