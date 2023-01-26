"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function gerarToken(id) {
    const token = (0, jsonwebtoken_1.sign)({}, process.env.SECRET, {
        subject: id,
    });
    return token;
}
exports.gerarToken = gerarToken;
//# sourceMappingURL=generateToken.js.map