"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarPrestadorService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
const encryption_1 = require("../../libs/utils/encryption");
async function criarPrestadorService(prestador) {
    try {
        log_1.log.info(`Prestador recebido: ${JSON.stringify(prestador)}`);
        const prestadorExiste = await db_1.default.prestador.findFirst({
            where: {
                email: prestador.email,
            },
        });
        if (prestadorExiste) {
            log_1.log.info(`Email já existe no sistema ${prestador.email}`);
            return { message: "The entered email is being used", success: false };
        }
        else {
            await db_1.default.prestador.create({
                data: {
                    bi: prestador.bi,
                    dataNasc: new Date(prestador.dataNasc),
                    email: prestador.email,
                    morada: {
                        create: {
                            bairro: prestador.morada.bairro,
                            complemento: prestador.morada.complemento,
                            distrito: prestador.morada.distrito,
                            municipio: prestador.morada.municipio,
                            provincia: prestador.morada.provincia,
                        },
                    },
                    telefone: prestador.telefone,
                    password: (0, encryption_1.encryptData)(prestador.password),
                    imageUrl: prestador.imageUrl,
                    nome: prestador.nome,
                    iban: prestador.iban,
                    descricao: prestador.descricao,
                    categorias: {
                        createMany: {
                            data: prestador.idCategorias.map((e) => {
                                return { idCategoria: e };
                            }),
                        },
                    },
                },
            });
            log_1.log.info(`Prestador ${prestador.nome} criado com sucesso!!`);
            return { message: "Provider has been created!", success: true };
        }
    }
    catch (e) {
        log_1.log.error(`${e}- Falha ao criar o prestador: ${prestador.nome}`);
        return undefined;
    }
}
exports.criarPrestadorService = criarPrestadorService;
//# sourceMappingURL=criarPrestador.js.map