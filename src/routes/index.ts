import express from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import { JwtMiddleware } from "../middleware";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", JwtMiddleware, userRouter);

router.use((req, res, next) => {
  next();
});

export default router;
