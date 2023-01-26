"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removerCategoria = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function removerCategoria(idPrestador, idCategoria) {
    try {
        await db_1.default.prestadorCategoria.delete({
            where: {
                idPrestador_idCategoria: {
                    idPrestador,
                    idCategoria,
                },
            },
        });
        log_1.log.info(`A categoria foi removida com sucesso do perfil do provedor ${idPrestador}`);
        return {
            message: "Category have been removed",
            success: true,
        };
    }
    catch (e) {
        log_1.log.error(`Erro ao remover a categoria do perfil do provedor ${idPrestador}- ${e}`);
        return undefined;
    }
}
exports.removerCategoria = removerCategoria;
//# sourceMappingURL=removerCategoria.js.map