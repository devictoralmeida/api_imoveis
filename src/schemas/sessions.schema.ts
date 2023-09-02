import { z } from "zod";

export const sessionSchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().nonempty()
});