/** Map
 * Estrutura de chave e valor no qual você pode usar funções , objetos, booleans, strings, números and stuff like that como chaves. Porém essas chaves não podem ter nomes repetidos dentro de uma mesma estrutura.
 * Já os valores você pode armazenar o que quiser, e repetir quantas vezes precisar
 */
const tecnologias = new Map()
tecnologias.set('react', {framework: false})// forma versátil de atribuir uma chave e um valor.
tecnologias.set('angular', {framework: true})

//forma de acessar um atributo
console.log(tecnologias.react)// errada
console.log(tecnologias.get('react').framework)//certo

//forma literal de atribuir chaves e valores
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))// verifica se algum elemento existe dentro do map.
chavesVariadas.delete(123)// deleta o elemento
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)//quantidade de elementos contidos dentro do map


chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)