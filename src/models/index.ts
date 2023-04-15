import Categoria from './categorias';
import ProdutosModel from './produtos';

ProdutosModel.belongsTo(Categoria, {
  foreignKey: 'id_categoria'
});

Categoria.hasMany(ProdutosModel, {
  foreignKey: 'psicologo_id'
});

export { Categoria, ProdutosModel };
