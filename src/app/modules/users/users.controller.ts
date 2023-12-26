import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./users.service";
import sendResponse from "../../utils/sendApiResponse";
import httpStatus from "http-status";

const signUp = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await userServices.createUser(data);
  sendResponse(res, httpStatus.OK, "User is registered successfully", result);
});

export const userControllers = { signUp };
