import { DataSource } from "typeorm";
import { User } from "../common/entities/index.ts";
import { config } from "./config.ts";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT,
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  url: config.POSTGRES_URL,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
