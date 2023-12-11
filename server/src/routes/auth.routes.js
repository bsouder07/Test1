import { Router } from "express";
import { handleSignUp, handleSignIn } from "../controllers/auth.contoller";
import { validateSignup, validateSignIn } from "../middleware/validation.middleware";

const router = Router();

router.post("/signup", validateSignup, handleSignUp);
router.post("/signin", validateSignIn, handleSignIn);

export default router;
