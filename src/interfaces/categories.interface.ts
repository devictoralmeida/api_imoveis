import { Repository } from "typeorm";
import { z } from "zod";
import { Category } from "../entities";
import { createCategorySchemaRequest } from "../schemas/categories.schema";

export type TCategoryCreateRequest = z.infer<typeof createCategorySchemaRequest>
export type TCategoryRepo = Repository<Category>