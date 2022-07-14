import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

import { Business } from "./business";
import { User } from "./user";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 100 })
  name!: string;

  @Column({ type: "int" })
  businessId!: number;
  @ManyToOne((_type) => Business, (business: Business) => business.roles)
  @JoinColumn()
  business!: Business;

  @OneToMany((_type) => User, (user: User) => user.role)
  users!: Array<User>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
