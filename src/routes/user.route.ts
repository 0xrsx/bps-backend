import express from "express";
import { userController } from "../controllers";

const userRouter = express.Router();

userRouter.get("/", userController.getProfile);

export default userRouter;
