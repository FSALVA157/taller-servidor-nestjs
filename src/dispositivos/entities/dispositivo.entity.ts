import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dispositivo {
    @PrimaryGeneratedColumn()
    id_dispositivo: number;

    @Column({
        type: "int",
        nullable: false
    })
    estado_id: number

    @Column({
        type: "varchar",
        length: 500,
        nullable: false
    })
    detalle: string;

    @Column({
        type: "varchar",
        length: 300,
        nullable: true
    })
    imagen: string;

    @Column({
        type: "varchar",
        length: 300,
        nullable: true
    })
    oc: string;

    @Column({
        type: "date",
        nullable: true
    })
    fecha_alta: Date;

    @Column({
        type: "date",
        nullable: true
    })
    fecha_baja: Date;

    @Column({
        type: "int",
        nullable: false
    })
    tipo_dispositivo_id: number;



}
