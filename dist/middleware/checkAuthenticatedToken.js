"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("./helpers"));
const log_1 = require("../libs/log");
async function checkAuthenticatedToken(req, res, next) {
    const tokenExists = await (0, helpers_1.default)(req.headers.authorization.split(" ")[1]);
    if (tokenExists) {
        return next();
    }
    else {
        log_1.log.error("O token informado está na blacklist (Kisalu Scope)");
        return res.status(400).json({ message: "Invalid Token" });
    }
}
exports.default = checkAuthenticatedToken;
//# sourceMappingURL=checkAuthenticatedToken.js.map