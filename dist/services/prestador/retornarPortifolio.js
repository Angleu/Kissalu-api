"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function retornarPortifolioService(id) {
    try {
        const posts = await db_1.default.prestador.findUnique({
            where: {
                id,
            },
            select: {
                portifolio: true,
            },
        });
        return posts;
    }
    catch (e) {
        log_1.log.error(`Ocorreu um erro ao retornar o portifolio- ${e}`);
        return undefined;
    }
}
exports.default = retornarPortifolioService;
//# sourceMappingURL=retornarPortifolio.js.map