import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Unidad {
    @PrimaryGeneratedColumn()
    id_unidad: number;

    @Column({
        type: "varchar",
        length: 300, 
        unique: true
           })
    unidad: string;
}
