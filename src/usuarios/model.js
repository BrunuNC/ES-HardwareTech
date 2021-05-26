const novoId = {
  _id: 6,
  get id(){return this._id++}
}

function addUsuario(usuario){
  if (!usuario.id) usuario.codigo = novoId.id
  usuarios.push(usuario);
  return usuario 
}

function listarUsuarios(){
  return usuarios;
}

const usuarios = [
  { codigo: 1, nome: 'Bruno Nunes',      email: 'bruno@email.com' },
  { codigo: 2, nome: 'Priscila Godoi',   email: 'priscila@email.com' },
  { codigo: 3, nome: 'Geronimo Tavares', email: 'gero@email.com' },
  { codigo: 4, nome: 'Felisbina Garcia', email: 'felisbina@email.com' },
  { codigo: 5, nome: 'Maria Padilha',    email: 'mapa@email.com' }
];

module.exports = {
  addUsuario,
  listarUsuarios
};