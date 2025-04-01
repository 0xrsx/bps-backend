import { PostgresDataSource } from "../configs/postgres.datasource.ts";
const entityManager = PostgresDataSource.createEntityManager()

import { UserRepository } from "./user.repository.ts";
export { type UserRepository } from "./user.repository.ts";
export const userRepository = Object.freeze(new UserRepository(entityManager));
