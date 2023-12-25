/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { TErrorSource } from "../interfaces/error";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";
import handleValidationError from "../errors/handleValidationError";
import AppError from "../errors/AppError";
import { TokenExpiredError } from "jsonwebtoken";

const globalErrorHanlders: ErrorRequestHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = error.message || "Something went wrong";
  let errorSource: TErrorSource = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (error instanceof ZodError) {
    const err = handleZodError(error);
    statusCode = err?.statusCode;
    message = err?.message;
    errorSource = err?.errorSource;
  } else if (error?.name === "ValidationError") {
    const err = handleValidationError(error);
    statusCode = err?.statusCode;
    message = err?.message;
    errorSource = err?.errorSource;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSource = [
      {
        path: "",
        message: error?.message,
      },
    ];
  } else if (error instanceof TokenExpiredError) {
    statusCode = 401; // Use 401 Unauthorized for token expiration
    message = "Token has expired"; // Customize this message
    errorSource = [
      {
        path: "",
        message: "Token has expired",
      },
    ];
  } else if (error instanceof Error) {
    message = error.message;
    errorSource = [
      {
        path: "",
        message: error?.message,
      },
    ];
  }
  return res.status(statusCode).json({
    success: false,
    message,
    error: error,
    errorSource,
  });
};

export default globalErrorHanlders;
