/**Filter
 * Filtra elementos de um array, e retorna um novo.
 * Recebe uma callback, e passa para ela os três parâmetros básicos (elemento, índice e o array).
 * a callback deve retornar true ou false.
 * os elementos retornados true, irão compor o novo array que será gerado pelo filter.
 */

const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produto.filter(p => false))

// Filtre o objeto e retorne apenas os produtos caros(acima de 500) e frágeis.
const prodCaro = e => e.preco >= 500
const prodFragil = e => e.fragil


console.log(produto.filter(prodCaro).filter(prodFragil))