import { AuthService } from "./auth.service";
import { userRepository } from "../repositories";
import { UserService } from "./user.service";

export { type AuthService } from "./auth.service";
export { type UserService } from "./user.service";

export const userService = Object.freeze(new UserService(userRepository));
export const authService = Object.freeze(new AuthService(userService));
