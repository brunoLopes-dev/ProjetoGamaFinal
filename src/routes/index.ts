

import { Router } from "express";
import controller from '../controllers/controllerpedidos'
const routes = Router()

routes.post('/pedidos'), controller.create
routes.get('/pedidos'),controller.list
routes.get('/pedidos:id'),controller.getpedidoid





export default routes