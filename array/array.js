/**
 * O JS não tem uma estrutura própria para Array...... Então.........
 * Array em JS é um Objeto!!!
 * Um obj especial, é uma estrutura indexada com números inteiros, a partir do 0.
 * Cresce e diminui dinâmicamente, e é uma estrutura heterôgenea.
 * Embora heterôgenea as boas práticas dizem que não é muito legal fazer uma "salada de frutas" no Array.
 * Um Array constante funciona como um objeto constante.
*/

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')// Não é a forma recomendada de se construir um Array.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']// Essa é a forma recomendada de se declarar um Array.
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])// undefined - padrão do JS

aprovados[3] = 'Paulo' // Jeito mais comum de se alterar um elemento existente.
aprovados.push('Abia') // Jeito mais comum de se adicionar um elemento novo.
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()// Ela ordena o Array
console.log(aprovados)

delete aprovados[1] // simplesmente atribuiu nesse índice o undefined
console.log(aprovados[1])
console.log(aprovados[2])


//Adicionar, remover e adicionar/remover
aprovados = ['Bia', 'Carlos', 'Ana', 'João', 'Claudio', 'Terry Crews', 'Chapolin', 'Tio Patinhas', 'Craque Neto']
aprovados.splice(1, 1) // a partir do índice 1, vou excluir 1 índice
console.log(aprovados)

aprovados.splice(1, 0, 'Zoio', 'Matheus Canella')//A partir do índice 1, exclua zero elementos e adicione dois
console.log(aprovados)

aprovados.splice(4, 2)//A partir do 4, exclua 2 
console.log(aprovados)

