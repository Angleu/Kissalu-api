"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestEventHandler = void 0;
const log_1 = require("../../../libs/log");
const criarAtividade_1 = require("../../../services/atividade/criarAtividade");
const retornarCliente_1 = require("../../../services/cliente/retornarCliente");
const payloads_1 = require("../../interfaces/payloads");
const events_types_1 = require("../types/events.types");
async function requestEventHandler(payload, socket) {
    log_1.log.info("Request event");
    if (payload.TriggeredBy.role === payloads_1.Roles.CLIENTE) {
        const atividadeDB = (0, criarAtividade_1.criarAtividadeService)(payload.atividade);
        if (atividadeDB) {
            const returnPayload = {
                cliente: (0, retornarCliente_1.retornarClienteService)(payload.TriggeredBy.id),
                categoria: payload.atividade.categoriaId,
                atividadeDB,
            };
            socket
                .to(payload.atividade.prestadorId)
                .emit(events_types_1.Events.REQUEST, returnPayload);
        }
    }
    else {
        log_1.log.info("Only customers can trigger the request event");
    }
}
exports.requestEventHandler = requestEventHandler;
//# sourceMappingURL=request.js.map