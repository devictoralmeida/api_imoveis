import { Request, Response } from "express";
import {
  createScheduleService,
  retrieveRealEstateSchedulesService,
} from "../services/schedules.service";
import { TRetrieveRealEstateSchedulesSchemaResponse } from "../interfaces/realEstates.interface";

export const createSchedule = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(response.locals.decoded.sub)
  await createScheduleService(request.body, userId);
  return response.status(201).json({ message: "Schedule created" });
};

export const retrieveRealEstateSchedules = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { realEstateId } = request.params;
  const numberRealEstateId: number = Number(realEstateId);
  const realEstate: TRetrieveRealEstateSchedulesSchemaResponse = await retrieveRealEstateSchedulesService(
    numberRealEstateId
  );
  return response.status(200).json(realEstate);
};
