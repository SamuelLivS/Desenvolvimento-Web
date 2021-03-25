// assíncrona...
// um dado no futuro.
// promessa que será devolvida no futuro.
// uma promessa irá gerar apenas um ÚNICO valor.
// Se precisar de mais do que um valor use objetos ou arrays.
// para acessa-la vc deve chama-la, e usar o método then ou o catch.
// then recebe uma função como parâmetro, e se a promessa for cumprida essa função será executada.

const primeiroElemento = array => array[0]

const primeiraLetra = letra => letra[0]

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos'])
})

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)