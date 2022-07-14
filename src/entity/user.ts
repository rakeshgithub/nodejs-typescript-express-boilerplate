import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Business } from "./business";

import { Role } from "./role";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 100 })
  @Generated("uuid")
  uuid!: string;

  @Column("varchar", { length: 100 })
  name!: string;

  @Column("varchar", { length: 10 })
  mobile!: string;

  @Column("varchar", { length: 4 })
  mobileIsd!: string;

  @Column("varchar", { length: 100 })
  email!: string;

  @Column("varchar", { length: 255 })
  password!: string;

  @Column({ type: "tinyint", precision: 1 })
  status!: boolean;

  @ManyToOne((_type) => Role, (role: Role) => role.users)
  @JoinColumn()
  role!: Role;

  @ManyToMany(() => Business)
  @JoinTable()
  businesses!: Business[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
