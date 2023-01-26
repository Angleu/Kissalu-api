"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function retornarAtividadesService(clienteId) {
    try {
        const atividades = await db_1.default.atividade.findMany({
            where: {
                clienteId,
            },
            select: {
                Prestador: {
                    select: {
                        bi: true,
                        nome: true,
                        rate: true,
                        email: true,
                        telefone: true,
                        iban: true,
                        id: true,
                        imageUrl: true
                    },
                },
                Categoria: {
                    select: {
                        titulo: true,
                        id: true,
                    },
                },
                dataCriado: true,
                dataFinalizado: true,
                descricao: true,
                estado: true,
                id: true,
                numRef: true,
                valorAssociado: true,
                localizacao: true,
            },
        });
        return atividades;
    }
    catch (error) {
        log_1.log.error(`Erro ao retornar as atividades do cliente- ${error}`);
        return undefined;
    }
}
exports.default = retornarAtividadesService;
//# sourceMappingURL=retornarAtividades.js.map