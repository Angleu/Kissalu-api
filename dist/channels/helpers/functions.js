"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.getUserSocketData = exports.handleSocketsInfo = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const log_1 = require("../../libs/log");
const dotenv_1 = __importDefault(require("dotenv"));
const redis_1 = __importDefault(require("../../libs/configs/redis"));
dotenv_1.default.config();
function handleSocketsInfo(id, socket, status) {
    redis_1.default
        .multi()
        .hset(`userID:${id}`, "socketID", socket.id, "status", status)
        .expire(`userID:${id}`, 86400)
        .exec();
}
exports.handleSocketsInfo = handleSocketsInfo;
async function getUserSocketData(userID) {
    const [socketID, status] = await redis_1.default.hmget(`userID:${userID}`, "socketID", "status");
    return { [userID]: { socketID, status } };
}
exports.getUserSocketData = getUserSocketData;
function verifyToken(token) {
    try {
        (0, jsonwebtoken_1.verify)(token, process.env.SECRET);
        const { sub: id } = (0, jsonwebtoken_1.decode)(token);
        log_1.log.info("Token Approved By JWT (WebSocket Scope)");
        return String(id);
    }
    catch (e) {
        log_1.log.info("Token Not Approved By JWT (WebSocket Scope)");
        return undefined;
    }
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=functions.js.map