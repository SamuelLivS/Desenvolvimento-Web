/**Concat
 * concatenar arrays.
 * além de arrays, também pode-se passar valores literais.
 */
const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')

console.log(todos, filhas, filhos)
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))