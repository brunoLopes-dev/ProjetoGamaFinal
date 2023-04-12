import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../database/db";

export interface clientes{
    id: number
    nome: string
    email: string
    senha: number
    endereco: string
    telefone : number
}

type UsersCreation = Optional<clientes, 'id'>

export const ClientesModel: ModelDefined<clientes, UsersCreation> = db.define("clientes", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nome:{
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING,
        unique: true
    },

    senha: {
        type: DataTypes.NUMBER
    },
    endereco :{
        type: DataTypes.STRING
    },
    telefone:{
        type: DataTypes.NUMBER
    }


   
}, {
    tableName: 'clientes',
    timestamps: false
})

export default ClientesModel