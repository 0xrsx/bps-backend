import { SignupDto } from "../common/dto";
import { UserRepository } from "../repositories";

export class UserService {
  repo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.repo = userRepo;
  }

  async createUser(dto: SignupDto) {
    const isExists = await this.repo.exists({ where: { email: dto.email } });
    if (isExists) {
      throw "This email is not available";
    }

    const entity = this.repo.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      address: dto.address,
      phoneNumber: dto.phoneNumber,
      password: dto.password,
      email: dto.email,
    });

    return await this.repo.save(entity);
  }

  getUserByEmail(email: string) {
    return this.repo.findOne({
      where: { email },
      select: { password: true, id: true },
    });
  }

  getById(id: number) {
    return this.repo.findOneBy({ id });
  }
}
