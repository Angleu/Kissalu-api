"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCriarActividade = exports.avaliarPerformance = exports.verDocumento = exports.gerarDocumentoPDF = void 0;
const gerarDocumento_1 = require("../services/atividade/gerarDocumento");
const html_pdf_1 = __importDefault(require("html-pdf"));
const log_1 = require("../libs/log");
const rateAtividade_1 = require("../services/atividade/rateAtividade");
const criarAtividade_1 = require("../services/atividade/criarAtividade");
const gerarDocumentoPDF = async (req, res) => {
    const response = await (0, gerarDocumento_1.gerarDocumentoService)(req.params.id);
    if (response) {
        html_pdf_1.default.create(response, { format: "Letter" }).toBuffer((err, buffer) => {
            if (err) {
                log_1.log.error(`${err}- An error occured creating the PDF`);
                return res
                    .status(500)
                    .json({ message: "An error occured creating the document" });
            }
            return res.end(buffer);
        });
    }
    else {
        res.status(500).json({ message: "An error occured creating the document" });
    }
};
exports.gerarDocumentoPDF = gerarDocumentoPDF;
const verDocumento = async (req, res) => {
    const response = await (0, gerarDocumento_1.gerarDocumentoService)(req.params.id);
    if (response) {
        res.status(200).send(response);
    }
    else {
        res.status(500).json({ message: "An error occured loading the document" });
    }
};
exports.verDocumento = verDocumento;
const avaliarPerformance = async (req, res) => {
    const response = await (0, rateAtividade_1.rateAtividade)(req.params.id, +req.params.rate);
    if (response) {
        res.status(200).send(response);
    }
    else {
        res.status(400).json({ message: "An error occured rating the activity" });
    }
};
exports.avaliarPerformance = avaliarPerformance;
const handleCriarActividade = async (req, res) => {
    const response = await (0, criarAtividade_1.criarAtividadeService)(req.body.actividade);
    if (response) {
        res.status(200).send(response);
    }
    else {
        res.status(500).json({ message: "An error occured loading the document" });
    }
};
exports.handleCriarActividade = handleCriarActividade;
//# sourceMappingURL=atividade.controllers.js.map