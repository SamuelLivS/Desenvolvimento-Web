let a = 3

global.b = 123
this.c = 456 // colocando o this antes de declarar você estará exportando a variável para fora do arquivo
// Dentro de Node cada arquivo é um módulo.
this.d = false
this.e = 'teste'

console.log(this.a) // Não disponível no contexto atual
console.log(a)
console.log(global.b) // global === window
console.log(this.c)
console.log(module.exports.c) // this === module.exports
console.log(module.exports === this)

// criando uma variável maluca: sem var e let!
// Ela vai direto pro escopo global.
abc = 3 // não faça isso em casa!!!!!!!
console.log(global.abc)

//module.exports = {e: 789, f: false, g: 'texto'}

console.log(module.exports)