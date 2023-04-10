import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../database/db";

export interface Usuarios{
    id: number
    nome_usuario: string
    email: string
    senha: string
}

type UsersCreation = Optional<Usuarios, 'id'>

export const UsersModel: ModelDefined<Usuarios, UsersCreation> = db.define("Usuarios", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nome_usuario:{
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING,
        unique: true
    },

    senha: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'usuarios',
    timestamps: false
})

export default UsersModel