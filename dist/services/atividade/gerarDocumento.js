"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarDocumentoService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
const atividade_renders_1 = __importDefault(require("../../libs/document_generator/renders/atividade.renders"));
async function gerarDocumentoService(idAtividade) {
    try {
        const atividade = await db_1.default.atividade.findUnique({
            where: {
                id: idAtividade,
            },
        });
        if (atividade) {
            const cliente = await db_1.default.cliente.findUnique({
                where: { id: atividade.clienteId },
            });
            const provedor = await db_1.default.prestador.findUnique({
                where: { id: atividade.prestadorId },
            });
            const categoria = await db_1.default.categoria.findUnique({
                where: {
                    id: atividade.categoriaId,
                },
            });
            return (0, atividade_renders_1.default)(atividade, cliente, provedor, categoria);
        }
    }
    catch (e) {
        log_1.log.error(`${e}- Erro ao gerar o documento`);
        return undefined;
    }
}
exports.gerarDocumentoService = gerarDocumentoService;
//# sourceMappingURL=gerarDocumento.js.map