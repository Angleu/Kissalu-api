"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornarCategoriasService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function retornarCategoriasService() {
    try {
        const categoriasDB = await db_1.default.categoria.findMany({
            include: {
                prestadores: {
                    select: {
                        prestador: true,
                    },
                },
            },
        });
        let categorias = [];
        categoriasDB.forEach((e) => {
            categorias.push({
                id: e.id,
                titulo: e.titulo,
                imageUrl: e.imageUrl,
                prestadores: e.prestadores.map((m) => m.prestador),
            });
        });
        return categorias;
    }
    catch (e) {
        log_1.log.error(`Erro ao retornar as categorias- ${e}`);
        return undefined;
    }
}
exports.retornarCategoriasService = retornarCategoriasService;
//# sourceMappingURL=retornarCategorias.js.map