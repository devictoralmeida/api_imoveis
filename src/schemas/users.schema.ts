import { z } from "zod";

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z
    .string()
    .max(45)
    .nonempty(),
  email: z.string().email().nonempty().max(45),
  password: z.string().min(4, 'Password must be at least 4 characters').max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});


export const createUserSchemaRequest = userSchema.omit({id: true, createdAt: true, updatedAt: true, deletedAt: true})

export const readUserSchemaResponse = userSchema.omit({password: true})

export const retrieveUsersSchemaResponse = readUserSchemaResponse.array()

export const updateUserSchemaRequest = createUserSchemaRequest.omit({admin: true}).partial()