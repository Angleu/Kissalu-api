"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prestadorRoutes = void 0;
const express_1 = require("express");
const prestador_controllers_1 = require("../controllers/prestador.controllers");
const body_parser_1 = __importDefault(require("body-parser"));
const ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
const checkAuthenticatedToken_1 = __importDefault(require("../middleware/checkAuthenticatedToken"));
const jsonParser = body_parser_1.default.json();
const prestadorRoutes = (0, express_1.Router)();
exports.prestadorRoutes = prestadorRoutes;
prestadorRoutes.post("/", jsonParser, prestador_controllers_1.criarPrestador);
prestadorRoutes.post("/login", jsonParser, prestador_controllers_1.autenticarPrestador);
//prestadorRoutes.post("/refresh-token", jsonParser, refreshTokenPrestador);
prestadorRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, prestador_controllers_1.retornarPrestador);
prestadorRoutes.put("/", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, jsonParser, prestador_controllers_1.actualizarPrestador);
prestadorRoutes.delete("/", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, jsonParser, prestador_controllers_1.apagarPrestador);
prestadorRoutes.put("/categorias", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, jsonParser, prestador_controllers_1.adicionarCategoriasProvedor);
prestadorRoutes.delete("/categorias", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, jsonParser, prestador_controllers_1.removerCategoriaProvedor);
prestadorRoutes.get("/atividades", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, prestador_controllers_1.retornarAtividades);
prestadorRoutes.post("/post", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, jsonParser, prestador_controllers_1.criarPost);
prestadorRoutes.get("/portifolio", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, prestador_controllers_1.retornarPortifolio);
//# sourceMappingURL=prestador.routes.js.map