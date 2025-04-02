import { PostgresDataSource } from "../configs/postgres.datasource";
const entityManager = PostgresDataSource.createEntityManager()

import { UserRepository } from "./user.repository";
export { type UserRepository } from "./user.repository";
export const userRepository = Object.freeze(new UserRepository(entityManager));
