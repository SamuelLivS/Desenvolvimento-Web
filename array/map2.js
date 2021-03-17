const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços

// Meu método
const preco = carrinho.map(e => {
    let item = JSON.parse(e)
    return `R$ ${parseFloat(item.preco).toFixed(2).replace('.', ',')}`
})

console.log(preco)

// Método professor - Um código mais refatorado e de mais fácil entendimento do que o meu.
const paraObjeto = e => JSON.parse(e)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
