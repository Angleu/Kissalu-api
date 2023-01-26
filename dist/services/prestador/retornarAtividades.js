"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function retornarAtividadesService(prestadorId) {
    try {
        const atividades = await db_1.default.atividade.findMany({
            where: {
                prestadorId,
            },
            select: {
                Cliente: {
                    select: {
                        bi: true,
                        nome: true,
                        morada: true,
                        dataNasc: true,
                        email: true,
                        id: true,
                        telefone: true,
                        imageUrl: true
                    },
                },
                Categoria: {
                    select: {
                        id: true,
                        titulo: true,
                    },
                },
                dataCriado: true,
                numRef: true,
                descricao: true,
                id: true,
                estado: true,
                valorAssociado: true,
                dataFinalizado: true,
                localizacao: true,
            },
        });
        return atividades;
    }
    catch (error) {
        log_1.log.error(`Erro ao retornar as atividades do prestador- ${error}`);
        return undefined;
    }
}
exports.default = retornarAtividadesService;
//# sourceMappingURL=retornarAtividades.js.map