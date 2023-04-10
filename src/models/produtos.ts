import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../database/db"

export interface Produtos{
  id: number
  nome_produto: string
  descricao: string
  preco: string
}


type ProdutosCreation = Optional<Produtos, 'id'>

export const ProdutosModel: ModelDefined<Produtos, ProdutosCreation> = db.define("Produtos", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nome_produto: {
    type: DataTypes.STRING,
  },

  descricao: {
    type: DataTypes.STRING,
  },

  preco: {
    type: DataTypes.INTEGER
  },
}, {
  tableName: 'produtos',
  timestamps: false
})

export default ProdutosModel