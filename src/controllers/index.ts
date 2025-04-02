import { authService, userService } from "../services/index.ts";
import { AuthController } from "./auth.controller.ts";
import { UserController } from "./user.controller.ts";

export const authController = Object.freeze(new AuthController(authService));
export const userController = Object.freeze(new UserController(userService));
