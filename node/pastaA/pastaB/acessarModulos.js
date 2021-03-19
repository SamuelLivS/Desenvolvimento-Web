const modulaA = require('../../moduloA')
// const modulaA = require('\Users\Karina\Documents\Repositorios Sam\exercicios-js\node\moduloA.js') - Caminho absoluto
console.log(modulaA.ola)

// const saudacao = require('saudacao')
// console.log(saudacao.ola)

const c = require('./pastaC')//Padrão index - Se não refêrenciar nenhum arquivo o node sempre irá primeiro procurar o arquivo index.
console.log(c.ola2)

//módulo core do node
// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)