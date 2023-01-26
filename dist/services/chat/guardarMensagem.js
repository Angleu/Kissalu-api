"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../../libs/log");
const chat_models_1 = __importDefault(require("../../models/chat.models"));
async function guardarMensagem(message) {
    const newMessage = new chat_models_1.default({
        from: message.from,
        clienteID: message.clienteID,
        prestadorID: message.prestadorID,
        atividadeID: message.atividadeID,
        content: message.content,
    });
    try {
        const savedMessage = await newMessage.save();
        return savedMessage;
    }
    catch (err) {
        log_1.log.error(`An error occured while saving the message into the Mongo server- ${err}`);
        return undefined;
    }
}
exports.default = guardarMensagem;
//# sourceMappingURL=guardarMensagem.js.map