import { Router } from "express";
import { userControllers } from "./users.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
const router = Router();

router.post(
  "/registration",
  validateRequest(userValidation.userSchemaValidation),
  userControllers.signUp
);
export const userRoutes = router;
