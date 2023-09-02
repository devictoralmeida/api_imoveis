import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstates.entity";

@Entity('schedules')
export default class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "date" })
    date: Date | string

    @Column({ type: "time" })
    hour: string

    @ManyToOne(() => User, (user) => user.schedules)
    user: User
    
    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate
}