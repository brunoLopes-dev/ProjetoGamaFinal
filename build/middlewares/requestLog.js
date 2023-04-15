"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestLog = (req, res, next) => {
    console.log(`O IP: ${req.ip} acessou a rota: ${req.originalUrl}`);
    next();
};
exports.default = requestLog;
