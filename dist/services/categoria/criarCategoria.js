"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCategoriaService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function criarCategoriaService(categoria) {
    try {
        await db_1.default.categoria.create({
            data: {
                titulo: categoria.titulo,
                imageUrl: categoria.imageUrl,
            },
        });
        return true;
    }
    catch (e) {
        log_1.log.error(`${e}- Erro ao inserir categoria`);
        return false;
    }
}
exports.criarCategoriaService = criarCategoriaService;
//# sourceMappingURL=criarCategoria.js.map