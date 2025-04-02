import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../common/entities";
import { config } from "../configs/config";
import { SigninDto, SignupDto } from "../common/dto";
import { UserService } from ".";

export class AuthService {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  hash(payload: string) {
    return bcrypt.hash(payload, 10);
  }
  compare(data: string, encrypted: string) {
    return bcrypt.compare(data, encrypted);
  }
  generateAccessToken(user: User) {
    const token = jwt.sign({ id: user.id }, config.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
      algorithm: "HS256",
    });

    return token;
  }
  generateRefreshToken(user: User) {
    const token = jwt.sign({ id: user.id }, config.JWT_REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
      algorithm: "HS256",
    });

    return token;
  }
  async signup(dto: SignupDto) {
    const hashed = await this.hash(dto.password);
    await this.userService.createUser({
      ...dto,
      password: hashed,
    });
  }
  async signin(dto: SigninDto) {
    const user = await this.userService.getUserByEmail(dto.email);
    if (!user) {
      throw "Incorrect Email or Password";
    }
    const isValid = await this.compare(dto.password, user.password);

    if (!isValid) {
      throw "Incorrect Email or Password";
    }

    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateAccessToken(user);

    return { accessToken, refreshToken };
  }
}
