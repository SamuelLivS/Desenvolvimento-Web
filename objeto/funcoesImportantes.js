const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', { // Pode-se definir um objeto com propriedades específicas.
    enumerable: true, // Aqui se ele será numerado(vísivel se o obj for percorrido) ou não
    writable: false,// Se ele poderá ser sobrescrito
    value: '01/01/2021' // E o valor que ele vai receber
})

pessoa.dataNascimento = '01/01/2017' // Ele pode ser sobrescrito?
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))// Muda o enumerable para false, só pra testar um negócio.

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, d: 4}
const obj = Object.assign(dest, o1, o2)//assign vai concatenar todos os parâmetros depois do índice 1, para o obj de índice 0.
//Nesse caso todos os objetos serão concatenados no objeto dest.
//Se um conjundo de chave valor já estiver no objeto de destino então esse será reescrito com o último valor adicionado. (observa o atributo 'a')

Object.freeze(obj)
obj.c = 1234
console.log(obj)