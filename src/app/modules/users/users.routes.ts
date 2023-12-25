import { Router } from "express";
import { userControllers } from "./users.controller";
const router=Router()

router.post("/registration",userControllers.createUser)
export const userRoutes = router