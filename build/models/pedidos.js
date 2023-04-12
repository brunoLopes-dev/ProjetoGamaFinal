"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosModel = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../database/db"));
exports.PedidosModel = db_1.default.define("Pedidos", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_user: {
        type: sequelize_1.DataTypes.STRING,
    },
    valor_total: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    tableName: 'pedidos',
    timestamps: false
});
exports.default = exports.PedidosModel;
