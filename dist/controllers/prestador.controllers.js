"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornarPortifolio = exports.criarPost = exports.retornarAtividades = exports.removerCategoriaProvedor = exports.adicionarCategoriasProvedor = exports.autenticarPrestador = exports.apagarPrestador = exports.actualizarPrestador = exports.retornarPrestador = exports.criarPrestador = void 0;
const adicionarCategorias_1 = require("../services/prestador/adicionarCategorias");
const autenticarPrestador_1 = require("../services/prestador/autenticarPrestador");
const retornarPrestador_1 = require("../services/prestador/retornarPrestador");
const actualizarPrestador_1 = require("../services/prestador/actualizarPrestador");
const criarPrestador_1 = require("../services/prestador/criarPrestador");
const removerCategoria_1 = require("../services/prestador/removerCategoria");
const retornarAtividades_1 = __importDefault(require("../services/prestador/retornarAtividades"));
const retornarPortifolio_1 = __importDefault(require("../services/prestador/retornarPortifolio"));
const criarPost_1 = __importDefault(require("../services/prestador/criarPost"));
const criarPrestador = async (req, res) => {
    const prestador = req.body;
    const response = await (0, criarPrestador_1.criarPrestadorService)(prestador);
    if (response) {
        if (response.success) {
            res.status(201).json(response);
        }
        else {
            res.status(400).json(response);
        }
    }
    else {
        res
            .status(400)
            .json({ message: "Error creating the provider", success: false });
    }
};
exports.criarPrestador = criarPrestador;
const retornarPrestador = async (req, res) => {
    const prestador = await (0, retornarPrestador_1.retornarPrestadorService)(req.id);
    if (prestador) {
        res.status(200).json({ prestador, success: true });
    }
    else {
        res.status(404).json({ message: "Provider wasn't found", success: false });
    }
};
exports.retornarPrestador = retornarPrestador;
const actualizarPrestador = async (req, res) => {
    const prestador = req.body;
    const response = await (0, actualizarPrestador_1.actualizarPrestadorService)(req.id, prestador);
    if (response) {
        res.status(200).json(response);
    }
    else {
        res.status(400).json({
            message: "An error occured updating the provider",
            success: false,
        });
    }
};
exports.actualizarPrestador = actualizarPrestador;
const apagarPrestador = async (req, res) => { };
exports.apagarPrestador = apagarPrestador;
const autenticarPrestador = async (req, res) => {
    const { email, password, deviceData } = req.body;
    const token = await (0, autenticarPrestador_1.autenticarPrestadorService)(email, password, deviceData);
    if (token) {
        res.status(200).json(token);
    }
    else {
        res.status(400).json({ message: "Incorrect data", success: false });
    }
};
exports.autenticarPrestador = autenticarPrestador;
const adicionarCategoriasProvedor = async (req, res) => {
    const { idCategorias } = req.body;
    const response = await (0, adicionarCategorias_1.adicionarCategoriasService)(req.id, idCategorias);
    if (response) {
        res.status(200).json(response);
    }
    else {
        res
            .status(400)
            .json({ message: "An error occured adding categories", success: false });
    }
};
exports.adicionarCategoriasProvedor = adicionarCategoriasProvedor;
const removerCategoriaProvedor = async (req, res) => {
    const { idCategoria } = req.body;
    const response = await (0, removerCategoria_1.removerCategoria)(req.id, idCategoria);
    if (response) {
        res.status(200).json(response);
    }
    else {
        res.status(400).json({
            message: "An error occured removing the selected category",
            success: false,
        });
    }
};
exports.removerCategoriaProvedor = removerCategoriaProvedor;
const retornarAtividades = async (req, res) => {
    const response = await (0, retornarAtividades_1.default)(req.id);
    if (response) {
        res.status(200).json(response);
    }
    else {
        res
            .status(400)
            .json({ message: "An error occurred while getting the activities" });
    }
};
exports.retornarAtividades = retornarAtividades;
const criarPost = async (req, res) => {
    const response = await (0, criarPost_1.default)(req.id, req.body);
    if (response) {
        res.status(201).json(response);
    }
    else {
        res.status(400).json({
            message: "An error Occureed while creating the post",
            success: false,
        });
    }
};
exports.criarPost = criarPost;
const retornarPortifolio = async (req, res) => {
    const response = await (0, retornarPortifolio_1.default)(req.id);
    if (response) {
        res.status(200).json(response);
    }
    else {
        res
            .status(400)
            .json({ message: "An error occurred while getting the portifolio" });
    }
};
exports.retornarPortifolio = retornarPortifolio;
//# sourceMappingURL=prestador.controllers.js.map