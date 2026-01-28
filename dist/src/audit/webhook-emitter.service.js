"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WebhookEmitterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEmitterService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let WebhookEmitterService = WebhookEmitterService_1 = class WebhookEmitterService {
    httpService;
    logger = new common_1.Logger(WebhookEmitterService_1.name);
    n8nWebhookUrl = 'http://localhost:5678/webhook/exam2p-audit';
    constructor(httpService) {
        this.httpService = httpService;
    }
    async emitDeletionEvent(data) {
        const payload = {
            event: 'exam2p.audit.deletion',
            timestamp: new Date(),
            data: data,
        };
        try {
            this.logger.log(`Sending webhook to ${this.n8nWebhookUrl}`);
            await (0, rxjs_1.firstValueFrom)(this.httpService.post(this.n8nWebhookUrl, payload));
            this.logger.log('Webhook sent successfully');
        }
        catch (error) {
            this.logger.error('Failed to send webhook', error);
        }
    }
};
exports.WebhookEmitterService = WebhookEmitterService;
exports.WebhookEmitterService = WebhookEmitterService = WebhookEmitterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], WebhookEmitterService);
//# sourceMappingURL=webhook-emitter.service.js.map