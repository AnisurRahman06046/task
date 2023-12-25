import jwt, { JwtPayload } from "jsonwebtoken";

export const generateToken = (
  JwtPayload: { email: string,password:string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(JwtPayload, secret, { expiresIn });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
