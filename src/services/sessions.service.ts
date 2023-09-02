import { compareSync } from "bcryptjs";
import { User } from "../entities";
import AppError from "../errors/error";
import { TSessionRequest } from "../interfaces/sessions.interface";
import { usersRepo } from "../repositories";
import { sign } from "jsonwebtoken";

export const sessionsLoginService = async (
  payload: TSessionRequest
): Promise<string> => {
  const { email, password } = payload;

  const user: User | null = await usersRepo.findOneBy({
    email,
  });

  const errorMessage: string = "Invalid credentials";

  if (!user) {
    throw new AppError(errorMessage, 401);
  }

  const isPasswordValid: boolean = compareSync(password, user.password);

  if (!isPasswordValid) {
    throw new AppError(errorMessage, 401);
  }

  const token: string = sign({ admin: user.admin }, process.env.SECRET_KEY!, {
    expiresIn: process.env.EXPIRES_IN,
    subject: user.id.toString(),
  });

  return token;
};
