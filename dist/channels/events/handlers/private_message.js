"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageEventHandler = void 0;
const log_1 = require("../../../libs/log");
const guardarMensagem_1 = __importDefault(require("../../../services/chat/guardarMensagem"));
const events_types_1 = require("../types/events.types");
async function messageEventHandler(payload, socket) {
    log_1.log.info("Private Message Event");
    payload.messageInfo.from = payload.TriggeredBy.role;
    (0, guardarMensagem_1.default)(payload.messageInfo);
    socket
        .to(payload.messageInfo.prestadorID)
        .to(payload.messageInfo.clienteID)
        .emit(events_types_1.Events.PRIVATE_MESSAGE, payload);
}
exports.messageEventHandler = messageEventHandler;
//# sourceMappingURL=private_message.js.map