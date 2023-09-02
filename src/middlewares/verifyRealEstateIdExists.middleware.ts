import { NextFunction, Request, Response } from "express";
import AppError from "../errors/error";
import { RealEstate } from "../entities";
import { realEstatesRepo } from "../repositories";

export const verifyRealEstateIdExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId } = request.params;

  if (realEstateId) {
    const formatedId: number = Number(realEstateId);

    const foundedRealEstate: RealEstate | null =
      await realEstatesRepo.findOneBy({
        id: formatedId,
      });

    if (!foundedRealEstate) {
      throw new AppError("RealEstate not found", 404);
    }

    response.locals.realEstate = foundedRealEstate;

    return next();
  } else {
    const realEstateIdNumber: number = Number(request.body.realEstateId);

    const foundedRealEstate: RealEstate | null =
      await realEstatesRepo.findOneBy({
        id: realEstateIdNumber,
      });

    if (!foundedRealEstate) {
      throw new AppError("RealEstate not found", 404);
    }

    response.locals.realEstate = foundedRealEstate;

    return next();
  }
};
