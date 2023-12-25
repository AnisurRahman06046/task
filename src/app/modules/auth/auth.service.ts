import config from "../../config";
import User from "../users/users.model";
import { TLoginUser } from "./auth.interface";
import { generateToken } from "./auth.utils";

const loginUser = async (payload: TLoginUser) => {
  console.log(payload);
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new Error("User is not found!");
  }
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new Error("Password is incorrect");
  }

  //   generate token and send to client
  const jwtPayload = {
    email: user.email,
    password: user.password,
  };

  const accessToken = generateToken(
    jwtPayload,
    config.jwt_scret as string,
    config.jwt_expires_in as string
  );
  return { accessToken };
};

export const authService = { loginUser };
