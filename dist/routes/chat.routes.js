"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRoutes = void 0;
const express_1 = require("express");
const mensagem_controllers_1 = require("../controllers/mensagem.controllers");
const checkAuthenticatedToken_1 = __importDefault(require("../middleware/checkAuthenticatedToken"));
const ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
const chatRoutes = (0, express_1.Router)();
exports.chatRoutes = chatRoutes;
chatRoutes.get("/mensagens/:clienteID/:prestadorID", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, mensagem_controllers_1.getMensagens);
//# sourceMappingURL=chat.routes.js.map