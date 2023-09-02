import { z } from "zod";
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";
import { createUserSchemaRequest, readUserSchemaResponse } from "../schemas/users.schema";

export type TUserCreateRequest = z.infer<typeof createUserSchemaRequest>
export type TUserCreateResponse = z.infer<typeof readUserSchemaResponse>

export type TUserUpdateRequest = DeepPartial<TUserCreateRequest>

export type TUserRepo = Repository<User>