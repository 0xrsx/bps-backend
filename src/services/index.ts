import { AuthService } from "./auth.service.ts";
import { userRepository } from "../repositories/index.ts";
import { UserService } from "./user.service.ts";

export { type AuthService } from "./auth.service.ts";
export { type UserService } from "./user.service.ts";

export const authService = Object.freeze(new AuthService());
export const userService = Object.freeze(new UserService(userRepository));
