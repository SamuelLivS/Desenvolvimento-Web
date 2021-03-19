/**
 * O objeto que será exportado entro os módulos do node, pode ser acessado usando as três palavras reservadas abaixo.
 * Porém, se vc quiser atribuir um objeto novo, terá de usar o module.exports, pois as outras duas palavras, apenas refêrenciam o endereço de memória do objeto que será exportado enquanto o module.exports é o que de fato será visível fora.
 */
// Apontam para o mesmo objeto
console.log(module.exports) 
console.log(module.exports === this)
console.log(module.exports === exports)

//Dá pra acessar esse objeto por meio dos três.
this.a = 1
exports.b = 2
module.exports.c = 3

//Porém...
exports = null
console.log(module.exports)

//Não consegue né Moises?
exports = {
    nome: 'Teste'
}
console.log(module.exports)

//Aeeee
module.exports = {
    public: true
}