import { NextFunction, Request, Response } from "express";
import AppError from "../errors/error";
import { schedulesRepo } from "../repositories";
import { Schedule } from "../entities";

export const validateScheduleTime = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour, realEstateId } = request.body;

  const userId: number = Number(response.locals.decoded.sub);
  const numberRealEstateId: number = Number(realEstateId);

  const dateNumber: number = new Date(date).getDay();
  const formatHour: number = new Date(`${date} ${hour}`).getHours();

  if (formatHour >= 18 || formatHour <= 8) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (dateNumber === 0 || dateNumber === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const twiceScheduleUser: Schedule | null = await schedulesRepo.findOne({
    where: {
      date,
      hour,
      user: { id: userId },
    },
  });

  if (twiceScheduleUser) {
    throw new AppError(
      "User already has an schedule at this date and time",
      409
    );
  }

  const twiceScheduleRealEstate: Schedule | null = await schedulesRepo.findOne({
    where: {
      date,
      hour,
      realEstate: { id: numberRealEstateId },
    },
  });

  if (twiceScheduleRealEstate) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
