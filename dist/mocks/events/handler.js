"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientRequestPayload = exports.getResponsePayload = exports.getRequestPayload = void 0;
const payloads_1 = require("../../channels/interfaces/payloads");
const dataHandler_1 = require("../helpers/dataHandler");
const data = (0, dataHandler_1.getData)();
function getRequestPayload() {
    return {
        TriggeredBy: {
            id: data.cliente.id,
            role: payloads_1.Roles.CLIENTE,
        },
        atividade: data.atividade,
    };
}
exports.getRequestPayload = getRequestPayload;
function getResponsePayload() {
    return {
        TriggeredBy: {
            id: data.cliente.id,
            role: payloads_1.Roles.PRESTADOR,
        },
        atividade: data.atividade,
    };
}
exports.getResponsePayload = getResponsePayload;
function getClientRequestPayload() {
    return {
        cliente: data.cliente,
        categoria: data.categoria.id,
        atividade: data.atividade,
    };
}
exports.getClientRequestPayload = getClientRequestPayload;
//# sourceMappingURL=handler.js.map