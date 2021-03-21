/**
 * stdout = saída padrão
 * stdin = entrada padrão
 */
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {//stdin com o evento on('data') serve para ler dados
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })

}