"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const MessageSchema = new Schema({
    from: {
        type: String
    },
    clienteID: {
        type: String,
    },
    prestadorID: {
        type: String,
    },
    atividadeID: {
        type: String,
    },
    content: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Mensagem", MessageSchema);
//# sourceMappingURL=chat.models.js.map