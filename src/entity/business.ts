import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  OneToMany,
} from "typeorm";

import { Role } from "./role";

@Entity()
export class Business {
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

  @Column("varchar", { length: 20 })
  gstn!: string;

  @Column({ type: "tinyint", precision: 1 })
  status!: boolean;

  @Column({ type: "int" })
  invoiceStartCounter!: number;

  @Column({ type: "varchar", length: 50 })
  invoiceNumberFormat!: number;

  @Column({ type: "int" })
  createdBy!: number;

  @OneToMany((_type) => Role, (role: Role) => role.business)
  roles!: Array<Role>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
