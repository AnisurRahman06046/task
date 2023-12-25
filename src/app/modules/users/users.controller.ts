import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

const createUser = catchAsync(async (req: Request, res: Response) => {
  
    const data = req.body
    
});

export const userControllers = { createUser };
