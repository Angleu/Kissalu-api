"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const handler_1 = require("../../channels/handler");
function webSocketApp(httpServer) {
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*",
        },
        path: "/websocket",
    });
    (0, handler_1.mainChannel)(io);
}
exports.default = webSocketApp;
//# sourceMappingURL=index.js.map