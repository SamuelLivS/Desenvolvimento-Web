const fs = require('fs') //Módulo previamente inistalado no node.

//__dirname representa o diretório atual.

const caminho = __dirname + '/arquivo.json'

// sincrono... Não é recomendável
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.porta}`)
})

const config = require('./arquivo.json')//traz o arquivo json já convertido para objeto. - O require automaticamente converte os JSON para objeto
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})