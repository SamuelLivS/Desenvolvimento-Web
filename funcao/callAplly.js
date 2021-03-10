function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
//formas de chamar uma função
console.log(getPreco())//diretamente
console.log(produto.getPreco())///usando um objeto, e o objeto vai ser o contexto

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))//usando call
console.log(getPreco.apply(carro))// aplly

// Diferença deles é o jeito que passam os parâmetros
// Primeiro passam o contexto depois os parâmetros. 
console.log(getPreco.call(carro, 0.17, '$'))//passa os parâmetros diretamente para a função
console.log(getPreco.apply(global, [0.17, '$']))//passa os parâmetros dentro de um Array