import { z } from "zod";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { createRealEstateSchemaRequest, realEstateSchema, retrieveRealEstateSchedulesSchemaResponse, retrieveRealEstatesScheduleSchemaResponse, retrieveRealEstatesSchemaResponse } from "../schemas/realEstates.schema";

export type TRealEstateCreateRequest = z.infer<typeof createRealEstateSchemaRequest>
export type TRealEstateCreateResponse = z.infer<typeof realEstateSchema>

export type TRealEstatesRetrieveResponse = z.infer<typeof retrieveRealEstatesSchemaResponse>
export type TRealEstatesRetrieveScheduleResponse = z.infer<typeof retrieveRealEstatesScheduleSchemaResponse>

export type TRetrieveRealEstateSchedulesSchemaResponse = z.infer<typeof retrieveRealEstateSchedulesSchemaResponse>

export type TRealEstateRepo = Repository<RealEstate>