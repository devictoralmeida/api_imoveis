import { Address, Category, RealEstate } from "../entities";
import { TRealEstateCreateRequest } from "../interfaces/realEstates.interface";
import { addressesRepo, realEstatesRepo } from "../repositories";

export const createRealEstateService = async (
  payload: TRealEstateCreateRequest,
  category: Category
): Promise<RealEstate> => {
  const { address } = payload;

  const newAddress: Address = addressesRepo.create(address);
  await addressesRepo.save(newAddress);

  const newRealEstate: RealEstate = realEstatesRepo.create({
    ...payload,
    category,
    address: newAddress,
  });
  await realEstatesRepo.save(newRealEstate);

  return newRealEstate;
};

export const retrieveRealEstatesService = async (): Promise<RealEstate[]> => {
  return await realEstatesRepo.find({
    relations: {
      address: true,
    },
  });
};
