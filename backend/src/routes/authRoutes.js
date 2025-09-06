import { Router } from "express";
import {
  login,
  logout,
  signUp,
  checkAuth,
  updateProfile,
} from "../controllers/authController.js";
import { protectRoute } from "../middleware/authMiddlerware.js";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;
