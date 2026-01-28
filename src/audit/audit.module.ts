import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AuditService } from './audit.service';
import { AuditController } from './audit.controller';
import { WebhookEmitterService } from './webhook-emitter.service';
import { Exam2PAuditLog } from './entities/exam2p-audit-log.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exam2PAuditLog]),
    HttpModule,
  ],
  providers: [AuditService, WebhookEmitterService],
  controllers: [AuditController],
})
export class AuditModule {}
