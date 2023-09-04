import { z } from "zod";

export const sessionSchema = z.object({
    email: z.string().email().toLowerCase().nonempty(),
    password: z.string().nonempty()
});