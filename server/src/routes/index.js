import { Router } from "express";
import { healthCheck } from "../controllers/api.controller";
import authRoutes from "./auth.routes"

const router = Router();

router.get("/").get(healthCheck);

router.use("/auth", authRoutes)

export default router;

//I didn't add the protected routes