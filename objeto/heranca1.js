 /**
* Herança baseada em prototipo.
* Diferente da herança que conheço através Java, no JS o filho não herda características da mãe, porém quando tentamos acessar algum atributo que não exista nele, usa-se o prototype, e é basicamente o seguinte, o JS vai procurar aquele atributo em toda  a cadeia de prototipos do objeto, e se achar retorna o valor, se não retorna undefined.
* Em um objeto para acessar o protótipo dele usa-se o __proto__.
* Já em uma função usa-se o prototype.
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // Obj não tem esse atributo.
console.log(ferrari.__proto__) // acessando o protótipo do objeto.
console.log(ferrari.__proto__ === Object.prototype) // Ó o protótipo aí.
console.log(volvo.__proto__===Object.prototype)
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__)
console.log(Object.prototype === null) // Object.prototype é o maioral, ele é o último da cadeia de protótipos.

//Funções tbm tem protótipos
function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)