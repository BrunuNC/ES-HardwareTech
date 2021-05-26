const express = require('express');
const controllerProduto = require('./controller');
const rotas = express.Router();

rotas.get('/', controllerProduto.paginaProdutos);

rotas.get('/novo', controllerProduto.cadastraProduto);

rotas.post('/', controllerProduto.novoProduto); 

module.exports = rotas;
