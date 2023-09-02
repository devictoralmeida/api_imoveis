import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstates.entity";

@Entity('addresses')
export default class Address {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({length: '45'})
    street: string;

    @Column({length: '8'})
    zipCode: string;

    @Column()
    number: number;

    @Column({length: '20'})
    city: string;

    @Column({length: '2'})
    state: string;

    @OneToOne(() => RealEstate, (realEstate) => realEstate.address)
    realEstate: RealEstate
}