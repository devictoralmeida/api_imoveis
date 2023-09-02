import { Repository } from "typeorm";
import { Address } from "../entities";
import { addressSchemaRequest } from "../schemas/addresses.schema";
import { z } from "zod";

export type TAddressRequest = z.infer<typeof addressSchemaRequest>
export type TAddressRepo = Repository<Address>