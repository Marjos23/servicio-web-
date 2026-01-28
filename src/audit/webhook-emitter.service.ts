import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WebhookEmitterService {
  private readonly logger = new Logger(WebhookEmitterService.name);
  // Replace with actual n8n webhook URL
  private readonly n8nWebhookUrl = 'http://localhost:5678/webhook/exam2p-audit'; 

  constructor(private readonly httpService: HttpService) {}

  async emitDeletionEvent(data: any) {
    const payload = {
      event: 'exam2p.audit.deletion',
      timestamp: new Date(),
      data: data,
    };

    try {
      this.logger.log(`Sending webhook to ${this.n8nWebhookUrl}`);
      await firstValueFrom(this.httpService.post(this.n8nWebhookUrl, payload));
      this.logger.log('Webhook sent successfully');
    } catch (error) {
      this.logger.error('Failed to send webhook', error);
    }
  }
}
