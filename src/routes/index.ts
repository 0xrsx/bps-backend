import express from "express";
import authRouter from "./auth.route.ts";

const router = express.Router();

router.use("/auth", authRouter);
router.use((req, res, next) => {
  next();
});

export default router;
