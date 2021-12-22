import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Trabajo {
    @PrimaryGeneratedColumn()
    id_trabajo: number;

    @Column({
        type: "int",
        nullable: false
    })
    dispositivo_id;

    @Column({
        type: "varchar",
        length: 500,
        nullable: false
    })
    detalle: string;

    @Column({
        type: "date",
        nullable: false
    })
    fecha_ingreso: Date;

    @Column({
        type: "date",
        nullable: true
    })
    fecha_salida: Date;

    @Column({
        type: "int",
        nullable: false
    })
    tecnico_id: number
}
