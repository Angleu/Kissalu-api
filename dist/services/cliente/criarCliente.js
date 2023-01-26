"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarClienteService = void 0;
const log_1 = require("../../libs/log");
const db_1 = __importDefault(require("../../libs/configs/db"));
const encryption_1 = require("../../libs/utils/encryption");
async function criarClienteService(cliente) {
    try {
        const clienteExiste = await db_1.default.cliente.findFirst({
            where: {
                email: cliente.email,
            },
        });
        if (clienteExiste) {
            log_1.log.info(`Email já existe no sistema ${cliente.email}`);
            return { message: "The entered email is being used", success: false };
        }
        else {
            await db_1.default.cliente.create({
                data: {
                    bi: cliente.bi,
                    dataNasc: new Date(cliente.dataNasc),
                    email: cliente.email,
                    morada: {
                        create: {
                            bairro: cliente.morada.bairro,
                            complemento: cliente.morada.complemento,
                            distrito: cliente.morada.distrito,
                            municipio: cliente.morada.municipio,
                            provincia: cliente.morada.provincia,
                        },
                    },
                    telefone: cliente.telefone,
                    password: (0, encryption_1.encryptData)(cliente.password),
                    imageUrl: cliente.imageUrl,
                    nome: cliente.nome,
                },
            });
            log_1.log.info(`Cliente ${cliente.nome} criado com sucesso!!`);
            return { message: "Customer has been created!", success: true };
        }
    }
    catch (e) {
        log_1.log.error(`${e}- Falha ao criar o cliente: ${cliente.nome}`);
        return undefined;
    }
}
exports.criarClienteService = criarClienteService;
//# sourceMappingURL=criarCliente.js.map