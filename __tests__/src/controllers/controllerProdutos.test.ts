import supertest from 'supertest';
import express from 'express';
import Sequelize from 'sequelize';
import ProdutosModel, { Produtos } from '../../../src/models/produtos';
import produtosController from '../../../src/controllers/controllerProdutos';

describe('Produtos Controller', () => {    
    afterEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
      });

    const produtoMock: Produtos = { id: 1, nome_produto: 'Produto Teste', preco: '10.00', descricao: 'Teste descricao' }

    describe('função create', () => {
        it('Deve criar um novo produto', async () => {
          jest.spyOn(ProdutosModel, 'create').mockResolvedValue(produtoMock);
      
          const req = {
            body: {
                nome_produto: 'Produto Teste',
                preco: '10.00',
                descricao: 'Teste descricao'
            }
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          } as unknown as Response;
      
          await produtosController.create(req, res);
      
          expect(res.json).toHaveBeenCalledWith(produtoMock);
        });
    
        it('Deve retornar um erro 500', async () => {
            jest.spyOn(ProdutosModel, 'create').mockRejectedValue(null);
      
            const req = {
              body: {
                  nome_produto: 'Produto Teste',
                  preco: '10.00',
                  descricao: 'Teste descricao'
              }
            };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            } as unknown as Response;
        
            await produtosController.create(req, res);
        
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith("Algo errado! Verifique novamente!");
        });
    });
    
    describe('função list', () => {
        it('Deve listar todos os produtos', async () => {
          jest.spyOn(ProdutosModel, 'findAll').mockResolvedValue([produtoMock]);
      
          const req = {
            body: {
                nome_produto: 'Produto Teste',
                preco: '10.00',
                descricao: 'Teste descricao'
            }
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          } as unknown as Response;
      
          await produtosController.list(req, res);
      
          expect(res.json).toHaveBeenCalledWith([produtoMock]);
        });
    
        it('Deve retornar um erro 500', async () => {
            jest.spyOn(ProdutosModel, 'findAll').mockRejectedValue(null);
      
            const req = {
              body: {
                  nome_produto: 'Produto Teste',
                  preco: '10.00',
                  descricao: 'Teste descricao'
              }
            };
            const res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn(),
            } as unknown as Response;
        
            await produtosController.list(req, res);
        
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith("A algo errado!");
        });
    });
    
    describe('função update', () => {
        it('Deve atualizar um produto', async () => {
          jest.spyOn(ProdutosModel, 'findByPk').mockResolvedValue({
            update: jest.fn()
          });
      
          const req = {
            params: {
                id: 1
            },
            body: {
                nome_produto: 'Produto Teste',
                preco: '10.00',
                descricao: 'Teste descricao'
            }
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          } as unknown as Response;
      
          await produtosController.update(req, res);
      
          expect(res.status).not.toHaveBeenCalled();
          expect(res.json).toHaveBeenCalled();
        });
    
        it('Deve retornar um erro 500', async () => {
            jest.spyOn(ProdutosModel, 'findByPk').mockRejectedValue(null);
          
              const req = {
                params: {
                    id: 1
                },
                body: {
                    nome_produto: 'Produto Teste',
                    preco: '10.00',
                    descricao: 'Teste descricao'
                }
              };
              const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
              } as unknown as Response;
          
              await produtosController.update(req, res);
          
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith("A algo errado!");
        });
    });
    
    describe('função delete', () => {
        it('Deve deletar um produto', async () => {
          jest.spyOn(ProdutosModel, 'findByPk').mockResolvedValue({
            destroy: jest.fn()
          });
      
          const req = {
            params: {
                id: 1
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          } as unknown as Response;
      
          await produtosController.delete(req, res);
      
          expect(res.status).not.toHaveBeenCalled();
          expect(res.json).toHaveBeenCalledWith("Produto excluído com sucesso");
        });
        
        it('Deve retornar 404 se não encontrar um produto', async () => {
          jest.spyOn(ProdutosModel, 'findByPk').mockResolvedValue(null);
      
          const req = {
            params: {
                id: 1
            },
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          } as unknown as Response;
      
          await produtosController.delete(req, res);
      
          expect(res.status).toHaveBeenCalledWith(404);
          expect(res.json).toHaveBeenCalledWith("Produto não encontrado");
        });
    
        it('Deve retornar um erro 500', async () => {
            jest.spyOn(ProdutosModel, 'findByPk').mockRejectedValue(null);
          
            const req = {
            params: {
                id: 1
            },
            };
            const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            } as unknown as Response;
        
            await produtosController.delete(req, res);
          
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith("A algo errado!");
        });
    });
  });