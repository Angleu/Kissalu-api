"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mustache_1 = __importDefault(require("mustache"));
const splitMorada_1 = require("../functions/splitMorada");
const atividade_templates_1 = require("../templates/atividade.templates");
const dayjs_1 = __importDefault(require("dayjs"));
function atividadeTemplate(atividade, cliente, provedor, categoria) {
    const view = {
        atividade,
        cliente,
        provedor,
        categoria,
        moradaCliente: (0, splitMorada_1.splitMorada)(cliente.morada),
        moradaProvedor: (0, splitMorada_1.splitMorada)(provedor.morada),
        data: (0, dayjs_1.default)(atividade.dataFinalizado).format("DD-MM-YYYY, HH:mm A"),
    };
    return mustache_1.default.render((0, atividade_templates_1.atividadeTemplateFile)(), view);
}
exports.default = atividadeTemplate;
//# sourceMappingURL=atividade.renders.js.map