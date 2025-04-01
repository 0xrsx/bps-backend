import { EntityManager, Repository } from "typeorm";
import { User } from "../common/entities/index.ts";

export class UserRepository extends Repository<User> {
  constructor(entityManager: EntityManager) {
    super(User, entityManager);
  }
}
