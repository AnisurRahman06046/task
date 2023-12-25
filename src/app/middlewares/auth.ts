import jwt, { JwtPayload, decode } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import config from "../config";
import User from "../modules/users/users.model";
import { verifyToken } from "../modules/auth/auth.utils";

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error("You are not authorized");
    }

    // check token validation
    // const decoded = jwt.verify(token, config.jwt_scret as string) as JwtPayload;
    const decoded = verifyToken(token,config.jwt_scret as string)
    const { email, password, iat } = decoded;

    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("You are not authorized");
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
