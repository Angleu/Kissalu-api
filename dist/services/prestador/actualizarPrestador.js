"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prestadorRateUpdate = exports.actualizarPrestadorService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
const encryption_1 = require("../../libs/utils/encryption");
const ratingSystem_1 = require("../../libs/utils/ratingSystem");
async function actualizarPrestadorService(id, prestador) {
    try {
        const prestadorExiste = await db_1.default.prestador.findUnique({
            where: {
                id,
            },
        });
        if (prestadorExiste) {
            await db_1.default.prestador.update({
                where: {
                    id,
                },
                data: {
                    bi: prestador.bi,
                    dataNasc: new Date(prestador.dataNasc),
                    email: prestador.email,
                    morada: {
                        update: {
                            bairro: prestador.morada.bairro,
                            complemento: prestador.morada.complemento,
                            distrito: prestador.morada.distrito,
                            municipio: prestador.morada.municipio,
                            provincia: prestador.morada.provincia,
                        },
                    },
                    telefone: prestador.telefone,
                    password: (0, encryption_1.encryptData)(prestador.password),
                    nome: prestador.nome,
                    iban: prestador.iban,
                    descricao: prestador.descricao,
                    estado: prestador.estado,
                    categorias: {
                        createMany: {
                            data: prestador.idCategorias.map((ic) => {
                                return { idCategoria: ic };
                            }),
                        },
                    },
                },
            });
            log_1.log.info("Os dados foram atualizados");
            return { message: "Provider data have been updated", success: true };
        }
        else {
            log_1.log.info("Prestador não existe");
            return { message: "Customer doesn't exist", success: false };
        }
    }
    catch (e) {
        log_1.log.error(`Erro ao atualizar os dados do prestador- ${e}`);
        return undefined;
    }
}
exports.actualizarPrestadorService = actualizarPrestadorService;
async function prestadorRateUpdate(id, atividades) {
    try {
        const prestadorExiste = await db_1.default.prestador.findUnique({
            where: {
                id,
            },
        });
        if (prestadorExiste) {
            await db_1.default.prestador.update({
                where: {
                    id: prestadorExiste.id,
                },
                data: {
                    rate: (0, ratingSystem_1.getRate)(atividades),
                },
            });
        }
        else {
            log_1.log.info("Prestador não existe");
        }
    }
    catch (e) {
        log_1.log.error(`Erro ao atualizar os dados do prestador- ${e}`);
        return undefined;
    }
}
exports.prestadorRateUpdate = prestadorRateUpdate;
//# sourceMappingURL=actualizarPrestador.js.map