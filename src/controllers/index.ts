import { authService, userService } from "../services";
import { AuthController } from "./auth.controller";
import { UserController } from "./user.controller";

export const authController = Object.freeze(new AuthController(authService));
export const userController = Object.freeze(new UserController(userService));
