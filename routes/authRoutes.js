import express from "express";
const router = express.Router();
import { register, login, updateUser } from "../controllers/authControllers.js";
import authenticateUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests, try again in 15 minutes.",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, testUser, updateUser);

export default router;
