import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Personal {
    @PrimaryGeneratedColumn()
    id_personal: number;

    @Column({
        type: "int",
        nullable: true,
        unique: true
    })
    legajo: number;

    @Column({
        type: "varchar",
        length: 500
    })
    nombre: string;

    @Column({
        type: "varchar",
        length: 200
    })
    usuario: string;

    @Column({
        type: "varchar",
        length: 50
    })
    password: string;

}
