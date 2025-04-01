import { DataSource } from "typeorm";
import { User } from "../common/entities/index.ts";
import { config } from "./config.ts";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});
