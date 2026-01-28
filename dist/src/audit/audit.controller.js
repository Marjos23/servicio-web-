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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const audit_service_1 = require("./audit.service");
const webhook_emitter_service_1 = require("./webhook-emitter.service");
let AuditController = class AuditController {
    auditService;
    webhookEmitter;
    constructor(auditService, webhookEmitter) {
        this.auditService = auditService;
        this.webhookEmitter = webhookEmitter;
    }
    async findAll(limit) {
        return this.auditService.findAll(limit || 10);
    }
    async handleRecordDeleted(data) {
        console.log('Event received: exam2p.record.deleted', data);
        const auditLog = {
            exam2p_entity: 'unknown_entity',
            exam2p_recordId: data.id || 0,
            exam2p_action: 'DELETE',
            exam2p_user: 'system',
            exam2p_timestamp: new Date(),
            exam2p_detail: JSON.stringify(data),
            ...data,
        };
        await this.auditService.create(auditLog);
        await this.webhookEmitter.emitDeletionEvent(auditLog);
    }
};
exports.AuditController = AuditController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuditController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.EventPattern)('exam2p.record.deleted'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuditController.prototype, "handleRecordDeleted", null);
exports.AuditController = AuditController = __decorate([
    (0, common_1.Controller)('exam2p-audit'),
    __metadata("design:paramtypes", [audit_service_1.AuditService,
        webhook_emitter_service_1.WebhookEmitterService])
], AuditController);
//# sourceMappingURL=audit.controller.js.map