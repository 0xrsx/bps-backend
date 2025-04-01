import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    onUpdate: "CURRENT_TIMESTAMP",
    nullable: true,
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    type: "timestamp",
    nullable: true,
  })
  deletedAt?: Date;
}
