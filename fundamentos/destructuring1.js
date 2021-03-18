/**
 * Novo recurso do ES2015
 * Serve para desestruturar um objeto ou Array.
 * No contexto de objeto usa-se o {}
 * No contexto de Array usa-se o []
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Destructuring objeto - estrutura básica.
const { nome, idade} = pessoa
console.log(nome, idade)

// Se quiser definir outro nome para as variáveis.
const { nome: n, idade: i} = pessoa
console.log(n, i)

// Se quiser definir um valor padrão.
const { sobrenome, bemHumarada=true} = pessoa
console.log(sobrenome, bemHumarada)

// acessar atributos de objetos dentro de outros objetos
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//CUIDADO PRA NÃO ACESSAR ALGUMA COISA QUE NÃO É OBJETO(NÃO É ANINHADO)
// Apenas um último dado pode ser undefined ou null...
// TENTANDO ACESSAR ATRIBUTOS DE UM OBJETO QUE NÃO EXISTE...
const { conta: {ag, num}} = pessoa
console.log(ag, num)