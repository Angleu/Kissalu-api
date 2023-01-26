"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAtividadeService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function updateAtividadeService(atividade) {
    try {
        return await db_1.default.atividade.update({
            where: {
                id: atividade.id,
            },
            data: {
                dataFinalizado: atividade.dataFinalizado,
                estado: atividade.estado,
                numRef: atividade.numRef,
                valorAssociado: atividade.valorAssociado,
            },
        });
    }
    catch (e) {
        log_1.log.error(`Erro ao actualizar a atividade- ${e}`);
        return undefined;
    }
}
exports.updateAtividadeService = updateAtividadeService;
//# sourceMappingURL=updateAtividade.js.map