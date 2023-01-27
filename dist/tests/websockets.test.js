"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const events_types_1 = require("../channels/events/types/events.types");
const handler_1 = require("../mocks/events/handler");
describe("WebSockets Test", () => {
    let io, serverSocket, clientSocket, httpServer;
    beforeAll((done) => {
        httpServer = http_1.default.createServer();
        io = new socket_io_1.Server(httpServer);
        httpServer.listen(8080, () => {
            clientSocket = (0, socket_io_client_1.default)(`http://localhost:8080`);
            io.on("connection", (socket) => {
                serverSocket = socket;
            });
            clientSocket.on("connect", done);
        });
    });
    afterAll(() => {
        io.close();
        clientSocket.close();
        httpServer.close();
    });
    test("Request Event", (done) => {
        clientSocket.on(events_types_1.Events.REQUEST, (payload) => {
            expect(payload.atividade.id).toBe("43a961ba-42ba-448f-af47-826c9e8bf46b");
            done();
        });
        io.emit(events_types_1.Events.REQUEST, (0, handler_1.getClientRequestPayload)());
    });
    test("Response Event", (done) => {
        serverSocket.on(events_types_1.Events.RESPONSE, (payload) => {
            expect(payload.atividade.estado).toBe(client_1.Estados.ATIVA);
            done();
        });
        clientSocket.emit(events_types_1.Events.RESPONSE, (0, handler_1.getResponsePayload)());
    });
});
//# sourceMappingURL=websockets.test.js.map