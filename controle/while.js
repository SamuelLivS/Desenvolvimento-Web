/**
 * While é bom para quando não se tem ideia de quantas repetições serão necessárias.
 * Ele analisa a condição antes de iniciar a execução
 */
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){ // enquanto (verdadeiro) continua
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

