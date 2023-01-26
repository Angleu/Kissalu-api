"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMensagens = void 0;
const retornarMensagens_1 = __importDefault(require("../services/chat/retornarMensagens"));
const getMensagens = async (req, res) => {
    console.log(req.params.clienteID, req.params.prestadorID);
    const response = await (0, retornarMensagens_1.default)(req.params.clienteID, req.params.prestadorID);
    if (response) {
        res.status(200).json(response);
    }
    else {
        res.status(500).json({
            message: "An error occured while getting the messages from the Mongo server",
            success: false,
        });
    }
};
exports.getMensagens = getMensagens;
//# sourceMappingURL=mensagem.controllers.js.map