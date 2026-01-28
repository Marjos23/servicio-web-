"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const audit_service_1 = require("./audit.service");
const audit_controller_1 = require("./audit.controller");
const webhook_emitter_service_1 = require("./webhook-emitter.service");
const exam2p_audit_log_entity_1 = require("./entities/exam2p-audit-log.entity");
let AuditModule = class AuditModule {
};
exports.AuditModule = AuditModule;
exports.AuditModule = AuditModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([exam2p_audit_log_entity_1.Exam2PAuditLog]),
            axios_1.HttpModule,
        ],
        providers: [audit_service_1.AuditService, webhook_emitter_service_1.WebhookEmitterService],
        controllers: [audit_controller_1.AuditController],
    })
], AuditModule);
//# sourceMappingURL=audit.module.js.map