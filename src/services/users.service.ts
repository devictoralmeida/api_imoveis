import { User } from "../entities";
import {
  TUserCreateRequest,
  TUserCreateResponse,
  TUserUpdateRequest
} from "../interfaces/users.interface";
import { usersRepo } from "../repositories";
import {
  readUserSchemaResponse, retrieveUsersSchemaResponse
} from "../schemas/users.schema";

export const createUserService = async (
  payload: TUserCreateRequest
): Promise<TUserCreateResponse> => {
  const newUser: User = usersRepo.create(payload);
  await usersRepo.save(newUser);

  const returnUser: TUserCreateResponse = readUserSchemaResponse.parse(newUser);

  return returnUser;
};

export const retrieveUsersService = async (): Promise<
  TUserCreateResponse[]
> => {
  const users: User[] | null = await usersRepo.find();

  const validUsers: TUserCreateResponse[] =
  retrieveUsersSchemaResponse.parse(users);

  return validUsers;
};

export const updateUsersService = async (payload: TUserUpdateRequest, foundedUser: User): Promise<TUserCreateResponse> => {
  const newUser: User = usersRepo.create({...foundedUser, ...payload})
  await usersRepo.save(newUser)

  const returedUser: TUserCreateResponse = readUserSchemaResponse.parse(newUser)

  return returedUser
};

export const deleteUsersService = async (payload: User): Promise<void> => {
  await usersRepo.softRemove(payload)
  return;
};
