"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
async function criarPostService(id, post) {
    try {
        await db_1.default.prestador.update({
            where: {
                id,
            },
            data: {
                portifolio: {
                    create: {
                        descricao: post.descricao,
                        categoriaId: post.idCategoria,
                        mediaUrl: post.mediaUrl,
                    },
                },
            },
        });
        log_1.log.info(`Post criado com sucesso no perfil do provedor ${id}`);
        return {
            message: "The post has been inserted into the portifolio",
            succes: true,
        };
    }
    catch (e) {
        log_1.log.error(`Ocorreu um erro ao criar o post- ${e}`);
        return undefined;
    }
}
exports.default = criarPostService;
//# sourceMappingURL=criarPost.js.map