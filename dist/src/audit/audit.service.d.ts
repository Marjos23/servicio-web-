import { Repository } from 'typeorm';
import { Exam2PAuditLog } from './entities/exam2p-audit-log.entity';
export declare class AuditService {
    private auditRepository;
    constructor(auditRepository: Repository<Exam2PAuditLog>);
    create(auditData: Partial<Exam2PAuditLog>): Promise<Exam2PAuditLog>;
    findAll(limit?: number): Promise<Exam2PAuditLog[]>;
}
