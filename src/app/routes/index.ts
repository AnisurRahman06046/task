import { Router } from "express";
import { userRoutes } from "../modules/users/users.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { productRoutes } from "../modules/products/products.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/products",
    route: productRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));
export default router;
