import dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

export const config = {
  PORT: process.env.PORT,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_URL: process.env.POSTGRES_URL,
  POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT || "5432"),
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET || "",
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET || "",
  TUYA_BASE_URL: process.env.TUYA_BASE_URL || "",
  TUYA_ACCESS_KEY: process.env.TUYA_ACCESS_KEY || "",
  TUYA_SECRET_KEY: process.env.TUYA_SECRET_KEY || "",
  TUYA_DEVICE_ID: process.env.TUYA_DEVICE_ID || "",
};
