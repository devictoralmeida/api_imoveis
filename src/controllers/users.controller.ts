import { Request, Response } from "express";
import { createUserService, deleteUsersService, retrieveUsersService, updateUsersService } from "../services/users.service";
import { TUserCreateRequest, TUserCreateResponse, TUserUpdateRequest } from "../interfaces/users.interface";
import { User } from "../entities";

export const createUser = async (request: Request, response: Response): Promise<Response> => {
    const userData: TUserCreateRequest = request.body
    const user: TUserCreateResponse = await createUserService(userData)
    return response.status(201).json(user);
}

export const retrieveUsers = async (request: Request, response: Response): Promise<Response> => {
    const users: TUserCreateResponse[] = await retrieveUsersService()
    return response.status(200).json(users);
}

export const updateUser = async (request: Request, response: Response): Promise<Response> => {
    const userData: TUserUpdateRequest = request.body
    const foundedUser: User = response.locals.user
    const user: TUserCreateResponse = await updateUsersService(userData, foundedUser)
    return response.status(200).json(user);
}

export const deleteUser = async (request: Request, response: Response): Promise<Response> => {
    const foundedUser: User = response.locals.user
    await deleteUsersService(foundedUser)
    return response.status(204).json();
}
