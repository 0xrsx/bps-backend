import { AuthService } from "./auth.service";
import { userRepository } from "../repositories";
import { UserService } from "./user.service";
import { DeviceService } from "./device.service";
import { tuya } from "../lib/tuya.client";

export { type AuthService } from "./auth.service";
export { type UserService } from "./user.service";
export { type DeviceService } from "./device.service";

export const userService = Object.freeze(new UserService(userRepository));
export const authService = Object.freeze(new AuthService(userService));
export const deviceService = Object.freeze(new DeviceService(tuya));
