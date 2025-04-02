import express from "express";
import authRouter from "./auth.route.ts";
import userRouter from "./user.route.ts";
import { JwtMiddleware } from "../middleware/index.ts";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", JwtMiddleware, userRouter);

router.use((req, res, next) => {
  next();
});

export default router;
