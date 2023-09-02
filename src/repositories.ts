import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { TAddressRepo } from "./interfaces/addresses.interface";
import { TCategoryRepo } from "./interfaces/categories.interface";
import { TRealEstateRepo } from "./interfaces/realEstates.interface";
import { TScheduleRepo } from "./interfaces/schedules.interface";
import { TUserRepo } from "./interfaces/users.interface";

export const usersRepo: TUserRepo = AppDataSource.getRepository(User);

export const categoriesRepo: TCategoryRepo = AppDataSource.getRepository(Category);

export const realEstatesRepo: TRealEstateRepo = AppDataSource.getRepository(RealEstate);

export const addressesRepo: TAddressRepo = AppDataSource.getRepository(Address);

export const schedulesRepo: TScheduleRepo = AppDataSource.getRepository(Schedule);