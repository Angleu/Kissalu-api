"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarClienteService = void 0;
const log_1 = require("../../libs/log");
const db_1 = __importDefault(require("../../libs/configs/db"));
const encryption_1 = require("../../libs/utils/encryption");
async function actualizarClienteService(id, cliente) {
    try {
        const clienteExiste = await db_1.default.cliente.findMany({
            where: {
                id,
            },
        });
        if (clienteExiste) {
            await db_1.default.cliente.update({
                where: {
                    id,
                },
                data: {
                    bi: cliente.bi,
                    dataNasc: new Date(cliente.dataNasc),
                    email: cliente.email,
                    morada: {
                        update: {
                            bairro: cliente.morada.bairro,
                            complemento: cliente.morada.complemento,
                            distrito: cliente.morada.distrito,
                            municipio: cliente.morada.municipio,
                            provincia: cliente.morada.provincia,
                        },
                    },
                    telefone: cliente.telefone,
                    password: (0, encryption_1.encryptData)(cliente.password),
                    nome: cliente.nome,
                },
            });
            log_1.log.info("Os dados foram atualizados");
            return { message: "Customer data have been updated", success: true };
        }
        else {
            log_1.log.info("Cliente não existe");
            return { message: "Customer doesn't exist", success: false };
        }
    }
    catch (e) {
        log_1.log.error(`Erro ao atualizar os dados do cliente- ${e}`);
        return undefined;
    }
}
exports.actualizarClienteService = actualizarClienteService;
//# sourceMappingURL=actualizarCliente.js.map