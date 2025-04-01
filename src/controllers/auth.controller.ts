import { RequestHandler } from "express";
import { AuthService, UserService } from "../services/index.ts";

export class AuthController {
  authService: AuthService;
  userService: UserService;

  constructor(authService: AuthService, userService: UserService) {
    this.authService = authService;
    this.userService = userService;
  }

  signin: RequestHandler = (req, res) => {
    res.json({ user: this.userService.getUser() });
  };

  signup() {}
}
