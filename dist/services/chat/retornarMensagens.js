"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chat_models_1 = __importDefault(require("../../models/chat.models"));
const log_1 = require("../../libs/log");
async function retornarMensagens(clienteID, prestadorID) {
    try {
        const messages = await chat_models_1.default.find({ clienteID, prestadorID });
        return messages;
    }
    catch (err) {
        log_1.log.error(`An error occured while getting the messages from the Mongo server- ${err}`);
        return undefined;
    }
}
exports.default = retornarMensagens;
//# sourceMappingURL=retornarMensagens.js.map