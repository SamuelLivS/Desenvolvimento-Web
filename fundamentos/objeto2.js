console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente) // Sempre que uma função é instanciada com o new, ela retorna um objeto

class Produto {} // ES 2015 (ES6) // Classe é um detalhe de sintaxe, mas por baixo dos panos é uma função
console.log(typeof Produto)
console.log(typeof new Produto())