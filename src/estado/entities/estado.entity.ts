import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estado {
    @PrimaryGeneratedColumn()
    id_estado: number;

    @Column({
        type: "varchar",
        length: 300,
        nullable: false
    })
    estado: string;
}
