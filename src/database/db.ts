import {Options, Sequelize} from "sequelize";


const DB_NAME = process.env.DB_NAME!;
const DB_USER = process.env.DB_USER!;
const DB_PASS = process.env.DB_PASS!;

const DB_CONFIG:Options = {
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
};

// objeto para guardar a conexão do banco dados
let db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.error("Erro ao tentar se conectar ao banco de dados1");
  }
}

Object.assign(db, {
  hasConection,
});

export default db;