import express from "express";
import { deviceController } from "../controllers";

const deviceRouter = express.Router();

deviceRouter.post("/send", deviceController.send);
deviceRouter.get("/query", deviceController.query);

export default deviceRouter;
