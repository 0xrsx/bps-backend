import { User } from "../common/entities/index.ts";

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
