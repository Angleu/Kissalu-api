"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainChannel = void 0;
const log_1 = require("../libs/log");
const request_1 = require("./events/handlers/request");
const dotenv_1 = __importDefault(require("dotenv"));
const functions_1 = require("./helpers/functions");
const response_1 = require("./events/handlers/response");
const events_types_1 = require("./events/types/events.types");
const helpers_1 = __importDefault(require("../middleware/helpers"));
const socketUserInfo_1 = require("./interfaces/socketUserInfo");
const disconnect_1 = require("./events/handlers/disconnect");
const private_message_1 = require("./events/handlers/private_message");
dotenv_1.default.config();
async function mainChannel(io) {
    io.of(process.env.SOCKETS_NAMESPACE).on("connection", async (socket) => {
        log_1.log.info(`Socket ${socket.id} connected`);
        const { token } = socket.handshake.auth;
        if (!token) {
            log_1.log.info("Token hasn't been informed...");
            socket.disconnect(true);
            return;
        }
        const userID = (0, functions_1.verifyToken)(token);
        if (userID && (await (0, helpers_1.default)(token))) {
            (0, functions_1.handleSocketsInfo)(userID, socket, socketUserInfo_1.UserStatus.CONNECTED);
            socket.join(userID);
            socket.leave(socket.id);
            socket.on(events_types_1.Events.REQUEST, (payload) => {
                (0, request_1.requestEventHandler)(payload, socket);
            });
            socket.on(events_types_1.Events.RESPONSE, (payload) => {
                (0, response_1.responseEventHandler)(payload, socket);
            });
            socket.on(events_types_1.Events.PRIVATE_MESSAGE, (payload) => {
                (0, private_message_1.messageEventHandler)(payload, socket);
            });
            socket.on(events_types_1.Events.DISCONNECT, () => {
                (0, disconnect_1.disconnectEventHandler)(io, userID);
            });
        }
        else {
            log_1.log.info("The given token is in the blacklist");
            socket.disconnect(true);
            return;
        }
    });
}
exports.mainChannel = mainChannel;
//# sourceMappingURL=handler.js.map