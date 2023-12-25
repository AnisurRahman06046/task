import { Schema, model } from "mongoose";
import { TUSER } from "./users.interface";
import bcrypt from "bcrypt";
const userSchema = new Schema<TUSER>({
  fullName: {
    type: String,
    required: [true,'Full name is required'],
  },
  password: {
    type: String,
    required: [true,'Password is required'],
  },
  email: {
    type: String,
    required: [true,'Email is required'],
  },
});

// hashing password before saving on database
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = model<TUSER>("User", userSchema);
export default User;
