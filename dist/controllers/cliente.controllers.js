"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornarAtividades = exports.autenticarCliente = exports.apagarCliente = exports.actualizarCliente = exports.retornarCliente = exports.criarCliente = void 0;
const autenticarCliente_1 = require("../services/cliente/autenticarCliente");
const retornarCliente_1 = require("../services/cliente/retornarCliente");
const actualizarCliente_1 = require("../services/cliente/actualizarCliente");
const criarCliente_1 = require("../services/cliente/criarCliente");
const retornarAtividades_1 = __importDefault(require("../services/cliente/retornarAtividades"));
const criarCliente = async (req, res) => {
    const cliente = req.body;
    const response = await (0, criarCliente_1.criarClienteService)(cliente);
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
            .json({
            message: "An error occured creating the customer",
            success: false,
        });
    }
};
exports.criarCliente = criarCliente;
const retornarCliente = async (req, res) => {
    const cliente = await (0, retornarCliente_1.retornarClienteService)(req.id);
    if (cliente) {
        res.status(200).json({ cliente, success: true });
    }
    else {
        res.status(404).json({ message: "Customer wasn't found", success: false });
    }
};
exports.retornarCliente = retornarCliente;
const actualizarCliente = async (req, res) => {
    const response = await (0, actualizarCliente_1.actualizarClienteService)(req.id, req.body);
    if (response) {
        res.status(200).json(response);
    }
    else {
        res.status(400).json({
            message: "An error occured updating the customer",
            success: false,
        });
    }
};
exports.actualizarCliente = actualizarCliente;
const apagarCliente = async (req, res) => { };
exports.apagarCliente = apagarCliente;
const autenticarCliente = async (req, res) => {
    const { email, password, deviceData } = req.body;
    const token = await (0, autenticarCliente_1.autenticarClienteService)(email, password, deviceData);
    if (token) {
        res.status(200).json(token);
    }
    else {
        res.status(400).json({ message: "Incorrect data", success: false });
    }
};
exports.autenticarCliente = autenticarCliente;
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
//# sourceMappingURL=cliente.controllers.js.map