import { Request, Response } from "express";
import logger from "../logger/index";
import ClientesModel from "../models/usuarios";
import { clientes } from "../models/usuarios";

const usuariosControllers = {
    async create(req: Request, res: Response, ){
        try{
            logger.info("[usuarioControllers] - Usuario criado com sucesso");
            const { nome, email, senha, endereco, telefone } = req.body;
            logger.info(`[usuarioControllers] - payload: ${JSON.stringify(Object.assign({}, req.body) ) }`
            );

            const newUsers = await ClientesModel.create({
                nome,
                email,  
                senha,
                endereco,
                telefone
            });
            logger.info("[usuarioControllers] - Usuario adicionado com sucesso!! ;) ")
            return  res.json(newUsers);
        } catch (error){
            logger.error(`[usuariosControllers] error: ${error}`);
            return res.status(500).json("Algo errado! Verifiquei novamente");
        }
    },

    //listar usuarios

    async list(req: Request, res: Response){
        try{
            const usuarios = await ClientesModel.findAll({
                raw:true,
            }) as unknown as clientes[];

            const usuarioMapped = usuarios.map((usuario) =>{
                const urlCompleta = "/usuarios/" + usuario.id;

                return { ...usuario};
            });

            return res.json(usuarioMapped);
        } catch(error){
            console.log(error);
            return res.status(500).json("Tem algo estranho");
        }
    },

    

    async getUsuarioID (req: Request, res: Response){
        const {id} = req.params;

        const usuario = await ClientesModel.findByPk(id);
        return res.json(usuario);
    },

    //atualizar usuario

    async update (req: Request, res: Response){
        try{
            const {id} = req.params;
            const {nome, email, senha} = req.body;

            const usuario = await ClientesModel.findByPk(id);

            if (!usuario){
                return res.status(404).json("Usuário não encontrado");
            }

            await usuario.update({ nome, email, senha});

            return res.json(usuario);
        } catch(error) {
            console.log(error);
            return res.status(500).json("A algo errado!");
        }
        
    },

    //deletar usuario

    async delete(req: Request, res: Response){
        try{
            const {id} = req.params;
            const usuario = await ClientesModel.findByPk(id);

            if (!usuario){
                return res.status(404).json("Usuário não encontrado");
            }

            await usuario.destroy();

            return res.json("Usuário excluído com sucesso");
        } catch (error) {
            console.log(error);
            return res.status(500).json("A algo de errado!!");
        }
    },
};

export default usuariosControllers;