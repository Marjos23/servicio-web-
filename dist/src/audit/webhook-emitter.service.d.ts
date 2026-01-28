import { HttpService } from '@nestjs/axios';
export declare class WebhookEmitterService {
    private readonly httpService;
    private readonly logger;
    private readonly n8nWebhookUrl;
    constructor(httpService: HttpService);
    emitDeletionEvent(data: any): Promise<void>;
}
