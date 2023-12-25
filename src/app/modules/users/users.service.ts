import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUSER } from "./users.interface";
import User from "./users.model";

const createUser = async (payload: TUSER) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new AppError(httpStatus.BAD_REQUEST, "User is already exists");
  }
  const result = await User.create(payload);
  return result;
};

export const userServices = { createUser };
