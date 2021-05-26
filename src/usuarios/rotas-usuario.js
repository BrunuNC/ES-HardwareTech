const express = require('express');
const controllerUsuario = require('./controller');
const rotas = express.Router();

rotas.get('/', controllerUsuario.paginaUsuarios);

rotas.get('/novo', controllerUsuario.cadastraUsuario);

rotas.post('/', controllerUsuario.novoUsuario); 

module.exports = rotas;
