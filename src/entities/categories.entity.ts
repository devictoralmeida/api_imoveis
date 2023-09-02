import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstates.entity";


@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({length: '45', unique: true})
    name: string;

    //Relacionamento

    @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
    realEstate: RealEstate[];
}