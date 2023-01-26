"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
const log_1 = require("../libs/log");
dotenv_1.default.config();
function ensureAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({
            message: "The token wasn't informed",
        });
    }
    try {
        log_1.log.info("Verificando o token (JWT Scope)...");
        (0, jsonwebtoken_1.verify)(authToken.split(" ")[1], process.env.SECRET);
        log_1.log.info("Token aprovado! (JWT Scope)");
        const { sub: id } = (0, jsonwebtoken_1.decode)(authToken.split(" ")[1]);
        req.id = String(id);
        return next();
    }
    catch (e) {
        log_1.log.error("Token reprovado! (JWT Scope)");
        return res.status(401).json({
            message: "Invalid Token",
        });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
//# sourceMappingURL=ensureAuthenticated.js.map