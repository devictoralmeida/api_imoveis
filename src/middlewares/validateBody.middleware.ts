import { ZodTypeAny } from "zod";
import { NextFunction, Request, Response } from "express";

export const validateBodyMiddleware =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction): void => {
    request.body = schema.parse(request.body);
    return next();
  };
