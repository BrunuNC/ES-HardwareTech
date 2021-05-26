const novoId = {
  _id: 6,
  get id(){return this._id++}
}

function addProduto(produto){
  if (!produto.id) produto.codigo = novoId.id
  produtos.push(produto);
  return produto  
}

function listarProdutos(){
  return produtos;
}

const produtos = [
  { codigo: 1, desc: 'Processador', preco: 120 },
  { codigo: 2, desc: 'Hard Disk',   preco: 50  },
  { codigo: 3, desc: 'Memória RAM', preco: 100 },
  { codigo: 4, desc: 'Pen Drive',   preco: 23  },
  { codigo: 5, desc: 'Impressora',  preco: 450 }
];

module.exports = {
  addProduto,
  listarProdutos
};