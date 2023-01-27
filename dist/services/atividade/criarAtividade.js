"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarAtividadeService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function criarAtividadeService(atividade) {
    try {
        console.log(atividade);
        const dbResponse = await db_1.default.atividade.create({
            data: {
                Cliente: {
                    connect: {
                        id: atividade.clienteId,
                    },
                },
                Prestador: {
                    connect: {
                        id: atividade.prestadorId,
                    },
                },
                Categoria: {
                    connect: {
                        id: atividade.categoriaId,
                    },
                },
                descricao: atividade.descricao,
            },
        });
        return dbResponse;
    }
    catch (e) {
        log_1.log.error(`Erro ao criar a atividade- ${e}`);
        return undefined;
    }
}
exports.criarAtividadeService = criarAtividadeService;
//# sourceMappingURL=criarAtividade.js.map