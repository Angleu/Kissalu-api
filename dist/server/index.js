"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import app from "../apps/http";
const log_1 = require("../libs/log");
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const websocket_1 = __importDefault(require("../apps/websocket"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// initMongoDB();
const httpServer = http_1.default.createServer(app);
(0, websocket_1.default)(httpServer);
httpServer.listen(process.env.PORT, () => {
    log_1.log.info("Server is running");
});
// app.listen(8080, () => console.log("Server is running 8080"));
//# sourceMappingURL=index.js.map