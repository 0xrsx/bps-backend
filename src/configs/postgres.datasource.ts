import { DataSource } from "typeorm";
import { config } from "./config";
import { User } from "../common/entities/user.entity";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT,
  username: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  url: config.POSTGRES_URL,
  synchronize: false,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: ['dist/migrations/*.js'],
});
