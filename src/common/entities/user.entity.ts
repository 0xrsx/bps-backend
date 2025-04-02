import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column({ select: false })
  password: string;
}
