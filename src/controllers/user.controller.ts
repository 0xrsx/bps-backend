import { RequestHandler } from "express";
import { UserService } from "../services";

export class UserController {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getProfile: RequestHandler = async (req, res) => {
    const profile = await this.userService.getById(req.user?.id || 0);
    res.json({ success: true, data: profile });
  };
}
