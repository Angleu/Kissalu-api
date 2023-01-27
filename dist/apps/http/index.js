"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cliente_routes_1 = require("../../routes/cliente.routes");
const prestador_routes_1 = require("../../routes/prestador.routes");
const categoria_routes_1 = require("../../routes/categoria.routes");
const cors_1 = __importDefault(require("cors"));
const atividade_routes_1 = require("../../routes/atividade.routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../../libs/configs/swagger.json"));
// import { chatRoutes } from "../../routes/chat.routes";
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/doc", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use("/cliente", cliente_routes_1.clienteRoutes);
app.use("/prestador", prestador_routes_1.prestadorRoutes);
app.use("/categoria", categoria_routes_1.categoriaRoutes);
app.use("/atividade", atividade_routes_1.atividadeRoutes);
// app.use("/chat", chatRoutes);
app.listen(PORT, () => console.log("server listening on port ", PORT));
// export default app;
//# sourceMappingURL=index.js.map