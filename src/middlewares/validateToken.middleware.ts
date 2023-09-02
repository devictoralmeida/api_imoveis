import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/error";

export const validateToken = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = request.headers.authorization;

  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }

  const token: string = authorization.split(" ")[1];

  verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    response.locals = { ...response.locals, decoded };
  });

  return next();
};
