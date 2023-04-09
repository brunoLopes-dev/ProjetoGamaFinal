"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerpedidos_1 = __importDefault(require("../controllers/controllerpedidos"));
const routes = (0, express_1.Router)();
routes.post('/pedidos'), controllerpedidos_1.default.create;
routes.get('/pedidos'), controllerpedidos_1.default.list;
routes.get('/pedidos:id'), controllerpedidos_1.default.getpedidoid;
exports.default = routes;
