import { RequestHandler } from "express";
import { AuthService } from "../services";
import { SignupDto, SigninDto } from "../common/dto";

export class AuthController {
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  signup: RequestHandler<{}, {}, SignupDto> = async (req, res) => {
    await this.authService.signup(req.body);
    res.json({ success: true });
  };

  signin: RequestHandler<{}, {}, SigninDto> = async (req, res) => {
    const { accessToken, refreshToken } = await this.authService.signin(
      req.body
    );
    res.json({ success: true, data: { accessToken, refreshToken } });
  };
}
