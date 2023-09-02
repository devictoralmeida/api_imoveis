import { RealEstate, Schedule } from "../entities";
import { TRetrieveRealEstateSchedulesSchemaResponse } from "../interfaces/realEstates.interface";
import { TScheduleRequest } from "../interfaces/schedules.interface";
import { realEstatesRepo, schedulesRepo } from "../repositories";
import { retrieveRealEstateSchedulesSchemaResponse } from "../schemas/realEstates.schema";

export const createScheduleService = async (
  payload: TScheduleRequest,
  userId: number
): Promise<void> => {
  const { date, hour, realEstateId } = payload;

  const schedule: Schedule = schedulesRepo.create({
    date,
    hour,
    user: { id: userId },
    realEstate: { id: Number(realEstateId) },
  });

  await schedulesRepo.save(schedule);
  return;
};

export const retrieveRealEstateSchedulesService = async (
  realEstateId: number
): Promise<TRetrieveRealEstateSchedulesSchemaResponse> => {
  const realEstate: RealEstate = (await realEstatesRepo.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      address: true,
      category: true,
      schedules: {
        user: true,
      },
    },
  }))!;

  return retrieveRealEstateSchedulesSchemaResponse.parse(realEstate);
};
