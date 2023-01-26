"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornarCategorias = exports.criarCategoria = void 0;
const retornarCategorias_1 = require("../services/categoria/retornarCategorias");
const criarCategoria_1 = require("../services/categoria/criarCategoria");
const criarCategoria = async (req, res) => {
    const categoria = req.body;
    const response = await (0, criarCategoria_1.criarCategoriaService)(categoria);
    if (response) {
        res.status(200).json({ message: "Category created" });
    }
    else {
        res.status(400).json({ message: "An error occured creating the category" });
    }
};
exports.criarCategoria = criarCategoria;
const retornarCategorias = async (req, res) => {
    const response = await (0, retornarCategorias_1.retornarCategoriasService)();
    if (response) {
        res.status(200).json({ categorias: response, success: true });
    }
    else {
        res
            .status(400)
            .json({
            message: "An error occured returning the categories",
            success: false,
        });
    }
};
exports.retornarCategorias = retornarCategorias;
//# sourceMappingURL=categoria.controllers.js.map