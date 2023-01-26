"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseEventHandler = void 0;
const log_1 = require("../../../libs/log");
const updateAtividade_1 = require("../../../services/atividade/updateAtividade");
const payloads_1 = require("../../interfaces/payloads");
const events_types_1 = require("../types/events.types");
async function responseEventHandler(payload, socket) {
    log_1.log.info(`Response event`);
    let to;
    (0, updateAtividade_1.updateAtividadeService)(payload.atividade);
    if (payload.TriggeredBy.role === payloads_1.Roles.CLIENTE) {
        to = payload.atividade.Prestador.id;
    }
    else if (payload.TriggeredBy.role === payloads_1.Roles.PRESTADOR) {
        to = payload.atividade.Cliente.id;
    }
    socket.to(to).emit(events_types_1.Events.RESPONSE, payload.atividade);
}
exports.responseEventHandler = responseEventHandler;
//# sourceMappingURL=response.js.map