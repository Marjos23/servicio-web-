import { Controller, Get, Query } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AuditService } from './audit.service';
import { WebhookEmitterService } from './webhook-emitter.service';

@Controller('exam2p-audit')
export class AuditController {
  constructor(
    private readonly auditService: AuditService,
    private readonly webhookEmitter: WebhookEmitterService,
  ) {}

  @Get()
  async findAll(@Query('limit') limit: number) {
    return this.auditService.findAll(limit || 10);
  }

  @EventPattern('exam2p.record.deleted')
  async handleRecordDeleted(@Payload() data: any) {
    console.log('Event received: exam2p.record.deleted', data);

    const auditLog = {
      exam2p_entity: 'unknown_entity', // Expected to be provided in payload or defaulted
      exam2p_recordId: data.id || 0,
      exam2p_action: 'DELETE',
      exam2p_user: 'system', // or from payload
      exam2p_timestamp: new Date(),
      exam2p_detail: JSON.stringify(data),
      ...data, // Allow spreading if the payload matches keys
    };

    // 1. Save to Database (Question 1)
    await this.auditService.create(auditLog);

    // 2. Emit Webhook if action is DELETE (Question 2)
    // Since this event is specifically 'record.deleted', we know action is DELETE
    await this.webhookEmitter.emitDeletionEvent(auditLog);
  }
}
