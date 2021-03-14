/**
* JSON é um formato de compartilhamento de dados(formato textual).
* É muito usado pois e fácil compreensão na maioria das linguagens de programação.
* Ele não lê funções, nem as adiciona ao seu conteúdo, pois ele não é executável.
*/

const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj))// obj ===> JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) 
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

// Nome do atributo e qualquer texto devem ser delimitado por aspas duplas.
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))// JSON ===> obj
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))