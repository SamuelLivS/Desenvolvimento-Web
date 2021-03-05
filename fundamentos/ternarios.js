//Operador ternário tem três operandos.
const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'
//Operandos                    1º  ?       2º   :       3º
/**
 * Operador ternário é composto por 3 partes
 * 1° A expressão (true, false) depois o ?
 * 2° O retorno se caso a expressão for true
 * 3° Se caso a expressão for false
*/

console.log(resultado(7.1))
console.log(resultado(6.7))

