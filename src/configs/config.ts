import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
};
