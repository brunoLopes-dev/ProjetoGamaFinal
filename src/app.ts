import express from 'express'
import pedidos from './routes'
import path from 'path'
import logger from './logger'
import index from './routes'

logger.info('Iniciando servidor')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.resolve('public')))

logger.info('Configurações setadas com sucesso!')
app.use(index)

logger.info('Rotas inicializadas com sucesso!')

app.listen(8000, ()=> logger.info("Servidor rodando na porta 8000"))