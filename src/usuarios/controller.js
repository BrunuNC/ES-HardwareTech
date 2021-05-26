const modelUsuarios = require('./model');

function paginaUsuarios(req, res) {
  const usuarios = modelUsuarios.listarUsuarios();
  res.render('../src/views/listar-usuarios', {usuarios});
};

function cadastraUsuario(req, res) {
  res.render('../src/views/cadastrar-usuario')
};

function novoUsuario(req, res) {
  const usuario = modelUsuarios.addUsuario({
    nome: req.body.nome,
    email: req.body.email
  })
  res.redirect('/usuarios');
};

module.exports = {
  novoUsuario,
  cadastraUsuario,
  paginaUsuarios
};