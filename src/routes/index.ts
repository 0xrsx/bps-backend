import express from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import { JwtMiddleware } from "../middleware";
import deviceRouter from "./device.route";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", JwtMiddleware, userRouter);
router.use("/device", JwtMiddleware, deviceRouter);

router.use((req, res, next) => {
  next();
});

export default router;
