import { DataSource } from "typeorm";
import { config } from "./config";

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
  subscribers: [],
  migrations: ["dist/migrations/*.js"],
  entities: [__dirname + '/../common/entities/*.entity{.ts,.js}'],
});
