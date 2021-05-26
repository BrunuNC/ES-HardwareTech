const modelProdutos = require('./model');

function paginaProdutos(req, res) {
  const produtos = modelProdutos.listarProdutos();
  res.render('../src/views/listar-produtos', {produtos});
};

function cadastraProduto(req, res) {
  res.render('../src/views/cadastrar-produto')
};

function novoProduto(req, res) {
  const produto = modelProdutos.addProduto({
    desc: req.body.desc,
    preco: req.body.preco
  })
  res.redirect('/produtos');
};

module.exports = {
  novoProduto,
  cadastraProduto,
  paginaProdutos
};