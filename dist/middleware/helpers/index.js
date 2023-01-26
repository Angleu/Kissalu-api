"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../libs/configs/db"));
async function verifyTokenDB(token) {
    const loginInfo = await db_1.default.loginInfo.findUnique({
        where: {
            token: token,
        },
    });
    if (loginInfo) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = verifyTokenDB;
//# sourceMappingURL=index.js.map