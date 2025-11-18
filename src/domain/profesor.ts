import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  experiencia: string;

  @Column()
  estado: string; // 'pendiente', 'aceptado', 'rechazado'

  @OneToOne(() => Usuario, usuario => usuario.profesor)
  @JoinColumn()
  usuario: Usuario;
}
