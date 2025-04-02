import { EntityManager, Repository } from "typeorm";
import { User } from "../common/entities";

export class UserRepository extends Repository<User> {
  constructor(entityManager: EntityManager) {
    super(User, entityManager);
  }
}
