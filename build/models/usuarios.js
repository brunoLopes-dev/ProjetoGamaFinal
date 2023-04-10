"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../database/db"));
exports.UsersModel = db_1.default.define("Usuarios", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_usuario: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    senha: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    tableName: 'usuarios',
    timestamps: false
});
exports.default = exports.UsersModel;
