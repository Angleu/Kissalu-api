"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRoutes = void 0;
const express_1 = require("express");
const cliente_controllers_1 = require("../controllers/cliente.controllers");
const body_parser_1 = __importDefault(require("body-parser"));
const ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
const checkAuthenticatedToken_1 = __importDefault(require("../middleware/checkAuthenticatedToken"));
const jsonParser = body_parser_1.default.json();
const clienteRoutes = (0, express_1.Router)();
exports.clienteRoutes = clienteRoutes;
clienteRoutes.post("/", jsonParser, cliente_controllers_1.criarCliente);
clienteRoutes.post("/login", jsonParser, cliente_controllers_1.autenticarCliente);
//clienteRoutes.post("/refresh-token", jsonParser, refreshTokenCliente);
clienteRoutes.put("/", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, jsonParser, cliente_controllers_1.actualizarCliente);
clienteRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, cliente_controllers_1.retornarCliente);
clienteRoutes.delete("/", jsonParser, cliente_controllers_1.apagarCliente);
clienteRoutes.get("/atividades", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, cliente_controllers_1.retornarAtividades);
//# sourceMappingURL=cliente.routes.js.map