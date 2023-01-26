"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atividadeRoutes = void 0;
const express_1 = require("express");
const atividade_controllers_1 = require("../controllers/atividade.controllers");
const checkAuthenticatedToken_1 = __importDefault(require("../middleware/checkAuthenticatedToken"));
const ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
const atividadeRoutes = (0, express_1.Router)();
exports.atividadeRoutes = atividadeRoutes;
atividadeRoutes.get("/:id/docPDF", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, atividade_controllers_1.gerarDocumentoPDF);
atividadeRoutes.get("/:id/doc", atividade_controllers_1.verDocumento);
atividadeRoutes.put("/:id/:rate", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, atividade_controllers_1.avaliarPerformance);
atividadeRoutes.post("/", atividade_controllers_1.handleCriarActividade);
//# sourceMappingURL=atividade.routes.js.map