import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam2PAuditLog } from './entities/exam2p-audit-log.entity';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(Exam2PAuditLog)
    private auditRepository: Repository<Exam2PAuditLog>,
  ) {}

  async create(auditData: Partial<Exam2PAuditLog>) {
    const log = this.auditRepository.create(auditData);
    return this.auditRepository.save(log);
  }

  async findAll(limit: number = 10): Promise<Exam2PAuditLog[]> {
    return this.auditRepository.find({
      take: limit,
      order: {
        exam2p_timestamp: 'DESC',
      },
    });
  }
}
