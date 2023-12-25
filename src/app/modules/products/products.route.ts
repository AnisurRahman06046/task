import { Router } from "express";
import { productControllers } from "./products.controller";
const router = Router();

router.post("/create-product", productControllers.createProduct);
router.get("/all-products", productControllers.getProducts);
export const productRoutes = router;
