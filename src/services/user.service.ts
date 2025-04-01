import { UserRepository } from "../repositories/index.ts";

export class UserService {
  repo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.repo = userRepo;
  }

  createUser() {
    const entity = this.repo.create({
      firstName: "testFirstName",
      lastName: "testLastName",
      address: "test some address",
      phoneNumber: "0912345678",
      password: "should be hashed",
    });

    return this.repo.save(entity);
  }

  getUser() {
    const entity = this.repo.create({
      firstName: "testFirstName",
      lastName: "testLastName",
      address: "test some address",
      phoneNumber: "0912345678",
      password: "should be hashed",
    });
    return entity;
  }
}
