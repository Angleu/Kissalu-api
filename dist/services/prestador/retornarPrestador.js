"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornarPrestadorService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
const actualizarPrestador_1 = require("./actualizarPrestador");
const atividadesHandler_1 = require("./atividadesHandler");
async function retornarPrestadorService(idPrestador) {
    try {
        const atividades = await (0, atividadesHandler_1.getAtividadesCompletas)(idPrestador);
        if (atividades) {
            await (0, actualizarPrestador_1.prestadorRateUpdate)(idPrestador, atividades);
        }
        const prestador = await db_1.default.prestador.findUnique({
            where: {
                id: idPrestador,
            },
            select: {
                nome: true,
                bi: true,
                categorias: {
                    select: {
                        categoria: {
                            select: {
                                titulo: true,
                                imageUrl: true,
                                id: true,
                            },
                        },
                    },
                },
                morada: {
                    select: {
                        bairro: true,
                        complemento: true,
                        distrito: true,
                        municipio: true,
                        provincia: true,
                    },
                },
                dataNasc: true,
                descricao: true,
                email: true,
                estado: true,
                iban: true,
                id: true,
                rate: true,
                telefone: true,
                imageUrl: true,
                verificado: true,
                criadoEm: true,
            },
        });
        const prestadorObj = Object.assign({}, prestador);
        prestadorObj.categorias = [];
        prestador.categorias.forEach((e) => {
            prestadorObj.categorias.push({
                titulo: e.categoria.titulo,
                imageUrl: e.categoria.imageUrl,
                id: e.categoria.id,
            });
        });
        log_1.log.info(`prestador retorando: ${prestador?.email}`);
        return prestadorObj;
    }
    catch (e) {
        log_1.log.error(`${e}- Falha ao retornar o prestador`);
        return undefined;
    }
}
exports.retornarPrestadorService = retornarPrestadorService;
//# sourceMappingURL=retornarPrestador.js.map