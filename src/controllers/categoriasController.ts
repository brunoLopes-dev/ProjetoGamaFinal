import { Request, Response } from 'express';
import Categoria from '../models/categorias';

//Listar todas as categorias
const listarCategoria = async (_req: Request, res: Response): Promise<void> => {
  try {
    const listacategoria = await Categoria.findAll();
    res.status(200).json(listacategoria);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
};

//Listar categoria por ID
const listarcategoriaId = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const listaDeCategorias = await Categoria.findAll({
      where: {
        id,
      },
    });
    if (listaDeCategorias.length === 0) {
      return res.status(404).json('Id não encontrado');
    } else {
      res.status(200).json(listaDeCategorias);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Erro interno do servidor');
  }
};

//Cadastrar categoria
const cadastrarCategoria = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, nome, descricao } = req.body;
    const categoriaCadastrada = await Categoria.create({
      id,
      nome,
      descricao,
    });
    if (!categoriaCadastrada) {
      res
        .status(400)
        .json(
          'Houve um erro na requisição. Por favor, tente novamente.'
        );
    } else {
      res
        .status(201)
        .json(`Categoria ${nome} cadastrada com sucesso!`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Erro interno do servidor');
  }
};

//Atualizar categoria
const atualizarCategoria = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    const categoriaAtualizada = await Categoria.update(
      { nome, descricao },
      { where: { id } }
    );
    if (categoriaAtualizada[0] === 0) {
      res
        .status(404)
        .json('Houve um erro na requisição. Por favor, tente novamente.');
    } else {
      res
        .status(200)
        .json(
          `Informações da categoria ${nome} atualizadas com sucesso!`
        );
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Erro interno do servidor');
  }
};

// Deletando categoria
const deletarCategoria = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const categoriaDeletada = await Categoria.destroy({
      where: {
        id,
      },
    });
    if (categoriaDeletada === 0) {
      res.status(404).json('Id não encontrado');
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Erro interno do servidor');
  }
};

export default {
  listarCategoria,
  listarcategoriaId,
  cadastrarCategoria,
  atualizarCategoria,
  deletarCategoria,
};