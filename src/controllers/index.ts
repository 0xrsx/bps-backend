import { authService } from "../services/index.ts";
import { AuthController } from "./auth.controller.ts";
export const authController = Object.freeze(new AuthController(authService));
