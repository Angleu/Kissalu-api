"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCriarActividade = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
async function newCriarActividade(clienteId, categoriaId, prestadorId, descricao) {
    try {
        const dbResponse = await db_1.default.atividade.create({
            data: {
                Cliente: {
                    connect: {
                        id: clienteId,
                    },
                },
                Prestador: {
                    connect: {
                        id: prestadorId,
                    },
                },
                Categoria: {
                    connect: {
                        id: categoriaId,
                    },
                },
                descricao: descricao,
            },
        });
        return dbResponse;
    }
    catch (e) {
        return new Error(e);
    }
}
exports.newCriarActividade = newCriarActividade;
//# sourceMappingURL=newCriarActividade.js.map