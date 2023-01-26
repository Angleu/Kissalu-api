"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaRoutes = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = require("express");
const categoria_controllers_1 = require("../controllers/categoria.controllers");
const checkAuthenticatedToken_1 = __importDefault(require("../middleware/checkAuthenticatedToken"));
const ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
const categoriaRoutes = (0, express_1.Router)();
exports.categoriaRoutes = categoriaRoutes;
const jsonParser = body_parser_1.default.json();
categoriaRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, checkAuthenticatedToken_1.default, categoria_controllers_1.retornarCategorias);
categoriaRoutes.post("/", jsonParser, categoria_controllers_1.criarCategoria);
//# sourceMappingURL=categoria.routes.js.map