import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import Schedule from "./schedules.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: "45" })
  name: string;

  @Column({ length: "45", unique: true })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ length: "120" })
  password: string;

  @CreateDateColumn({type: 'date'})
  createdAt: string;

  @UpdateDateColumn({type: 'date'})
  updatedAt: string;

  @DeleteDateColumn({type: 'date'})
  deletedAt: string | null;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isPasswordEncrypted: number = getRounds(this.password);

    if (!isPasswordEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[];
}
