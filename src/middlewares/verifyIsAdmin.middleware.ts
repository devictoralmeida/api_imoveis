import { NextFunction, Request, Response } from "express";
import AppError from "../errors/error";

export const verifyIsAdmin = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const { admin } = response.locals.decoded;
  const { user } = response.locals

  if (admin === false && (user && user.id.toString() !== response.locals.decoded.sub)) {
    throw new AppError("Insufficient permission", 403);
  } else if (admin === false && (user && user.id.toString() === response.locals.decoded.sub)) {
    return next();
  } else if (admin === false && !user) {
    throw new AppError("Insufficient permission", 403);
  } else if (admin === true) {
    return next();
  }

  return next();
};
