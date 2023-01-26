"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const papaparse_1 = __importDefault(require("papaparse"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function getData() {
    const mainPath = path_1.default.join(__dirname, "../data");
    const csvFiles = {
        cliente: fs_1.default.readFileSync(path_1.default.join(mainPath, "/cliente.csv"), "utf-8"),
        prestador: fs_1.default.readFileSync(path_1.default.join(mainPath, "/prestador.csv"), "utf-8"),
        atividade: fs_1.default.readFileSync(path_1.default.join(mainPath, "/atividade.csv"), "utf-8"),
        categoria: fs_1.default.readFileSync(path_1.default.join(mainPath, "/categoria.csv"), "utf-8"),
    };
    return {
        cliente: parseCsv(csvFiles.cliente),
        prestador: parseCsv(csvFiles.prestador),
        atividade: parseCsv(csvFiles.atividade),
        categoria: parseCsv(csvFiles.categoria),
    };
}
exports.getData = getData;
function parseCsv(file) {
    let result;
    papaparse_1.default.parse(file, {
        header: true,
        complete: (results) => {
            result = results.data[0];
        },
    });
    return result;
}
//# sourceMappingURL=dataHandler.js.map