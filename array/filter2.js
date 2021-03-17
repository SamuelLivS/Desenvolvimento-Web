// Implementando um filter. (versão simplificada!!!)
Array.prototype.filter2 = function(callback) {
    const array = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            array.push(this[i])
        }
    }
    return array
}

const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const prodCaro = e => e.preco >= 500
const prodFragil = e => e.fragil


console.log(produto.filter2(prodCaro).filter2(prodFragil))