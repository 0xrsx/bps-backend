import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_URL: process.env.POSTGRES_URL,
  POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT || "5432"),
};
