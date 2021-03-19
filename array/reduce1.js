/**Reduce
 * Ele tem a ideia de agregar os valores em um só.
 * Recebe uma callback e um valor inicial(opcional).
 * Ele acumula o resultado do chamado anterior e passa como um parâmetro na próxima chamada.
 * Se quiser um valor inicial, é só passa-lo depois da callback, senão ele irá usar o valor do índice 0 como valor inicial.
 * vai percorrer um array, e retornará 4 parâmetros (acumulador, elementoatual, índice, array).
 * Não entendi muito bem esse!!!!!!!!
 */

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)