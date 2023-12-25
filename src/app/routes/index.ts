import { Router } from "express";

const router = Router();
const moduleRoutes = [
  {
    path: "",
    route: "dsfdsf",
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));
export default router;
