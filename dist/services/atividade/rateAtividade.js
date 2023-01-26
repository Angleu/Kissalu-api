"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateAtividade = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function rateAtividade(id, rate, feedback) {
    try {
        await db_1.default.atividade.update({
            where: {
                id,
            },
            data: {
                avaliacao: rate,
                feedback
            },
        });
        log_1.log.info(`Atividade ${id} foi avaliada com sucesso`);
        return { message: "Activity has been rated successfully" };
    }
    catch (e) {
        log_1.log.error(`Ocorreu um erro ao avaliar a atividade ${e}`);
        return undefined;
    }
}
exports.rateAtividade = rateAtividade;
//# sourceMappingURL=rateAtividade.js.map