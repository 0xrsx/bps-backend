import { User } from "../common/entities";

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
