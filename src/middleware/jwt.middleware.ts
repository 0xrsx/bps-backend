import jwt from "jsonwebtoken";
import { config } from "../configs/config";
import { userRepository } from "../repositories";
import { RequestHandler } from "express";

export const JwtMiddleware: RequestHandler = async (req, res, next) => {
  try {
    if (!req.headers["authorization"]) {
      res.sendStatus(401);
    }

    const token = (req.headers["authorization"] || "").replace("Bearer ", "");

    const decoded = jwt.verify(
      token,
      config.JWT_ACCESS_TOKEN_SECRET
    ) as jwt.JwtPayload;

    const user = await userRepository.findOneBy({ id: decoded.id });
    if (!user) {
      res.sendStatus(401);
    } else {
      req.user = user;
    }
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};
