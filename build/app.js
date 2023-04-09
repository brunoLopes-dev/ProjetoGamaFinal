"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("./logger"));
const routes_1 = __importDefault(require("./routes"));
logger_1.default.info('Iniciando servidor');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(express_1.default.static(path_1.default.resolve('public')));
logger_1.default.info('Configurações setadas com sucesso!');
app.use(routes_1.default);
logger_1.default.info('Rotas inicializadas com sucesso!');
app.listen(8000, () => logger_1.default.info("Servidor rodando na porta 8000"));
