import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoComponente {
    @PrimaryGeneratedColumn()
    id_tipo_componente: number;

    @Column({
        type: "varchar",
        length: 200,
        nullable: false
    })
    tipo: string;
}
