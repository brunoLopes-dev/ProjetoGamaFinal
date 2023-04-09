import { DataTypes, ModelDefined, Optional } from "sequelize"
import db from "../database/db"

export interface Pedidos{
  id:number
  descricao: string
  nome_user: string
  created_at: Date
  updated_at: Date
}


type PedidosCreation = Optional<Pedidos, 'id' | 'created_at' | 'updated_at'>


export const PedidosModel: ModelDefined<Pedidos, PedidosCreation> = db.define("Pedidos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_user: {
    type: DataTypes.STRING,
  },
 
  descricao: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'pedidos',
  timestamps: false
})

export default PedidosModel
