import { Router } from "express";
import { productControllers } from "./products.controller";
import auth from "../../middlewares/auth";
const router = Router();

router.post("/create-product", productControllers.createProduct);
router.get("/all-products",auth(), productControllers.getProducts);
export const productRoutes = router;
