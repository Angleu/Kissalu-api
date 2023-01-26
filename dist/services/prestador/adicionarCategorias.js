"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarCategoriasService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function adicionarCategoriasService(idPrestador, idCategorias) {
    try {
        await db_1.default.prestador.update({
            where: {
                id: idPrestador,
            },
            data: {
                categorias: {
                    createMany: {
                        data: idCategorias.map((ic) => {
                            return { idCategoria: ic };
                        }),
                    },
                },
            },
        });
        log_1.log.info(`As categorias foram adicionadas com sucesso ao perfil do provedor ${idPrestador}`);
        return {
            message: "Categories have been added",
            success: true,
        };
    }
    catch (e) {
        log_1.log.error(`Erro ao adicionar categorias no perfil do provedor ${idPrestador}- ${e}`);
        return undefined;
    }
}
exports.adicionarCategoriasService = adicionarCategoriasService;
//# sourceMappingURL=adicionarCategorias.js.map