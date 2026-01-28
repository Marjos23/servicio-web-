import { AuditService } from './audit.service';
import { WebhookEmitterService } from './webhook-emitter.service';
export declare class AuditController {
    private readonly auditService;
    private readonly webhookEmitter;
    constructor(auditService: AuditService, webhookEmitter: WebhookEmitterService);
    findAll(limit: number): Promise<import("./entities/exam2p-audit-log.entity").Exam2PAuditLog[]>;
    handleRecordDeleted(data: any): Promise<void>;
}
