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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_CONFIG = {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
};
// objeto para guardar a conexão do banco dados
let db = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
function hasConection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.authenticate();
            console.log("Banco dados conectado!");
        }
        catch (error) {
            console.error("Erro ao tentar se conectar ao banco de dados1");
        }
    });
}
Object.assign(db, {
    hasConection,
});
exports.default = db;
