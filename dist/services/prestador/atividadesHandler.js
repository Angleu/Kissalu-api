"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAtividadesCompletas = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
async function getAtividadesCompletas(id) {
    return await db_1.default.prestador.findUnique({
        where: {
            id,
        },
        select: {
            atividades: {
                where: {
                    estado: "FINALIZADA",
                },
            },
        },
    });
}
exports.getAtividadesCompletas = getAtividadesCompletas;
//# sourceMappingURL=atividadesHandler.js.map