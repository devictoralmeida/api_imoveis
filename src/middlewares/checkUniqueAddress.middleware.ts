import { NextFunction, Request, Response } from "express";
import AppError from "../errors/error";
import { Address } from "../entities";
import { addressesRepo } from "../repositories";
import { TAddressRequest } from "../interfaces/addresses.interface";

export const verifyUniqueAddress = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const address: TAddressRequest = request.body.address;

  const foundedAddress: Address | null = await addressesRepo.findOneBy({...address})
  
  if (foundedAddress) {
    throw new AppError("Address already exists", 409)
  }

  return next();
};