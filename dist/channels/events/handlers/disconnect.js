"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectEventHandler = void 0;
const socketUserInfo_1 = require("../../interfaces/socketUserInfo");
const redis_1 = __importDefault(require("../../../libs/configs/redis"));
const functions_1 = require("../../helpers/functions");
async function disconnectEventHandler(io, userID) {
    const socketInfo = await (0, functions_1.getUserSocketData)(userID);
    const socketInRoom = await io.in(userID).allSockets();
    const isDisconnected = socketInRoom.size === 0;
    if (isDisconnected) {
        await redis_1.default.hset(`userID:${userID}`, "socketID", socketInfo[userID].socketID, "status", socketUserInfo_1.UserStatus.DISCONNECTED);
    }
}
exports.disconnectEventHandler = disconnectEventHandler;
//# sourceMappingURL=disconnect.js.map