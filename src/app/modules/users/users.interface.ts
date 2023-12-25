import { Model } from "mongoose";

export type TUSER = {
  fullName: string;
  password: string;
  email: string;
};
export interface UserModel extends Model<TUSER> {

    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
   
  }