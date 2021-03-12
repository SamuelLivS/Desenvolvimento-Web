/**
* Pode-se mudar um objeto armazenado numa constante pelo fato da constante armazenar o endereço de memória que o objeto está localizado, e não o objeto em si.
*/

// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome - 'Pedro'
console.log(pessoa)

//Você não pode mudar o endereço!!!!
// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)//o freeze é uma forma de fazer um objeto constante.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Pedro'})//Pode-se declarar um objeto constante na criação dele.
pessoaConstante.nome = 'Maia'
console.log(pessoaConstante)