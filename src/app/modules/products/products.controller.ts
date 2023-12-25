import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { productServices } from "./products.service";
import sendResponse from "../../utils/sendApiResponse";
import httpStatus from "http-status";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await productServices.createProductIntoDb(data);
  sendResponse(res, httpStatus.OK, "Product is created successfully", result);
});

export const productControllers = { createProduct };
