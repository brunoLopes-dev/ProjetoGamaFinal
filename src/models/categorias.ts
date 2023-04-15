import { Model, DataTypes } from 'sequelize';
import db from '../database/db';

interface CategoriaAttributes {
  id: number;
  nome: string;
  descricao: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Categoria extends Model<CategoriaAttributes> implements CategoriaAttributes {
  public id!: number;
  public nome!: string;
  public descricao!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Categoria.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  {
    tableName: 'categorias',
    sequelize: db
  }
);

export default Categoria;