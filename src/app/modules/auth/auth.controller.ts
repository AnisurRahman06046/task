import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { authService } from "./auth.service";
import sendResponse from "../../utils/sendApiResponse";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.loginUser(req.body);
  const { accessToken } = result;
  const data = {
    accessToken: accessToken,
  };
  sendResponse(res, httpStatus.OK, "User is logged in successfully", data);
});

export const authController = { loginUser };
