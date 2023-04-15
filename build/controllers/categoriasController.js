"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categorias_1 = __importDefault(require("../models/categorias"));
//Listar todas as categorias
const listarCategoria = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listacategoria = yield categorias_1.default.findAll();
        res.status(200).json(listacategoria);
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ error });
    }
});
//Listar categoria por ID
const listarcategoriaId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const listaDeCategorias = yield categorias_1.default.findAll({
            where: {
                id,
            },
        });
        if (listaDeCategorias.length === 0) {
            return res.status(404).json('Id não encontrado');
        }
        else {
            res.status(200).json(listaDeCategorias);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json('Erro interno do servidor');
    }
});
//Cadastrar categoria
const cadastrarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nome, descricao } = req.body;
        const categoriaCadastrada = yield categorias_1.default.create({
            id,
            nome,
            descricao,
        });
        if (!categoriaCadastrada) {
            res
                .status(400)
                .json('Houve um erro na requisição. Por favor, tente novamente.');
        }
        else {
            res
                .status(201)
                .json(`Categoria ${nome} cadastrada com sucesso!`);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json('Erro interno do servidor');
    }
});
//Atualizar categoria
const atualizarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nome, descricao } = req.body;
        const categoriaAtualizada = yield categorias_1.default.update({ nome, descricao }, { where: { id } });
        if (categoriaAtualizada[0] === 0) {
            res
                .status(404)
                .json('Houve um erro na requisição. Por favor, tente novamente.');
        }
        else {
            res
                .status(200)
                .json(`Informações da categoria ${nome} atualizadas com sucesso!`);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json('Erro interno do servidor');
    }
});
// Deletando categoria
const deletarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const categoriaDeletada = yield categorias_1.default.destroy({
            where: {
                id,
            },
        });
        if (categoriaDeletada === 0) {
            res.status(404).json('Id não encontrado');
        }
        else {
            res.sendStatus(204);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json('Erro interno do servidor');
    }
});
exports.default = {
    listarCategoria,
    listarcategoriaId,
    cadastrarCategoria,
    atualizarCategoria,
    deletarCategoria,
};
