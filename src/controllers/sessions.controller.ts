import { Request, Response } from "express";
import { TSessionRequest } from "../interfaces/sessions.interface";
import { sessionsLoginService } from "../services/sessions.service";

export const sessionsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const loginData: TSessionRequest = request.body;
  const token: string = await sessionsLoginService(loginData);
  return response.status(200).json({ token });
};
