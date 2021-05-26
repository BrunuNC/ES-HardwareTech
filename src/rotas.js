const express = require('express');
const rotas = express.Router();
const rotasProdutos = require('./produtos/rotas-produto')
const rotasUsuarios = require('./usuarios/rotas-usuario')


rotas.get('/', (req, res) => {
  res.render('./views/index');
});

rotas.use('/produtos', rotasProdutos);
rotas.use('/usuarios', rotasUsuarios); 



module.exports = rotas;