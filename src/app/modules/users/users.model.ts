import { Schema, model } from "mongoose";
import { TUSER } from "./users.interface";

const userSchema = new Schema<TUSER>({
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = model<TUSER>("User", userSchema);
export default User;
