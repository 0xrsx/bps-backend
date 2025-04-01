import express from "express";
import { authController } from "../controllers/index.ts";

const authRouter = express.Router();

authRouter.get("/signin", authController.signin);

export default authRouter;
