import { z } from "zod";

const userSchemaValidation = z.object({
  body: z.object({
    fullName: z.string({ required_error: "Full Name is required" }),
    password: z.string({ required_error: "Password is required" }),
    email: z.string({ required_error: "Email is required" }),
  }),
});

export const userValidation = { userSchemaValidation };
