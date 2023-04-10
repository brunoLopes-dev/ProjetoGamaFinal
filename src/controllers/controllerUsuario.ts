import { Request, Response } from "express";
import logger from "../logger/index";
import UsuariosModel from "../models/usuarios";
import { Usuarios } from "../models/usuarios";

const usuariosControllers = {
    async create(res: Response, req: Request){
        try{
            logger.info("[usuarioControllers] - Usuario criado com sucesso");
            const { nome_usuario, email, senha } = req.body;
            logger.info(`[usuarioControllers] - payload: ${JSON.stringify(Object.assign({}, req.body) ) }`
            );

            const newUsers = await UsuariosModel.create({
                nome_usuario,
                email,
                senha,
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
            const usuarios = await UsuariosModel.findAll({
                raw:true,
            }) as unknown as Usuarios[];

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

        const usuario = await UsuariosModel.findByPk(id);
        return res.json(usuario);
    },

    //atualizar usuario

    async update (req: Request, res: Response){
        try{
            const {id} = req.params;
            const {nome_usuario, email, senha} = req.body;

            const usuario = await UsuariosModel.findByPk(id);

            if (!usuario){
                return res.status(404).json("Usuário não encontrado");
            }

            await usuario.update({ nome_usuario, email, senha});

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
            const usuario = await UsuariosModel.findByPk(id);

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