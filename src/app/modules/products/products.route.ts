import { Router } from "express";
import { productControllers } from "./products.controller";
const router = Router();

router.post("/create-product", productControllers.createProduct);

export const productRoutes = router;
