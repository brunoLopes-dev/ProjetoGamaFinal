"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosModel = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../database/db"));
exports.ProdutosModel = db_1.default.define("Produtos", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_produto: {
        type: sequelize_1.DataTypes.STRING,
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
    },
    preco: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    tableName: 'produtos',
    timestamps: false
});
exports.default = exports.ProdutosModel;
