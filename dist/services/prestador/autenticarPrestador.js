"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticarPrestadorService = void 0;
const db_1 = __importDefault(require("../../libs/configs/db"));
const log_1 = require("../../libs/log");
const encryption_1 = require("../../libs/utils/encryption");
const generateToken_1 = require("../../libs/utils/generateToken");
async function autenticarPrestadorService(email, password, device) {
    const prestadorExiste = await db_1.default.prestador.findFirst({
        where: {
            email: email,
        },
        include: {
            loginInfo: {
                where: {
                    deviceId: device.uniqueID,
                },
            },
        },
    });
    if (!prestadorExiste) {
        return undefined;
    }
    const passwordMatch = (0, encryption_1.compareEncryptedData)(prestadorExiste.password, password);
    if (!passwordMatch) {
        return undefined;
    }
    const currentToken = prestadorExiste.loginInfo.find((f) => f.deviceId === device.uniqueID);
    if (currentToken) {
        await db_1.default.loginInfo.delete({
            where: {
                token: currentToken.token,
            },
        });
    }
    const generatedToken = (0, generateToken_1.gerarToken)(prestadorExiste.id);
    const loginInfo = {
        token: generatedToken,
        device,
    };
    try {
        await db_1.default.prestador.update({
            where: {
                id: prestadorExiste.id,
            },
            data: {
                loginInfo: {
                    create: {
                        device: loginInfo.device,
                        deviceId: loginInfo.device.uniqueID,
                        token: loginInfo.token,
                    },
                },
            },
        });
    }
    catch (e) {
        log_1.log.error(`Erro ao criar a informação do login- ${e}`);
        return undefined;
    }
    //const refreshToken = await gerarRefreshTokenPrestador(prestadorExiste.id);
    return { generatedToken };
}
exports.autenticarPrestadorService = autenticarPrestadorService;
//# sourceMappingURL=autenticarPrestador.js.map