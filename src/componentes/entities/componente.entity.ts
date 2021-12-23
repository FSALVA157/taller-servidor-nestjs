import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Componente {

    @PrimaryGeneratedColumn()
    id_componente: number;

    @Column({
        type: "int",
        nullable: false
    })
    tipo_componente_id: number;

    @Column({
        type: "varchar",
        length: 300,
        nullable: true
         })
    marca: string;

    @Column({
        type: "varchar",
        length: 300,
        nullable: true
         })
    modelo: string;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
         })
    detalles: string;

    @Column({
        type: "int",
        nullable: false
    })
    dispositivo_id: number;

    @CreateDateColumn()
   fecha_alta: Date;

   @UpdateDateColumn()
   ultima_actualizacion:Date;

   @DeleteDateColumn()
   fecha_baja: Date;

}
