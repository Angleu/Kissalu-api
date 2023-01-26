"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticarClienteService = void 0;
const log_1 = require("../../libs/log");
const db_1 = __importDefault(require("../../libs/configs/db"));
const encryption_1 = require("../../libs/utils/encryption");
const generateToken_1 = require("../../libs/utils/generateToken");
async function autenticarClienteService(email, password, device) {
    const clienteExiste = await db_1.default.cliente.findFirst({
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
    if (!clienteExiste) {
        log_1.log.info(`O cliente não existe: ${email}`);
        return undefined;
    }
    const passwordMatch = (0, encryption_1.compareEncryptedData)(clienteExiste.password, password);
    if (!passwordMatch) {
        log_1.log.info(`A palavra passe está incorrecta: ${password}`);
        return undefined;
    }
    const currentToken = clienteExiste.loginInfo.find((f) => f.deviceId === device.uniqueID);
    if (currentToken) {
        await db_1.default.loginInfo.delete({
            where: {
                token: currentToken.token,
            },
        });
    }
    const generatedToken = (0, generateToken_1.gerarToken)(clienteExiste.id);
    const loginInfo = {
        token: generatedToken,
        device,
    };
    try {
        await db_1.default.cliente.update({
            where: {
                id: clienteExiste.id,
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
    return { generatedToken };
}
exports.autenticarClienteService = autenticarClienteService;
//# sourceMappingURL=autenticarCliente.js.map