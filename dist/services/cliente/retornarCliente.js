"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornarClienteService = void 0;
const log_1 = require("../../libs/log");
const db_1 = __importDefault(require("../../libs/configs/db"));
async function retornarClienteService(idCliente) {
    try {
        const cliente = await db_1.default.cliente.findUnique({
            where: {
                id: idCliente,
            },
            include: {
                morada: {
                    select: {
                        bairro: true,
                        complemento: true,
                        distrito: true,
                        municipio: true,
                        provincia: true,
                    },
                },
            },
        });
        log_1.log.info(`Cliente retorando: ${cliente?.email}`);
        return cliente;
    }
    catch (e) {
        log_1.log.error(`${e}- Falha ao retornar o cliente`);
        return undefined;
    }
}
exports.retornarClienteService = retornarClienteService;
//# sourceMappingURL=retornarCliente.js.map