//sequencia de id's
const sequence = {
    _id: 1,
    get id(){ return this._id++}
}
//o 'banco de dados'
const produtos = {}

//Create and Update
function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}
//Visualizar produto específico
function getProduto(id){
    return produtos[id] || {}
}
//Visualizar todos os dados
function getProdutos(){
    return Object.values(produtos)
}
//Delete
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}//importando os métodos