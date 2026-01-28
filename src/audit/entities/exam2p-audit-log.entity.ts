import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exam2PAuditLog {
  @PrimaryGeneratedColumn()
  logId: number;

  @Column()
  exam2p_entity: string;

  @Column()
  exam2p_recordId: number;

  @Column()
  exam2p_action: string;

  @Column()
  exam2p_user: string;

  @Column()
  exam2p_timestamp: Date;

  @Column()
  exam2p_detail: string;
}
