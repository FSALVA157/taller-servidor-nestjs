import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoDispositivo {
    @PrimaryGeneratedColumn()
    id_tipo_dispositivo: number;

    @Column({
        type: "varchar",
        length: 300
    })
    tipo: string;
}
