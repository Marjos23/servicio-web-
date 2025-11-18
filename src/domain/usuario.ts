import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Profesor } from "./profesor";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  rol: string;

  @OneToOne(() => Profesor, profesor => profesor.usuario)
  profesor: Profesor;
}
